import React, { useRef, useState } from 'react';
import { COMPANY, SERVICES } from '../data.js';
import ServiceIcon from '../components/ServiceIcon.jsx';

const STEP_LABELS = ['Project', 'Details', 'Contact'];
const TIMELINES = ['As soon as possible', 'Within the next month', '1–3 months', 'Just exploring options'];
const PROPERTY_TYPES = ['Residential', 'Commercial'];
const MAX_FILE_MB = 10;

const EMPTY_FORM = {
  service: '',
  timeline: '',
  propertyType: '',
  area: '',
  details: '',
  attachment: null,
  name: '',
  email: '',
  phone: '',
  contactMethod: 'Email',
};

function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function Stepper({ step }) {
  return (
    <div className="stepper">
      {STEP_LABELS.map((label, i) => {
        const n = i + 1;
        const state = step === n ? 'current' : step > n ? 'done' : '';
        return (
          <div className={`stepper-item ${state}`} key={label}>
            <span className="stepper-dot">{step > n ? '✓' : n}</span>
            <span className="stepper-label">{label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function RequestEstimate() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [fileError, setFileError] = useState('');
  const fileInputRef = useRef(null);

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));
  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  function handleFileChange(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setFileError(`That file is over ${MAX_FILE_MB}MB — please choose a smaller photo or PDF.`);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    setFileError('');
    update('attachment', file);
  }

  function removeFile() {
    update('attachment', null);
    setFileError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  // TODO: this currently only shows a local success screen — it doesn't send
  // anywhere yet. Wire it up the same way as the plain Contact form (see the
  // note in Contact.jsx): a free Formspree endpoint is the simplest option,
  // no backend needed, and Formspree's free plan supports a file field like
  // this one out of the box (just give the <input name="attachment"> and it
  // rides along with the rest of the fields).
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <>
        <section className="page-hero">
          <div className="container">
            <h1>Request an Estimate</h1>
            <p>Tell us about your project and we'll follow up with a straightforward estimate.</p>
          </div>
        </section>
        <section className="block">
          <div className="container" style={{ maxWidth: 680 }}>
            <div className="wizard-card estimate-success">
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10.5" stroke="#C0762A" strokeWidth="1.6" />
                <path d="M7.5 12.5 L10.5 15.5 L16.5 8.5" stroke="#C0762A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2>Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''} — we've got it.</h2>
              <p className="section-subheading" style={{ margin: '0 auto 24px' }}>
                We'll review your project and get back to you by {form.contactMethod.toLowerCase()} within one
                business day with next steps.
              </p>
              <dl className="estimate-summary">
                {form.service && (<><dt>Service</dt><dd>{form.service}</dd></>)}
                {form.timeline && (<><dt>Timeline</dt><dd>{form.timeline}</dd></>)}
                {form.propertyType && (<><dt>Property type</dt><dd>{form.propertyType}</dd></>)}
                {form.area && (<><dt>Area</dt><dd>{form.area}</dd></>)}
                {form.details && (<><dt>Details</dt><dd>{form.details}</dd></>)}
                {form.attachment && (<><dt>Attachment</dt><dd>{form.attachment.name}</dd></>)}
                <dt>Contact</dt>
                <dd>{form.name} &middot; {form.email}{form.phone ? ` · ${form.phone}` : ''}</dd>
              </dl>
              <p style={{ color: 'var(--gray)' }}>
                Need to reach us sooner? Call <a href={COMPANY.phoneHref} style={{ color: 'var(--steel)', fontWeight: 600 }}>{COMPANY.phone}</a>.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Request an Estimate</h1>
          <p>A few quick questions so we can give you an accurate, no-obligation estimate.</p>
        </div>
      </section>

      <section className="block">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="how-it-works">
            <div className="how-it-works-item">
              <span className="how-it-works-badge">1</span>
              <p>Tell us about your project</p>
            </div>
            <div className="how-it-works-item">
              <span className="how-it-works-badge">2</span>
              <p>We review &amp; call you back</p>
            </div>
            <div className="how-it-works-item">
              <span className="how-it-works-badge">3</span>
              <p>Free, no-obligation estimate</p>
            </div>
          </div>

          <div className="wizard-card">
            <Stepper step={step} />

            <form
              className="contact-form"
              onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); next(); }}
            >
              {step === 1 && (
                <>
                  <label>What do you need help with?</label>
                  <div className="option-grid">
                    {SERVICES.map((s) => (
                      <button
                        type="button"
                        key={s.title}
                        className={`option-card${form.service === s.title ? ' selected' : ''}`}
                        onClick={() => update('service', s.title)}
                      >
                        <ServiceIcon name={s.icon} size={26} />
                        <span>{s.title}</span>
                      </button>
                    ))}
                    <button
                      type="button"
                      className={`option-card${form.service === "Not sure yet" ? ' selected' : ''}`}
                      onClick={() => update('service', 'Not sure yet')}
                    >
                      <span>Not sure yet</span>
                    </button>
                  </div>

                  <div className="wizard-actions">
                    <span />
                    <button className="btn btn-primary" type="submit" disabled={!form.service}>Next</button>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <label htmlFor="timeline">When are you looking to start?</label>
                  <select id="timeline" value={form.timeline} onChange={(e) => update('timeline', e.target.value)} required>
                    <option value="" disabled>Select a timeline</option>
                    {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>

                  <label>Property type</label>
                  <div className="pill-group">
                    {PROPERTY_TYPES.map((p) => (
                      <button
                        type="button"
                        key={p}
                        className={`pill${form.propertyType === p ? ' selected' : ''}`}
                        onClick={() => update('propertyType', p)}
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  <label htmlFor="area">Area</label>
                  <select id="area" value={form.area} onChange={(e) => update('area', e.target.value)}>
                    <option value="" disabled>Select an area</option>
                    {COMPANY.serviceAreas.map((a) => <option key={a} value={a}>{a}</option>)}
                    <option value="Other">Other</option>
                  </select>

                  <label htmlFor="details">Anything else we should know? (optional)</label>
                  <textarea
                    id="details"
                    value={form.details}
                    onChange={(e) => update('details', e.target.value)}
                    placeholder="Rough size, specific finishes in mind, etc."
                  />

                  <label htmlFor="attachment">Attach a photo or PDF (optional)</label>
                  <div className="file-upload">
                    <input
                      ref={fileInputRef}
                      id="attachment"
                      type="file"
                      accept="image/*,.pdf,application/pdf"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                    {!form.attachment ? (
                      <button
                        type="button"
                        className="file-upload-btn"
                        onClick={() => fileInputRef.current && fileInputRef.current.click()}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M12 16V4M12 4L7 9M12 4l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M4 16v2.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Choose a photo or PDF
                      </button>
                    ) : (
                      <div className="file-chip">
                        <span className="file-chip-name">{form.attachment.name}</span>
                        <span style={{ color: 'var(--gray)', fontWeight: 500 }}>({formatFileSize(form.attachment.size)})</span>
                        <button type="button" className="file-chip-remove" onClick={removeFile} aria-label="Remove attached file">
                          ×
                        </button>
                      </div>
                    )}
                    {fileError ? (
                      <p className="file-upload-hint" style={{ color: '#B3432B' }}>{fileError}</p>
                    ) : (
                      <p className="file-upload-hint">A photo of the space or a floor plan helps us scope things faster. JPG, PNG, or PDF, up to {MAX_FILE_MB}MB.</p>
                    )}
                  </div>

                  <div className="wizard-actions">
                    <button className="btn-back" type="button" onClick={back}>Back</button>
                    <button className="btn btn-primary" type="submit" disabled={!form.timeline}>Next</button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <label htmlFor="name">Name</label>
                  <input id="name" value={form.name} onChange={(e) => update('name', e.target.value)} required />

                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required />

                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} required />

                  <label>Preferred contact method</label>
                  <div className="pill-group">
                    {['Email', 'Phone'].map((m) => (
                      <button
                        type="button"
                        key={m}
                        className={`pill${form.contactMethod === m ? ' selected' : ''}`}
                        onClick={() => update('contactMethod', m)}
                      >
                        {m}
                      </button>
                    ))}
                  </div>

                  <div className="wizard-actions">
                    <button className="btn-back" type="button" onClick={back}>Back</button>
                    <button className="btn btn-primary" type="submit">Submit request</button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

import React, { useState } from 'react';
import { COMPANY } from '../data.js';
import Reveal from '../components/Reveal.jsx';
import { trackEvent } from '../analytics.js';
import { sendToFormspree, openMailto } from '../forms.js';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  // Sends through Formspree when it's set up (see src/forms.js); otherwise
  // opens the visitor's email app with the message filled in.
  async function handleSubmit(e) {
    e.preventDefault();
    if (sending) return;
    const data = new FormData(e.target);
    const subject = `Website enquiry from ${data.get('name')}`;
    const fields = {
      Message: data.get('message'),
      Name: data.get('name'),
      Email: data.get('email'),
      Phone: data.get('phone'),
    };
    setSending(true);
    const sent = await sendToFormspree({ subject, replyTo: data.get('email'), fields });
    setSending(false);
    trackEvent('generate_lead', { form_name: 'contact' });
    if (!sent) openMailto({ subject, fields });
    setSubmitted(sent ? 'sent' : 'mailto');
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="hero-eyebrow">{COMPANY.shortName}</p>
          <h1>Get in Touch</h1>
          <p>Tell us about your project and we'll get back to you with a straightforward estimate.</p>
        </div>
      </section>

      <section className="block">
        <div className="container contact-grid">
          <Reveal>
          <div>
            <div className="contact-info-card">
              <div className="contact-detail">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1L6.6 10.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <div className="label">Phone</div>
                  <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M3.5 6.5 12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <div className="label">Email</div>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                    <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                </span>
                <div>
                  <div className="label">Address</div>
                  <div className="value">{COMPANY.address}</div>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <div className="label">Hours</div>
                  {COMPANY.hours.map((h) => (
                    <div className="value" key={h.day}>{h.day}: {h.time}</div>
                  ))}
                </div>
              </div>
            </div>

            <iframe
              className="map-embed"
              title="Finelines Glass location"
              loading="lazy"
              src={`https://www.google.com/maps?q=${COMPANY.mapQuery}&output=embed`}
            />
          </div>
          </Reveal>

          <Reveal delay={100}>
          <div>
            {submitted ? (
              <div className="card">
                {submitted === 'sent' ? (
                  <>
                    <h3>Thanks — message received!</h3>
                    <p>We'll get back to you shortly. In the meantime, feel free to call <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>.</p>
                  </>
                ) : (
                  <>
                    <h3>Almost done — just hit send.</h3>
                    <p>Your email app should have opened with your message filled in. Press send and we'll get back to you shortly.</p>
                    <p>Email app didn't open? Write to <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or call <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>.</p>
                  </>
                )}
              </div>
            ) : (
              <>
              <p className="scope-note">{COMPANY.scopeNote}</p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>
                <div>
                  <label htmlFor="phone">Phone (optional)</label>
                  <input id="phone" name="phone" type="tel" />
                </div>
                <div>
                  <label htmlFor="message">Tell us about your project</label>
                  <textarea id="message" name="message" required />
                </div>
                <button className="btn btn-primary" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send'}</button>
              </form>
              </>
            )}
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

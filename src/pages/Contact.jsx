import React, { useState } from 'react';
import { COMPANY } from '../data.js';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // TODO: this form currently only shows a success message locally — it does not
  // actually send anywhere yet. The simplest fix (no backend needed) is a free
  // Formspree endpoint (formspree.io): create a form there, then change the
  // <form> tag below to action="https://formspree.io/f/yourFormId" method="POST"
  // and remove the onSubmit handler. See the repo README for the full walkthrough.
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Tell us about your project and we'll get back to you with a straightforward estimate.</p>
        </div>
      </section>

      <section className="block">
        <div className="container contact-grid">
          <div>
            <div className="contact-detail">
              <div className="label">Phone</div>
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            </div>
            <div className="contact-detail">
              <div className="label">Email</div>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </div>
            <div className="contact-detail">
              <div className="label">Address</div>
              <div className="value">{COMPANY.address}</div>
            </div>
            <div className="contact-detail">
              <div className="label">Hours</div>
              {COMPANY.hours.map((h) => (
                <div className="value" key={h.day}>{h.day}: {h.time}</div>
              ))}
            </div>
            <iframe
              className="map-embed"
              title="Finelines Glass location"
              loading="lazy"
              src={`https://www.google.com/maps?q=${COMPANY.mapQuery}&output=embed`}
            />
          </div>

          <div>
            {submitted ? (
              <div className="card">
                <h3>Thanks — message received!</h3>
                <p>We'll get back to you shortly. In the meantime, feel free to call {COMPANY.phone}.</p>
              </div>
            ) : (
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
                <button className="btn btn-primary" type="submit">Send</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

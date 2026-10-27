import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, FAQS, FAQ_GROUPS } from '../data.js';
import ServiceGrid from '../components/ServiceGrid.jsx';
import Reveal from '../components/Reveal.jsx';

// FAQPage structured data, so Google can show these questions in search
// results. Built from the same FAQS list that renders below.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="hero-eyebrow">{COMPANY.shortName}</p>
          <h1>Glass Installation Services in Vancouver &amp; the Lower Mainland</h1>
          <p>Custom glass work for homeowners and builders — measured, cut, and installed on site.</p>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <Reveal>
            <p className="section-subheading">
              We work with homeowners, builders, contractors and designers across the Lower
              Mainland, Greater Vancouver, the Tri-City area and the Fraser Valley. Every job is
              measured on site, planned with you, and installed by our own team. Pick a service
              below to see typical designs, options and photos of past work, or
              check our <Link to="/service-areas">service areas</Link> for the cities we cover.
            </p>
          </Reveal>
          <ServiceGrid />
        </div>
      </section>

      <section className="block tint">
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal><h2 className="section-heading">Common questions</h2></Reveal>
          {FAQ_GROUPS.map((group) => (
            <div className="faq-group" key={group.title}>
              <Reveal><h3 className="faq-group-title">{group.title}</h3></Reveal>
              {group.faqs.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                  {f.link && (
                    <Link className="faq-link" to={f.link.to}>{f.link.label} →</Link>
                  )}
                </details>
              ))}
            </div>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

      <section className="block" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-heading">Planning a custom glass project?</h2>
          <p className="section-subheading" style={{ margin: '0 auto 28px' }}>
            From shower enclosures and glass railings to custom mirrors and specialty glass, we work
            with homeowners, designers, and contractors across the Lower Mainland. Tell us what
            you're planning and we'll come back with a clear, no-obligation estimate.
          </p>
          <a className="btn btn-primary" href="/request-estimate">Request an Estimate</a>
          <p className="cta-contact">
            Or call <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
          </p>
        </div>
      </section>
    </>
  );
}

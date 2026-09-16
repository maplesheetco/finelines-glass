import React, { useState } from 'react';
import { COMPANY, SERVICES, PROJECTS_PREVIEW, TESTIMONIALS } from '../data.js';
import TrustStrip from '../components/TrustStrip.jsx';
import ServiceIcon from '../components/ServiceIcon.jsx';

function CompletedWorkCarousel() {
  const [index, setIndex] = useState(0);
  const count = PROJECTS_PREVIEW.length;
  const goTo = (i) => setIndex((i + count) % count);

  return (
    <div className="carousel">
      <div className="carousel-frame">
        <div className="carousel-slide">
          {/* TODO: swap this placeholder for the real project photo once you send it over. */}
          <svg width="120" height="100" viewBox="0 0 120 100" fill="none" aria-hidden="true">
            <rect x="10" y="8" width="60" height="75" rx="2" fill="none" stroke="#3E6B8A" strokeWidth="1.6" />
            <rect x="35" y="20" width="60" height="75" rx="2" fill="#FFFFFF" fillOpacity="0.5" stroke="#C0762A" strokeWidth="1.6" />
            <line x1="35" y1="20" x2="95" y2="20" stroke="#C0762A" strokeWidth="0.8" opacity="0.5" />
            <line x1="35" y1="57" x2="95" y2="57" stroke="#C0762A" strokeWidth="0.8" opacity="0.5" />
            <line x1="65" y1="20" x2="65" y2="95" stroke="#C0762A" strokeWidth="0.8" opacity="0.5" />
          </svg>
        </div>
        <button
          type="button"
          className="carousel-arrow prev"
          aria-label="Previous project"
          onClick={() => goTo(index - 1)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 5 L8 12 L15 19" stroke="#1B2A4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          className="carousel-arrow next"
          aria-label="Next project"
          onClick={() => goTo(index + 1)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 5 L16 12 L9 19" stroke="#1B2A4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <p className="carousel-caption">{PROJECTS_PREVIEW[index].caption}</p>

      <div className="carousel-dots">
        {PROJECTS_PREVIEW.map((project, i) => (
          <button
            key={project.caption}
            type="button"
            className={i === index ? 'active' : ''}
            aria-label={`Show project ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-copy">
            <div className="hero-eyebrow">Vancouver, BC &middot; {COMPANY.yearsExperience} Years in Business</div>
            <h1>Custom glass, railings &amp; mirrors, built to last.</h1>
            <p>
              We're a Vancouver-based team of glass installers turning homes and builds across{' '}
              {COMPANY.serviceAreas.join(', ')} into something a little more beautiful — one
              shower enclosure, railing, and mirror at a time.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/request-estimate">Request an Estimate</a>
              <a className="btn btn-outline" href="/projects">See Our Work</a>
            </div>
          </div>
          <div className="hero-graphic">
            {/* Placeholder graphic — will be replaced once real project photos are in. */}
            <svg width="100%" height="320" viewBox="0 0 480 400" style={{ maxWidth: 420 }} aria-hidden="true">
              <rect x="40" y="30" width="240" height="300" rx="4" fill="none" stroke="#3E6B8A" strokeWidth="2" />
              <rect x="90" y="80" width="240" height="300" rx="4" fill="#EAF1F6" fillOpacity="0.14" stroke="#C0762A" strokeWidth="2" />
              <line x1="90" y1="80" x2="330" y2="80" stroke="#C0762A" strokeWidth="1" opacity="0.5" />
              <line x1="90" y1="230" x2="330" y2="230" stroke="#C0762A" strokeWidth="1" opacity="0.5" />
              <line x1="210" y1="80" x2="210" y2="380" stroke="#C0762A" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="block">
        <div className="container">
          <h2 className="section-heading">What we do</h2>
          <p className="section-subheading">
            From a single custom mirror to a full glass wine cellar, our team handles it start to finish.
          </p>
          <div className="grid grid-services">
            {SERVICES.map((s, i) => {
              const isOrphan = SERVICES.length % 3 === 1 && i === SERVICES.length - 1;
              return (
                <div className={`card${isOrphan ? ' card-centered' : ''}`} key={s.title}>
                  <ServiceIcon name={s.icon} />
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <h2 className="section-heading">Completed Work</h2>
          <p className="section-subheading">
            {/* TODO: replace the placeholder above with real project photos — captioned by
                neighbourhood only, never a client's exact address. */}
            A look at some of our recent installations.
          </p>
          <CompletedWorkCarousel />
        </div>
      </section>

      <section className="block tint">
        <div className="container">
          <h2 className="section-heading">What our customers say</h2>
          <p className="section-subheading">
            {/* TODO: replace the two placeholders below with real reviews — see the website report for why this matters. */}
            A few words from people we've worked with.
          </p>
          <div className="grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="testimonial" key={i}>
                <svg className="quote-icon" width="26" height="20" viewBox="0 0 26 20" fill="currentColor" aria-hidden="true">
                  <path d="M0 20 V11 C0 4.5 4 0.5 10 0 V4.5 C6.5 5 4.5 7 4.5 11 H10 V20 H0 Z M15 20 V11 C15 4.5 19 0.5 25 0 V4.5 C21.5 5 19.5 7 19.5 11 H25 V20 H15 Z" />
                </svg>
                <p className="quote">&ldquo;{t.quote}&rdquo;</p>
                <p className="name">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <h2 className="section-heading">Ready to get started?</h2>
          <p className="section-subheading">
            Tell us a bit about your project and we'll get back to you with a straightforward estimate —
            no pressure, no surprises.
          </p>
          <a className="btn btn-primary" href="/request-estimate">Request an Estimate</a>
        </div>
      </section>
    </>
  );
}

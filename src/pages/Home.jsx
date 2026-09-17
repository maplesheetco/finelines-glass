import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, SERVICES, PROJECTS_PREVIEW, TESTIMONIALS } from '../data.js';
import TrustStrip from '../components/TrustStrip.jsx';
import ServiceIcon from '../components/ServiceIcon.jsx';
import Reveal from '../components/Reveal.jsx';

function CompletedWorkCarousel() {
  const [index, setIndex] = useState(0);
  const count = PROJECTS_PREVIEW.length;
  const goTo = (i) => setIndex((i + count) % count);

  return (
    <div className="carousel">
      <div className="carousel-frame">
        <div className="carousel-slide">
          <img
            src={PROJECTS_PREVIEW[index].src}
            alt={PROJECTS_PREVIEW[index].caption}
            className="carousel-image"
          />
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
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/hero-poster.jpg"
              aria-hidden="true"
            >
              <source src="/images/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="block">
        <div className="container">
          <Reveal><h2 className="section-heading">What we do</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">
              From a single custom mirror to a full glass wine cellar, our team handles it start to finish.
            </p>
          </Reveal>
          <div className="grid grid-services">
            {SERVICES.map((s, i) => {
              const isOrphan = SERVICES.length % 3 === 1 && i === SERVICES.length - 1;
              return (
                <Reveal delay={(i % 3) * 90} key={s.title}>
                  <Link
                    to={`/services/${s.slug}`}
                    className={`card card-link${isOrphan ? ' card-centered' : ''}`}
                  >
                    <ServiceIcon name={s.icon} />
                    <h3>{s.title}</h3>
                    <p>{s.blurb}</p>
                    <span className="card-link-cta">Learn more &rarr;</span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <Reveal><h2 className="section-heading">Completed Work</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">A look at some of our recent installations.</p>
          </Reveal>
          <Reveal delay={140}><div><CompletedWorkCarousel /></div></Reveal>
        </div>
      </section>

      <section className="block tint">
        <div className="container">
          <Reveal><h2 className="section-heading">What our customers say</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">
              {/* TODO: replace the two placeholders below with real reviews — see the website report for why this matters. */}
              A few words from people we've worked with.
            </p>
          </Reveal>
          <div className="grid">
            {TESTIMONIALS.map((t, i) => (
              <Reveal delay={(i % 3) * 90} key={i}>
                <div className="testimonial">
                  <svg className="quote-icon" width="26" height="20" viewBox="0 0 26 20" fill="currentColor" aria-hidden="true">
                    <path d="M0 20 V11 C0 4.5 4 0.5 10 0 V4.5 C6.5 5 4.5 7 4.5 11 H10 V20 H0 Z M15 20 V11 C15 4.5 19 0.5 25 0 V4.5 C21.5 5 19.5 7 19.5 11 H25 V20 H15 Z" />
                  </svg>
                  <p className="quote">&ldquo;{t.quote}&rdquo;</p>
                  <p className="name">{t.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <Reveal><h2 className="section-heading">Ready to get started?</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">
              Tell us a bit about your project and we'll get back to you with a straightforward estimate —
              no pressure, no surprises.
            </p>
          </Reveal>
          <Reveal delay={140}><a className="btn btn-primary" href="/request-estimate">Request an Estimate</a></Reveal>
        </div>
      </section>
    </>
  );
}

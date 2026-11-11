import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, PROJECTS_PREVIEW, TESTIMONIALS } from '../data.js';
import TrustStrip from '../components/TrustStrip.jsx';
import ServiceGrid from '../components/ServiceGrid.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import Reveal from '../components/Reveal.jsx';

// Auto-advances every 5s. The effect re-arms on every index change, so a
// manual arrow/dot click resets the countdown instead of fighting with the
// next scheduled auto-advance. Hovering (desktop) or touching (mobile) the
// carousel pauses it so a visitor reading a caption doesn't get skipped past.
function CompletedWorkCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = PROJECTS_PREVIEW.length;
  const goTo = (i) => setIndex((i + count) % count);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 5000);
    return () => clearInterval(timer);
  }, [count, paused, index]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
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

// Homepage hero: a slow crossfade through finished project photos (picked by
// Lino from the Projects page). The first photo is in the prerendered HTML and
// loads eagerly with high priority. After the page has loaded, each next photo
// is fetched one slide ahead, so visitors never download photos they don't
// reach. Visitors who ask for reduced motion see the first photo only.
const HERO_SLIDES = [
  { src: 'project-2', position: 'center 55%' },  // Bellevue Dr. exterior glass railing
  { src: 'project-3', position: 'center 50%' },  // Richmond shower enclosure
  { src: 'project-37', position: 'center 60%' }, // glass wine wall, lounge
  { src: 'project-87', position: 'center 62%' }, // floor-to-ceiling glass wall, floating stairs
  { src: 'project-9', position: 'center 50%' },  // West 34th shower enclosures
  { src: 'project-36', position: 'center 55%' }, // frameless glass wine room, games room
  { src: 'project-10', position: 'center 55%' }, // Pender Island deck railings
  { src: 'project-1', position: 'center 55%' },  // West Vancouver frameless shower
  { src: 'project-38', position: 'center 60%' }, // glass wine room, basement lounge
  { src: 'project-86', position: 'center 50%' }, // glass stair railing, modern entry
  { src: 'project-8', position: 'center 60%' },  // Cedarhurst St. glass wine cellar
  { src: 'project-4', position: 'center 50%' },  // interior glass railing
];
const HERO_INTERVAL = 6000;

function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [loadRest, setLoadRest] = useState(false);
  // How many slides are in the page so far (only ever grows).
  const [mounted, setMounted] = useState(1);
  useEffect(() => {
    if (loadRest) setMounted((m) => Math.max(m, Math.min(index + 2, HERO_SLIDES.length)));
  }, [index, loadRest]);

  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (calm) return undefined;
    const start = () => setLoadRest(true);
    if (document.readyState === 'complete') {
      const t = setTimeout(start, 1200);
      return () => clearTimeout(t);
    }
    window.addEventListener('load', start, { once: true });
    return () => window.removeEventListener('load', start);
  }, []);

  useEffect(() => {
    if (!loadRest) return undefined;
    const t = setTimeout(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), HERO_INTERVAL);
    return () => clearTimeout(t);
  }, [index, loadRest]);

  return (
    <div className="hero-slides" aria-hidden="true">
      {HERO_SLIDES.map((slide, i) => {
        if (i >= mounted) return null;
        return (
          <picture key={slide.src} className={`hero-slide${i === index ? ' active' : ''}`}>
            <source srcSet={`/images/${slide.src}.webp`} type="image/webp" />
            <img
              src={`/images/${slide.src}.jpg`}
              alt=""
              style={{ objectPosition: slide.position }}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchpriority={i === 0 ? 'high' : 'low'}
              decoding="async"
            />
          </picture>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-copy">
            <div className="hero-eyebrow">{COMPANY.shortName} &middot; Vancouver, BC &middot; {COMPANY.yearsExperience} Years in Business</div>
            <h1>Custom glass, railings &amp; mirrors, built to last.</h1>
            <p>
              {COMPANY.shortName} is a Vancouver-based team of glass installers serving homes and
              builds across the Lower Mainland, Greater Vancouver, the Tri-City area and the Fraser
              Valley, making each space a little more beautiful — one shower enclosure, railing, and
              mirror at a time.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/request-estimate">Request an Estimate</a>
              <a className="btn btn-outline" href="/projects">See Our Work</a>
            </div>
            <p className="hero-call">
              Prefer to talk? Call <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            </p>
          </div>
          <div className="hero-graphic">
            <HeroSlideshow />
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
          <ServiceGrid />
        </div>
      </section>

      <section className="block">
        <div className="container">
          <Reveal><h2 className="section-heading">Completed Work</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">A look at some of our recent installations.</p>
          </Reveal>
          <Reveal delay={140}><div><CompletedWorkCarousel /></div></Reveal>
          <p className="section-more-link">
            <Link to="/projects">See all projects &rarr;</Link>
          </p>
        </div>
      </section>

      <section className="block tint">
        <div className="container">
          <Reveal><h2 className="section-heading">How it works</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">
              Every installation follows the same four steps, whether it's one mirror or a full
              commercial fit-out.
            </p>
          </Reveal>
          <ProcessSteps />
          <p className="section-more-link">
            <Link to="/about">More about our team &rarr;</Link>
          </p>
        </div>
      </section>

      {TESTIMONIALS.length > 0 && (
        <section className="block">
          <div className="container">
            <Reveal><h2 className="section-heading">What our customers say</h2></Reveal>
            <Reveal delay={80}>
              <p className="section-subheading">
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
      )}

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
          <p className="cta-contact">
            Or call <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>, {COMPANY.hours[0].day},{' '}
            {COMPANY.hours[0].time}.
          </p>
        </div>
      </section>
    </>
  );
}

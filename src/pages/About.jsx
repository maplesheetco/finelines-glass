import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, SERVICES, TRUST_BADGES } from '../data.js';
import ServiceIcon from '../components/ServiceIcon.jsx';
import Reveal from '../components/Reveal.jsx';

const copy = { lineHeight: 1.7, color: 'var(--gray)' };
// Four cards fit one row on desktop and stack two-by-two, then one, on smaller screens.
const fourUp = { gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' };

// How a typical job runs, drawn from the process described on the service
// pages and articles (on-site templating, coordination, install, adjustment).
const PROCESS = [
  {
    title: 'Measure on site',
    body: 'We measure and template every job in person, so the glass is cut to fit your actual walls, floors, tile and openings rather than a drawing.',
  },
  {
    title: 'Plan the details',
    body: 'Glass type, thickness, hardware and finish are confirmed with you, or with your designer or contractor, before anything is ordered.',
  },
  {
    title: 'Install',
    body: 'Our installers set the glass, hardware and seals, with railings built to meet BC Building Code height and load requirements.',
  },
  {
    title: 'Adjust & walk through',
    body: 'Doors, hinges and panels are adjusted once everything is in, and we walk through the finished work with you before we leave.',
  },
];

const WHO_WE_WORK_WITH = [
  { title: 'Homeowners', body: 'Bathroom renovations, new railings, mirrors, skylights and window repairs, from a single piece of glass to a whole-house project.' },
  { title: 'Builders & contractors', body: 'We work alongside the trades on new builds and renovations, following the approved scope, dimensions and schedule.' },
  { title: 'Designers & architects', body: 'Custom and architectural glass built to your drawings, with glass, hardware and finish options reviewed before fabrication.' },
  { title: 'Commercial clients', body: 'Storefronts, office partitions, boardrooms, washroom privacy glass and window film for businesses and strata properties.' },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Finelines Glass</h1>
          <p>
            {COMPANY.yearsExperience} years in the construction industry, and still a team that shows
            up, measures twice, and stands behind the work.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal><h2 className="section-heading">Our story</h2></Reveal>
          <Reveal delay={80}>
            <p style={copy}>
              Finelines Glass grew out of {COMPANY.yearsExperience} years of hands-on construction
              experience into a dedicated glass and railing specialist. Today, our team of experienced
              Vancouver installers works directly with both homeowners and builders across{' '}
              {COMPANY.serviceAreas.join(', ')} — whether that's a single custom shower enclosure or a
              full custom glass build-out.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p style={copy}>
              {/* TODO: swap in a real welcome note from whoever runs the shop, ideally with a name and photo — see the website report. */}
              We care about getting the details right: every railing we install complies with the BC
              Building Code and municipal policy, and we back our railing products with a warranty,
              because we want you living with the work, not worrying about it.
            </p>
          </Reveal>
          {/* TODO (owner to confirm): a few lines on how the business started — founding year, who started it, and how it became a family business. */}
        </div>
      </section>

      <section className="block tint">
        <div className="container">
          <Reveal><h2 className="section-heading">How we work</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">
              Every installation follows the same four steps, whether it's one mirror or a full commercial
              fit-out.
            </p>
          </Reveal>
          <div className="grid" style={fourUp}>
            {PROCESS.map((step, i) => (
              <Reveal delay={(i % 4) * 90} key={step.title}>
                <div className="card">
                  <span className="article-process-step" style={{ alignSelf: 'flex-start' }}>
                    Step {i + 1}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <Reveal><h2 className="section-heading">What we install</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">
              Glass work for homes and businesses, all measured, supplied and installed by our team.
            </p>
          </Reveal>
          <div className="grid grid-services">
            {SERVICES.map((s, i) => {
              const isOrphan = SERVICES.length % 3 === 1 && i === SERVICES.length - 1;
              return (
                <Reveal delay={(i % 3) * 90} key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className={`card card-link${isOrphan ? ' card-centered' : ''}`}
                  >
                    <ServiceIcon name={s.icon} />
                    <h3>{s.title}</h3>
                    <span className="card-link-cta">Learn more &rarr;</span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="block tint">
        <div className="container">
          <Reveal><h2 className="section-heading">Who we work with</h2></Reveal>
          <div className="grid" style={{ ...fourUp, marginTop: 24 }}>
            {WHO_WE_WORK_WITH.map((w, i) => (
              <Reveal delay={(i % 4) * 90} key={w.title}>
                <div className="card">
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal><h2 className="section-heading">Where we work</h2></Reveal>
          <Reveal delay={80}>
            <p style={copy}>
              Based in Vancouver at {COMPANY.address}, we install across{' '}
              {COMPANY.serviceAreas.join(', ')}. Not sure if you're in our area? Call us at{' '}
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a> and we'll let you know.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <ul style={{ lineHeight: 2, color: 'var(--gray)', paddingLeft: 20 }}>
              {COMPANY.hours.map((h) => (
                <li key={h.day}><strong>{h.day}:</strong> {h.time}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal><h2 className="section-heading" style={{ marginTop: 40 }}>What we stand behind</h2></Reveal>
          <Reveal delay={80}>
            <ul style={{ lineHeight: 2, color: 'var(--gray)', paddingLeft: 20 }}>
              {TRUST_BADGES.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Reveal>

          {/* TODO: add real team photos here — a couple of shots of the crew on a job site go a long way. */}
        </div>
      </section>

      <section className="block tint">
        <div className="container">
          <Reveal><h2 className="section-heading">Let's talk about your project</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">
              Tell us what you have in mind and we'll get back to you with a straightforward estimate.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link className="btn btn-primary" to="/request-estimate">Request an Estimate</Link>
              <Link className="btn btn-outline-navy" to="/projects">See Our Work</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

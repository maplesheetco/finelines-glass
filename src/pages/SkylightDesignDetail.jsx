import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { COMPANY, SKYLIGHT_DESIGNS } from '../data.js';
import Reveal from '../components/Reveal.jsx';

// Individual page for one of the two skylight services, e.g.
// /services/skylights/new-skylight-installation. Linked from the design
// cards on ServiceDetail.jsx. Full copy for each one lives in
// SKYLIGHT_DESIGNS (src/data.js), drawn from the Finelines New Skylight
// Installation and Skylight Replacement design-reference sheets.
//
// Same "two services under one heading" shape and flexible `blocks` engine
// as WindowDesignDetail.jsx. A block can mix:
//   - paragraphs: string[]        -> plain paragraphs
//   - bullets: string[]           -> a plain bulleted list
//   - items: { title, body }[]    -> a bulleted list with bold lead-ins
//   - intro / note: string        -> an optional lead-in / trailing paragraph
export default function SkylightDesignDetail() {
  const { slug, designSlug } = useParams();

  if (slug !== 'skylights') {
    return <Navigate to="/services" replace />;
  }

  const design = SKYLIGHT_DESIGNS.find((d) => d.slug === designSlug);
  if (!design) {
    return <Navigate to="/services/skylights" replace />;
  }

  const otherDesigns = SKYLIGHT_DESIGNS.filter((d) => d.slug !== designSlug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="service-crumb">
            {COMPANY.shortName} / <Link to="/services">Services</Link> /{' '}
            <Link to="/services/skylights">Skylights (New or Replacement)</Link> / {design.title}
          </p>
          <h1>{design.number}. {design.title}</h1>
          <p>{design.subtitle}</p>
        </div>
      </section>

      <section className="block">
        <div className="container service-detail-layout">
          <div className="service-detail-main">
            <Reveal>
              <img
                src={design.image}
                alt={`${design.title} (${design.subtitle}) — before and after`}
                className="shower-detail-image"
              />
            </Reveal>

            {design.intro.map((p, i) => (
              <Reveal key={`intro-${i}`} delay={i * 40}>
                <p className="service-detail-copy">{p}</p>
              </Reveal>
            ))}

            {design.blocks.map((block, bi) => (
              <React.Fragment key={`block-${bi}`}>
                <Reveal>
                  <h2 className="shower-detail-heading">{block.heading}</h2>
                </Reveal>

                {block.intro && (
                  <Reveal delay={20}>
                    <p className="service-detail-copy">{block.intro}</p>
                  </Reveal>
                )}

                {block.paragraphs && block.paragraphs.map((p, i) => (
                  <Reveal key={`p-${bi}-${i}`} delay={i * 40}>
                    <p className="service-detail-copy">{p}</p>
                  </Reveal>
                ))}

                {block.bullets && (
                  <Reveal delay={40}>
                    <ul className="service-highlights">
                      {block.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </Reveal>
                )}

                {block.items && (
                  <Reveal delay={40}>
                    <ul className="service-highlights">
                      {block.items.map((item) => (
                        <li key={item.title}>
                          <strong>{item.title}</strong> — {item.body}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}

                {block.note && (
                  <Reveal delay={60}>
                    <p className="service-detail-copy">{block.note}</p>
                  </Reveal>
                )}
              </React.Fragment>
            ))}

            <Reveal>
              <h2 className="shower-detail-heading">Our Approach</h2>
            </Reveal>
            {design.approach.map((p, i) => (
              <Reveal key={`approach-${i}`} delay={i * 40}>
                <p className="service-detail-copy">{p}</p>
              </Reveal>
            ))}

            {design.codeDisclaimer && (
              <Reveal delay={40}>
                <p className="spec-note" style={{ maxWidth: 640, fontStyle: 'italic' }}>{design.codeDisclaimer}</p>
              </Reveal>
            )}

            <Reveal delay={80}>
              <div className="hero-actions" style={{ marginTop: 28 }}>
                <a className="btn btn-primary" href="/request-estimate">Request an Estimate</a>
                <a className="btn btn-outline-navy" href="/projects">See Our Work</a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <aside className="service-detail-aside">
              <h3>Other skylight services</h3>
              <ul className="service-detail-list">
                {otherDesigns.map((d) => (
                  <li key={d.slug}>
                    <Link to={`/services/skylights/${d.slug}`}>{d.number}. {d.title}</Link>
                  </li>
                ))}
              </ul>
              <p className="service-detail-areas">
                <Link to="/services/skylights">&larr; Back to skylight services</Link>
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}

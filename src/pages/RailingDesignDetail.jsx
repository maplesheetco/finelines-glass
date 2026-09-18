import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { COMPANY, RAILING_DESIGNS } from '../data.js';
import Reveal from '../components/Reveal.jsx';

// Individual page for one of the two typical glass railing systems, e.g.
// /services/glass-railings/base-shoe. Linked from the design cards on
// ServiceDetail.jsx. Full copy for each system lives in RAILING_DESIGNS
// (src/data.js), drawn from the Finelines design-reference sheets for that
// system — including the Safety & Building Code Considerations language,
// which should be treated as legal/business-sensitive and not reworded
// without checking the source PDF.
export default function RailingDesignDetail() {
  const { slug, designSlug } = useParams();

  if (slug !== 'glass-railings') {
    return <Navigate to="/services" replace />;
  }

  const design = RAILING_DESIGNS.find((d) => d.slug === designSlug);
  if (!design) {
    return <Navigate to="/services/glass-railings" replace />;
  }

  const otherDesigns = RAILING_DESIGNS.filter((d) => d.slug !== designSlug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="service-crumb">
            {COMPANY.shortName} / <Link to="/services">Services</Link> /{' '}
            <Link to="/services/glass-railings">Interior &amp; Exterior Glass Railing</Link> / {design.title}
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
                alt={`${design.title} (${design.subtitle}) — installed glass railing`}
                className="shower-detail-image"
              />
            </Reveal>

            {design.intro.map((p, i) => (
              <Reveal key={`intro-${i}`} delay={i * 40}>
                <p className="service-detail-copy">{p}</p>
              </Reveal>
            ))}

            {design.applications && (
              <>
                <Reveal>
                  <h2 className="shower-detail-heading">{design.applicationsHeading}</h2>
                </Reveal>
                <Reveal delay={40}>
                  <ul className="service-highlights">
                    {design.applications.map((item) => (
                      <li key={item.title}><strong>{item.title}</strong> — {item.body}</li>
                    ))}
                  </ul>
                </Reveal>
                {design.applicationsNote && (
                  <Reveal delay={60}>
                    <p className="service-detail-copy">{design.applicationsNote}</p>
                  </Reveal>
                )}
              </>
            )}

            <Reveal>
              <h2 className="shower-detail-heading">Safety &amp; Building Code Considerations</h2>
            </Reveal>
            <Reveal delay={40}>
              <div className="safety-note">
                {design.safetyCode.map((p, i) => (
                  <p key={`safety-${i}`}>{p}</p>
                ))}
              </div>
            </Reveal>

            {design.coordinationHeading && (
              <Reveal>
                <h2 className="shower-detail-heading">{design.coordinationHeading}</h2>
              </Reveal>
            )}
            {design.coordination.map((p, i) => (
              <Reveal key={`coord-${i}`} delay={i * 40}>
                <p className="service-detail-copy">{p}</p>
              </Reveal>
            ))}

            {design.coordinationPointsHeading && (
              <Reveal>
                <h2 className="shower-detail-heading">{design.coordinationPointsHeading}</h2>
              </Reveal>
            )}
            {design.coordinationPoints && (
              <Reveal delay={40}>
                <ul className="service-highlights">
                  {design.coordinationPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            )}
            {design.coordinationNote && (
              <Reveal delay={60}>
                <p className="service-detail-copy">{design.coordinationNote}</p>
              </Reveal>
            )}

            {design.hardware && (
              <>
                <Reveal>
                  <h2 className="shower-detail-heading">Hardware Finish Options</h2>
                </Reveal>
                <Reveal>
                  <p className="service-detail-copy">
                    {design.hardware.body} Please visit our{' '}
                    <Link to="/hardware-finishes">Hardware &amp; Finishes</Link> section to view the available
                    hardware styles and finish options.
                  </p>
                </Reveal>
              </>
            )}

            {design.customNote && (
              <>
                <Reveal>
                  <h2 className="shower-detail-heading">Custom Railing Solutions</h2>
                </Reveal>
                <Reveal><p className="service-detail-copy">{design.customNote}</p></Reveal>
              </>
            )}

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
              <h3>Other railing systems</h3>
              <ul className="service-detail-list">
                {otherDesigns.map((d) => (
                  <li key={d.slug}>
                    <Link to={`/services/glass-railings/${d.slug}`}>{d.number}. {d.title}</Link>
                  </li>
                ))}
              </ul>
              <p className="service-detail-areas">
                <Link to="/services/glass-railings">&larr; Back to all railing systems</Link>
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}

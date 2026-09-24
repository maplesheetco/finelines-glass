import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { COMPANY, WINE_DESIGNS } from '../data.js';
import Reveal from '../components/Reveal.jsx';

// Individual page for one of the three wine cellar enclosure systems, e.g.
// /services/wine-cellars/wood-framed. Linked from the design cards on
// ServiceDetail.jsx. Full copy for each system lives in WINE_DESIGNS
// (src/data.js), drawn from the Finelines wine cellar design-reference
// sheets for that system.
export default function WineDesignDetail() {
  const { slug, designSlug } = useParams();

  if (slug !== 'wine-cellars') {
    return <Navigate to="/services" replace />;
  }

  const design = WINE_DESIGNS.find((d) => d.slug === designSlug);
  if (!design) {
    return <Navigate to="/services/wine-cellars" replace />;
  }

  const otherDesigns = WINE_DESIGNS.filter((d) => d.slug !== designSlug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="service-crumb">
            {COMPANY.shortName} / <Link to="/services">Services</Link> /{' '}
            <Link to="/services/wine-cellars">Wine Cellars</Link> / {design.title}
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
                alt={`${design.title} (${design.subtitle}) — installed wine cellar enclosure`}
                className="shower-detail-image"
              />
            </Reveal>

            {design.intro.map((p, i) => (
              <Reveal key={`intro-${i}`} delay={i * 40}>
                <p className="service-detail-copy">{p}</p>
              </Reveal>
            ))}

            {design.philosophyHeading && (
              <Reveal>
                <h2 className="shower-detail-heading">{design.philosophyHeading}</h2>
              </Reveal>
            )}
            {design.philosophy && design.philosophy.map((p, i) => (
              <Reveal key={`philosophy-${i}`} delay={i * 40}>
                <p className="service-detail-copy">{p}</p>
              </Reveal>
            ))}

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

            {design.applications && (
              <>
                <Reveal>
                  <h2 className="shower-detail-heading">{design.applicationsHeading}</h2>
                </Reveal>
                <Reveal delay={40}>
                  <ul className="service-highlights">
                    {design.applications.map((item) => (
                      <li key={item.title}>
                        <strong>{item.title}</strong> — {item.body}
                      </li>
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

            {design.materialHeading && (
              <Reveal>
                <h2 className="shower-detail-heading">{design.materialHeading}</h2>
              </Reveal>
            )}
            {design.material && design.material.map((p, i) => (
              <Reveal key={`material-${i}`} delay={i * 40}>
                <p className="service-detail-copy">{p}</p>
              </Reveal>
            ))}

            {design.customNote && (
              <>
                <Reveal>
                  <h2 className="shower-detail-heading">{design.customHeading}</h2>
                </Reveal>
                {design.customNote.map((p, i) => (
                  <Reveal key={`custom-${i}`} delay={i * 40}>
                    <p className="service-detail-copy">{p}</p>
                  </Reveal>
                ))}
              </>
            )}

            {design.tradesHeading && (
              <Reveal>
                <h2 className="shower-detail-heading">{design.tradesHeading}</h2>
              </Reveal>
            )}
            {design.trades && design.trades.map((p, i) => (
              <Reveal key={`trades-${i}`} delay={i * 40}>
                <p className="service-detail-copy">{p}</p>
              </Reveal>
            ))}

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
              <h3>Other wine cellar systems</h3>
              <ul className="service-detail-list">
                {otherDesigns.map((d) => (
                  <li key={d.slug}>
                    <Link to={`/services/wine-cellars/${d.slug}`}>{d.number}. {d.title}</Link>
                  </li>
                ))}
              </ul>
              <p className="service-detail-areas">
                <Link to="/services/wine-cellars">&larr; Back to all wine cellar systems</Link>
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}

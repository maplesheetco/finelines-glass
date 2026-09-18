import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { COMPANY, SHOWER_DESIGNS } from '../data.js';
import Reveal from '../components/Reveal.jsx';

// Individual page for one of the four typical shower designs, e.g.
// /services/frameless-shower-enclosures/inline. Linked from the design
// cards on ServiceDetail.jsx. Full copy for each design lives in
// SHOWER_DESIGNS (src/data.js), drawn from the Finelines design-reference
// sheets for that layout.
export default function ShowerDesignDetail() {
  const { slug, designSlug } = useParams();

  if (slug !== 'frameless-shower-enclosures') {
    return <Navigate to="/services" replace />;
  }

  const design = SHOWER_DESIGNS.find((d) => d.slug === designSlug);
  if (!design) {
    return <Navigate to="/services/frameless-shower-enclosures" replace />;
  }

  const otherDesigns = SHOWER_DESIGNS.filter((d) => d.slug !== designSlug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="service-crumb">
            {COMPANY.shortName} / <Link to="/services">Services</Link> /{' '}
            <Link to="/services/frameless-shower-enclosures">Frameless Shower Enclosures</Link> / {design.title}
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
                alt={`${design.title} (${design.subtitle}) — installed enclosure photo and plan-view diagram`}
                className="shower-detail-image"
              />
            </Reveal>

            {design.intro.map((p, i) => (
              <Reveal key={`intro-${i}`} delay={i * 40}>
                <p className="service-detail-copy">{p}</p>
              </Reveal>
            ))}

            <Reveal>
              <h2 className="shower-detail-heading">Why Choose {design.title}?</h2>
            </Reveal>
            <Reveal delay={40}>
              <ul className="service-highlights">
                {design.whyChoose.map((item) => (
                  <li key={item.title}><strong>{item.title}</strong> — {item.body}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="shower-detail-heading">The Frameless Advantage</h2>
            </Reveal>
            {design.framelessAdvantage.map((p, i) => (
              <Reveal key={`adv-${i}`} delay={i * 40}>
                <p className="service-detail-copy">{p}</p>
              </Reveal>
            ))}

            {design.hardware && (
              <>
                <Reveal>
                  <h2 className="shower-detail-heading">Hardware Finish Options</h2>
                </Reveal>

                {design.hardware.type === 'list' && (
                  <>
                    <Reveal><p className="service-detail-copy">{design.hardware.intro}</p></Reveal>
                    <Reveal delay={40}>
                      <ul className="service-highlights">
                        {design.hardware.items.map((it) => (
                          <li key={it.name}><strong>{it.name}</strong> — {it.body}</li>
                        ))}
                      </ul>
                    </Reveal>
                  </>
                )}

                {design.hardware.type === 'list-inline' && (
                  <>
                    <Reveal><p className="service-detail-copy">{design.hardware.intro}</p></Reveal>
                    <Reveal delay={40}>
                      <p className="service-detail-copy">{design.hardware.items.join(', ')}.</p>
                    </Reveal>
                  </>
                )}

                {design.hardware.type === 'link' && (
                  <Reveal>
                    <p className="service-detail-copy">
                      {design.hardware.body} Please visit our{' '}
                      <Link to="/hardware-finishes">Hardware &amp; Finishes</Link> section to view the available
                      hardware styles and finish options.
                    </p>
                  </Reveal>
                )}
              </>
            )}

            <Reveal>
              <h2 className="shower-detail-heading">Precision Workmanship &amp; Installation</h2>
            </Reveal>
            {design.installation.map((p, i) => (
              <Reveal key={`inst-${i}`} delay={i * 40}>
                <p className="service-detail-copy">{p}</p>
              </Reveal>
            ))}

            {design.customNote && (
              <>
                <Reveal>
                  <h2 className="shower-detail-heading">Custom Solutions</h2>
                </Reveal>
                <Reveal><p className="service-detail-copy">{design.customNote}</p></Reveal>
              </>
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
              <h3>Other shower designs</h3>
              <ul className="service-detail-list">
                {otherDesigns.map((d) => (
                  <li key={d.slug}>
                    <Link to={`/services/frameless-shower-enclosures/${d.slug}`}>{d.number}. {d.title}</Link>
                  </li>
                ))}
              </ul>
              <p className="service-detail-areas">
                <Link to="/services/frameless-shower-enclosures">&larr; Back to all shower designs</Link>
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}

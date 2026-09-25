import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { COMPANY, PARTITION_DESIGNS } from '../data.js';
import Reveal from '../components/Reveal.jsx';

// Individual page for one of the three commercial glazing / office partition
// systems, e.g. /services/commercial-glazing-office-partitions/storefront-glazing.
// Linked from the design cards on ServiceDetail.jsx. Full copy for each system
// lives in PARTITION_DESIGNS (src/data.js), drawn from the Finelines
// commercial glazing design-reference sheets for that system.
//
// Unlike the other *DesignDetail pages, each design here carries a flexible
// `blocks` array instead of a fixed set of named fields, because the three
// source sheets (Commercial Storefront Glazing, Frameless Office Glass
// Partitions, and Privacy Glass/Boardroom Enclosures/Black-Framed Partitions)
// each have their own section structure. A block can mix:
//   - paragraphs: string[]        -> plain paragraphs
//   - bullets: string[]           -> a plain bulleted list
//   - items: { title, body }[]    -> a bulleted list with bold lead-ins
//   - intro / note: string        -> an optional lead-in / trailing paragraph
export default function PartitionDesignDetail() {
  const { slug, designSlug } = useParams();

  if (slug !== 'commercial-glazing-office-partitions') {
    return <Navigate to="/services" replace />;
  }

  const design = PARTITION_DESIGNS.find((d) => d.slug === designSlug);
  if (!design) {
    return <Navigate to="/services/commercial-glazing-office-partitions" replace />;
  }

  const otherDesigns = PARTITION_DESIGNS.filter((d) => d.slug !== designSlug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="service-crumb">
            {COMPANY.shortName} / <Link to="/services">Services</Link> /{' '}
            <Link to="/services/commercial-glazing-office-partitions">Commercial Glazing &amp; Office Partition</Link> / {design.title}
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
                alt={`${design.title} (${design.subtitle}) — commercial glazing installation`}
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
              <h3>Other commercial glazing systems</h3>
              <ul className="service-detail-list">
                {otherDesigns.map((d) => (
                  <li key={d.slug}>
                    <Link to={`/services/commercial-glazing-office-partitions/${d.slug}`}>{d.number}. {d.title}</Link>
                  </li>
                ))}
              </ul>
              <p className="service-detail-areas">
                <Link to="/services/commercial-glazing-office-partitions">&larr; Back to all commercial glazing systems</Link>
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}

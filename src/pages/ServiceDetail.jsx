import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { COMPANY, SERVICES, SHOWER_DESIGNS, SHOWER_CUSTOM_LAYOUT } from '../data.js';
import ServiceIcon from '../components/ServiceIcon.jsx';
import Reveal from '../components/Reveal.jsx';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = SERVICES.filter((s) => s.slug !== slug);
  const isShowerEnclosures = slug === 'frameless-shower-enclosures';

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="service-crumb">
            <Link to="/services">Services</Link> / {service.title}
          </p>
          <h1>{service.title}</h1>
          <p>{service.blurb}</p>
        </div>
      </section>

      <section className="block">
        <div className="container service-detail-layout">
          <div className="service-detail-main">
            <ServiceIcon name={service.icon} />
            <Reveal><p className="service-detail-copy">{service.detail}</p></Reveal>

            <Reveal delay={80}>
              <ul className="service-highlights">
                {service.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={140}>
              <div className="hero-actions" style={{ marginTop: 28 }}>
                <a className="btn btn-primary" href="/request-estimate">Request an Estimate</a>
                <a className="btn btn-outline-navy" href="/projects">See Our Work</a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <aside className="service-detail-aside">
              <h3>Other services</h3>
              <ul className="service-detail-list">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`}>{s.title}</Link>
                  </li>
                ))}
              </ul>
              <p className="service-detail-areas">
                Serving {COMPANY.serviceAreas.join(', ')}.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>

      {isShowerEnclosures && (
        <section className="block tint">
          <div className="container">
            <Reveal>
              <h2 className="section-heading">Typical Shower Designs</h2>
              <p className="section-subheading">
                Four layouts cover most bathrooms. Each is fully custom-measured and built to your
                space — these are a starting point for the conversation, not a fixed menu.
              </p>
            </Reveal>

            <div className="shower-design-grid">
              {SHOWER_DESIGNS.map((d, i) => (
                <Reveal key={d.number} delay={i * 60}>
                  <div className="shower-design-card">
                    <img src={d.image} alt={`${d.title} (${d.subtitle}) — installed enclosure photo and plan-view diagram`} loading="lazy" />
                    <div className="shower-design-card-body">
                      <h3>{d.number}. {d.title}</h3>
                      <p className="shower-design-subtitle">{d.subtitle}</p>
                      <p>{d.blurb}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={100}>
              <p className="spec-note" style={{ maxWidth: 720 }}>
                Hardware finishes for any of these layouts — chrome, matte black, brushed nickel,
                brushed gold/brass, and more — are shown in our{' '}
                <Link to="/hardware-finishes">Hardware &amp; Finishes</Link> section.
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {isShowerEnclosures && (
        <section className="block" style={{ textAlign: 'center' }}>
          <div className="container">
            <h2 className="section-heading">{SHOWER_CUSTOM_LAYOUT.heading}</h2>
            <p className="section-subheading" style={{ margin: '0 auto 28px' }}>
              {SHOWER_CUSTOM_LAYOUT.body}
            </p>
            <a className="btn btn-primary" href="/request-estimate">Request an Estimate</a>
          </div>
        </section>
      )}
    </>
  );
}

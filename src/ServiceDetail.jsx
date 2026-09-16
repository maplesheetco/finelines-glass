import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { COMPANY, SERVICES } from '../data.js';
import ServiceIcon from '../components/ServiceIcon.jsx';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = SERVICES.filter((s) => s.slug !== slug);

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
            <p className="service-detail-copy">{service.detail}</p>

            <ul className="service-highlights">
              {service.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="hero-actions" style={{ marginTop: 28 }}>
              <a className="btn btn-primary" href="/request-estimate">Request an Estimate</a>
              <a className="btn btn-outline-navy" href="/projects">See Our Work</a>
            </div>
          </div>

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
        </div>
      </section>
    </>
  );
}

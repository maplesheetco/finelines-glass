import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, SERVICES, SERVICE_AREA_DETAILS, CITY_PAGES } from '../data.js';
import Reveal from '../components/Reveal.jsx';

export default function ServiceAreas() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Service Areas</h1>
          <p>
            Glass installation across the {COMPANY.serviceAreas.join(', ')}, from our base in
            Vancouver.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))' }}>
            {SERVICE_AREA_DETAILS.map((area, i) => (
              <Reveal delay={(i % 2) * 90} key={area.region}>
                <div className="card">
                  <h2 style={{ color: 'var(--navy)', margin: 0, fontSize: '1.3rem' }}>{area.region}</h2>
                  <p>{area.summary}</p>
                  <p style={{ fontSize: '0.9rem' }}>
                    <strong>Including:</strong>{' '}
                    {area.cities.map((name, j) => {
                      const page = CITY_PAGES.find((c) => c.name === name);
                      return (
                        <React.Fragment key={name}>
                          {j > 0 && ', '}
                          {page ? <Link to={`/service-areas/${page.slug}`}>{name}</Link> : name}
                        </React.Fragment>
                      );
                    })}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={80}>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginTop: 28, maxWidth: 760 }}>
              Don't see your city? Call us at{' '}
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a> and we'll let you know if we can help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="block tint">
        <div className="container">
          <Reveal><h2 className="section-heading">What we install in your area</h2></Reveal>
          <Reveal delay={80}>
            <ul style={{ lineHeight: 2, paddingLeft: 20, columns: '2 260px' }}>
              {SERVICES.map((s) => (
                <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
              <Link className="btn btn-primary" to="/request-estimate">Request an Estimate</Link>
              <Link className="btn btn-outline-navy" to="/projects">See Our Work</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

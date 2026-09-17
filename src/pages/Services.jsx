import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, FAQS } from '../data.js';
import ServiceIcon from '../components/ServiceIcon.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Services</h1>
          <p>Custom glass work for homeowners and builders — measured, cut, and installed on site.</p>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="grid grid-services">
            {SERVICES.map((s, i) => {
              const isOrphan = SERVICES.length % 3 === 1 && i === SERVICES.length - 1;
              return (
                <Reveal delay={(i % 3) * 90} key={s.title}>
                  <Link
                    to={`/services/${s.slug}`}
                    className={`card card-link${isOrphan ? ' card-centered' : ''}`}
                  >
                    <ServiceIcon name={s.icon} />
                    <h3>{s.title}</h3>
                    <p>{s.blurb}</p>
                    <span className="card-link-cta">Learn more &rarr;</span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="block tint">
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal><h2 className="section-heading">Common questions</h2></Reveal>
          {FAQS.map((f, i) => (
            <Reveal delay={(i % 4) * 70} key={f.q}>
              <div className="faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

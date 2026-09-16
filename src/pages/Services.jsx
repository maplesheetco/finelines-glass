import React from 'react';
import { SERVICES, FAQS } from '../data.js';
import ServiceIcon from '../components/ServiceIcon.jsx';

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
                <div className={`card${isOrphan ? ' card-centered' : ''}`} key={s.title}>
                  <ServiceIcon name={s.icon} />
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="block tint">
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="section-heading">Common questions</h2>
          {FAQS.map((f) => (
            <div className="faq-item" key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

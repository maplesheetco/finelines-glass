import React from 'react';
import { COMPANY } from '../data.js';

// TODO: this is a placeholder until the weekly articles/blog content plan
// kicks off — see the SEO site structure & ranking plan for the rollout.
export default function Articles() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="hero-eyebrow">{COMPANY.shortName}</p>
          <h1>Articles</h1>
          <p>Tips, project stories, and glass know-how from the Finelines team.</p>
        </div>
      </section>

      <section className="block" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-heading" style={{ margin: '0 auto 12px' }}>New posts coming soon</h2>
          <p className="section-subheading" style={{ margin: '0 auto 28px' }}>
            We're just getting started here. In the meantime, reach out directly if you have a
            question about your project.
          </p>
          <a className="btn btn-primary" href="/request-estimate">Request an Estimate</a>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { COMPANY, TRUST_BADGES } from '../data.js';
import Reveal from '../components/Reveal.jsx';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Finelines Glass</h1>
          <p>
            {COMPANY.yearsExperience} years in the construction industry, and still a team that shows
            up, measures twice, and stands behind the work.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal><h2 className="section-heading">Our story</h2></Reveal>
          <Reveal delay={80}>
            <p style={{ lineHeight: 1.7, color: 'var(--gray)' }}>
              Finelines Glass grew out of {COMPANY.yearsExperience} years of hands-on construction
              experience into a dedicated glass and railing specialist. Today, our team of experienced
              Vancouver installers works directly with both homeowners and builders across{' '}
              {COMPANY.serviceAreas.join(', ')} — whether that's a single custom shower enclosure or a
              full custom glass build-out.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ lineHeight: 1.7, color: 'var(--gray)' }}>
              {/* TODO: swap in a real welcome note from whoever runs the shop, ideally with a name and photo — see the website report. */}
              We care about getting the details right: every railing we install complies with the BC
              Building Code and municipal policy, and we back our railing products with a warranty,
              because we want you living with the work, not worrying about it.
            </p>
          </Reveal>

          <Reveal><h2 className="section-heading" style={{ marginTop: 40 }}>What we stand behind</h2></Reveal>
          <Reveal delay={80}>
            <ul style={{ lineHeight: 2, color: 'var(--gray)', paddingLeft: 20 }}>
              {TRUST_BADGES.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Reveal>

          {/* TODO: add real team photos here — a couple of shots of the crew on a job site go a long way. */}
        </div>
      </section>
    </>
  );
}

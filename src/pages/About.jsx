import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, TRUST_BADGES, PROJECTS, CITY_PAGES } from '../data.js';
import { projectAnchor } from './Projects.jsx';
import ServiceGrid from '../components/ServiceGrid.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import Reveal from '../components/Reveal.jsx';

const copy = { lineHeight: 1.7, color: 'var(--gray)' };
const link = { color: 'var(--steel)', fontWeight: 600 };
// "the Lower Mainland, Greater Vancouver, Tri-City and the Fraser Valley"
const areas = `the ${COMPANY.serviceAreas.slice(0, -1).join(', ')} and the ${COMPANY.serviceAreas.at(-1)}`;
// Four cards fit one row on desktop and stack two-by-two, then one, on smaller screens.
const fourUp = { gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' };

// Photo collections from the Projects page shown under "Our work". Each card
// links to /projects#<anchor>, which opens that gallery.
const GALLERIES = ['Shower Enclosures', 'Glass Railings', 'Wine Enclosures', 'Glass Doors & Custom Glass'];

const WHO_WE_WORK_WITH = [
  { title: 'Homeowners', body: 'Shower enclosures, glass railings, mirrors, wine cellars, skylights, window replacement and window film, from a single mirror to a whole-house project.' },
  { title: 'Builders & contractors', body: 'We work alongside the trades on new builds and renovations, following the approved scope, dimensions and schedule.' },
  { title: 'Designers & architects', body: 'Custom and architectural glass built to your drawings, with glass, hardware and finish options reviewed before fabrication.' },
  { title: 'Commercial clients', body: 'Storefront glass, office partitions, boardrooms, privacy glass and window film for businesses and strata properties.' },
];

export default function About() {
  const galleries = GALLERIES.map((name) => PROJECTS.find((p) => p.name === name)).filter(Boolean);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Finelines Glass</h1>
          <p>
            A family-run Vancouver glass contractor since 1994, and still a team that shows up,
            measures twice, and stands behind the work.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal><h2 className="section-heading">Our story</h2></Reveal>
          <Reveal delay={80}>
            <p style={copy}>
              {COMPANY.name} is a family-run glass company based in Vancouver, established in 1994.
              Built on {COMPANY.yearsExperience} years of hands-on construction experience, it has become
              a dedicated glass and railing installer. Today our installers work directly with homeowners, builders and designers across {areas}, on anything from a single shower enclosure to the
              glass for a whole new home.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p style={copy}>
              {/* TODO: swap in a real welcome note from whoever runs the shop, ideally with a name and photo — see the website report. */}
              We care about getting the details right. Every job is measured on site, railings are
              built to meet BC Building Code and local requirements, and we back our railing products
              with a warranty, because we want you living with the work, not worrying about it.
            </p>
          </Reveal>
          {/* TODO (owner to confirm): a few lines on how the business started — founding year, who started it, and how it became a family business. */}
        </div>
      </section>

      <section className="block tint">
        <div className="container">
          <Reveal><h2 className="section-heading">How we work</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">
              Every installation follows the same four steps, whether it's one mirror or a full commercial
              fit-out.
            </p>
          </Reveal>
          <ProcessSteps />
        </div>
      </section>

      <section className="block">
        <div className="container">
          <Reveal><h2 className="section-heading">What we install</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">
              Glass work for homes and businesses, all measured, supplied and installed by our team.
            </p>
          </Reveal>
          <ServiceGrid showBlurbs={false} />
        </div>
      </section>

      <section className="block tint">
        <div className="container">
          <Reveal><h2 className="section-heading">Our work</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">
              Photos from real Finelines installs. Open a collection to see the full gallery.
            </p>
          </Reveal>
          <div className="project-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
            {galleries.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 90}>
                <Link className="project-card" to={`/projects#${projectAnchor(p.name)}`}>
                  <div className="project-card-image-wrap">
                    <img src={p.photos[0].src} alt={`${p.name} - ${p.photos[0].label}`} loading="lazy" />
                    <span className="project-card-badge">{p.photos.length} photos</span>
                  </div>
                  <div className="project-card-name">{p.name}</div>
                  {p.summary && <div className="project-card-summary">{p.summary}</div>}
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p style={{ marginTop: 24 }}><Link style={link} to="/projects">See all our projects &rarr;</Link></p>
          </Reveal>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <Reveal><h2 className="section-heading">Who we work with</h2></Reveal>
          <div className="grid" style={{ ...fourUp, marginTop: 24 }}>
            {WHO_WE_WORK_WITH.map((w, i) => (
              <Reveal delay={(i % 4) * 90} key={w.title}>
                <div className="card">
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="block tint">
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal><h2 className="section-heading">Where we work</h2></Reveal>
          <Reveal delay={80}>
            <p style={copy}>
              Our shop is at {COMPANY.address}, and we install across {areas}. We have local
              pages for{' '}
              {CITY_PAGES.map((c, i) => (
                <React.Fragment key={c.slug}>
                  {i > 0 && (i === CITY_PAGES.length - 1 ? ' and ' : ', ')}
                  <Link style={link} to={`/service-areas/${c.slug}`}>{c.name}</Link>
                </React.Fragment>
              ))}
              . Not on the list? See all our <Link style={link} to="/service-areas">service areas</Link>, call us at{' '}
              <a style={link} href={COMPANY.phoneHref}>{COMPANY.phone}</a> or email{' '}
              <a style={link} href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> and we'll let you know.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <ul style={{ lineHeight: 2, color: 'var(--gray)', paddingLeft: 20 }}>
              {COMPANY.hours.map((h) => (
                <li key={h.day}><strong>{h.day}:</strong> {h.time}</li>
              ))}
            </ul>
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

      <section className="block">
        <div className="container">
          <Reveal><h2 className="section-heading">Let's talk about your project</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">
              Tell us what you have in mind and we'll get back to you with a straightforward estimate.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link className="btn btn-primary" to="/request-estimate">Request an Estimate</Link>
              <Link className="btn btn-outline-navy" to="/projects">See Our Work</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

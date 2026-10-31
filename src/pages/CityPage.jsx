import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COMPANY, CITY_PAGES, PROJECTS } from '../data.js';
import ServiceGrid from '../components/ServiceGrid.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import Reveal from '../components/Reveal.jsx';
import NotFound from './NotFound.jsx';

// One page per city, e.g. /service-areas/coquitlam. All the wording lives in
// CITY_PAGES (src/data.js); add a city there and it gets its own page,
// sitemap entry and search title automatically.
export default function CityPage() {
  const { slug } = useParams();
  const city = CITY_PAGES.find((c) => c.slug === slug);
  if (!city) return <NotFound />;

  const projects = PROJECTS.filter((p) => city.projects.includes(p.name));
  const cityPageFor = (name) => CITY_PAGES.find((c) => c.name === name);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="service-crumb">
            {COMPANY.shortName} / <Link to="/service-areas">Service Areas</Link> / {city.name}
          </p>
          <h1>Glass Installation in {city.name}</h1>
          <p>
            Showers, railings, mirrors, windows and custom glass, measured and installed by our own
            team. Serving {city.name} and the rest of the {city.region}.
          </p>
          <div className="hero-actions" style={{ marginTop: 24 }}>
            <Link className="btn btn-primary" to="/request-estimate">Request an Estimate</Link>
            <a className="btn btn-outline" href={COMPANY.phoneHref}>Call {COMPANY.phone}</a>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal><h2 className="section-heading">Your local glass installer in {city.name}</h2></Reveal>
          {city.intro.map((p, i) => (
            <Reveal key={i} delay={60 + i * 60}>
              <p style={{ lineHeight: 1.7, color: 'var(--gray)' }}>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="block tint">
        <div className="container">
          <Reveal><h2 className="section-heading">What we install in {city.name}</h2></Reveal>
          <ServiceGrid />
        </div>
      </section>

      {projects.length > 0 && (
        <section className="block">
          <div className="container">
            <Reveal><h2 className="section-heading">Recent work in and around {city.name}</h2></Reveal>
            {projects.map((project) => (
              <div key={project.name} style={{ marginBottom: 28 }}>
                <Reveal>
                  <h3 style={{ color: 'var(--navy)', marginBottom: 4 }}>{project.name}</h3>
                  {project.summary && <p style={{ color: 'var(--gray)', marginTop: 0 }}>{project.summary}</p>}
                </Reveal>
                <div className="project-grid">
                  {project.photos.slice(0, 3).map((photo, i) => (
                    <Reveal key={photo.src} delay={i * 90}>
                      <div className="project-card" style={{ cursor: 'default' }}>
                        <div className="project-card-image-wrap">
                          <img src={photo.src} alt={`${project.name} - ${photo.label}`} loading="lazy" />
                        </div>
                        <div className="project-card-summary" style={{ paddingTop: 12, marginTop: 0 }}>{photo.label}</div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
            <Reveal>
              <p><Link to="/projects">See all our projects &rarr;</Link></p>
            </Reveal>
          </div>
        </section>
      )}

      <section className="block tint">
        <div className="container">
          <Reveal><h2 className="section-heading">How a {city.name} job works</h2></Reveal>
          <ProcessSteps />
        </div>
      </section>

      <section className="block">
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal><h2 className="section-heading">Nearby areas we serve</h2></Reveal>
          <Reveal delay={60}>
            <p style={{ lineHeight: 1.9, color: 'var(--gray)' }}>
              {city.nearby.map((name, i) => {
                const page = cityPageFor(name);
                return (
                  <React.Fragment key={name}>
                    {i > 0 && ' · '}
                    {page ? <Link to={`/service-areas/${page.slug}`}>{name}</Link> : name}
                  </React.Fragment>
                );
              })}
              {' '}and the rest of the <Link to="/service-areas">Lower Mainland and Fraser Valley</Link>.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p style={{ lineHeight: 1.7, color: 'var(--gray)' }}>
              Office hours: {COMPANY.hours.map((h) => `${h.day} ${h.time}`).join(' · ')}.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="block tint" style={{ textAlign: 'center' }}>
        <div className="container">
          <Reveal><h2 className="section-heading">Planning a glass project in {city.name}?</h2></Reveal>
          <Reveal delay={60}>
            <p className="section-subheading" style={{ margin: '0 auto 24px' }}>
              Tell us what you have in mind and we'll get back to you with a straightforward estimate.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link className="btn btn-primary" to="/request-estimate">Request an Estimate</Link>
              <a className="btn btn-outline-navy" href={COMPANY.phoneHref}>Call {COMPANY.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

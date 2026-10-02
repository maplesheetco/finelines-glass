import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, ARTICLES } from '../data.js';
import Reveal from '../components/Reveal.jsx';

// Listing page at /articles. Cards are generated from the ARTICLES array
// (src/data.js) — add a new article there and it appears here automatically.
// Falls back to a "coming soon" message when the array is empty.
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

      {ARTICLES.length > 0 ? (
        <section className="block">
          <div className="container">
            <div className="grid grid-services article-grid">
              {ARTICLES.map((a, i) => (
                <Reveal delay={(i % 3) * 90} key={a.slug}>
                  <Link to={`/articles/${a.slug}`} className="card card-link article-card">
                    {a.heroImage && (
                      <div className="article-card-image-wrap">
                        <img src={a.heroImage} alt={a.heroImageAlt || a.title} loading="lazy" />
                      </div>
                    )}
                    <p className="article-card-date">{a.publishDate}</p>
                    <h3>{a.title}</h3>
                    <p>{a.excerpt}</p>
                    <span className="card-link-cta">Read article &rarr;</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : (
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
      )}
    </>
  );
}

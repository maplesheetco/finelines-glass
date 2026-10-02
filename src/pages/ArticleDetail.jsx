import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { COMPANY, ARTICLES } from '../data.js';
import Reveal from '../components/Reveal.jsx';

// Full post page for a single article, e.g. /articles/frameless-shower-
// enclosures-jobsite-to-finished-product. Linked from the cards on
// Articles.jsx. Content for every post lives in the ARTICLES array
// (src/data.js) — add a new post there and it shows up here automatically,
// no changes needed in this file. Same flexible `blocks` engine as the
// service design-detail pages, plus an optional `flow` field for a
// horizontal step row (see the comment above ARTICLES in data.js).
export default function ArticleDetail() {
  const { slug } = useParams();

  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const otherArticles = ARTICLES.filter((a) => a.slug !== slug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="service-crumb">
            {COMPANY.shortName} / <Link to="/articles">Articles</Link> / {article.title}
          </p>
          <h1>{article.title}</h1>
          <p className="article-meta">{article.publishDate} &middot; {COMPANY.shortName}</p>
        </div>
      </section>

      <section className="block">
        <div className="container service-detail-layout">
          <div className="service-detail-main">
            {article.heroImage && (
              <Reveal>
                <img
                  src={article.heroImage}
                  alt={article.heroImageAlt || article.title}
                  className="shower-detail-image"
                />
              </Reveal>
            )}

            {article.intro.map((p, i) => (
              <Reveal key={`intro-${i}`} delay={i * 40}>
                <p className="service-detail-copy">{p}</p>
              </Reveal>
            ))}

            {article.blocks.map((block, bi) => (
              <React.Fragment key={`block-${bi}`}>
                <Reveal>
                  <h2 className="shower-detail-heading">{block.heading}</h2>
                </Reveal>

                {block.intro && (
                  <Reveal delay={20}>
                    <p className="service-detail-copy">{block.intro}</p>
                  </Reveal>
                )}

                {block.paragraphs && block.paragraphs.map((p, i) => (
                  <Reveal key={`p-${bi}-${i}`} delay={i * 40}>
                    <p className="service-detail-copy">{p}</p>
                  </Reveal>
                ))}

                {block.bullets && (
                  <Reveal delay={40}>
                    <ul className="service-highlights">
                      {block.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </Reveal>
                )}

                {block.items && (
                  <Reveal delay={40}>
                    <ul className="service-highlights">
                      {block.items.map((item) => (
                        <li key={item.title}>
                          <strong>{item.title}</strong> — {item.body}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}

                {block.flow && (
                  <Reveal delay={40}>
                    <div className="article-process-flow">
                      {block.flow.map((step, i) => (
                        <React.Fragment key={step}>
                          <span className="article-process-step">{step}</span>
                          {i < block.flow.length - 1 && (
                            <span className="article-process-arrow" aria-hidden="true">&rarr;</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </Reveal>
                )}

                {block.note && (
                  <Reveal delay={60}>
                    <p className="service-detail-copy">{block.note}</p>
                  </Reveal>
                )}
              </React.Fragment>
            ))}

            {article.ctaNote && (
              <Reveal delay={40}>
                <div className="safety-note">
                  <p><strong>{article.ctaNote}</strong></p>
                </div>
              </Reveal>
            )}

            {article.tagline && (
              <Reveal delay={60}>
                <p className="article-tagline">{article.tagline}</p>
              </Reveal>
            )}

            <Reveal delay={80}>
              <div className="hero-actions" style={{ marginTop: 28 }}>
                <a className="btn btn-primary" href="/request-estimate">Request an Estimate</a>
                <a className="btn btn-outline-navy" href="/contact">Contact Us</a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <aside className="service-detail-aside">
              <h3>More articles</h3>
              {otherArticles.length > 0 ? (
                <ul className="service-detail-list">
                  {otherArticles.map((a) => (
                    <li key={a.slug}>
                      <Link to={`/articles/${a.slug}`}>{a.title}</Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="service-detail-areas">More articles are on the way.</p>
              )}
              <p className="service-detail-areas">
                <Link to="/articles">&larr; Back to all articles</Link>
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { CITY_PAGES, getServiceArticles } from '../data.js';

// Sidebar block on service and design pages: published articles about this
// service (SERVICE_ARTICLES in data.js) and links to every city page, so each
// city page is reachable from the pages people land on.
export default function RelatedLinks({ serviceSlug }) {
  const articles = getServiceArticles(serviceSlug);
  return (
    <>
      {articles.length > 0 && (
        <div className="related-block">
          <h3>Related reading</h3>
          <ul className="service-detail-list">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link to={`/articles/${a.slug}`}>{a.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <nav className="related-block" aria-label="Areas we serve">
        <h3>Areas we serve</h3>
        <ul className="related-cities">
          {CITY_PAGES.map((c) => (
            <li key={c.slug}>
              <Link to={`/service-areas/${c.slug}`}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

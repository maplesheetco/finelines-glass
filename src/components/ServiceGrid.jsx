import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data.js';
import ServiceIcon from './ServiceIcon.jsx';
import Reveal from './Reveal.jsx';

// The service cards shared by the Home, Services and About pages. On the
// 3-column desktop layout, a last row with one or two cards is centred
// (see .service-grid in index.css) instead of leaving an empty gap.
// Each card shows a real project photo behind a navy gradient when the
// service has `cardImage` set in data.js.
export default function ServiceGrid({ showBlurbs = true }) {
  const leftover = SERVICES.length % 3;
  return (
    <div className={`grid grid-services service-grid${leftover ? ` leftover-${leftover}` : ''}`}>
      {SERVICES.map((s, i) => (
        <Reveal delay={(i % 3) * 90} key={s.slug}>
          <Link
            to={`/services/${s.slug}`}
            className={`card card-link${s.cardImage ? ' service-card-photo' : ''}${showBlurbs ? '' : ' compact'}`}
          >
            {s.cardImage && (
              <picture className="service-card-bg" aria-hidden="true">
                <source srcSet={`/images/${s.cardImage}.webp`} type="image/webp" />
                <img
                  src={`/images/${s.cardImage}.jpg`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: s.cardImagePosition || 'center' }}
                />
              </picture>
            )}
            <span className="service-card-icon"><ServiceIcon name={s.icon} /></span>
            <h3>{s.title}</h3>
            {showBlurbs && <p>{s.blurb}</p>}
            <span className="card-link-cta">Learn more &rarr;</span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

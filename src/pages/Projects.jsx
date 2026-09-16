import React from 'react';
import { COMPANY } from '../data.js';

// Real completed-project photos. Captions describe the work only — never a
// client's exact address (see the website report / discovery checklist for
// why). Add a new entry here (and drop the matching file in public/images/)
// whenever you send over more photos.
const GALLERY = [
  { src: '/images/project-1.jpg', caption: 'West Vancouver - Frameless Shower' },
  { src: '/images/project-2.jpg', caption: 'Bellevue Dr. - Exterior Glass Railing' },
  { src: '/images/project-3.jpg', caption: 'Richmond - Shower Enclosure' },
  { src: '/images/project-4.jpg', caption: 'Bellevue Dr. - Interior Railing' },
  { src: '/images/project-5.jpg', caption: 'Bellevue Dr. - Wine Cellar' },
  { src: '/images/project-6.jpg', caption: 'Bellevue Dr. - Frameless Shower Enclosures' },
  { src: '/images/project-7.jpg', caption: 'Pender Island - Exterior Railing' },
  { src: '/images/project-8.jpg', caption: 'Cedarhurst St. - Wine Cellar' },
  { src: '/images/project-9.jpg', caption: 'West 34th Vancouver - Shower Enclosures' },
];

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Work</h1>
          <p>A look at recent installations across {COMPANY.serviceAreas.join(', ')}.</p>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY.map((g, i) => (
              <figure className="gallery-item" key={i}>
                <img src={g.src} alt={g.caption} loading="lazy" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p style={{ marginTop: 28, color: 'var(--gray)' }}>
            Want your project featured here? <a href="/contact" style={{ color: 'var(--steel)', fontWeight: 600 }}>Get in touch</a>.
          </p>
        </div>
      </section>
    </>
  );
}

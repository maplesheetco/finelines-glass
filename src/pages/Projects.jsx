import React from 'react';

// TODO: this whole page is a placeholder gallery. Replace each
// .gallery-placeholder block below with a real <img src="/images/your-photo.jpg" />
// once you've added project photos to the public/images folder.
const PLACEHOLDER_COUNT = 9;

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Work</h1>
          <p>A look at recent installations across Greater Vancouver, Vancouver Island, and the Sunshine Coast.</p>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="gallery-grid">
            {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
              <div className="gallery-placeholder" key={i}>
                Add a project photo here
                <br />
                (public/images/project-{i + 1}.jpg)
              </div>
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

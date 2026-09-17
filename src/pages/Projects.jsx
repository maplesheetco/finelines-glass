import React, { useState, useEffect } from 'react';
import { COMPANY, PROJECTS } from '../data.js';
import Reveal from '../components/Reveal.jsx';

function Lightbox({ project, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  const photo = project.photos[index];
  const count = project.photos.length;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-body" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close" aria-label="Close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 5 L19 19 M19 5 L5 19" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>

        <img src={photo.src} alt={`${project.name} - ${photo.label}`} className="lightbox-image" />

        {count > 1 && (
          <>
            <button type="button" className="lightbox-arrow prev" aria-label="Previous photo" onClick={onPrev}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 5 L8 12 L15 19" stroke="#1B2A4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" className="lightbox-arrow next" aria-label="Next photo" onClick={onNext}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 5 L16 12 L9 19" stroke="#1B2A4A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}

        <div className="lightbox-info">
          <span className="lightbox-project">{project.name}</span>
          <span className="lightbox-label">{photo.label}</span>
          {count > 1 && <span className="lightbox-count">{index + 1} / {count}</span>}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [openProject, setOpenProject] = useState(null); // index into PROJECTS
  const [photoIndex, setPhotoIndex] = useState(0);

  const openAt = (projectIndex) => {
    setOpenProject(projectIndex);
    setPhotoIndex(0);
  };
  const close = () => setOpenProject(null);
  const project = openProject === null ? null : PROJECTS[openProject];
  const prev = () => setPhotoIndex((i) => (i - 1 + project.photos.length) % project.photos.length);
  const next = () => setPhotoIndex((i) => (i + 1) % project.photos.length);

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
          <div className="project-grid">
            {PROJECTS.map((p, i) => (
              <Reveal delay={(i % 3) * 90} key={p.name}>
                <button
                  type="button"
                  className="project-card"
                  onClick={() => openAt(i)}
                  aria-label={`View ${p.photos.length} photo${p.photos.length > 1 ? 's' : ''} from ${p.name}`}
                >
                  <div className="project-card-image-wrap">
                    <img src={p.photos[0].src} alt={p.name} loading="lazy" />
                    {p.photos.length > 1 && (
                      <span className="project-card-badge">{p.photos.length} photos</span>
                    )}
                  </div>
                  <div className="project-card-name">{p.name}</div>
                </button>
              </Reveal>
            ))}
          </div>
          <p style={{ marginTop: 28, color: 'var(--gray)' }}>
            Want your project featured here? <a href="/contact" style={{ color: 'var(--steel)', fontWeight: 600 }}>Get in touch</a>.
          </p>
        </div>
      </section>

      {project && (
        <Lightbox project={project} index={photoIndex} onClose={close} onPrev={prev} onNext={next} />
      )}
    </>
  );
}

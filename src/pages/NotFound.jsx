import React from 'react';

export default function NotFound() {
  return (
    <section className="block">
      <div className="container" style={{ textAlign: 'center', padding: '60px 0' }}>
        <h1 style={{ color: 'var(--navy)' }}>Page not found</h1>
        <p style={{ color: 'var(--gray)' }}>
          The page you're looking for doesn't exist. <a href="/" style={{ color: 'var(--steel)', fontWeight: 600 }}>Back to home</a>.
        </p>
      </div>
    </section>
  );
}

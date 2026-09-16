import React from 'react';

// TODO: this page is intentionally light until the owner confirms exact
// finish/hardware options with the supplier. Swap the gallery-placeholder
// blocks below for real swatch photos once you have them — see the
// Hardware & Finishes mockup for the fuller version of this page.
const FINISHES = ['Chrome', 'Brushed Nickel', 'Matte Black', 'Brushed Brass', 'Oil-Rubbed Bronze'];

export default function HardwareFinishes() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Hardware &amp; Finishes</h1>
          <p>A quick reference for the handle, hinge, and edge options available on your glass installation.</p>
        </div>
      </section>

      <section className="block tint">
        <div className="container" style={{ maxWidth: 760 }}>
          <p style={{ lineHeight: 1.7, color: 'var(--gray)', margin: 0 }}>
            These finishes are sourced through our trusted hardware suppliers as part of your
            installation — we don't sell hardware separately. Exact availability and color
            matching are confirmed together during your consultation.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <h2 className="section-heading">Handle &amp; hinge finishes</h2>
          <p className="section-subheading">Full photos of each finish are coming soon.</p>
          <div className="gallery-grid">
            {FINISHES.map((f) => (
              <div className="gallery-placeholder" key={f}>{f}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="block tint" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-heading">Not sure what fits your space?</h2>
          <p className="section-subheading" style={{ margin: '0 auto 28px' }}>
            Tell us about your project and we'll walk you through the options that work best for it.
          </p>
          <a className="btn btn-primary" href="/contact">Request an Estimate</a>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import Reveal from '../components/Reveal.jsx';

// Confirmed against our supplier's (CRL) actual shower hardware finish
// collection and grouped the same way they group it — by color family. Colors
// below are close visual approximations for the swatch chips (not scanned
// from CRL's own swatch photos) since we don't have real finish photos yet;
// swap `color` for a photographed swatch image per finish once available.
// `isNew` flags CRL's newer finishes, which may have narrower availability
// on some hardware — worth double-checking on a per-job basis.
const FINISH_GROUPS = [
  {
    group: 'Cool Metals',
    finishes: [
      { name: 'Polished Chrome', color: '#DCE1E4' },
      { name: 'Brushed Chrome', color: '#B8BEC2', isNew: true },
      { name: 'Matte Black', color: '#1C1C1C' },
    ],
  },
  {
    group: 'Neutral Metals',
    finishes: [
      { name: 'Polished Stainless Steel', color: '#C7CBCD' },
      { name: 'Brushed Stainless Steel', color: '#A9ADAF' },
    ],
  },
  {
    group: 'Warm White Metals',
    finishes: [
      { name: 'Polished Nickel', color: '#C7C0B4' },
      { name: 'Brushed Nickel', color: '#ABA79B' },
      { name: 'Satin Nickel', color: '#B7AFA0' },
      { name: 'Gunmetal', color: '#4A4A4E' },
      { name: 'Matte Gunmetal', color: '#3B3B3E', isNew: true },
      { name: 'Oil Rubbed Bronze', color: '#3B2E27' },
    ],
  },
  {
    group: 'Warm Yellow Metals',
    finishes: [
      { name: 'Polished Brass', color: '#D4AF64' },
      { name: 'Satin Brass', color: '#C6A45C' },
      { name: 'Brushed Bronze', color: '#8B6B4A' },
      { name: 'Dark Brushed Bronze', color: '#5C4632', isNew: true },
      { name: 'Vintage Brass', color: '#7A5A3A', isNew: true },
      { name: 'French Gold', color: '#C9A24B', isNew: true },
      { name: 'Modern Gold', color: '#B8933E', isNew: true },
    ],
  },
  {
    group: 'Pink Toned Metals',
    finishes: [{ name: 'Rose Gold', color: '#C98F76', isNew: true }],
  },
  {
    group: 'Living Finish',
    finishes: [
      { name: 'Unlacquered Brass — at installation', color: '#E4C77A' },
      { name: 'Unlacquered Brass — aged patina (5+ yrs)', color: '#8A6B3E' },
    ],
  },
];

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
            Our hardware is sourced through CRL, one of the industry's leading shower hardware
            suppliers — we don't sell hardware separately. The finish families below reflect
            their current collection; exact availability per hardware piece, and unlacquered
            brass's natural aging, are confirmed together during your consultation.
          </p>
          <p style={{ lineHeight: 1.7, color: 'var(--gray)', margin: '14px 0 0' }}>
            Note: lead times vary by finish. Standard finishes (chrome, stainless, black) are
            usually quick to source, but specialty or newer colors — golds, brass tones, and other
            special-order finishes — can take noticeably longer to arrive. We'll flag this during
            your consultation so it doesn't hold up your project timeline.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <Reveal><h2 className="section-heading">Finish collection</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">
              Swatches shown are a close visual guide — see real samples in person to confirm the
              exact tone before you decide. Finishes marked <strong>New</strong> are special-order
              colors and often take longer to arrive than standard finishes — ask us about lead
              time if one of these catches your eye.
            </p>
          </Reveal>

          <div className="finish-groups">
            {FINISH_GROUPS.map((g, gi) => (
              <Reveal delay={(gi % 3) * 90} key={g.group}>
                <div>
                  <h3 className="finish-group-title">{g.group}</h3>
                  <div className="finish-swatch-grid">
                    {g.finishes.map((f) => (
                      <div className="finish-swatch" key={f.name}>
                        <div className="finish-swatch-color" style={{ background: f.color }}>
                          {f.isNew && <span className="finish-swatch-new-badge">New</span>}
                        </div>
                        <span className="finish-swatch-name">{f.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
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
          <a className="btn btn-primary" href="/request-estimate">Request an Estimate</a>
        </div>
      </section>
    </>
  );
}

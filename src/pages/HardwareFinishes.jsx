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

// Standard glass options for shower enclosures. Any specialized glass type
// requested by a designer or contractor is possible — we research and source
// it with them on a per-project basis, so this list is our standard starting
// point, not the full range of what we can install.
const SHOWER_GLASS_THICKNESSES = ['10mm', '12mm'];
const SHOWER_GLASS_TYPES = [
  {
    name: 'Clear Tempered',
    description: 'Our standard, most-installed option — fully tempered safety glass with a clear, transparent finish.',
  },
  {
    name: 'Acid-Etched Tempered',
    description: 'Tempered glass with a frosted, acid-etched surface for privacy while still letting light through.',
  },
  {
    name: 'Starfire / Low-Iron Tempered',
    description: 'Tempered glass made with low-iron content, removing the green tint of standard glass for a truer, clearer look.',
  },
];

// Standard glass options for interior and exterior railings. Laminated glass
// is also available for railings, provided the assembly meets BC Building
// Code requirements for that application.
const RAILING_GLASS_THICKNESSES = ['10mm', '12mm', '15mm', '19mm'];
const RAILING_GLASS_TYPES = [
  {
    name: 'Clear Tempered',
    description: 'Our standard tempered safety glass for interior and exterior railings.',
  },
  {
    name: 'Starfire / Low-Iron Tempered',
    description: 'Low-iron tempered glass for a clearer, less green-tinted look — a popular upgrade for exterior railings.',
  },
  {
    name: 'Laminated Glass',
    description: 'Two or more layers bonded together for added strength and safety. Used on railings where the design and assembly meet BC Building Code requirements.',
    isCodeDependent: true,
  },
];

// Mirror colors, rendered the same way as the hardware finish swatches since
// these are genuine color choices too. Starfire is CRL/industry terminology
// for a super-clear, low-iron mirror.
const MIRROR_COLORS = [
  { name: 'Clear Mirror', color: '#D7E2E4' },
  { name: 'Grey Mirror', color: '#8C9296' },
  { name: 'Bronze Mirror', color: '#6E5645' },
  { name: 'Starfire Mirror', color: '#E7EEEC', isNew: true },
];

const MIRROR_EDGES = [
  { name: 'Polished Edge', description: 'A smooth, clear-ground edge — our standard mirror edge finish.' },
  { name: 'Beveled Edge', description: "An angled, faceted edge cut around the mirror's perimeter for a more decorative look." },
];

export default function HardwareFinishes() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Hardware &amp; Finishes</h1>
          <p>A quick reference for the glass, mirror, and hardware options available on your installation.</p>
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
          <p style={{ lineHeight: 1.7, color: 'var(--gray)', margin: '14px 0 0' }}>
            The glass and mirror options below are our standard offering. If your project calls for
            something outside these — a specialized glass design or a less common spec — we work
            directly with designers and contractors to research and source it.
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

      <section className="block tint">
        <div className="container">
          <Reveal><h2 className="section-heading">Shower enclosure glass</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">
              Standard thicknesses and glass types for shower enclosures. We'll help you pick the
              right combination based on your enclosure design and hardware.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="spec-thickness-row">
              {SHOWER_GLASS_THICKNESSES.map((t) => (
                <span className="spec-pill" key={t}>{t}</span>
              ))}
            </div>
          </Reveal>

          <div className="spec-type-grid">
            {SHOWER_GLASS_TYPES.map((t, i) => (
              <Reveal delay={(i % 3) * 90} key={t.name}>
                <div className="spec-type-card">
                  <h4>{t.name}</h4>
                  <p>{t.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="spec-note">
              Working on something more specialized? We partner with your designer or contractor to
              research and source the right specialty glass for the project.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <Reveal><h2 className="section-heading">Railing glass — interior &amp; exterior</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">
              Standard thicknesses and glass types for interior and exterior railings.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="spec-thickness-row">
              {RAILING_GLASS_THICKNESSES.map((t) => (
                <span className="spec-pill" key={t}>{t}</span>
              ))}
            </div>
          </Reveal>

          <div className="spec-type-grid">
            {RAILING_GLASS_TYPES.map((t, i) => (
              <Reveal delay={(i % 3) * 90} key={t.name}>
                <div className="spec-type-card">
                  {t.isCodeDependent && <span className="spec-type-badge">BC Code dependent</span>}
                  <h4>{t.name}</h4>
                  <p>{t.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="spec-note">
              Designers sometimes call for specialized glass designs on a railing project — we work
              with your designer and contractor to research suppliers and confirm the spec meets BC
              Building Code before it's installed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="block tint">
        <div className="container">
          <Reveal><h2 className="section-heading">Mirrors</h2></Reveal>
          <Reveal delay={80}>
            <p className="section-subheading">
              Standard 5mm thickness; 6mm is available depending on supplier stock. Colors below,
              plus a choice of polished or beveled edge.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="spec-thickness-row">
              <span className="spec-pill">5mm (standard)</span>
              <span className="spec-pill">6mm (subject to availability)</span>
            </div>
          </Reveal>

          <div className="finish-swatch-grid">
            {MIRROR_COLORS.map((m) => (
              <div className="finish-swatch" key={m.name}>
                <div className="finish-swatch-color" style={{ background: m.color }}>
                  {m.isNew && <span className="finish-swatch-new-badge">Premium</span>}
                </div>
                <span className="finish-swatch-name">{m.name}</span>
              </div>
            ))}
          </div>

          <Reveal delay={80}>
            <h3 className="finish-group-title" style={{ marginTop: 32 }}>Edge options</h3>
          </Reveal>
          <div className="spec-type-grid">
            {MIRROR_EDGES.map((e, i) => (
              <Reveal delay={(i % 3) * 90} key={e.name}>
                <div className="spec-type-card">
                  <h4>{e.name}</h4>
                  <p>{e.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="spec-note">
              Final color and thickness usually come down to homeowner or designer preference — we'll
              confirm what's available for your project during your consultation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="block" style={{ textAlign: 'center' }}>
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

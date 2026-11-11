import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, SERVICES, CITY_PAGES } from '../data.js';
import Logo from './Logo.jsx';

// Footer layout modelled on linocondigital.com: brand block with buttons and
// social icons, then link columns, then a bottom bar. Every link is styled so
// it reads as clickable (brighter text, amber on hover, icons on contact rows).

const COMPANY_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Projects', to: '/projects' },
  { label: 'Hardware & Finishes', to: '/hardware-finishes' },
  { label: 'Articles', to: '/articles' },
  { label: 'Contact', to: '/contact' },
  { label: 'Request an Estimate', to: '/request-estimate' },
];

// Cities shown in the footer; the rest are one click away on /service-areas.
const FOOTER_CITIES = ['vancouver', 'burnaby', 'richmond', 'surrey', 'coquitlam', 'langley', 'abbotsford'];

function Icon({ name }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  switch (name) {
    case 'phone':
      return (
        <svg {...common}>
          <path d="M6.6 3.5h2.6l1.4 4.1-2 1.4a12 12 0 0 0 6.4 6.4l1.4-2 4.1 1.4v2.6a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
        </svg>
      );
    case 'pin':
      return (
        <svg {...common}>
          <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common} width={20} height={20}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </svg>
      );
    case 'arrow-up':
      return (
        <svg {...common} width={14} height={14}>
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  const cities = FOOTER_CITIES.map((slug) => CITY_PAGES.find((c) => c.slug === slug)).filter(Boolean);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${COMPANY.mapQuery}`;

  return (
    <footer className="site-footer" id="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" aria-label="Finelines Glass home" className="footer-logo">
              <Logo variant="onDark" height={44} />
            </Link>
            <p className="footer-tagline">Custom glass, railings &amp; mirrors, built to last.</p>
            <p className="footer-about">
              Family-run glass installers in Vancouver, BC since 1994, serving the Lower Mainland,
              Greater Vancouver, the Tri-City area and the Fraser Valley.
            </p>
            <div className="footer-actions">
              <Link className="btn btn-primary footer-btn" to="/request-estimate">
                Request an Estimate
              </Link>
              <a className="btn footer-btn footer-btn-outline" href={COMPANY.phoneHref}>
                <Icon name="phone" /> Call {COMPANY.phone}
              </a>
            </div>
            <div className="footer-social">
              <a
                className="footer-social-icon"
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Finelines Glass on Instagram (${COMPANY.instagramHandle})`}
                title="Instagram"
              >
                <Icon name="instagram" />
              </a>
              <a
                className="footer-social-handle"
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow us {COMPANY.instagramHandle}
              </a>
            </div>
          </div>

          <nav className="footer-col" aria-label="Services">
            <h3 className="footer-heading">Services</h3>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Company">
            <h3 className="footer-heading">Company</h3>
            <ul>
              {COMPANY_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Service areas">
            <h3 className="footer-heading">Areas We Serve</h3>
            <ul>
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link to={`/service-areas/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
              <li>
                <Link className="footer-more" to="/service-areas">
                  All service areas &rarr;
                </Link>
              </li>
            </ul>
          </nav>

          <div className="footer-col footer-contact-col">
            <h3 className="footer-heading">Get in Touch</h3>
            <ul className="footer-contact-list">
              <li>
                <Icon name="phone" />
                <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
              </li>
              <li>
                <Icon name="mail" />
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
              <li>
                <Icon name="pin" />
                <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                  {COMPANY.address}
                </a>
              </li>
              <li className="footer-hours">
                <Icon name="clock" />
                <span>
                  {COMPANY.hours.map((h) => (
                    <span key={h.day} className="footer-hours-row">
                      <strong>{h.day}:</strong> {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {COMPANY.currentYear} {COMPANY.name} All rights reserved.</p>
          <p className="footer-credit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="lincon-g" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2E6BFF" />
                  <stop offset="100%" stopColor="#FF6A3D" />
                </linearGradient>
              </defs>
              <path d="M2 20 L9 9" stroke="url(#lincon-g)" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M11 20 L18 5" stroke="url(#lincon-g)" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M20 20 L28 2" stroke="url(#lincon-g)" strokeWidth="4.5" strokeLinecap="round" />
            </svg>
            <span>
              Website by{' '}
              <a href="https://linocondigital.com" target="_blank" rel="noopener noreferrer">
                LinoCon Digital
              </a>
            </span>
          </p>
          <a
            className="footer-top"
            href="#root"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Icon name="arrow-up" /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

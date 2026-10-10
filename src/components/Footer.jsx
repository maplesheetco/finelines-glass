import React from 'react';
import { COMPANY } from '../data.js';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Logo variant="onDark" height={30} />
        <p className="footer-name">{COMPANY.name}</p>
        <p className="footer-copyright">&copy; {COMPANY.currentYear} All rights reserved.</p>
        <p className="footer-contact">
          <a href={COMPANY.phoneHref}>{COMPANY.phone}</a> &nbsp;·&nbsp;
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </p>
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
      </div>
    </footer>
  );
}

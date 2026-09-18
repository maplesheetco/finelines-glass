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
      </div>
    </footer>
  );
}

import React from 'react';
import { COMPANY } from '../data.js';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-brand">
          <Logo variant="onDark" height={30} />
          <span>&copy; {COMPANY.currentYear} {COMPANY.name}. All rights reserved.</span>
        </div>
        <div>
          <a href={COMPANY.phoneHref}>{COMPANY.phone}</a> &nbsp;·&nbsp;
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </div>
      </div>
    </footer>
  );
}

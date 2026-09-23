import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV, COMPANY } from '../data.js';
import Logo from './Logo.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <NavLink className="brand" to="/" end aria-label="Finelines home" onClick={() => setOpen(false)}>
          <Logo variant="onDark" height={60} />
        </NavLink>

        <div className="header-right">
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M5 5 L19 19 M19 5 L5 19" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
              ) : (
                <path d="M4 6 H20 M4 12 H20 M4 18 H20" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
              )}
            </svg>
          </button>
          <a className="header-cta" href="/request-estimate">
            Request an Estimate
          </a>
        </div>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          {NAV.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              end={item.path === '/'}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV, COMPANY } from '../data.js';
import Logo from './Logo.jsx';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <NavLink className="brand" to="/" end aria-label="Finelines home">
          <Logo variant="onDark" height={38} />
        </NavLink>
        <nav className="nav-links">
          {NAV.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              end={item.path === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <a className="header-cta" href="/contact">
          Request an Estimate
        </a>
      </div>
    </header>
  );
}

import React from 'react';
import { TRUST_BADGES } from '../data.js';

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="container">
        <ul>
          {TRUST_BADGES.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

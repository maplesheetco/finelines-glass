import React from 'react';

// Icon paths copied 1:1 from the approved design mockup (Main.dc.html) so the
// real site matches exactly. Add a new `case` here whenever a new `icon` slug
// is added to SERVICES in data.js.
const ICONS = {
  shower: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" stroke="#3E6B8A" strokeWidth="1.6" />
      <path d="M14 3 L14 21" stroke="#3E6B8A" strokeWidth="1.6" />
    </>
  ),
  railing: (
    <>
      <path d="M3 20 L21 20" stroke="#3E6B8A" strokeWidth="1.6" />
      <path d="M5 20 L5 8 M9.5 20 L9.5 8 M14 20 L14 8 M18.5 20 L18.5 8" stroke="#3E6B8A" strokeWidth="1.6" />
      <path d="M3 8 L21 8" stroke="#3E6B8A" strokeWidth="1.6" />
    </>
  ),
  wine: (
    <>
      <path d="M12 3 C12 3 7 9 7 13 A5 5 0 0 0 17 13 C17 9 12 3 12 3 Z" stroke="#3E6B8A" strokeWidth="1.6" />
      <path d="M12 18 L12 21 M9 21 L15 21" stroke="#3E6B8A" strokeWidth="1.6" />
    </>
  ),
  backsplash: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1" stroke="#3E6B8A" strokeWidth="1.6" />
      <path
        d="M3.5 9.5 L20.5 9.5 M3.5 15 L20.5 15 M9.5 3.5 L9.5 20.5 M15 3.5 L15 20.5"
        stroke="#3E6B8A"
        strokeWidth="1.2"
        opacity="0.7"
      />
    </>
  ),
  mirror: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="7" stroke="#3E6B8A" strokeWidth="1.6" />
      <path d="M9 7 C9 7 8 9 8 11" stroke="#3E6B8A" strokeWidth="1.4" opacity="0.6" />
    </>
  ),
  film: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1" stroke="#3E6B8A" strokeWidth="1.6" />
      <path
        d="M3.5 20.5 L20.5 3.5 M8 20.5 L20.5 8 M12.5 20.5 L20.5 12.5"
        stroke="#3E6B8A"
        strokeWidth="1.1"
        opacity="0.55"
      />
      <circle cx="19.5" cy="4.5" r="2" stroke="#3E6B8A" strokeWidth="1.4" />
    </>
  ),
  custom: (
    <path
      d="M12 2 L14.5 9 L22 9 L16 13.5 L18 21 L12 16.5 L6 21 L8 13.5 L2 9 L9.5 9 Z"
      stroke="#3E6B8A"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  ),
  skylight: (
    <>
      <rect x="4" y="8" width="16" height="13" rx="1" stroke="#3E6B8A" strokeWidth="1.6" />
      <path d="M12 8 L12 21 M4 14.5 L20 14.5" stroke="#3E6B8A" strokeWidth="1.4" opacity="0.7" />
      <path
        d="M12 2 L12 4.5 M7.6 3.3 L8.9 5.4 M16.4 3.3 L15.1 5.4"
        stroke="#3E6B8A"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
};

export default function ServiceIcon({ name, size = 30 }) {
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {icon}
    </svg>
  );
}

import React from 'react';

// Real Finelines logo artwork (supplied by the owner), cut out to transparent
// PNGs in public/images. Kept as separate files rather than embedded in the
// code so the browser downloads and caches them once instead of with every
// page and script.
//   variant="onDark"  = white ink, for dark backgrounds (header, footer).
//   variant="onLight" = black ink, for light backgrounds (print, light sections).
const LOGO_ONDARK = '/images/logo-on-dark.png';
const LOGO_ONLIGHT = '/images/logo-on-light.png';

const SOURCES = {
  onDark: LOGO_ONDARK,
  onLight: LOGO_ONLIGHT,
};

// Intrinsic aspect ratio of the source artwork (width / height), so layout
// doesn't jump while the image loads.
const ASPECT_RATIO = 1041 / 217;

export default function Logo({ variant = 'onDark', height = 40, className }) {
  return (
    <img
      src={SOURCES[variant] || SOURCES.onDark}
      alt="Finelines Installations Ltd. Glass"
      height={height}
      width={Math.round(height * ASPECT_RATIO)}
      className={className}
      style={{ height, width: 'auto', display: 'block' }}
    />
  );
}

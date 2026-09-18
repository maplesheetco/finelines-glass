import React from 'react';

// Recreated from the real Finelines logo (photographed on company apparel):
// "GLASS" in large serif letters with "FINELINES INSTALLATIONS LTD" nested
// across the middle and "Est. 1994" below, monochrome only.
//
// This is a close redraw built with a web font (Playfair Display, already
// used for headings on this site) — NOT a pixel-exact trace of the original
// artwork. It's good enough for the website, but for anything printed
// (business cards, signage, apparel reorders) use the owner's/embroiderer's
// original file if one exists, so it matches exactly.
//
// variant="onDark" = white ink, for dark backgrounds (header, footer).
// variant="onLight" = dark ink, for light backgrounds (print, light sections).
export default function Logo({ variant = 'onDark', height = 40, className }) {
  const ink = variant === 'onDark' ? '#FFFFFF' : '#1A1A1A';
  const fontStack = "'Playfair Display', Georgia, 'Times New Roman', serif";

  return (
    <svg
      className={className}
      height={height}
      viewBox="0 0 600 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Finelines Installations Ltd. Glass — Est. 1994"
    >
      <text
        x="300"
        y="148"
        textAnchor="middle"
        fontFamily={fontStack}
        fontSize="128"
        fontWeight="800"
        letterSpacing="-6"
        fill="none"
        stroke={ink}
        strokeWidth="3"
      >
        GLASS
      </text>
      <text
        x="300"
        y="40"
        textAnchor="middle"
        fontFamily={fontStack}
        fontSize="27"
        fontWeight="700"
        letterSpacing="1.4"
        fill={ink}
      >
        FINELINES INSTALLATIONS LTD
      </text>
      <text
        x="300"
        y="186"
        textAnchor="middle"
        fontFamily={fontStack}
        fontSize="22"
        fontStyle="italic"
        fontWeight="600"
        fill={ink}
      >
        Est. 1994
      </text>
    </svg>
  );
}

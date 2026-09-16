// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH
// Brand colors, company details, nav, services, and placeholder content all
// live here. Change something once, it updates everywhere on the site.
// (Same pattern as the MapleSheet site's `B` object in src/data.js.)
// ---------------------------------------------------------------------------

// Placeholder brand palette — swap these hex values for Finelines' real
// brand colors/logo whenever you have them. Nothing else needs to change.
export const B = {
  navy: '#1B2A4A',      // headers, nav, footer
  steel: '#3E6B8A',     // secondary accent, links
  amber: '#C0762A',     // call-to-action buttons
  glassTint: '#EAF1F6', // light section backgrounds
  ink: '#1A1A1A',       // body text
  gray: '#5A5A5A',      // muted text
  white: '#FFFFFF',
  font: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", // body text
  fontHeading: "'Playfair Display', Georgia, 'Times New Roman', serif", // headings & logo — echoes the real logo's classic serif style
};

export const COMPANY = {
  name: 'Finelines Glass Installation Ltd.',
  shortName: 'Finelines Glass',
  phone: '604-789-5154',
  phoneHref: 'tel:+16047895154',
  email: 'info@finelinesglass.ca', // TODO: set up forwarding to finelinesglass@gmail.com, then use this everywhere
  emailFallback: 'finelinesglass@gmail.com',
  address: '1509 East Kent Ave N, Vancouver, BC V5P 4Y7',
  mapQuery: '1509+East+Kent+Ave+N+Vancouver+BC+V5P+4Y7',
  hours: [
    { day: 'Monday – Friday', time: '8:00 AM – 5:00 PM' }, // TODO: confirm real hours
    { day: 'Saturday', time: 'By appointment' },
    { day: 'Sunday', time: 'Closed' },
  ],
  yearsExperience: '30+',
  serviceAreas: ['Lower Mainland', 'Greater Vancouver', 'Tri-City', 'Fraser Valley'],
  instagramUrl: 'https://www.instagram.com/', // TODO: paste real handle URL
  currentYear: new Date().getFullYear(),
};

export const NAV = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Hardware & Finishes', path: '/hardware-finishes' },
  { label: 'Projects', path: '/projects' },
  { label: 'Articles', path: '/articles' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

// `icon` keys map to <ServiceIcon /> in components/ServiceIcon.jsx — keep the
// two in sync if you add or reorder a service.
export const SERVICES = [
  {
    title: 'Frameless Shower Enclosures',
    blurb: 'Turn a bathroom into a spa-like retreat with a custom frameless glass shower, cut and installed to fit your space exactly.',
    icon: 'shower',
  },
  {
    title: 'Glass Railings',
    blurb: 'Modern, code-compliant railings for decks, balconies, and staircases that keep your view open instead of blocked.',
    icon: 'railing',
  },
  {
    title: 'Wine Cellars',
    blurb: 'Custom glass-enclosed wine cellars and display rooms built to show off a collection, not hide it.',
    icon: 'wine',
  },
  {
    title: 'Glass Backsplashes',
    blurb: 'Sleek, easy-to-clean glass backsplashes finished in the color and texture that fits your kitchen.',
    icon: 'backsplash',
  },
  {
    title: 'Mirrors',
    blurb: 'Custom-cut mirrors for bathrooms, gyms, dance studios, and feature walls, precisely fitted on site.',
    icon: 'mirror',
  },
  {
    title: 'Window & Storefront Film',
    blurb: 'Solar-control window film for homes and storefronts that cuts glare and UV, keeping spaces cooler in summer and better insulated in winter.',
    icon: 'film',
  },
  {
    title: 'Custom Glass Solutions',
    blurb: "Have something specific in mind? If it's glass, there's a good chance we've already built something like it.",
    icon: 'custom',
  },
];

// TODO: replace with real completed-project photos, captioned by
// neighbourhood only — never a client's exact address (see the website
// report / discovery checklist for why).
export const PROJECTS_PREVIEW = [
  { caption: 'Kitsilano — Frameless Shower Enclosure' },
  { caption: 'West Vancouver — Glass Railing' },
  { caption: 'North Vancouver — Custom Wine Cellar' },
  { caption: 'Burnaby — Feature Wall Mirror' },
];

// Trust signals — pull these out of paragraph text and show them as a strip
// of badges near the top of the homepage.
export const TRUST_BADGES = [
  'BC Building Code Compliant',
  'Warranties on All Railing Products',
  `${COMPANY.yearsExperience} Years in Construction`,
  `Serving ${COMPANY.serviceAreas[0]} & Beyond`,
];

// TODO: replace with real customer quotes (first name + neighbourhood is
// plenty — see the earlier website report for why this matters).
export const TESTIMONIALS = [
  {
    quote: 'Placeholder — swap in a real customer quote here once you have one on file.',
    name: 'Customer Name, Neighbourhood',
  },
  {
    quote: 'Placeholder — a couple of sentences pulled from a past email or text works great.',
    name: 'Customer Name, Neighbourhood',
  },
];

export const FAQS = [
  {
    q: 'How much does a project like this usually cost?',
    a: 'It depends on size and materials, but most homeowners get a clear, no-obligation estimate within a day or two of reaching out. TODO: replace with a real ballpark range once you\'re comfortable sharing one.',
  },
  {
    q: 'How long does an installation take?',
    a: 'Most residential jobs — shower enclosures, railings, mirrors — are completed in a single visit. Larger projects like wine cellars may take longer. TODO: confirm typical timelines.',
  },
  {
    q: 'Do I need to be home during the installation?',
    a: "We'll work with your schedule. TODO: confirm your actual policy here.",
  },
  {
    q: 'Do you handle both residential and builder/commercial projects?',
    a: `Yes — we work directly with homeowners as well as builders across ${COMPANY.serviceAreas.join(', ')}.`,
  },
];

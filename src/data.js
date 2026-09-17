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
// Each service gets its own URL at /services/:slug (see pages/ServiceDetail.jsx)
// so it can rank and collect backlinks on its own, separate from the general
// /services overview page. `detail` and `highlights` are the extra, unique
// copy shown on that dedicated page — keep them different from `blurb` so
// the homepage/overview card and the service's own page aren't just
// duplicating the same sentence for Google.
export const SERVICES = [
  {
    title: 'Frameless Shower Enclosures',
    slug: 'frameless-shower-enclosures',
    blurb: 'Turn a bathroom into a spa-like retreat with a custom frameless glass shower, cut and installed to fit your space exactly.',
    icon: 'shower',
    detail: "Frameless glass doesn't just look cleaner — it makes a small bathroom feel bigger and is far easier to keep clean than a framed unit with metal tracks and corners. We template every enclosure on site, so panels are cut to fit your exact walls, tile, and drain slope, then install with hinges and hardware sized for your shower's height and layout.",
    highlights: [
      'On-site measuring and templating for a precise fit',
      'Clear, low-iron, or frosted glass options',
      'Hardware finishes to match your fixtures',
      'Hinges and hardware sized for your shower layout',
    ],
  },
  {
    title: 'Interior & Exterior Glass Railing',
    slug: 'glass-railings',
    blurb: 'Modern, code-compliant railings for decks, balconies, and staircases that keep your view open instead of blocked.',
    icon: 'railing',
    detail: 'Glass railings keep a deck, balcony, or staircase feeling open instead of walling off the view, while still meeting BC Building Code requirements. We install both post-and-panel and frameless (glass-only) systems, with base-shoe or standoff mounting depending on the structure.',
    highlights: [
      'Post-and-panel and frameless (glass-only) systems',
      'Base-shoe or standoff mounting to suit your structure',
      'Built to meet BC Building Code height and load requirements',
      'Suited to decks, balconies, and interior or exterior stairs',
    ],
  },
  {
    title: 'Wine Cellars',
    slug: 'wine-cellars',
    blurb: 'Custom glass-enclosed wine cellars and display rooms built to show off a collection, not hide it.',
    icon: 'wine',
    detail: 'A glass-enclosed wine cellar turns a collection into a feature of the room instead of something tucked away in a closet. We build both fully custom enclosures and glass-front display walls, sized to fit under stairs, in a dedicated room, or as a built-in cabinet, with racking and lighting coordinated around the glasswork.',
    highlights: [
      'Fully custom enclosures or glass-front display walls',
      'Fits under stairs, in a dedicated room, or as a built-in',
      'Coordinated with racking, shelving, and lighting',
      'Insulated glass options for temperature-controlled cellars',
    ],
  },
  {
    title: 'Glass Backsplashes',
    slug: 'glass-backsplashes',
    blurb: 'Sleek, easy-to-clean glass backsplashes finished in the color and texture that fits your kitchen.',
    icon: 'backsplash',
    detail: "A glass backsplash gives a kitchen, bar, or laundry room a seamless, grout-free surface that's simple to wipe down. Panels are cut to fit around outlets, switches, and cabinetry exactly, and are available in a range of finishes and back-painted colors to match your countertop or cabinets.",
    highlights: [
      "Grout-free, seamless surface that's easy to clean",
      'Panels cut around outlets, switches, and cabinetry',
      'Back-painted color and finish options',
      'Suited to kitchens, bars, and laundry rooms',
    ],
  },
  {
    title: 'Mirrors',
    slug: 'mirrors',
    blurb: 'Custom-cut mirrors for bathrooms, gyms, dance studios, and feature walls, precisely fitted on site.',
    icon: 'mirror',
    detail: 'Custom-cut mirrors are measured and installed on site, whether that’s a single vanity mirror, a full feature wall, or a dance studio or gym wall system. We work with beveled, frameless, and LED-backlit options, and can cut around outlets, sconces, or trim as needed.',
    highlights: [
      'Vanity, feature-wall, and full studio/gym installations',
      'Beveled, frameless, and LED-backlit options',
      'Cut on site to fit around outlets, sconces, and trim',
      'Safety backing applied where required',
    ],
  },
  {
    title: 'Window & Storefront Film',
    slug: 'window-storefront-film',
    blurb: 'Solar-control window film for homes and storefronts that cuts glare and UV, keeping spaces cooler in summer and better insulated in winter.',
    icon: 'film',
    detail: "Solar-control film cuts glare and UV without changing how a window looks from a distance, and can lower how hard your HVAC has to work in both summer and winter. It's applied directly to your existing glass, so there's no need to replace windows to get the benefit.",
    highlights: [
      'Cuts glare and UV without replacing existing glass',
      'Helps regulate indoor temperature year-round',
      'Applied to residential windows or commercial storefronts',
      'A range of tint levels and finishes available',
    ],
  },
  {
    title: 'Skylights (New or Replacement)',
    slug: 'skylights',
    blurb: 'New skylight installations or replacements for aging, leaking, or cloudy units — bringing natural light into kitchens, stairwells, and living spaces.',
    icon: 'skylight',
    detail: 'An aging or leaking skylight is often more of a maintenance headache than the natural light is worth. We replace failed units and also install new skylights where a kitchen, stairwell, or living space could use more daylight, with flashing and sealing done as part of the install, not treated as an afterthought.',
    highlights: [
      'New skylight installation or replacement of failed units',
      'Proper flashing and sealing as part of the install',
      'Fixed and venting options',
      'A fix for cloudy, leaking, or fogged-up existing skylights',
    ],
  },
  {
    title: 'Custom Glass Solutions',
    slug: 'custom-glass-solutions',
    blurb: "Have something specific in mind? If it's glass, there's a good chance we've already built something like it.",
    icon: 'custom',
    detail: "Not every job fits neatly into a category — tabletops, cabinet inserts, room dividers, glass shelving, and one-off architectural pieces all come through as custom requests. If you have something specific in mind, the best next step is usually just to describe it and we'll tell you if (and how) it's doable.",
    highlights: [
      'Tabletops, shelving, and cabinet glass inserts',
      'Room dividers and interior glass partitions',
      'One-off or architectural glass pieces',
      "Not sure if it's possible? Just ask.",
    ],
  },
];

// The four typical frameless shower enclosure layouts, shown on the
// Frameless Shower Enclosures service page (src/pages/ServiceDetail.jsx).
// Each pairs a real installation photo (with a plan-view diagram baked in)
// with condensed copy drawn from the Finelines design-reference sheets.
export const SHOWER_DESIGNS = [
  {
    number: 1,
    title: 'Frameless Inline Shower',
    subtitle: 'Inline',
    image: '/images/shower-design-1-inline.jpg',
    blurb: "A clean single-door, single-panel layout — space-efficient, open in appearance, with easy access through a hinged door and a timeless look that suits most bathrooms. Frameless glass means no bulky metal framing, less soap-scum buildup, and your tile stays fully visible.",
  },
  {
    number: 2,
    title: 'Frameless Inline with Return Panel',
    subtitle: 'L-Shape',
    image: '/images/shower-design-2-return-panel.jpg',
    blurb: "Adds a perpendicular return panel to the inline layout, closing off the open end for a clearly defined enclosure while keeping the same open, uncluttered feel and easy entry through the hinged door. Configured around your exact walls and layout.",
  },
  {
    number: 3,
    title: 'Neo-Angle Shower',
    subtitle: 'Angled',
    image: '/images/shower-design-3-neo-angle.jpg',
    blurb: "Built into a corner, turning space a standard layout would waste into a comfortable shower area. Open sightlines and a distinctive angled design, fully custom-built to your bathroom's corner and dimensions.",
  },
  {
    number: 4,
    title: 'Serenity / Frameless Slider',
    subtitle: 'Slider',
    image: '/images/shower-design-4-serenity-slider.jpg',
    blurb: "A fixed panel paired with a sliding panel — no swing clearance needed, making it the practical choice for wider openings. Clean, minimal-frame look with smooth, quality sliding hardware, tailored to your space.",
  },
];

// Closing panel shown after the four typical designs above, for bathrooms
// that don't fit a standard layout.
export const SHOWER_CUSTOM_LAYOUT = {
  heading: 'Have an unusual layout in mind?',
  body: "Not every bathroom fits one of the four layouts above. Where unusual walls, narrow openings, windows, or fixtures need extra thought, we work through your space and your vision to develop a configuration built specifically around it — bring us a sketch, a photo, or just an idea, and we'll find the solution.",
};

// Real completed-project photos, shared with the Projects page gallery.
// Captions describe the work only — never a client's exact address (see the
// website report / discovery checklist for why).
export const PROJECTS_PREVIEW = [
  { src: '/images/project-1.jpg', caption: 'West Vancouver - Frameless Shower' },
  { src: '/images/project-2.jpg', caption: 'Bellevue Dr. - Exterior Glass Railing' },
  { src: '/images/project-3.jpg', caption: 'Richmond - Shower Enclosure' },
  { src: '/images/project-4.jpg', caption: 'Bellevue Dr. - Interior Railing' },
  { src: '/images/project-5.jpg', caption: 'Bellevue Dr. - Wine Cellar' },
  { src: '/images/project-6.jpg', caption: 'Bellevue Dr. - Frameless Shower Enclosures' },
  { src: '/images/project-7.jpg', caption: 'Pender Island - Exterior Railing' },
  { src: '/images/project-8.jpg', caption: 'Cedarhurst St. - Wine Cellar' },
  { src: '/images/project-9.jpg', caption: 'West 34th Vancouver - Shower Enclosures' },
];

// Projects page gallery, grouped by job instead of one-photo-per-tile. Each
// project shows as a single card (using its first photo as the cover); the
// card opens a click-through gallery of every photo for that job.
//
// TO ADD MORE PHOTOS TO AN EXISTING JOB (e.g. another Bellevue Dr. shot):
//   Drop the new image file in public/images/ (e.g. project-10.jpg), then
//   add a line to that project's `photos` array below:
//   { src: '/images/project-10.jpg', label: 'Mirror Wall' },
//
// TO ADD A BRAND NEW JOB:
//   Copy one of the { name: ..., photos: [...] } blocks below, give it the
//   new job's name, and list its photo(s) the same way.
export const PROJECTS = [
  {
    name: 'West Vancouver',
    photos: [
      { src: '/images/project-1.jpg', label: 'Frameless Shower' },
    ],
  },
  {
    name: 'Bellevue Dr.',
    photos: [
      { src: '/images/project-2.jpg', label: 'Exterior Glass Railing' },
      { src: '/images/project-4.jpg', label: 'Interior Railing' },
      { src: '/images/project-5.jpg', label: 'Wine Cellar' },
      { src: '/images/project-6.jpg', label: 'Frameless Shower Enclosures' },
    ],
  },
  {
    name: 'Richmond',
    photos: [
      { src: '/images/project-3.jpg', label: 'Shower Enclosure' },
    ],
  },
  {
    name: 'Pender Island',
    photos: [
      { src: '/images/project-7.jpg', label: 'Exterior Railing' },
    ],
  },
  {
    name: 'Cedarhurst St.',
    photos: [
      { src: '/images/project-8.jpg', label: 'Wine Cellar' },
    ],
  },
  {
    name: 'West 34th Vancouver',
    photos: [
      { src: '/images/project-9.jpg', label: 'Shower Enclosures' },
    ],
  },
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
    a: "It depends on the hardware, glass, and finish choices for your project, so pricing varies from job to job. Reach out and we'll walk you through the options to give you a clear, no-obligation estimate.",
  },
  {
    q: 'How long does an installation take?',
    a: "It depends on the size of the project. A single shower enclosure or mirror can often be completed in a day, while larger jobs take longer.",
  },
  {
    q: 'Do I need to be home during the installation?',
    a: "We'll work with your schedule. TODO: confirm your actual policy here.",
  },
  {
    q: 'Do you handle both residential and builder/commercial projects?',
    a: `Yes — we handle both residential and commercial projects, mostly working alongside the contractors and designers on those jobs, across ${COMPANY.serviceAreas.join(', ')}.`,
  },
  {
    q: 'What is the lead time?',
    a: "It depends on the product choices you make — lead time tracks glass and hardware availability, so it varies by project. Standard finishes and glass are usually quick to source, but specialty finishes, colors, or glass types can take noticeably longer to arrive — we'll flag this during your consultation so it doesn't hold up your project timeline.",
  },
];

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
  // Shown above the Request an Estimate and Contact forms (owner request,
  // 2026-11-01). Keep it free of dollar figures.
  scopeNote:
    'We focus on complete projects where we supply and install the glass. For glass-only orders or very small repairs, a local glass supplier is usually the better choice.',
  phone: '604-789-5154',
  phoneHref: 'tel:+16047895154',
  email: 'finelinesglass@gmail.com', // Using Gmail for now — owner is still deciding on a professional email
  emailFallback: 'info@finelinesglass.ca', // switch `email` back to this once the professional address is set up
  // Formspree form ID (formspree.io/f/<id>) for the estimate and contact
  // forms; see src/forms.js. Empty means the forms open the visitor's email app.
  formspreeId: 'xaeepzvk',
  // Set true only on a paid Formspree plan, which accepts file uploads.
  formspreeUploads: false,
  address: '1509 East Kent Ave N, Vancouver, BC V5P 4Y7',
  mapQuery: '1509+East+Kent+Ave+N+Vancouver+BC+V5P+4Y7',
  hours: [
    { day: 'Monday – Friday', time: '7:00 AM – 3:30 PM' },
    { day: 'Saturday', time: 'By appointment' },
    { day: 'Sunday', time: 'Closed' },
  ],
  yearsExperience: '30+',
  serviceAreas: ['Lower Mainland', 'Greater Vancouver', 'Tri-City', 'Fraser Valley'],
  instagramUrl: 'https://www.instagram.com/finelinesglass_ltd/',
  instagramHandle: '@finelinesglass_ltd',
  currentYear: new Date().getFullYear(),
};

// Service Areas page (/service-areas). One section per region in
// COMPANY.serviceAreas, with the main cities in each. Keep region names
// identical to COMPANY.serviceAreas so the two lists stay in step.
export const SERVICE_AREA_DETAILS = [
  {
    region: 'Lower Mainland',
    summary: "Our home base. We work right across the Lower Mainland, from the North Shore to the Fraser Valley, on homes, new builds, and commercial spaces.",
    cities: ['Vancouver', 'Burnaby', 'Richmond', 'Surrey', 'Delta', 'Langley', 'North Vancouver', 'West Vancouver', 'Coquitlam', 'Abbotsford'],
  },
  {
    region: 'Greater Vancouver',
    summary: 'Shower enclosures, glass railings, mirrors, wine cellars, and commercial glazing for homeowners, builders, and businesses throughout Metro Vancouver.',
    cities: ['Vancouver', 'Burnaby', 'New Westminster', 'Richmond', 'North Vancouver', 'West Vancouver', 'Lions Bay', 'Delta', 'Surrey', 'White Rock', 'Langley', 'Maple Ridge', 'Pitt Meadows'],
  },
  {
    region: 'Tri-City',
    summary: 'Regular work across the Tri-Cities, including residential renovations and commercial storefront and window installations.',
    cities: ['Coquitlam', 'Port Coquitlam', 'Port Moody', 'Anmore', 'Belcarra'],
  },
  {
    region: 'Fraser Valley',
    summary: 'We travel out to the Fraser Valley for showers, railings, mirrors, windows, and custom glass projects.',
    cities: ['Abbotsford', 'Mission', 'Chilliwack'],
  },
];

// City pages (/service-areas/:slug), one per city we want to show up for in
// local searches ("glass railings Coquitlam"). Each page lists every service,
// the jobs we've done in or near that city (by name from PROJECTS), the
// install process and nearby cities. Write the intro fresh for each city and
// only mention real local work: near-identical city pages look like spam to
// Google.
//   slug:     the URL, /service-areas/<slug>
//   area:     the wider area, as it reads after "the rest of"
//   intro:    1-3 short paragraphs, specific to this city
//   projects: names of PROJECTS jobs to show (in or near the city)
//   nearby:   other city names to mention; ones with their own page get linked
//   inCollections: true when jobs from this city are in the photo
//             collections (see COLLECTION_CITIES); the page then links to them
export const CITY_PAGES = [
  {
    slug: 'vancouver',
    name: 'Vancouver',
    area: 'Greater Vancouver',
    intro: [
      "Vancouver is home for Finelines Glass. Our shop is on East Kent Avenue, and we work right across the city, from downtown ensuites to West Side homes and commercial spaces.",
      'Recent Vancouver jobs include exterior and interior glass railings, a glass wine cellar and frameless showers on Bellevue Drive, a wine cellar on Cedarhurst Street, shower enclosures on West 34th, a full ensuite and walk-in closet on West Cordova, the backlit onyx bar and glass shelving at the Marine Drive Skybar, and a Laurier Street home with a steam shower, several custom cut tempered glass shower enclosures and custom shaped mirrors.',
    ],
    projects: ['Laurier St. Vancouver', 'Bellevue Dr. - Vancouver', 'West Cordova - Vancouver', 'Marine Drive - Skybar - Vancouver', 'Cedarhurst St. - Vancouver', 'West 34th Vancouver'],
    nearby: ['Burnaby', 'Richmond', 'North Vancouver', 'West Vancouver', 'New Westminster'],
  },
  {
    slug: 'burnaby',
    name: 'Burnaby',
    area: 'Greater Vancouver',
    intro: [
      "Burnaby is right next door to our Vancouver shop. We install frameless showers, glass railings, mirrors, office partitions and window glass for Burnaby homeowners, strata owners and businesses.",
      'Whether it is a condo bathroom upgrade, new railings on a house or townhouse, or glass partitions for an office, every job is measured on site and installed by our own team.',
    ],
    projects: [],
    nearby: ['Vancouver', 'New Westminster', 'Coquitlam', 'Richmond', 'North Vancouver'],
  },
  {
    slug: 'richmond',
    name: 'Richmond',
    area: 'Greater Vancouver',
    intro: [
      'Finelines Glass installs shower enclosures, glass railings, mirrors, windows and custom glass across Richmond, a short drive south of our Vancouver shop.',
      'Our recent work in Richmond includes a glass shower enclosure, and we also take on bathroom renovations, railings and mirror walls for Richmond homeowners and contractors.',
    ],
    projects: ['Richmond'],
    nearby: ['Vancouver', 'Burnaby', 'Delta', 'New Westminster', 'Surrey'],
  },
  {
    slug: 'surrey',
    name: 'Surrey',
    area: 'the Lower Mainland',
    intro: [
      'Finelines Glass travels across Surrey for frameless showers, glass railings, mirrors, windows, skylights and commercial glass. We work with homeowners as well as the builders and contractors putting up new homes in the area.',
      'From a single shower door to railings for a new build, every job is measured on site, planned with you or your contractor, and installed by our own team.',
    ],
    projects: [],
    nearby: ['Langley', 'Delta', 'White Rock', 'New Westminster', 'Burnaby'],
  },
  {
    slug: 'north-vancouver',
    name: 'North Vancouver',
    area: 'the North Shore',
    intro: [
      'On the North Shore, glass railings are often about keeping the view open, and frameless showers about making the most of every bathroom. Finelines Glass installs both, along with mirrors, skylights, windows and custom glass, across the City and District of North Vancouver.',
      'We also work in West Vancouver and up the coast to Lions Bay, where we recently replaced skylights and applied window film on a home.',
    ],
    projects: ['Lions Bay'],
    nearby: ['West Vancouver', 'Lions Bay', 'Vancouver', 'Burnaby'],
  },
  {
    slug: 'west-vancouver',
    name: 'West Vancouver',
    area: 'the North Shore',
    intro: [
      'Finelines Glass installs frameless showers, glass railings, wine cellars, mirrors and skylights for West Vancouver homes, where clear glass that keeps the view open is often the whole point.',
      'Recent work on this side of the North Shore includes a frameless shower enclosure in West Vancouver, and skylight replacement and window film on a home in Lions Bay.',
    ],
    projects: ['West Vancouver', 'Lions Bay'],
    nearby: ['North Vancouver', 'Lions Bay', 'Vancouver'],
  },
  {
    slug: 'coquitlam',
    name: 'Coquitlam',
    area: 'the Tri-Cities',
    intro: [
      "Finelines Glass installs frameless showers, glass railings, mirrors, windows and commercial glass for homes and businesses in Coquitlam. We're based in Vancouver, so Coquitlam, Port Coquitlam and Port Moody are a regular part of our week.",
      'Our recent work in Coquitlam includes a storefront glass and window installation. We also take on residential renovations across the Tri-Cities, working with homeowners, builders and designers.',
    ],
    projects: ['Coquitlam Storefront'],
    nearby: ['Port Coquitlam', 'Port Moody', 'Burnaby', 'New Westminster', 'Maple Ridge'],
  },
  {
    slug: 'langley',
    name: 'Langley',
    area: 'the Fraser Valley',
    intro: [
      'Finelines Glass installs frameless showers, glass railings, mirrors, windows and skylights in the City and Township of Langley, for homeowners and for the builders working on new homes in the area.',
      'We travel out from Vancouver for Langley jobs, measure every opening on site, and install with our own team, so the glass fits the finished walls, floors and decks rather than a drawing.',
      'Our recent work in Langley includes a commercial storefront: an aluminum frame with glass sidelites and a transom around a pair of frameless glass doors on hydraulic floor closers.',
    ],
    projects: ['Langley Storefront'],
    nearby: ['Surrey', 'Abbotsford', 'Maple Ridge', 'White Rock'],
  },
  {
    slug: 'delta',
    name: 'Delta',
    area: 'the Lower Mainland',
    intro: [
      'Finelines Glass installs frameless showers, glass railings, wine rooms, interior glass doors and mirrors in Delta, from North Delta down to Ladner and Tsawwassen. It is a short drive from our Vancouver shop through Richmond.',
      'Some of the homes in our project collections are in Delta. Every job there is measured on site and installed by our own team, whether it is a single shower door or railings for a full renovation.',
      'Our recent work in Delta includes a frameless sliding shower door: clear glass panels on a top-mounted roller track, set on the curb of a marble-tiled walk-in shower with a corner bench.',
    ],
    projects: ['Delta Frameless Slider Shower'],
    inCollections: true,
    nearby: ['Richmond', 'Surrey', 'Vancouver', 'White Rock', 'Langley'],
  },
  {
    slug: 'port-coquitlam',
    name: 'Port Coquitlam',
    area: 'the Tri-Cities',
    intro: [
      'Port Coquitlam homeowners and builders call us for frameless showers, glass stair and deck railings, wine rooms, interior glass doors and mirrors. Along with Coquitlam and Port Moody, PoCo is a regular stop for our crew.',
      'Jobs from Port Coquitlam are part of the photo collections on our Projects page. We measure every opening on site and build the glass to fit the finished walls, floors and stairs.',
    ],
    projects: [],
    inCollections: true,
    nearby: ['Coquitlam', 'Port Moody', 'Maple Ridge', 'Pitt Meadows', 'New Westminster'],
  },
  {
    slug: 'port-moody',
    name: 'Port Moody',
    area: 'the Tri-Cities',
    intro: [
      'Finelines Glass installs frameless showers, glass railings, wine rooms, glass doors and mirrors in Port Moody and in the nearby villages of Anmore and Belcarra.',
      'We have done work in all three, and photos from those homes are in the collections on our Projects page. For hillside and waterfront homes, frameless glass railings are a popular way to keep the view open.',
    ],
    projects: [],
    inCollections: true,
    nearby: ['Anmore', 'Belcarra', 'Coquitlam', 'Port Coquitlam', 'Burnaby'],
  },
  {
    slug: 'abbotsford',
    name: 'Abbotsford',
    area: 'the Fraser Valley',
    intro: [
      'Finelines Glass travels out to Abbotsford for frameless showers, glass railings, wine rooms, interior glass doors and mirrors, for homeowners and for the builders working on new homes in the area.',
      'Abbotsford homes are among the jobs in our project collections. Like every job, they were measured on site and installed by our own team, so the glass fits the finished space rather than a drawing.',
    ],
    projects: [],
    inCollections: true,
    nearby: ['Mission', 'Chilliwack', 'Langley', 'Surrey'],
  },
  {
    slug: 'mission',
    name: 'Mission',
    area: 'the Fraser Valley',
    intro: [
      'Across the Fraser River from Abbotsford, Mission is part of the Fraser Valley we cover for showers, glass railings, wine rooms, glass doors and mirrors.',
      'We have installed glass in Mission homes, and those jobs are part of the collections on our Projects page. Tell us about your project and we will plan the visit, measure on site and give you a straightforward estimate.',
    ],
    projects: [],
    inCollections: true,
    nearby: ['Abbotsford', 'Maple Ridge', 'Chilliwack', 'Langley'],
  },
  {
    slug: 'chilliwack',
    name: 'Chilliwack',
    area: 'the Fraser Valley',
    intro: [
      'Chilliwack is the eastern end of the area we serve. Finelines Glass makes the trip for frameless showers, glass railings, wine rooms, interior glass doors and mirrors.',
      'Some of the homes in our photo collections are in Chilliwack. We plan each visit ahead so measuring and installation take as few trips as possible.',
    ],
    projects: [],
    inCollections: true,
    nearby: ['Abbotsford', 'Mission', 'Langley'],
  },
];

// Cities the four photo collections (Wine Enclosures, Shower Enclosures,
// Glass Doors & Custom Glass, Glass Railings) were drawn from, per Lino
// (2026-11-04). We don't know which photo is from which city, so never
// label a single photo or collection with one of these.
export const COLLECTION_CITIES = ['Delta', 'Abbotsford', 'Port Coquitlam', 'Port Moody', 'Anmore', 'Belcarra', 'Mission', 'Chilliwack'];

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
    // Service card background: 800px copy of project-9 (West 34th Vancouver shower enclosures).
    cardImage: 'service-card-frameless-shower-enclosures',
    cardImagePosition: 'center 55%',
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
    // Service card background: 800px copy of project-2 (Bellevue Dr. exterior glass railing).
    cardImage: 'service-card-glass-railings',
    cardImagePosition: 'center 50%',
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
    // Service card background: 800px copy of project-37 (glass wine wall, lounge).
    cardImage: 'service-card-wine-cellars',
    cardImagePosition: 'center 50%',
    detail: 'A glass-enclosed wine cellar turns a collection into a feature of the room instead of something tucked away in a closet. We build both fully custom enclosures and glass-front display walls, sized to fit under stairs, in a dedicated room, or as a built-in cabinet, with racking and lighting coordinated around the glasswork.',
    highlights: [
      'Fully custom enclosures or glass-front display walls',
      'Fits under stairs, in a dedicated room, or as a built-in',
      'Coordinated with racking, shelving, and lighting',
      'Insulated glass options for temperature-controlled cellars',
    ],
  },
  {
    title: 'Commercial Glazing & Office Partition',
    slug: 'commercial-glazing-office-partitions',
    blurb: 'Framed and frameless glass partitions and commercial storefront glazing that keep offices bright and open while still defining separate spaces.',
    icon: 'partition',
    // Service card background: 800px copy of project-136 (Langley storefront, frameless hydraulic doors).
    cardImage: 'service-card-commercial-glazing-office-partitions',
    cardImagePosition: 'center 45%',
    detail: 'Glass partitions let natural light travel through an office instead of stopping at the first wall, while still creating meeting rooms, private offices, and defined work areas. We also handle commercial storefront and entry glazing — the glass frontages, display windows, and entry systems that give a business its street-facing presence. Panels are measured and installed to fit your exact layout, with framed or frameless options depending on the look and acoustic separation you need.',
    highlights: [
      'Framed and frameless office partition systems',
      'Meeting rooms, private offices, and open-plan dividers',
      'Commercial storefront and entry glazing',
      'Sliding and swing glass doors integrated into the partition',
    ],
  },
  {
    title: 'Mirrors',
    slug: 'mirrors',
    blurb: 'Custom-cut mirrors for bathrooms, gyms, dance studios, and feature walls, precisely fitted on site.',
    icon: 'mirror',
    // Service card background: 800px copy of project-23 (backlit vanity mirror).
    cardImage: 'service-card-mirrors',
    cardImagePosition: 'center 40%',
    detail: 'Custom-cut mirrors are measured and installed on site, whether that’s a single vanity mirror, a full feature wall, or a dance studio or gym wall system. We work with beveled, frameless, and LED-backlit options, and can cut around outlets, sconces, or trim as needed.',
    highlights: [
      'Vanity, feature-wall, and full studio/gym installations',
      'Beveled, frameless, and LED-backlit options',
      'Cut on site to fit around outlets, sconces, and trim',
      'Safety backing applied where required',
    ],
  },
  {
    title: 'Window Replacement & Window Film Application',
    slug: 'window-replacement-film',
    blurb: 'Replacing damaged, fogged, or aging windows, or applying solar-control window film to your existing glass — two different ways to solve two different window problems.',
    icon: 'film',
    // Service card background: 800px copy of project-32 (Coquitlam window installation).
    cardImage: 'service-card-window-replacement-film',
    cardImagePosition: 'center 55%',
    detail: "Whether your window itself has failed — broken glass, a fogged sealed unit, an old frame — or the glass is fine but the sun, glare, or privacy isn't, we have a solution that fits the actual problem. Window replacement swaps out the window system entirely; window film changes how existing glass performs without touching the window assembly.",
    highlights: [
      'Window replacement for broken, fogged, or deteriorated windows',
      'LLumar® solar-control, glare-reduction, and privacy window film',
      'Residential and commercial, including storefronts',
      'We help you work out which of the two actually fits your problem',
    ],
  },
  {
    title: 'Skylights (New or Replacement)',
    slug: 'skylights',
    blurb: 'New skylight installations or replacements for aging, leaking, or cloudy units — bringing natural light into kitchens, stairwells, and living spaces.',
    icon: 'skylight',
    // Service card background: 800px copy of project-27 (Lions Bay skylight replacement).
    cardImage: 'service-card-skylights',
    cardImagePosition: 'center 50%',
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
    // Service card background: 800px copy of project-84 (textured art glass panel, ocean view).
    cardImage: 'service-card-custom-glass-solutions',
    cardImagePosition: 'center 40%',
    detail: "Not every job fits neatly into a category — tabletops, cabinet inserts, room dividers, glass shelving, and one-off architectural pieces all come through as custom requests. If you have something specific in mind, the best next step is usually just to describe it and we'll tell you if (and how) it's doable.",
    highlights: [
      'Tabletops, shelving, and cabinet glass inserts',
      'Room dividers and interior glass partitions',
      'One-off or architectural glass pieces',
      "Not sure if it's possible? Just ask.",
    ],
  },
];

// Service design/layout content (SHOWER_DESIGNS, RAILING_DESIGNS, ...,
// CUSTOM_GLASS_DESIGNS and their *_CUSTOM_NOTE panels) lives in
// src/designs.js.

// Real completed-project photos, shared with the Projects page gallery.
// Captions describe the work only — never a client's exact address (see the
// website report / discovery checklist for why).
export const PROJECTS_PREVIEW = [
  { src: '/images/project-25.webp', caption: 'Marine Drive - Skybar - Vancouver - Backlit Onyx Bar & Wine Storage' },
  { src: '/images/project-1.webp', caption: 'West Vancouver - Frameless Shower' },
  { src: '/images/project-2.webp', caption: 'Bellevue Dr. - Vancouver - Exterior Glass Railing' },
  { src: '/images/project-3.webp', caption: 'Richmond - Shower Enclosure' },
  { src: '/images/project-4.webp', caption: 'Bellevue Dr. - Vancouver - Interior Railing' },
  { src: '/images/project-5.webp', caption: 'Bellevue Dr. - Vancouver - Wine Cellar' },
  { src: '/images/project-6.webp', caption: 'Bellevue Dr. - Vancouver - Frameless Shower Enclosures' },
  { src: '/images/project-7.webp', caption: 'Pender Island - Exterior Railing' },
  { src: '/images/project-8.webp', caption: 'Cedarhurst St. - Vancouver - Wine Cellar' },
  { src: '/images/project-9.webp', caption: 'West 34th Vancouver - Shower Enclosures' },
  { src: '/images/project-14.webp', caption: 'Marine Drive - Skybar - Vancouver - Backlit Onyx Feature Wall' },
  { src: '/images/project-15.webp', caption: 'Marine Drive - Skybar - Vancouver - Outdoor Kitchen & Bar' },
  { src: '/images/project-19.webp', caption: 'West Cordova - Vancouver - Frameless Shower Enclosure' },
  { src: '/images/project-21.webp', caption: 'West Cordova - Vancouver - Ensuite Shower & Freestanding Tub' },
  { src: '/images/project-22.webp', caption: 'West Cordova - Vancouver - Walk-In Closet Feature Mirror' },
  { src: '/images/project-27.webp', caption: 'Lions Bay - Skylight Replacement & Window Film Application' },
  { src: '/images/project-33.webp', caption: 'Coquitlam - Storefront Glass & Window Installation' },
  { src: '/images/project-136.webp', caption: 'Langley - Storefront with Frameless Hydraulic Glass Doors' },
  { src: '/images/project-142.webp', caption: 'Delta - Serenity Frameless Sliding Shower Door' },
  { src: '/images/project-146.webp', caption: 'Laurier St. Vancouver - Full-Height Steam Shower Enclosure' },
];

// Projects page gallery, grouped by job instead of one-photo-per-tile. Each
// project shows as a single card (using its first photo as the cover); the
// card opens a click-through gallery of every photo for that job.
//
// TO ADD MORE PHOTOS TO AN EXISTING JOB (e.g. another Bellevue Dr. shot):
//   Drop the new photo in public/images/ as a .jpg (e.g. project-10.jpg) plus
//   a .webp copy of it (project-10.webp, smaller and faster to load; any
//   free JPG-to-WebP converter works), then add a line to that project's
//   `photos` array below:
//   { src: '/images/project-10.webp', label: 'Mirror Wall' },
//   Keep the .jpg as well: link previews on Facebook, iMessage etc. use it.
//
// TO ADD A BRAND NEW JOB:
//   Copy one of the { name: ..., photos: [...] } blocks below, give it the
//   new job's name, and list its photo(s) the same way.
//   `summary` is the one line of what was installed, shown under the job
//   name on its card (and read by Google, so name the glass work plainly).
export const PROJECTS = [
  {
    name: 'West Vancouver',
    summary: 'Frameless shower enclosure',
    photos: [
      { src: '/images/project-1.webp', label: 'Frameless Shower' },
    ],
  },
  {
    name: 'Bellevue Dr. - Vancouver',
    summary: 'Exterior and interior glass railings, a glass wine cellar and frameless shower enclosures',
    photos: [
      { src: '/images/project-2.webp', label: 'Exterior Glass Railing' },
      { src: '/images/project-4.webp', label: 'Interior Railing' },
      { src: '/images/project-5.webp', label: 'Wine Cellar' },
      { src: '/images/project-6.webp', label: 'Frameless Shower Enclosures' },
    ],
  },
  {
    name: 'Richmond',
    summary: 'Glass shower enclosure',
    photos: [
      { src: '/images/project-3.webp', label: 'Shower Enclosure' },
    ],
  },
  {
    name: 'Pender Island',
    summary: 'Exterior glass deck railings with marina views',
    photos: [
      { src: '/images/project-7.webp', label: 'Exterior Railing' },
      { src: '/images/project-10.webp', label: 'Exterior Glass Railing' },
      { src: '/images/project-11.webp', label: 'Deck Railing - Marina View' },
      { src: '/images/project-12.webp', label: 'Railing Detail' },
      { src: '/images/project-13.webp', label: 'Railing - Roofline Detail' },
    ],
  },
  {
    name: 'Cedarhurst St. - Vancouver',
    summary: 'Glass wine cellar',
    photos: [
      { src: '/images/project-8.webp', label: 'Wine Cellar' },
    ],
  },
  {
    name: 'West 34th Vancouver',
    summary: 'Glass shower enclosures',
    photos: [
      { src: '/images/project-9.webp', label: 'Shower Enclosures' },
    ],
  },
  {
    name: 'Marine Drive - Skybar - Vancouver',
    summary: 'Backlit onyx bar and feature wall, wine storage, glass shelving and an outdoor kitchen and bar',
    photos: [
      { src: '/images/project-25.webp', label: 'Backlit Onyx Bar & Wine Storage' },
      { src: '/images/project-14.webp', label: 'Backlit Onyx Feature Wall' },
      { src: '/images/project-15.webp', label: 'Outdoor Kitchen & Bar' },
      { src: '/images/project-16.webp', label: 'Glass Shelving - Installation' },
      { src: '/images/project-17.webp', label: 'Stone & Glass Detail' },
      { src: '/images/project-18.webp', label: 'On-Site Installation' },
    ],
  },
  {
    name: 'West Cordova - Vancouver',
    summary: 'Frameless shower enclosures, glass wardrobe doors and feature and vanity mirrors',
    photos: [
      { src: '/images/project-19.webp', label: 'Frameless Shower Enclosure' },
      { src: '/images/project-20.webp', label: 'Walk-In Closet - Glass Wardrobe Doors' },
      { src: '/images/project-21.webp', label: 'Ensuite - Frameless Shower & Freestanding Tub' },
      { src: '/images/project-22.webp', label: 'Walk-In Closet - Feature Mirror' },
      { src: '/images/project-23.webp', label: 'Vanity Mirror' },
      { src: '/images/project-24.webp', label: 'Frameless Shower Enclosure - Bench Seat' },
    ],
  },
  {
    name: 'Lions Bay',
    summary: 'Skylight replacement and interior window film',
    photos: [
      { src: '/images/project-26.webp', label: 'Skylight Glass Panel - Installation' },
      { src: '/images/project-27.webp', label: 'Finished Skylight Ridge' },
      { src: '/images/project-28.webp', label: 'Window Film Application - Interior' },
      { src: '/images/project-29.webp', label: 'Window Film Application - Detail' },
      { src: '/images/project-30.webp', label: 'Skylight Glass - Exterior Detail' },
    ],
  },
  {
    name: 'Coquitlam Storefront',
    summary: 'Storefront glass and window installation',
    photos: [
      { src: '/images/project-31.webp', label: 'Storefront Unit - Front View' },
      { src: '/images/project-32.webp', label: 'Storefront Window - Close-Up' },
      { src: '/images/project-33.webp', label: 'Storefront Unit - Side Angle' },
      { src: '/images/project-34.webp', label: 'Storefront Corner - Installation Site' },
      { src: '/images/project-35.webp', label: 'Storefront Window - Corner Detail' },
    ],
  },
  {
    name: 'Langley Storefront',
    summary: 'Aluminum storefront frame with sidelites, transom and frameless hydraulic glass doors',
    photos: [
      { src: '/images/project-136.webp', label: 'Frameless Hydraulic Double Doors - Open' },
      { src: '/images/project-137.webp', label: 'Hydraulic Glass Door - Swing' },
      { src: '/images/project-138.webp', label: 'Storefront - Sidelites, Transom & Closed Doors' },
      { src: '/images/project-139.webp', label: 'Installation - Door Glass Set in the Frame' },
      { src: '/images/project-140.webp', label: 'Installation - Fitting the Top Pivot' },
      { src: '/images/project-141.webp', label: 'Installation - Sidelite Glass in Place' },
    ],
  },
  {
    name: 'Delta Frameless Slider Shower',
    summary: 'Serenity frameless sliding shower doors with polished chrome and brushed gold roller tracks',
    photos: [
      { src: '/images/project-142.webp', label: 'Frameless Sliding Shower Door - Marble Bathroom' },
      { src: '/images/project-143.webp', label: 'Sliding Door & Fixed Panel - Polished Chrome Track' },
      { src: '/images/project-144.webp', label: 'Bathroom View - Slider Behind the Vanity' },
      { src: '/images/project-145.webp', label: 'Frameless Slider - Brushed Gold Track & Handle' },
    ],
  },
  {
    name: 'Laurier St. Vancouver',
    summary: 'Shower enclosures, steam showers & bath, and custom shaped mirrors. All showers are custom cut tempered glass',
    photos: [
      { src: '/images/project-146.webp', label: 'Full-Height Steam Shower Enclosure - Dark Marble Tile' },
      { src: '/images/project-147.webp', label: 'Steam Shower & Custom Shaped Mirror' },
      { src: '/images/project-148.webp', label: 'Steam Shower - Glass Door & Panels to the Ceiling' },
      { src: '/images/project-149.webp', label: 'Home Gym - Full-Wall Mirror' },
      { src: '/images/project-150.webp', label: 'Frameless Shower & Oval Mirror - Black Hardware' },
      { src: '/images/project-151.webp', label: 'Frameless Shower Door - Black Hardware' },
      { src: '/images/project-152.webp', label: 'Walk-In Frameless Shower - Subway Tile' },
      { src: '/images/project-153.webp', label: 'Custom Shaped Vanity Mirrors - Subway Tile Bathroom' },
      { src: '/images/project-154.webp', label: 'Master Bath - Corner Glass Shower Enclosure' },
      { src: '/images/project-155.webp', label: 'Corner Shower Enclosure & Vanity Mirror' },
      { src: '/images/project-156.webp', label: 'Master Bath - Freestanding Tub & Glass Shower' },
      { src: '/images/project-157.webp', label: 'Frameless Shower & Oval Mirror - Penny Tile Floor' },
      { src: '/images/project-158.webp', label: 'Frameless Shower Enclosure - Penny Tile Floor' },
    ],
  },
  {
    // A collection of wine room jobs from several homes, not one address,
    // so it isn't tied to one city page (see COLLECTION_CITIES).
    name: 'Wine Enclosures',
    collection: true,
    summary: 'Glass wine rooms, cellars and wine walls: frameless, black-framed and arched glass',
    photos: [
      { src: '/images/project-36.webp', label: 'Frameless Glass Wine Room - Games Room' },
      { src: '/images/project-37.webp', label: 'Glass Wine Wall - Lounge' },
      { src: '/images/project-38.webp', label: 'Glass Wine Room - Basement Lounge' },
      { src: '/images/project-39.webp', label: 'Glass Wine Room & Bar' },
      { src: '/images/project-40.webp', label: 'Glass Wine Cellar - Brick Arches' },
      { src: '/images/project-41.webp', label: 'Glass Wine Wall - Feature Lighting' },
      { src: '/images/project-42.webp', label: 'Black-Framed Glass Wine Wall - Media Room' },
      { src: '/images/project-43.webp', label: 'Arched Glass Doors - Wine Cellar Entry' },
      { src: '/images/project-44.webp', label: 'Curved Glass - Arched Wine Cellar' },
      { src: '/images/project-45.webp', label: 'Framed Glass Wine Room Doors' },
      { src: '/images/project-46.webp', label: 'Glass Wine Room - Framed Doors' },
      { src: '/images/project-47.webp', label: 'Glass Wine Cellar - Kitchen' },
      { src: '/images/project-48.webp', label: 'Frameless Glass Wine Enclosure' },
      { src: '/images/project-49.webp', label: 'Glass Wine Room - Bar Area' },
      { src: '/images/project-50.webp', label: 'Black-Framed Glass Wine Room Doors' },
      { src: '/images/project-51.webp', label: 'Black-Framed Glass Wine Cabinet' },
    ],
  },
  {
    // A collection of shower jobs from several homes, not one address,
    // so it isn't tied to one city page (see COLLECTION_CITIES).
    // Frameless is the focus; a few are
    // frosted, satin-etched or black-framed.
    name: 'Shower Enclosures',
    collection: true,
    summary: 'Frameless glass showers, steam showers and tub panels, plus frosted, satin-etch and black-framed options',
    photos: [
      { src: '/images/project-52.webp', label: 'Frameless Glass Shower - Marble Ensuite' },
      { src: '/images/project-53.webp', label: 'Frameless Walk-In Shower - Ensuite' },
      { src: '/images/project-54.webp', label: 'Frameless Glass Shower & Freestanding Tub' },
      { src: '/images/project-55.webp', label: 'Frameless Glass Shower - Statement Marble' },
      { src: '/images/project-56.webp', label: 'Frameless Neo-Angle Shower' },
      { src: '/images/project-57.webp', label: 'Grey Tinted Glass Shower - Ocean View' },
      { src: '/images/project-58.webp', label: 'Glass Corner Shower with Header Bar' },
      { src: '/images/project-59.webp', label: 'Frameless Corner Shower - Towel Bar Door' },
      { src: '/images/project-60.webp', label: 'Frameless Shower - Matte Black Hardware' },
      { src: '/images/project-61.webp', label: 'Fixed Glass Panel - Walk-In Shower' },
      { src: '/images/project-62.webp', label: 'Frameless Steam Shower with Bench' },
      { src: '/images/project-63.webp', label: 'Frameless Glass Shower - Spa Bathroom' },
      { src: '/images/project-64.webp', label: 'Frameless Shower - Marble & Black Hardware' },
      { src: '/images/project-65.webp', label: 'Frameless Shower Screen - Stone Tile' },
      { src: '/images/project-66.webp', label: 'Frosted-Band Glass Shower - Ensuite' },
      { src: '/images/project-67.webp', label: 'Frosted-Band Glass Shower Enclosure' },
      { src: '/images/project-68.webp', label: 'Frosted-Band Glass Shower - Marble' },
      { src: '/images/project-69.webp', label: 'Satin Etch Glass Shower - Privacy' },
      { src: '/images/project-70.webp', label: 'Low-Iron Glass Shower with Satin Etch Panel' },
      { src: '/images/project-71.webp', label: 'Frameless Bathtub Glass Panel' },
      { src: '/images/project-72.webp', label: 'Floor-to-Ceiling Glass Shower with Bench' },
      { src: '/images/project-73.webp', label: 'Frameless Glass Shower - Patterned Tile' },
      { src: '/images/project-74.webp', label: 'Frameless Shower - Sloped Ceiling' },
      { src: '/images/project-75.webp', label: 'Black-Framed Grid Glass Shower' },
      { src: '/images/project-76.webp', label: 'Curved Glass Shower' },
      { src: '/images/project-77.webp', label: 'Frameless Corner Shower - Matte Black' },
    ],
  },
  {
    // Interior glass doors and custom glass from several homes, not one
    // address, so it isn't tied to one city page (see COLLECTION_CITIES).
    name: 'Glass Doors & Custom Glass',
    collection: true,
    summary: 'Frameless and black-framed interior glass doors, a glass room enclosure and textured art-glass panels',
    photos: [
      { src: '/images/project-84.webp', label: 'Textured Art Glass Panel - Ocean View' },
      { src: '/images/project-78.webp', label: 'Frameless Glass Double Doors - Home Office' },
      { src: '/images/project-79.webp', label: 'Glass Room Enclosure with Double Doors' },
      { src: '/images/project-80.webp', label: 'Frameless Glass Door - Hallway' },
      { src: '/images/project-81.webp', label: 'Black-Framed Grid Glass Door' },
      { src: '/images/project-82.webp', label: 'Frosted Glass Door - Ensuite' },
      { src: '/images/project-83.webp', label: 'Frosted Frameless Glass Door' },
      { src: '/images/project-85.webp', label: 'Textured Art Glass Panel - Detail' },
    ],
  },
  {
    // Railing jobs from many homes, not one address, so it isn't tied to
    // one city page (see COLLECTION_CITIES). Interior stairs and landings first, then rooftops, decks
    // and an oceanfront exterior stair.
    name: 'Glass Railings',
    collection: true,
    summary: 'Frameless glass stair railings, glass walls for floating stairs, rooftop and deck guards, and a curved glass railing',
    photos: [
      { src: '/images/project-86.webp', label: 'Glass Stair Railing - Modern Entry' },
      { src: '/images/project-87.webp', label: 'Floor-to-Ceiling Glass Wall - Floating Stair' },
      { src: '/images/project-88.webp', label: 'Frameless Glass Staircase Wall - Chandelier Foyer' },
      { src: '/images/project-89.webp', label: 'Curved Glass Railing - Library Landing' },
      { src: '/images/project-119.webp', label: 'Glass Stair Railing - Gold Handrail & Marble Stair' },
      { src: '/images/project-120.webp', label: 'Frameless Glass Stair Railing - Two-Storey Stairwell' },
      { src: '/images/project-121.webp', label: 'Glass Stair Railing - Feature Lighting Foyer' },
      { src: '/images/project-122.webp', label: 'Floor-to-Ceiling Glass Stair Wall - Entry' },
      { src: '/images/project-90.webp', label: 'Rooftop Glass Railing - City View' },
      { src: '/images/project-91.webp', label: 'Rooftop Glass Railing - Ocean View' },
      { src: '/images/project-92.webp', label: 'Glass Railing - Open-Riser Stair' },
      { src: '/images/project-93.webp', label: 'Glass Stair Railing - Walnut Treads' },
      { src: '/images/project-94.webp', label: 'Glass Stair Railing - Open-Concept Kitchen' },
      { src: '/images/project-95.webp', label: 'Rooftop Glass Railing - Black Handrail' },
      { src: '/images/project-96.webp', label: 'Rooftop Glass Railing - Garden Terrace' },
      { src: '/images/project-97.webp', label: 'Exterior Glass Stair Railing - Oceanfront' },
      { src: '/images/project-98.webp', label: 'Glass Deck & Stair Railings - Waterfront Home' },
      { src: '/images/project-99.webp', label: 'Side-Mounted Glass Stair Railing - Ocean View' },
      { src: '/images/project-100.webp', label: 'Glass Stair & Landing Railing' },
      { src: '/images/project-101.webp', label: 'Rooftop Deck Glass Railing' },
      { src: '/images/project-102.webp', label: 'Side-Mounted Glass Railing - Rooftop Deck' },
      { src: '/images/project-103.webp', label: 'Glass Railing - Rooftop Patio' },
      { src: '/images/project-104.webp', label: 'Rooftop Glass Railing - Mountain View' },
      { src: '/images/project-105.webp', label: 'Glass Guard Railing - Terrace Skylight' },
      { src: '/images/project-106.webp', label: 'Glass Stair Railing - Wood Handrail' },
      { src: '/images/project-107.webp', label: 'Glass Railing - Black Steel Stair' },
      { src: '/images/project-108.webp', label: 'Glass Wall - Floating Oak Stair' },
      { src: '/images/project-109.webp', label: 'Glass Stair Railing - Oak Handrail' },
      { src: '/images/project-110.webp', label: 'Frameless Glass Railing - Stairwell Opening' },
      { src: '/images/project-111.webp', label: 'Glass Spiral Staircase' },
      { src: '/images/project-112.webp', label: 'Glass Railing - Floating Walnut Stair' },
      { src: '/images/project-113.webp', label: 'Glass Stair Railing - Walnut Handrail' },
      { src: '/images/project-114.webp', label: 'Glass Railing - Garden Courtyard' },
      { src: '/images/project-115.webp', label: 'Glass Railing - Front Patio' },
      { src: '/images/project-116.webp', label: 'Glass Stair Railing - Stainless Handrail' },
      { src: '/images/project-117.webp', label: 'Glass Stair Railing - Basement Stairwell' },
      { src: '/images/project-118.webp', label: 'Glass Landing Railing - Wood Cap' },
      { src: '/images/project-123.webp', label: 'Glass Stair Railing - Panelled Foyer' },
      { src: '/images/project-124.webp', label: 'Glass Stair Railing - Pendant Lights' },
      { src: '/images/project-125.webp', label: 'Glass Railing - Open-Riser Stair & Window Wall' },
      { src: '/images/project-126.webp', label: 'Exterior Glass Stair Railing - Rooftop Access' },
      { src: '/images/project-127.webp', label: 'Rooftop Glass Railing - Side-Mounted' },
      { src: '/images/project-128.webp', label: 'Glass Stair Railing - Dark Wood Handrail' },
      { src: '/images/project-129.webp', label: 'Glass Stair Railing - Walnut Open-Riser Stair' },
      { src: '/images/project-130.webp', label: 'Side-Mounted Glass Stair Railing - Steel Stringer' },
      { src: '/images/project-131.webp', label: 'Glass Stair Railing - Oak Handrail & Hallway' },
      { src: '/images/project-132.webp', label: 'Black-Framed Frosted Glass Railing' },
      { src: '/images/project-133.webp', label: 'Glass Stair Railing - Stainless Handrail & Skylight' },
      { src: '/images/project-134.webp', label: 'Deck Glass Railing - Backyard View' },
      { src: '/images/project-135.webp', label: 'Glass Landing Guard - Standoff Mounted' },
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

// Real customer quotes only (first name + neighbourhood is plenty). The
// "What our customers say" section on the homepage stays hidden while this
// list is empty, so nothing fake is ever shown. Add entries like:
//   { quote: 'A couple of sentences from a past email or text.', name: 'Sarah, Burnaby' },
export const TESTIMONIALS = [];

// How a typical job runs, drawn from the process described on the service
// pages and articles (on-site templating, coordination, install, adjustment).
// Shown on the About page and the homepage.
export const PROCESS_STEPS = [
  {
    title: 'Measure on site',
    body: 'We measure and template every job in person, so the glass is cut to fit your actual walls, floors, tile and openings rather than a drawing.',
  },
  {
    title: 'Plan the details',
    body: 'Glass type, thickness, hardware and finish are confirmed with you, or with your designer or contractor, before anything is ordered.',
  },
  {
    title: 'Install',
    body: 'Our installers set the glass, hardware and seals, with railings built to meet BC Building Code height and load requirements.',
  },
  {
    title: 'Adjust & walk through',
    body: 'Doors, hinges and panels are adjusted once everything is in, and we walk through the finished work with you before we leave.',
  },
];

// FAQs shown on the Services page, grouped by topic. `link` points the
// visitor to the page with the full details for that answer. The flat FAQS
// list below feeds the FAQPage structured data.
export const FAQ_GROUPS = [
  {
    title: 'General questions',
    faqs: [
      {
        q: 'How much does a project like this usually cost?',
        a: "It depends on the hardware, glass, and finish choices for your project, so pricing varies from job to job. Reach out and we'll walk you through the options to give you a clear, no-obligation estimate.",
      },
      {
        q: 'Do you sell glass only, or take on small jobs?',
        a: "Every project we take on includes both the glass and professional installation. If you only need a piece of glass cut to size, or a very small repair, a local glass supplier or manufacturer is the quickest option.",
      },
      {
        q: 'How long does an installation take?',
        a: "It depends on the size of the project. A single shower enclosure or mirror can often be completed in a day, while larger jobs take longer.",
      },
      {
        q: 'Do I need to be home during the installation?',
        a: "Not necessarily. As long as we have a way in — a key, an entry code, or someone to let us in when we arrive — and the work area is clear, you don't need to stay on-site for the installation.",
      },
      {
        q: 'Do you handle both residential and builder/commercial projects?',
        a: `Yes — we handle both residential and commercial projects, mostly working alongside the contractors and designers on those jobs, across ${COMPANY.serviceAreas.join(', ')}.`,
      },
      {
        q: 'What is the lead time?',
        a: "It depends on the product choices you make — lead time tracks glass and hardware availability, so it varies by project. Standard finishes and glass are usually quick to source, but specialty finishes, colors, or glass types can take noticeably longer to arrive — we'll flag this during your consultation so it doesn't hold up your project timeline.",
      },
      {
        q: 'Which areas do you serve?',
        a: `We work across ${COMPANY.serviceAreas.slice(0, -1).join(', ')} and the ${COMPANY.serviceAreas[COMPANY.serviceAreas.length - 1]}. Let us know your project location and we'll confirm we can get to you.`,
        link: { to: '/service-areas', label: 'See our service areas' },
      },
    ],
  },
  {
    title: 'Shower enclosures',
    faqs: [
      {
        q: 'What types of glass shower enclosures do you install?',
        a: 'Mostly custom frameless enclosures, and framed enclosures when a project calls for them. That includes fixed panels, hinged shower doors, and custom configurations. We coordinate the glass, hardware, and installation details with homeowners, designers, and contractors.',
        link: { to: '/services/frameless-shower-enclosures', label: 'Shower enclosure options' },
      },
      {
        q: 'Can you customize a shower enclosure to fit my bathroom?',
        a: 'Yes. Every enclosure is built around your bathroom. We review the measurements, wall conditions, door clearances, hardware placement, and surrounding finishes to work out the right configuration.',
        link: { to: '/services/frameless-shower-enclosures', label: 'Shower enclosure options' },
      },
      {
        q: 'What is the difference between framed and frameless shower glass?',
        a: 'Framed enclosures use metal framing around some or all of the glass. Frameless designs use thicker glass panels held by hinges, clamps, or channels, for a more open look with less metal to clean around. The right choice depends on your design preferences, the site conditions, and the project.',
        link: { to: '/services/frameless-shower-enclosures', label: 'Shower enclosure options' },
      },
      {
        q: 'How do I choose the right shower hardware finish?',
        a: 'Most people match the hinges and handles to their faucets, shower fixtures, and cabinet handles. Popular options include polished chrome, brushed nickel, matte black, and brass or bronze tones. Availability varies by hardware style.',
        link: { to: '/hardware-finishes', label: 'Browse hardware finishes' },
      },
    ],
  },
  {
    title: 'Glass railings',
    faqs: [
      {
        q: 'Do you install glass railings for balconies, decks, and stairs?',
        a: 'Yes. We install glass railing systems on balconies, decks, terraces, and staircases for residential and commercial projects, so you keep the view. The right system depends on the design, the supporting structure, the mounting method, and building code requirements.',
        link: { to: '/services/glass-railings', label: 'Glass railing options' },
      },
      {
        q: 'Are glass railings suitable for outdoor use?',
        a: 'Yes, when the system, glass, hardware, and mounting details suit the outdoor setting. Weather exposure, drainage, structural support, and waterproofing are all considered during planning.',
        link: { to: '/services/glass-railings', label: 'Glass railing options' },
      },
      {
        q: 'Can glass railings be installed on an existing balcony or deck?',
        a: 'Often, yes. The supporting structure, attachment points, finished surfaces, and waterproofing need to be checked first, and some projects need a review by the builder or another qualified professional.',
        link: { to: '/services/glass-railings', label: 'Glass railing options' },
      },
    ],
  },
  {
    title: 'Mirrors & specialty glass',
    faqs: [
      {
        q: 'Do you provide custom mirrors?',
        a: 'Yes. We supply and install custom mirrors for bathrooms, gyms, dance studios, feature walls, and other residential and commercial interiors, with the size, shape, edge finish, placement, and mounting chosen to suit the space.',
        link: { to: '/services/mirrors', label: 'Mirror options' },
      },
      {
        q: 'Can you install a glass backsplash in a kitchen?',
        a: "Yes, on request. Glass and mirror backsplashes give a smooth, easy-to-clean finish behind counters. Whether one suits your kitchen depends on the location, heat exposure near the cooktop, and the mounting method, so we'll go over that with you first.",
        link: { to: '/services/custom-glass-solutions', label: 'Custom glass solutions' },
      },
      {
        q: 'Do you install interior glass partitions?',
        a: 'Yes. Glass partitions define offices, meeting rooms, and some residential spaces while keeping them open and bright. Clear, frosted, or patterned glass can be used depending on privacy needs, layout, door operation, and mounting conditions.',
        link: { to: '/services/commercial-glazing-office-partitions', label: 'Office partition options' },
      },
    ],
  },
  {
    title: 'Planning & estimates',
    faqs: [
      {
        q: 'When should I contact a glass installer during a renovation?',
        a: 'Early, even if final measurements have to wait. Talking to us early helps sort out hardware, mounting details, and finished-surface requirements, and keeps fabrication and installation on schedule.',
      },
      {
        q: 'What information should I provide when requesting an estimate?',
        a: "Your project location, the type of glass work, approximate dimensions, a few photos, your design preferences, and your timeline. Drawings or renovation plans help if you have them.",
        link: { to: '/request-estimate', label: 'Request an estimate' },
      },
    ],
  },
];

export const FAQS = FAQ_GROUPS.flatMap((g) => g.faqs);

// Articles (ARTICLES, SERVICE_ARTICLES, getPublishedArticles,
// getServiceArticles) live in src/articles.js.

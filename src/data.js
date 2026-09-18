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

// The four typical frameless shower enclosure layouts. The summary cards on
// the Frameless Shower Enclosures service page (src/pages/ServiceDetail.jsx)
// use `blurb`; each card links to its own page at
// /services/frameless-shower-enclosures/:slug (src/pages/ShowerDesignDetail.jsx),
// which renders the fuller `intro`/`whyChoose`/`framelessAdvantage`/`hardware`/
// `installation` content below. All copy is drawn directly from the Finelines
// design-reference sheets for each layout.
export const SHOWER_DESIGNS = [
  {
    number: 1,
    slug: 'inline',
    title: 'Frameless Inline Shower',
    subtitle: 'Inline',
    image: '/images/shower-design-1-inline.jpg',
    blurb: "A clean single-door, single-panel layout — space-efficient, open in appearance, with easy access through a hinged door and a timeless look that suits most bathrooms. Frameless glass means no bulky metal framing, less soap-scum buildup, and your tile stays fully visible.",
    intro: [
      "At Finelines Glass Installations, we believe a frameless shower enclosure is more than simply installing glass — it's about precision, craftsmanship, and flawless application.",
      'A frameless inline shower is a clean and practical solution for bathrooms with a straight shower opening. The combination of a hinged glass door and fixed panel creates an open, spacious appearance while maintaining a refined, minimalist design.',
    ],
    whyChoose: [
      { title: 'Clean, space-efficient layout', body: 'Ideal for straight shower openings and a wide range of bathroom designs.' },
      { title: 'Open appearance', body: 'Clear glass keeps the bathroom visually connected and allows the tilework to remain the focal point.' },
      { title: 'Easy access', body: 'A hinged door provides a convenient and comfortable entry into the shower.' },
      { title: 'Custom configuration', body: 'Door size, fixed panel dimensions, hardware placement, and glass specifications can be tailored to your space.' },
      { title: 'Timeless design', body: 'Minimal framing creates a sophisticated look that complements contemporary and traditional bathrooms.' },
    ],
    framelessAdvantage: [
      'Frameless glass eliminates bulky metal framing and channels around the enclosure, creating a minimalist and virtually unobstructed glass design.',
      'With fewer metal profiles, the enclosure has fewer areas where soap residue and buildup can collect, while the clear glass allows your tile, stone, fixtures, and other bathroom finishes to remain visible.',
    ],
    hardware: {
      type: 'list',
      intro: 'Your shower hardware is an important part of the overall design. We offer a variety of hardware finish options so your hinges, handles, and other glass hardware can complement your bathroom fixtures and finishes.',
      items: [
        { name: 'Chrome', body: 'A classic, bright finish that works with many bathroom styles.' },
        { name: 'Matte Black', body: 'A bold, contemporary option for modern bathrooms.' },
        { name: 'Brushed Nickel', body: 'A subtle, versatile finish with a softer metallic appearance.' },
        { name: 'Brushed Gold / Brass', body: 'Adds warmth and a distinctive decorative accent.' },
        { name: 'Other finishes', body: 'Finish availability may vary depending on the selected hardware and supplier.' },
      ],
    },
    installation: [
      'The beauty of a frameless shower depends heavily on how it is installed. Our workmanship and application focus on precision measuring, accurate glass alignment, proper hardware placement, consistent clearances, and meticulous finishing.',
      'Every panel and door is installed to work together seamlessly, delivering the clean lines and refined appearance expected from a premium frameless shower enclosure. The result is not simply a shower enclosure — it is a carefully executed glass installation designed around your space.',
    ],
  },
  {
    number: 2,
    slug: 'return-panel',
    title: 'Frameless Inline with Return Panel',
    subtitle: 'L-Shape',
    image: '/images/shower-design-2-return-panel.jpg',
    blurb: "Adds a perpendicular return panel to the inline layout, closing off the open end for a clearly defined enclosure while keeping the same open, uncluttered feel and easy entry through the hinged door. Configured around your exact walls and layout.",
    intro: [
      'Finelines Glass Installations specializes in precision frameless shower enclosures designed to complement the unique layout of your bathroom. A frameless inline with return panel creates an elegant L-shaped configuration using a hinged glass door, an inline fixed panel, and a perpendicular return panel.',
    ],
    whyChoose: [
      { title: 'Efficient use of space', body: 'The L-shaped configuration makes excellent use of a corner while maintaining a comfortable shower area.' },
      { title: 'Open and spacious appearance', body: 'Clear frameless glass keeps the bathroom visually open and allows your tilework to remain the focal point.' },
      { title: 'Defined shower enclosure', body: 'The return panel helps contain the shower while maintaining a clean, open design.' },
      { title: 'Convenient entry', body: 'A hinged glass door provides easy access to the shower.' },
      { title: 'Custom configuration', body: 'Glass dimensions, door placement, return panel size, hardware, and finishes can be customized to suit your bathroom.' },
    ],
    framelessAdvantage: [
      'Frameless glass eliminates bulky metal framing and channels, creating a clean, minimalist, and virtually unobstructed appearance. With more glass and less metal, your tilework, stone, fixtures, and other bathroom details remain visible while the enclosure blends naturally into the overall design.',
    ],
    hardware: {
      type: 'link',
      body: 'We offer a variety of hardware finish options to coordinate your shower enclosure with your bathroom fixtures and décor. Available finishes vary by hardware style and supplier.',
    },
    installation: [
      'A frameless shower is only as good as its installation. Finelines Glass Installations brings careful attention to measuring, glass alignment, hinge placement, door clearances, hardware positioning, and finishing details.',
      'Our goal is to ensure that every glass panel and door works together seamlessly while delivering the clean lines, functionality, and craftsmanship expected from a professionally installed frameless shower enclosure.',
    ],
  },
  {
    number: 3,
    slug: 'neo-angle',
    title: 'Neo-Angle Shower',
    subtitle: 'Angled',
    image: '/images/shower-design-3-neo-angle.jpg',
    blurb: "Built into a corner, turning space a standard layout would waste into a comfortable shower area. Open sightlines and a distinctive angled design, fully custom-built to your bathroom's corner and dimensions.",
    intro: [
      "At Finelines Glass Installations, we believe a frameless shower enclosure is more than simply installing glass — it's about precision, craftsmanship, and flawless application.",
      'A neo-angle shower enclosure is an excellent way to maximize a bathroom corner while creating a clean, open, and distinctive look. Its angled configuration provides comfortable shower space while maintaining an efficient footprint, making it especially well suited for bathrooms where every inch matters.',
    ],
    whyChoose: [
      { title: 'Space-efficient design', body: 'Makes smart use of an otherwise underutilized corner.' },
      { title: 'Comfortable shower area', body: 'Provides generous interior space without requiring a large footprint.' },
      { title: 'Open and spacious appearance', body: 'Clear glass allows the bathroom to feel brighter and less enclosed.' },
      { title: 'Distinctive architectural design', body: 'The angled configuration creates a custom, sophisticated appearance.' },
      { title: 'Custom-built to your bathroom', body: 'Panel sizes, door placement, glass configuration, and hardware can be tailored to the space.' },
    ],
    framelessAdvantage: [
      'Frameless glass removes the bulky metal framing found in traditional shower enclosures, creating a minimalist and virtually unobstructed glass design.',
      'With fewer metal channels and profiles, the enclosure is easier to maintain while allowing your tilework, stone, fixtures, and bathroom finishes to remain visible.',
    ],
    hardware: {
      type: 'link',
      body: 'Hinges, handles, and other glass hardware can be finished to complement your bathroom fixtures.',
    },
    installation: [
      'The beauty of a frameless shower depends heavily on how it is installed. This is where Finelines Glass Installations makes the difference.',
      'Our workmanship and application are centered around precision measuring, accurate glass alignment, proper hardware placement, consistent clearances, and meticulous finishing. Every panel and door must work together seamlessly to achieve the clean lines and refined appearance expected from a premium frameless enclosure. The result is not simply a shower enclosure — it is a carefully executed glass installation designed around your space.',
    ],
  },
  {
    number: 4,
    slug: 'serenity-slider',
    title: 'Serenity / Frameless Slider',
    subtitle: 'Slider',
    image: '/images/shower-design-4-serenity-slider.jpg',
    blurb: "A fixed panel paired with a sliding panel — no swing clearance needed, making it the practical choice for wider openings. Clean, minimal-frame look with smooth, quality sliding hardware, tailored to your space.",
    intro: [
      'Finelines Glass Installations brings precision workmanship and thoughtful design to frameless sliding shower enclosures. The Serenity / Frameless Slider is a practical and elegant solution for wider shower openings where a sliding door provides convenient access without requiring the floor space needed for a swinging door.',
      "Designed with a fixed glass panel and a sliding glass panel, this configuration creates a clean, open appearance while providing smooth, practical access to the shower. The frameless glass allows the bathroom's tilework, stone, fixtures, and architectural details to remain visible.",
    ],
    whyChoose: [
      { title: 'Space-saving entry', body: 'The sliding panel moves along the enclosure instead of swinging into the bathroom, making efficient use of available floor space.' },
      { title: 'Ideal for wider openings', body: 'Sliding configurations can be an effective solution for larger shower openings where a hinged door may require more clearance.' },
      { title: 'Clean frameless appearance', body: 'Minimal framing keeps the enclosure visually open and contemporary.' },
      { title: 'Smooth functionality', body: 'Quality sliding hardware is designed to provide controlled movement and dependable operation when properly installed.' },
      { title: 'Custom-built', body: 'Panel sizes, opening dimensions, glass specifications, hardware, and configuration can be tailored to the bathroom.' },
    ],
    framelessAdvantage: [
      "Frameless glass reduces the amount of visible metal around the enclosure, creating a clean, minimalist appearance and maintaining clear sightlines through the bathroom. It also allows the shower's tilework and interior finishes to remain a prominent part of the overall design.",
    ],
    hardware: {
      type: 'list-inline',
      intro: 'We offer different hardware styles and finish options to help coordinate your sliding shower enclosure with the rest of your bathroom. Depending on the selected system and supplier, finish options may include:',
      items: ['Polished chrome', 'Brushed nickel', 'Matte black', 'Satin brass / champagne', 'Gunmetal grey', 'Oil rubbed bronze'],
    },
    installation: [
      'A frameless sliding enclosure requires careful attention to the opening, glass dimensions, alignment, hardware positioning, clearances, and sliding operation. Finelines Glass Installations approaches each installation with precision and attention to detail from measurement through final installation.',
      'Our goal is to deliver a sliding enclosure that operates properly, looks balanced and refined, and is built around the specific conditions of your bathroom rather than relying on a one-size-fits-all approach.',
    ],
    customNote: 'Every bathroom is different. When a standard configuration does not suit the space, we work through the layout and installation requirements to find a practical solution. Our experience with custom glass layouts allows us to explore configurations that work with the existing walls, dimensions, and design of the bathroom.',
  },
];

// Closing panel shown after the four typical designs above, for bathrooms
// that don't fit a standard layout.
export const SHOWER_CUSTOM_LAYOUT = {
  heading: 'Have an unusual layout in mind?',
  body: "Not every bathroom fits one of the four layouts above. Where unusual walls, narrow openings, windows, or fixtures need extra thought, we work through your space and your vision to develop a configuration built specifically around it — bring us a sketch, a photo, or just an idea, and we'll find the solution.",
};

// The two typical glass railing systems. Base Shoe covers Top Mount and Side
// Mount as two applications of the same product (per the Finelines
// reference sheet's own "Two Applications — One Clean Design" framing), and
// Standoff is the second system. The summary cards on the Interior &
// Exterior Glass Railing service page (src/pages/ServiceDetail.jsx) use
// `blurb`; each card links to its own page at /services/glass-railings/:slug
// (src/pages/RailingDesignDetail.jsx), which renders the fuller
// `intro`/`applications`/`safetyCode`/`coordination`/`hardware`/`approach`
// content below. All copy is drawn directly from the Finelines
// design-reference sheets for each system, including the safety/building
// code language, which should not be reworded without checking the source.
export const RAILING_DESIGNS = [
  {
    number: 1,
    slug: 'base-shoe',
    title: 'Base Shoe Glass Railing',
    subtitle: 'Top Mount & Side Mount Applications',
    image: '/images/project-4.jpg',
    blurb: 'A continuous aluminum or metal channel secures the glass along its lower edge, creating one uninterrupted architectural line instead of individual point fittings — installed as a top-mount or side-mount system depending on the structure.',
    intro: [
      'Finelines Glass Installations provides modern base shoe glass railing systems designed to create a clean, contemporary architectural appearance while providing a practical solution for balconies, decks, stairs, landings, terraces, and other railing applications.',
      'A base shoe system uses a continuous structural aluminum or metal channel to secure the glass along its lower edge. Unlike individual point-supported hardware, the continuous base shoe creates a strong visual line and allows the glass to appear as one uninterrupted architectural element.',
      'The result is a sleek, streamlined look that works particularly well with modern residential and commercial architecture. The minimal visual interruption of the glass helps preserve views while allowing the railing to integrate naturally with the surrounding design.',
    ],
    applicationsHeading: 'Two Applications — One Clean Design',
    applications: [
      { title: 'Top Mount Base Shoe Railing', body: 'The continuous base shoe is installed directly on top of the structural surface, such as a concrete slab, curb, balcony edge, stair structure, or other suitable supporting surface. This configuration provides a clean, straightforward installation where the structural surface allows the shoe to be mounted from above.' },
      { title: 'Side Mount Base Shoe Railing', body: 'The continuous base shoe is mounted to the side or face of the supporting structure. This application can be useful where the top of the slab or wall needs to remain clear, where the architectural design calls for a more concealed edge condition, or where site conditions make a side-mounted configuration appropriate.' },
    ],
    applicationsNote: 'Although the mounting method is different, both systems are designed around the same principle: large areas of clear glass, minimal visual obstruction, and a refined architectural finish.',
    safetyCode: [
      'A glass railing is a life-safety guard system. Its design cannot be based on appearance alone. Guard height, loading, glass specification, structural support, anchorage, base shoe selection, fastening, and the supporting structure must be appropriate for the specific project.',
      'Applicable requirements can vary according to the building type, occupancy, interior or exterior location, height above grade, and jurisdiction. Vancouver, for example, operates under its own Vancouver Building By-law rather than the provincial BC Building Code.',
      "Where engineering is required, Finelines Glass Installations works with the project's Structural Engineer and other design professionals to coordinate an appropriate railing system for the actual site conditions.",
    ],
    coordinationHeading: 'Designed Around Your Project',
    coordination: [
      'Finelines Glass Installations works closely with designers, architects, general contractors, builders, and other project professionals to coordinate the railing system with the overall design and construction of the project.',
      'Early coordination can help address railing locations, structural conditions, finished elevations, waterproofing considerations, glass dimensions, attachment locations, transitions, stairs, corners, and other details before fabrication and installation.',
      'Whether the project is a new build, renovation, or custom architectural application, our goal is to make the glass railing look like it was intentionally designed as part of the building — not added as an afterthought.',
    ],
    coordinationPointsHeading: 'Structural & Installation Coordination',
    coordinationPoints: [
      'Base shoe size and system selection',
      'Glass type, thickness, and safety-glazing requirements',
      'Top-mount or side-mount attachment conditions',
      'Structural substrate and anchorage',
      'Concrete, steel, wood, or other supporting structures',
      'Guard height and required loading',
      'Waterproofing and finished-surface conditions',
      'Stairs, corners, transitions, and custom layouts',
      'Coordination with architectural and construction details',
      'Field measurements and accurate glass fabrication',
    ],
    coordinationNote: 'Our objective is to coordinate the glass, base shoe, fasteners, anchorage, supporting structure, and surrounding construction as one integrated system.',
    hardware: {
      type: 'link',
      body: 'Base shoe systems and related components are available in different profiles, sizes, and finish options depending on the selected system, application, and project requirements.',
    },
    approach: [
      'At Finelines Glass Installations, we understand that successful architectural glass work requires more than installing glass. It requires careful coordination between the design, structural requirements, site conditions, and construction sequence.',
      'We work with designers and contractors to help develop practical glass railing solutions, coordinate details, and deliver a finished installation that complements the project while respecting the applicable structural and building-code requirements.',
      'Whether you need a clean top-mounted railing or a streamlined side-mounted solution, Finelines Glass Installations can work with your project team to develop the right approach for the space.',
    ],
    codeDisclaimer: "Building-code and engineering requirements vary by project and jurisdiction. Final compliance is determined by the applicable authority having jurisdiction and, where required, the project's qualified design professional or Structural Engineer.",
  },
  {
    number: 2,
    slug: 'standoff',
    title: 'Standoff Glass Railing',
    subtitle: 'Modern · Clean · Unobstructed Views',
    image: '/images/project-2.jpg',
    blurb: 'Individual metal standoffs secure the glass to the structural surface, creating a clean, open appearance with minimal visible hardware — well suited to balconies, decks, and stairs where the view matters most.',
    intro: [
      'Finelines Glass Installations specializes in modern standoff glass railing systems that combine clean architectural design with careful attention to structural requirements, safety, and professional installation.',
      'A standoff glass railing uses individual metal standoffs to secure the glass to the structural surface, creating a clean, open appearance with minimal visible hardware. This system is particularly well suited for balconies, decks, stairs, landings, terraces, and other elevated areas where maintaining an unobstructed view is important.',
    ],
    safetyCode: [
      'Glass railings are not simply a matter of choosing glass thickness and hardware. A guard is a life-safety component, and its height, loading, glass specification, attachment method, anchorage, and overall configuration need to be appropriate for the specific application.',
      'Under the applicable BC Building Code provisions, guard requirements include provisions for when guards are required, guard heights, loading, openings, climbing considerations, and glass used in guards. Glass used in guards is subject to applicable safety-glazing requirements.',
      'Guard height and other requirements can vary depending on the building type, occupancy, location, and application. Interior and exterior applications may have different requirements, and specific residential, multi-family, commercial, or elevated applications can require different design considerations.',
      'Although the BC Building Code applies across much of British Columbia, the applicable building regulations and their administration depend on the jurisdiction. For example, the City of Vancouver operates under its own Vancouver Building By-law. Permit requirements and project-specific interpretations should therefore be confirmed with the applicable authority having jurisdiction.',
    ],
    coordinationHeading: 'Working With Structural Engineers',
    coordination: [
      'For projects where engineering is required, Finelines Glass Installations works with the Structural Engineer to help establish an appropriate railing design and attachment system for the specific project.',
    ],
    coordinationPointsHeading: null,
    coordinationPoints: [
      'Glass type and thickness',
      'Tempered or laminated glass requirements',
      'Standoff spacing and configuration',
      'Structural substrate and anchorage',
      'Concrete, steel, wood, or other supporting conditions',
      'Guard height and loading requirements',
      'Top-cap or handrail requirements',
      'Edge distances and fastener locations',
      'Interior versus exterior application',
    ],
    coordinationNote: 'The objective is to ensure that the glass, hardware, anchorage, supporting structure, and installation work together as one system, rather than treating the glass railing as simply a cosmetic addition.',
    hardware: {
      type: 'link',
      body: 'Standoff hardware is available in different sizes, styles, and finishes depending on the selected system and supplier.',
    },
    customNote: 'Not every project has standard conditions. Finelines Glass Installations works with the actual site conditions and project design to develop practical solutions for unusual layouts, difficult attachment locations, angled conditions, stairs, balconies, and other custom applications. Where engineering is required, we coordinate with the appropriate structural professional so the proposed system can be reviewed and designed for the specific project.',
    approach: [
      "At Finelines Glass Installations, we believe a beautiful railing should also be properly designed, properly supported, and properly installed. Our workmanship focuses on accurate layout, glass alignment, hardware placement, secure attachment, clean finishing, and coordination with the project's structural requirements.",
      "Bring us your space, your design, or your challenge. We'll work with the appropriate professionals to find a safe, practical, and beautiful glass railing solution.",
    ],
    codeDisclaimer: "Building-code requirements can vary by project and jurisdiction. Final compliance is determined by the applicable authority having jurisdiction and, where required, the project's qualified design professional or Structural Engineer.",
  },
];

// Closing panel shown after the two railing systems above, for projects with
// unusual structural conditions.
export const RAILING_CUSTOM_NOTE = {
  heading: 'Have a project with unusual conditions?',
  body: "Not every deck, balcony, or stair fits a standard railing condition. Where structural conditions, waterproofing, or an unusual layout need extra coordination, we work with your design and construction team — and a Structural Engineer where required — to develop the right railing system for the space. Bring us your plans, your site conditions, or just an idea.",
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
];

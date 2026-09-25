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
    title: 'Commercial Glazing & Office Partition',
    slug: 'commercial-glazing-office-partitions',
    blurb: 'Framed and frameless glass partitions and commercial storefront glazing that keep offices bright and open while still defining separate spaces.',
    icon: 'partition',
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
    image: '/images/railing-design-1-base-shoe.jpg',
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
    image: '/images/railing-design-2-standoff.jpg',
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
  {
    number: 3,
    slug: 'post',
    title: 'Post Glass Railing System',
    subtitle: 'Clean Architectural Design',
    image: '/images/railing-design-3-post.jpg',
    blurb: 'Engineered metal posts combine strength and visual definition with the openness of architectural glass — a versatile choice for stairways, balconies, decks, and interior guardrails.',
    intro: [
      'Finelines Glass Installations provides post glass railing systems that combine the strength and visual definition of metal posts with the openness and transparency of architectural glass. This system is a versatile choice for stairways, balconies, decks, landings, terraces, interior guardrails, and other residential or commercial applications.',
      'The system uses engineered posts, glass panels, glass clamps or fittings, and a handrail or top rail where required by the project design and applicable requirements. The result is a refined railing system that provides a strong architectural presence while maintaining clear sightlines and allowing natural light to move through the space.',
    ],
    applicationsHeading: 'Interior & Exterior Applications',
    applications: [
      { title: 'Interior Applications', body: 'Post glass railings can be used for stairways, open-riser stairs, interior landings, mezzanines, lofts, and open-plan spaces where the goal is to maintain visibility and an open architectural feel.' },
      { title: 'Exterior Applications', body: 'The system can be used for balconies, decks, terraces, exterior stairs, elevated walkways, and other outdoor areas, subject to applicable project requirements, environmental conditions, and structural design. Material selection, drainage, exposure, corrosion resistance, anchorage, and the supporting structure are important considerations.' },
    ],
    applicationsNote: 'The final system is selected and detailed according to the specific project.',
    safetyCode: [
      'A glass railing is a life-safety guard system. Its design must consider more than appearance. Guard height, loading, glass type, glass thickness, openings, handrail requirements, post spacing, anchorage, supporting structure, and the installation method all need to be appropriate for the intended application.',
      "Finelines Glass Installations works with the applicable BC Building Code requirements and local building regulations/bylaws, together with the project's structural design and site conditions. Requirements can vary depending on the jurisdiction, building type, occupancy, location, and application.",
      'Where engineering is required, Finelines coordinates with the appropriate Structural Engineer and project design professionals so that the railing system can be reviewed as part of the overall structural design.',
    ],
    coordinationHeading: 'Designed Around Your Vision',
    coordination: [
      'Finelines Glass Installations works closely with interior designers, architects, contractors, builders, and project teams to help achieve the design intent and quality standards established for each client and project.',
      'From contemporary residential interiors to sophisticated exterior decks and terraces, we coordinate the glass, posts, hardware, dimensions, finishes, and installation details with the surrounding architecture. Our goal is to make the railing feel like an intentional part of the design rather than a separate component added after construction.',
      'When a project has specific design standards, finish requirements, or architectural details, we work with the project team to develop a practical glass railing solution that respects those requirements while accounting for actual site conditions.',
    ],
    coordinationPointsHeading: 'Quality Assurance & Installation',
    coordinationPoints: [
      'Accurate field measurements and site verification',
      'Coordination with designers and contractors',
      'Glass and hardware selection appropriate to the project',
      'Post layout, spacing, and alignment',
      'Structural anchorage and supporting conditions',
      'Interior and exterior installation considerations',
      'Clean, precise glass and hardware installation',
      'Final alignment, finishing, and quality checks',
    ],
    hardware: {
      type: 'link',
      body: 'Post systems, handrails, clamps, fittings, and related components are available in different sizes, profiles, styles, and finishes depending on the selected system and project requirements.',
    },
    customNote: 'Every project has its own conditions. Finelines Glass Installations can work with straight runs, stair angles, corners, transitions, different floor conditions, custom post layouts, and other architectural requirements. Whether the project begins with an architectural drawing, interior design concept, contractor specification, or an existing site condition, we work with the project team to turn the design intent into a practical glass railing installation.',
    approach: [
      'At Finelines Glass Installations, we believe quality architectural glass is the result of good design coordination, proper structural planning, precision fabrication, and professional installation.',
      "We work with interior designers, architects, contractors, builders, and Structural Engineers to help deliver a railing system that meets the project's design intent and applicable requirements — while maintaining the clean, refined appearance our clients expect. From concept to installation, Finelines Glass Installations can make it happen.",
    ],
    codeDisclaimer: "Building-code, engineering, and permit requirements vary by project and jurisdiction. Final compliance is determined by the applicable authority having jurisdiction and, where required, the project's qualified design professional or Structural Engineer.",
  },
  {
    number: 4,
    slug: 'spigot',
    title: 'Spigot Glass Railing System',
    subtitle: 'Sleek Design, Minimal Visual Obstruction',
    image: '/images/railing-design-4-spigot.jpg',
    blurb: 'Individual spigots support clear glass panels with minimal visual obstruction, letting the surrounding architecture, landscape, and views remain the focus — ideal for luxury decks, patios, and pool areas.',
    intro: [
      'Finelines Glass Installations offers modern Spigot Glass Railing Systems designed to provide a clean, open architectural appearance while maintaining the strength, safety, and structural coordination required for residential and commercial projects.',
      'The system uses individual spigots to support clear glass panels, creating minimal visual obstruction while allowing the glass to become an integral part of the architecture. A continuous top cap or handrail can be incorporated into the system to provide a refined finished appearance and satisfy project-specific design and safety requirements.',
      'Spigot glass railings are an excellent choice when the goal is to maximize views while keeping the railing visually light — well suited to modern residential homes, luxury decks and patios, balconies and terraces, pool and recreational areas, exterior walkways, interior stairways and landings, and commercial and architectural projects.',
    ],
    applicationsHeading: 'Interior & Exterior Applications',
    applications: [
      { title: 'Interior Applications', body: 'Interior applications can provide a contemporary solution for stairways, landings, mezzanines, and other areas where transparency and an open feeling are important.' },
      { title: 'Exterior Applications', body: 'Exterior installations require particular attention to the supporting structure, anchorage, weather exposure, drainage, material selection, and long-term durability, depending on the project requirements, structural conditions, environmental exposure, and applicable building regulations.' },
    ],
    safetyCode: [
      'At Finelines Glass Installations, engineering is an important part of our railing process. Engineering approval is required for every project before installation, in accordance with the requirements established for the project and applicable authority having jurisdiction.',
      'We do not treat a glass railing as simply a glass-and-hardware installation. The complete system needs to be considered, including glass type and thickness, guard height, top cap or handrail requirements, spigot design and spacing, spigot anchorage, structural substrate, concrete, steel, wood, or other supporting conditions, required guard loading, edge distances and fastener locations, interior or exterior exposure, and project-specific structural requirements.',
      'Where required, the Structural Engineer reviews and approves the railing system and its attachment to the supporting structure before installation proceeds.',
    ],
    coordinationHeading: 'Working With Designers & Contractors',
    coordination: [
      "Finelines Glass Installations works closely with interior designers, architects, contractors, builders, and Structural Engineers to achieve the project's design intent while addressing the technical requirements of the installation.",
      'We understand that every project has its own architectural standards, finishes, dimensions, construction details, and client expectations. Our role is to work with the project team to coordinate the glass railing with the overall design — not simply install a standard system.',
      'From architectural drawings and construction details to field conditions and final installation, we coordinate the railing system with the project wherever possible.',
    ],
    coordinationNote: 'Our installation process focuses on accurate measurements, proper layout, precise spigot positioning, secure anchorage, correct glass alignment, clean top-cap installation, and careful finishing — small installation details can have a major impact on the final appearance of architectural glass.',
    hardware: {
      type: 'link',
      body: 'Spigots, top caps, handrails, fittings, and related components are available in different styles and finishes depending on the selected system and project requirements.',
    },
    customNote: 'Not every railing follows a straight line. Finelines Glass Installations can work with stairs, angles, corners, transitions, changing elevations, balconies, terraces, and custom architectural layouts. Whether the project requires a simple straight run or a more complex configuration, we work with the designer, contractor, and Structural Engineer to develop a practical solution based on the actual site conditions.',
    approach: [
      'At Finelines Glass Installations, we believe exceptional architectural glass requires more than beautiful materials. It requires design coordination, engineering, accurate fabrication, quality materials, and professional installation.',
      "We work with the project's designers, contractors, and Structural Engineers to help transform the design concept into a finished glass railing system that meets the project's requirements. From design coordination to engineering approval and final installation, Finelines Glass Installations can make it happen.",
    ],
    codeDisclaimer: "Engineering, building-code, permit, and municipal requirements vary by project and jurisdiction. Final approval and compliance are determined by the applicable authority having jurisdiction and the project's qualified Structural Engineer/design professionals.",
  },
  {
    number: 5,
    slug: 'custom-applications',
    title: 'Custom Glass Railing Applications',
    subtitle: 'Designed Around Your Architecture',
    image: '/images/railing-design-5-custom-applications.jpg',
    blurb: 'Not every project calls for the same system — from a nearly seamless embedded glass channel to a warm wood frame or a bold black aluminum frame, we adapt the application to the architecture.',
    intro: [
      'Finelines Glass Installations provides custom glass railing solutions designed around the architecture, materials, and requirements of each project. We work according to the design intent and coordinate with designers, architects, contractors, builders, and Structural Engineers to develop the appropriate glass railing application for the space.',
      'Not every project requires the same railing system. A modern architectural home may call for a nearly seamless embedded glass channel, while another project may be better suited to a warm wood frame or a contemporary black aluminum frame. Finelines Glass Installations works with different applications to achieve the desired appearance and project requirements.',
    ],
    applicationsHeading: 'Three Custom Applications',
    applications: [
      {
        title: 'Embedded Floor Glass Railing',
        body: 'The glass is installed into a recessed channel or structural floor-mounted system, allowing the supporting hardware to be integrated into the finished floor or structural edge. This creates a clean, minimal appearance with very little visible hardware — particularly effective for modern architecture where maintaining uninterrupted sightlines is important. It can be considered for interior and exterior applications, subject to the project design, structural conditions, waterproofing requirements, and applicable engineering and building-code requirements.',
        bullets: [
          'Minimal visual obstruction',
          'Clean architectural appearance',
          'Suitable for selected interior and exterior applications',
          'Can be coordinated with finished flooring and structural edges',
          'Custom detailing based on project requirements',
        ],
      },
      {
        title: 'Wood Frame Glass Railing',
        body: 'A wood frame glass railing combines the natural character of wood with the openness of clear glass. Glass panels are incorporated into a wood-framed railing system, creating a warmer architectural expression while maintaining visibility and natural light — well suited to residential decks, patios, stairs, balconies, and homes where the railing needs to complement wood decking, timber construction, or other natural finishes.',
        bullets: [
          'Natural and architectural appearance',
          'Complements wood decks and timber construction',
          'Clear glass maintains views and openness',
          'Custom wood profiles and finishes can be coordinated with the design',
          'Suitable for selected interior and exterior applications',
        ],
      },
      {
        title: 'Black Aluminum Frame Glass Railing',
        body: 'The black aluminum frame glass railing combines clear glass with a strong contemporary frame. The dark aluminum creates a defined architectural outline around the glass while providing a modern visual contrast against concrete, wood, stone, or other building materials — well suited to contemporary residential and commercial architecture where the railing is intended to become a deliberate design feature rather than disappear into the background.',
        bullets: [
          'Bold contemporary appearance',
          'Strong visual definition around the glass',
          'Works with modern residential and commercial architecture',
          'Available in different configurations and finish options',
          'Can be coordinated with other black architectural elements',
        ],
      },
    ],
    safetyCode: [
      'Glass railings are life-safety guard systems. The appropriate glass, framing, anchorage, guard height, loading, connections, and supporting structure must be determined for the specific project and jurisdiction.',
      "Finelines Glass Installations works with the applicable BC Building Code requirements, local building regulations, and project structural design. Where engineering approval is required, the railing system is coordinated with the project's qualified Structural Engineer before installation.",
    ],
    coordinationHeading: 'Designed According to the Project',
    coordination: [
      'At Finelines Glass Installations, we understand that architectural glass needs to work with the building — not against it. We review the design intent, site conditions, supporting structure, finished elevations, surrounding materials, and installation requirements when determining the appropriate railing approach.',
      'We work with interior designers, architects, contractors, builders, and Structural Engineers to coordinate the railing with the overall project. This collaborative approach helps ensure that the finished system reflects the intended design while addressing the technical requirements of the installation.',
    ],
    coordinationNote: 'Our work focuses on accurate measurements, proper layout, quality materials, precise fabrication, secure installation, clean finishing, and coordination with the construction sequence. Whether the project calls for a minimal embedded system, a warm wood-framed railing, or a bold black aluminum frame, Finelines Glass Installations can adapt the glass railing application to the design.',
    hardware: {
      type: 'link',
      body: 'Glass railing systems, framing components, channels, handrails, fittings, and related hardware are available in different styles and finishes depending on the selected application and project requirements.',
    },
    approach: [
      "From a designer's concept to a contractor's construction plan, Finelines Glass Installations works with the project team to make the glass railing design work in the real-world conditions of the site.",
      'Different materials. Different applications. One commitment to quality.',
    ],
    codeDisclaimer: "Engineering, building-code, permit, and municipal requirements vary by project and jurisdiction. Final approval and compliance are determined by the applicable authority having jurisdiction and, where required, the project's qualified design professional or Structural Engineer.",
  },
];

// Closing panel shown after the two railing systems above, for projects with
// unusual structural conditions.
export const RAILING_CUSTOM_NOTE = {
  heading: 'Have a project with unusual conditions?',
  body: "Not every deck, balcony, or stair fits a standard railing condition. Where structural conditions, waterproofing, or an unusual layout need extra coordination, we work with your design and construction team — and a Structural Engineer where required — to develop the right railing system for the space. Bring us your plans, your site conditions, or just an idea.",
};

// Wine cellar enclosure types, shown on the Wine Cellars service page and
// each with its own dedicated detail page at /services/wine-cellars/:slug.
// Content drawn from the Finelines design-reference sheets for each system —
// see WineDesignDetail.jsx for how each field renders.
export const WINE_DESIGNS = [
  {
    number: 1,
    slug: 'wood-framed',
    title: 'Wood-Framed Glass Wine Cellar Enclosures',
    subtitle: 'Natural Materials, Architectural Glass',
    image: '/images/wine-design-1-wood-framed.jpg',
    blurb: "A custom wood frame combines the warmth of natural wood with the transparency of architectural glass, integrating the wine cellar directly into the home's millwork, stairs, and finishes.",
    intro: [
      'Finelines Glass Installations provides custom wood-framed glass wine cellar enclosures that combine the warmth of natural wood with the transparency of architectural glass. This design creates a distinctive feature within a high-end residential or commercial interior while keeping the wine collection visually connected to the surrounding space.',
      'The wood framing can be designed as part of the architectural millwork, creating a cohesive transition between the wine cellar, stairways, living areas, dining spaces, and other finished elements of the home.',
    ],
    philosophyHeading: 'Designed as Part of the Home',
    philosophy: [
      "Rather than treating the wine cellar as an isolated room, this application integrates the enclosure directly into the architecture. A custom wood frame can coordinate with the home's flooring, stairs, cabinetry, wall finishes, ceiling details, and other millwork.",
      'The result is a wine display that feels intentionally designed into the home — combining glass transparency with the warmth and character of natural wood.',
    ],
    coordinationHeading: "Working From the Designer's & Contractor's Scope",
    coordination: [
      'Finelines Glass Installations works with interior designers, architects, contractors, builders, and project teams to achieve the approved design intent and project standards.',
      'We work from architectural drawings, interior design concepts, construction details, specifications, and actual site conditions. Frame dimensions, door locations, glass panel sizes, hardware, wood profiles, and transitions can be coordinated with the overall design.',
      'Our role is to coordinate the glass portion of the installation with the surrounding construction so the finished enclosure looks like an integrated part of the home.',
    ],
    applicationsHeading: 'Glass Selection Based on the Scope of Work',
    applications: [
      { title: 'Regular Clear Glass', body: 'Provides transparency and an open visual connection to the wine collection.' },
      { title: 'Starphire® / Low-Iron Glass', body: 'Offers enhanced clarity and a more neutral appearance when high visual transparency is desired.' },
      { title: 'Laminated Colored or Specialty Glass', body: 'Can be incorporated when the design calls for color, privacy, decorative effects, or other specified characteristics.' },
    ],
    applicationsNote: 'Glass thickness, safety glazing, heat treatment, lamination, color, and other specifications are selected according to the project requirements — Finelines Glass Installations works according to the approved scope rather than applying one standard glass specification to every project.',
    materialHeading: 'Wood & Glass: A Refined Combination',
    material: [
      'The combination of wood and glass provides a balance between warmth and openness. The wood frame establishes a strong architectural boundary, while the glass allows the wine collection, lighting, and interior finishes to remain visible.',
      'Wood species, stain, finish, frame profile, and surrounding millwork can be coordinated with the interior design. The glass can be detailed with fixed panels and custom doors to suit the configuration.',
    ],
    customHeading: 'Custom Configurations',
    customNote: [
      'Every home has different architectural conditions. Finelines Glass Installations can coordinate custom wine cellar enclosures around corners, stairways, wall openings, floor transitions, ceiling conditions, large glass panels, and custom entry doors.',
      'This makes the system suitable for wine cellars incorporated into feature walls, stair areas, living spaces, dining areas, or other high-end architectural interiors.',
    ],
    tradesHeading: 'Coordination With Other Trades',
    trades: [
      'A custom wine cellar can involve several trades, including millwork, flooring, electrical, lighting, HVAC, cabinetry, wine-rack fabrication, and general construction. Finelines Glass Installations works with the designer and contractor to coordinate our installation with the overall construction sequence.',
      'Accurate measurements, site verification, and communication with the project team help ensure that the finished glass and wood-framed system fits the actual conditions.',
    ],
    hardware: {
      body: 'Wine cellar doors and hardware can be selected to complement the wood framing and surrounding architecture. Hinges, pulls, locks, channels, fittings, and related components can be coordinated with the approved design and available finish options.',
    },
    approach: [
      'Finelines Glass Installations can make it happen with quality assurance. Our process focuses on accurate field measurements, careful glass specification, precise fabrication, proper glass handling, frame and glass alignment, hardware placement, clean joints, and professional finishing.',
      'Because this type of wine cellar is highly visible within the home, we pay particular attention to the relationship between the glass, frame, doors, hardware, and surrounding architectural finishes.',
      "At Finelines Glass Installations, we believe custom glass should become part of the architecture. Our wood-framed wine cellar enclosures are developed around the project's design, materials, dimensions, and construction requirements.",
      "From the designer's concept and contractor's scope to field measurements, glass selection, fabrication, and installation, we work with the project team to bring the approved design into the finished space.",
    ],
    codeDisclaimer: "Glass, engineering, building-code, permit, and project requirements vary according to the application and jurisdiction. Final specifications and compliance are determined by the applicable project requirements, authority having jurisdiction, and qualified design professionals where required.",
  },
  {
    number: 2,
    slug: 'black-framed',
    title: 'Black-Framed Glass Wine Cellar Enclosures',
    subtitle: 'Contemporary Architectural Glass, Refined Details',
    image: '/images/wine-design-2-black-framed.jpg',
    blurb: 'A modern black frame system provides structure and visual definition, turning an underused corner or wall into a defined architectural feature that shows off the collection.',
    intro: [
      'Finelines Glass Installations provides custom black-framed glass wine cellar enclosures that combine the transparency of architectural glass with the strong, refined appearance of a modern black frame system.',
      'This design creates a defined architectural feature while allowing the wine collection, lighting, millwork, and interior finishes to remain visible from the surrounding living space. The black framing provides structure and visual definition, making the wine cellar an intentional part of the interior architecture.',
    ],
    philosophyHeading: 'A Statement Piece Within the Architecture',
    philosophy: [
      'A black-framed wine cellar can transform an otherwise unused or underutilized area into a dedicated display and storage feature. The combination of clear glass, dark framing, warm lighting, wood finishes, stone surfaces, and custom wine storage can create a sophisticated focal point within a residence or commercial environment.',
      'The system can be designed as a full room, corner enclosure, wall-mounted display, under-stair installation, or another configuration based on the available space and approved architectural design.',
    ],
    coordinationHeading: "Working From the Designer's & Contractor's Design",
    coordination: [
      'Finelines Glass Installations works closely with interior designers, architects, contractors, builders, and project teams to build the glass enclosure around the approved design and scope of work.',
      "Frame profiles, door locations, panel sizes, ceiling conditions, floor transitions, hardware, finishes, and surrounding millwork can all be coordinated with the project's architectural details. Our goal is to make the glass enclosure integrate naturally with the rest of the space.",
      "We work from the project's drawings, specifications, dimensions, and field conditions to determine the practical glass and framing approach for fabrication and installation.",
    ],
    applicationsHeading: 'Glass Selection Based on the Scope of Work',
    applications: [
      { title: 'Regular Clear Glass', body: 'Provides transparency and a clean visual connection to the wine collection.' },
      { title: 'Starphire® / Low-Iron Glass', body: 'Provides enhanced clarity and a more neutral appearance where high visual clarity is desired.' },
      { title: 'Laminated Colored or Specialty Glass', body: 'Can be incorporated when the design calls for color, privacy, decorative effects, or other specified characteristics.' },
    ],
    applicationsNote: 'Glass thickness, safety glazing, heat treatment, lamination, color, and other specifications are determined according to the applicable project requirements — Finelines Glass Installations does not use a one-size-fits-all glass specification.',
    materialHeading: 'Custom Framing & Architectural Details',
    material: [
      'Black-framed wine cellar systems can be customized to accommodate different room dimensions, corners, ceiling heights, sloped conditions, doors, fixed panels, and interior layouts.',
      'The frame can be coordinated with other black architectural elements within the space, including stair components, lighting details, cabinetry, hardware, and interior finishes.',
    ],
    customHeading: 'Custom Solutions for Your Space',
    customNote: [
      'No two wine cellars have to look the same. Finelines Glass Installations can work with custom room shapes, corners, angled conditions, large openings, floor-to-ceiling glazing, under-stair spaces, and other architectural configurations.',
      "Whether the project begins with a designer's concept, an architect's drawing, or a contractor's scope of work, we work with the project team to develop the glass and framing solution around the design.",
    ],
    tradesHeading: 'Coordination With the Project Team',
    trades: [
      'Wine cellar installations often require coordination with flooring, millwork, electrical, lighting, HVAC, wine-rack fabrication, cabinetry, and other trades. Finelines Glass Installations works with designers and contractors to coordinate our portion of the project with the overall construction sequence.',
      'Accurate site measurements and communication with the project team help ensure that the finished glass and framing system fits the actual conditions and supports the intended design.',
    ],
    hardware: {
      body: 'Wine cellar doors can be designed with hinged or other project-appropriate configurations, depending on the approved design and system requirements. Pull handles, hinges, locks, clamps, framing components, and related hardware can be selected to complement the overall architectural style.',
    },
    approach: [
      'Finelines Glass Installations can make it happen with quality assurance. Our process focuses on accurate measurements, proper frame layout, precise fabrication, careful glass handling, correct hardware placement, alignment, clean finishing, and professional installation.',
      'We understand that a wine cellar is a highly visible architectural feature. Small details in frame alignment, glass joints, door operation, hardware placement, and finishing can have a significant effect on the completed appearance.',
      'At Finelines Glass Installations, we believe a wine cellar enclosure should be both functional and architectural. The glass, framing, hardware, lighting, wine storage, and surrounding finishes should work together as one cohesive design.',
      'From design coordination and glass selection to field measurements, fabrication, and installation, Finelines Glass Installations works with the project team to bring the approved design to life.',
    ],
    codeDisclaimer: "Glass specifications, safety glazing, engineering, building-code, permit, and municipal requirements vary according to the application and jurisdiction. Final specifications and compliance are determined by the applicable project requirements, authority having jurisdiction, and qualified design professionals where required.",
  },
  {
    number: 3,
    slug: 'frameless',
    title: 'Frameless Wine Cellar Enclosures',
    subtitle: 'Architectural Glass, Showcase Your Collection',
    image: '/images/wine-design-3-frameless.jpg',
    blurb: 'Large panels of glass with minimal visible framing let the wine collection and surrounding architecture take center stage — well suited to under-stair spaces and floor-to-ceiling displays.',
    intro: [
      'Finelines Glass Installations provides custom frameless glass wine cellar enclosures designed to showcase wine collections while integrating seamlessly with the surrounding architecture.',
      'Using large areas of glass with minimal visible framing, a frameless wine cellar enclosure can create a sophisticated architectural feature while maintaining visual connection between the wine cellar and the surrounding living space.',
      "Whether the wine cellar is located beneath a staircase, within a dedicated room, beside a dining area, or integrated into a larger interior design, Finelines Glass Installations works according to the project's design and scope of work.",
    ],
    coordinationHeading: 'Working From the Design',
    coordination: [
      'Finelines Glass Installations works closely with the designs and specifications provided by interior designers, architects, contractors, builders, and project teams.',
      "We understand that the glass enclosure is one part of a larger architectural project. Door locations, glass panel sizes, ceiling conditions, floor transitions, wall finishes, hardware, and surrounding millwork may all be established by the project's design.",
      'Our role is to translate the approved design and project scope into a carefully measured and professionally installed glass enclosure while coordinating with the other trades involved in the project.',
    ],
    applicationsHeading: 'Glass Selection Based on the Project Requirements',
    applications: [
      { title: 'Regular Clear Glass', body: 'A clean and transparent option for projects where standard clarity and visual openness are desired.' },
      { title: 'Starphire® / Low-Iron Glass', body: 'Provides enhanced clarity with reduced green edge appearance, making it suitable when a more neutral, high-clarity appearance is desired.' },
      { title: 'Laminated Colored or Specialty Glass', body: 'Can be incorporated where the project design calls for color, privacy, decorative effects, or other specified performance characteristics.' },
    ],
    applicationsNote: 'Glass thickness, safety glazing, heat treatment, lamination, color, and other specifications are selected according to the applicable project requirements and scope of work — Finelines Glass Installations does not assume that one glass specification is appropriate for every project.',
    materialHeading: 'Frameless Design & Architectural Integration',
    material: [
      'A frameless wine cellar enclosure is designed to minimize visual obstruction and allow the wine collection, interior finishes, and architectural lighting to remain the focus.',
      'Large glass panels can be coordinated with fixed panels, glass doors, corners, angled walls, sloped ceilings, and other custom conditions. Minimal hardware and carefully selected finishes can help maintain the clean appearance of the overall design.',
    ],
    customHeading: 'Custom Applications',
    customNote: [
      'Wine cellars are often located in spaces with challenging architectural conditions. Finelines Glass Installations can work with custom layouts such as under-stair wine cellars, floor-to-ceiling enclosures, corner configurations, angled ceilings, custom openings, and large glass entry systems.',
      'We coordinate the glass installation with the surrounding flooring, ceilings, walls, millwork, lighting, and other construction elements wherever possible.',
    ],
    tradesHeading: 'Coordination With Designers & Contractors',
    trades: [
      'Successful wine cellar glass installation requires coordination between multiple trades. Finelines Glass Installations works with designers and contractors to understand the project scope, approved details, dimensions, finishes, and installation sequence.',
      'This collaborative approach helps ensure that the finished glass enclosure supports the design intent and integrates properly with the completed space.',
    ],
    hardware: {
      body: 'Wine cellar hardware can be selected in different styles and finishes depending on the design and project specifications. Hinges, pulls, clamps, channels, and other components can be coordinated with the overall interior design.',
    },
    approach: [
      'Finelines Glass Installations can make it happen with quality assurance. Our process focuses on accurate field measurements, careful glass specification, precise fabrication, professional handling, accurate hardware placement, proper alignment, and clean finishing.',
      'Every glass enclosure is treated according to its specific scope rather than as a one-size-fits-all installation.',
      'At Finelines Glass Installations, we understand that a wine cellar enclosure is more than a glass wall or door. It is part of the architecture and should be coordinated with the complete design.',
      "From the designer's concept and contractor's scope to field measurements, glass selection, fabrication, and installation, we work with the project team to deliver a frameless glass wine cellar enclosure that reflects the intended design.",
    ],
    codeDisclaimer: "Glass specifications, safety glazing, engineering, building-code, permit, and project requirements vary according to the application and jurisdiction. Final glass selection and compliance are determined by the applicable project specifications, authority having jurisdiction, and qualified design professionals where required.",
  },
];

// Closing panel shown after the three wine cellar systems above, for
// projects with unusual or challenging spaces.
export const WINE_CUSTOM_NOTE = {
  heading: "Have a space that doesn't fit a standard wine cellar?",
  body: "Under a staircase, in an awkward corner, or built into an already-finished room — most wine cellars start with a space that wasn't designed for one. We work with your designer or contractor to fit the glass, framing, and doors to the actual conditions, whatever shape the space is in. Bring us your plans, your site conditions, or just an idea.",
};

// The three commercial glazing / office partition systems, shown on the
// Commercial Glazing & Office Partition service page and each with its own
// dedicated detail page at /services/commercial-glazing-office-partitions/:slug.
// Content drawn from the Finelines commercial glazing design-reference sheets.
// Unlike SHOWER_DESIGNS/RAILING_DESIGNS/WINE_DESIGNS (fixed fields), these use
// a flexible `blocks` array since the three source sheets each have a
// different structure — see PartitionDesignDetail.jsx for how each block
// shape (`paragraphs`, `bullets`, `items`) renders.
export const PARTITION_DESIGNS = [
  {
    number: 1,
    slug: 'storefront-glazing',
    title: 'Commercial Storefront Glazing',
    subtitle: 'Architectural Glass, Commercial Entrances',
    image: '/images/partition-design-1-storefront.jpg',
    blurb: "Storefront framing, entrance doors, and glazing systems for retail, office, and commercial buildings, coordinated with the building design from the ground up.",
    intro: [
      'Finelines Glass Installations provides commercial storefront glazing solutions for retail spaces, offices, professional buildings, restaurants, showrooms, and other commercial environments.',
      "Commercial storefront glazing is more than installing glass into an opening. The complete system must be coordinated with the building design, structural conditions, entrance requirements, framing system, glass specification, hardware, finishes, weather exposure, and the project's overall scope of work.",
      "Our approach is to work with the designer, architect, contractor, builder, and project team to understand the approved design and deliver the glazing system according to the project's requirements.",
    ],
    blocks: [
      {
        heading: 'Working With Designers & Contractors',
        paragraphs: [
          "Finelines Glass Installations works directly with contractors and designers based on the project's scope of work, drawings, specifications, and site conditions.",
          'We understand that commercial glazing is one component of a larger construction project. Coordination may be required with exterior cladding, concrete, structural openings, doors, electrical systems, interior finishes, flooring, millwork, security systems, accessibility requirements, and other trades.',
          'Our goal is to make the glass and framing system integrate properly with the overall architectural design and construction sequence.',
        ],
      },
      {
        heading: 'Commercial Storefront Systems Require Planning',
        intro: 'A commercial storefront project can involve many technical and design considerations. Depending on the application, the project may require decisions regarding:',
        bullets: [
          'Storefront framing profile and system configuration',
          'Glass type, thickness, safety glazing, and performance requirements',
          'Entrance doors, door hardware, closers, pivots, and access-control coordination',
          'Structural openings and attachment conditions',
          'Interior and exterior conditions',
          'Weather exposure and appropriate perimeter sealing',
          'Thermal and energy-performance requirements where applicable',
          'Acoustic, privacy, or specialty-glass requirements where specified',
          'Accessibility and building-code requirements',
          'Finish, colour, and architectural appearance',
          'Field measurements, fabrication dimensions, and installation sequencing',
          'Coordination with other trades and the authority having jurisdiction where required',
        ],
      },
      {
        heading: 'Framing & Finish Options',
        items: [
          { title: 'Anodized Finishes', body: 'A clean architectural option commonly used for commercial storefront applications.' },
          { title: 'Bronze Finishes', body: 'Provides a warmer architectural appearance and can complement a wide range of exterior and interior materials.' },
          { title: 'Matte Black', body: 'Creates a strong contemporary appearance and coordinates well with modern architectural elements.' },
          { title: 'Customized Colours', body: 'Project-specific colour requirements can be explored when the design calls for a particular architectural finish.' },
        ],
        note: 'Available finishes, colour matching, and system options depend on the selected manufacturer and project requirements. Finelines Glass Installations can help identify the appropriate system and finish based on the scope of work.',
      },
      {
        heading: 'Multiple Supplier Options',
        paragraphs: [
          'Finelines Glass Installations works with multiple suppliers for commercial storefront systems. This allows us to consider different system configurations, profiles, finishes, performance requirements, availability, and project specifications rather than limiting every project to a single storefront system.',
          "The appropriate supplier and system are selected according to the project's requirements, approved design, technical specifications, availability, and compatibility with the building conditions.",
        ],
      },
      {
        heading: 'Glass Selection',
        paragraphs: [
          "The glass used in a commercial storefront is selected according to the project's scope and specifications. Depending on the application, options may include clear architectural glass, low-iron glass, tinted glass, laminated glass, insulated glazing, or other specialty products where appropriate.",
          'Glass performance requirements can include safety, thermal performance, solar control, privacy, acoustic performance, security, appearance, and other project-specific criteria. Finelines Glass Installations works from the project specifications rather than applying one standard glass package to every commercial installation.',
        ],
      },
      {
        heading: 'Custom Commercial Applications',
        paragraphs: [
          'Commercial glazing projects can include storefront entrances, fixed glazing, large glazed openings, corner conditions, interior storefront systems, reception areas, office fronts, retail displays, and custom architectural glazing.',
          'Where the architectural design requires a non-standard configuration, we work with the project team to determine a practical glazing solution that fits the available space and project requirements.',
        ],
      },
    ],
    approach: [
      'Finelines Glass Installations can make it happen with quality assurance. Our installation process focuses on accurate field measurements, coordination of fabrication dimensions, proper handling of glass and framing components, accurate layout, secure installation, clean joints, appropriate sealing, door alignment, hardware installation, and professional finishing.',
      'Commercial storefront glazing is highly visible and often forms the first impression of a business. We understand the importance of clean lines, consistent framing, accurate glass alignment, properly operating doors, and a finished appearance that reflects the quality of the project.',
      "At Finelines Glass Installations, we don't treat commercial storefront glazing as a one-size-fits-all product. We evaluate the project's design, scope, site conditions, system requirements, finish expectations, and construction coordination.",
      "From the designer's concept and contractor's drawings to supplier coordination, fabrication, and installation, we work with the project team to bring the approved commercial glazing design to life.",
    ],
    codeDisclaimer: "Commercial glazing requirements vary by project, building type, application, and jurisdiction. Final glass, framing, engineering, code, permit, accessibility, energy-performance, and other project requirements are determined by the approved project documents, applicable authority having jurisdiction, and qualified design professionals where required.",
  },
  {
    number: 2,
    slug: 'frameless-office-partitions',
    title: 'Frameless Office Glass Partitions',
    subtitle: 'Modern Workplace Design, Architectural Glass',
    image: '/images/partition-design-2-frameless-office.jpg',
    blurb: 'Large clear glass panels with minimal visible framing divide and define private offices, meeting rooms, and boardrooms without sacrificing natural light.',
    intro: [
      'Finelines Glass Installations provides custom frameless office glass partition systems designed to divide and define commercial spaces while maintaining an open, bright, and contemporary environment.',
      'Using large clear glass panels with minimal visible framing, frameless partitions can create private offices, meeting rooms, boardrooms, reception areas, and collaborative spaces without sacrificing natural light or visual connection throughout the workplace.',
    ],
    blocks: [
      {
        heading: 'Working With Designers & Contractors',
        paragraphs: [
          'Finelines Glass Installations works closely with interior designers, architects, contractors, builders, and commercial project teams to achieve the approved design and project standards.',
          "Every commercial project has different requirements. We work from the project's drawings, specifications, scope of work, field conditions, and installation details to determine the appropriate glass, hardware, layout, and installation approach.",
          "Our goal is to make the glass partition system work as part of the complete building design — not as a separate element added after the fact.",
        ],
      },
      {
        heading: 'Open Design With Defined Spaces',
        paragraphs: [
          'Frameless glass partitions provide a balance between openness and separation. They allow offices and meeting spaces to be clearly defined while preserving natural light and maintaining visual continuity throughout the workplace.',
          'This approach is particularly effective for executive offices, conference rooms, boardrooms, private workspaces, reception areas, and collaborative environments where the design calls for transparency and a clean architectural appearance.',
        ],
      },
      {
        heading: 'Custom Configurations',
        intro: 'Commercial interiors rarely have identical layouts. Finelines Glass Installations can work with custom configurations including floor-to-ceiling glass, straight partitions, corner conditions, glass doors, meeting-room enclosures, and other architectural layouts.',
        items: [
          { title: 'Private Offices', body: 'Create enclosed workspaces while maintaining visual connection.' },
          { title: 'Meeting & Conference Rooms', body: 'Provide defined meeting areas with an open architectural appearance.' },
          { title: 'Boardrooms', body: 'Large glass enclosures that complement premium commercial interiors.' },
          { title: 'Reception & Waiting Areas', body: 'Separate spaces without creating a visually heavy barrier.' },
          { title: 'Collaborative Work Areas', body: 'Organize open-plan workplaces while maintaining natural light.' },
        ],
      },
      {
        heading: 'Glass Selection',
        intro: 'Glass specifications are selected according to the project requirements, design intent, application, performance criteria, and scope of work.',
        items: [
          { title: 'Clear Glass', body: 'Provides maximum transparency and an open visual connection.' },
          { title: 'Low-Iron / High-Clarity Glass', body: 'Provides a more neutral appearance where enhanced clarity is desired.' },
          { title: 'Frosted or Privacy Glass', body: 'Can provide visual separation for offices, meeting rooms, and areas requiring additional privacy.' },
          { title: 'Tinted or Specialty Glass', body: 'Can be incorporated when specified by the designer or project requirements.' },
          { title: 'Laminated Glass', body: 'Can be specified where the project requires particular safety, acoustic, privacy, or other performance characteristics.' },
        ],
      },
      {
        heading: 'Commercial Project Coordination',
        paragraphs: [
          'Office glass partitions often require coordination with flooring, ceilings, millwork, electrical systems, lighting, HVAC, security/access-control systems, doors, and other trades.',
          'Finelines Glass Installations works with the contractor and design team to coordinate our portion of the installation with the overall construction sequence.',
          'Accurate field measurements and communication with the project team help ensure that glass panels, doors, hardware, and connections are properly coordinated with the completed space.',
        ],
      },
    ],
    hardware: {
      body: 'Frameless office systems can be coordinated with a variety of architectural hardware and finish selections. Hinges, pulls, patch fittings, channels, locks, and other components can be selected to complement the overall design.',
    },
    approach: [
      'Finelines Glass Installations can make it happen with quality assurance. Our installation process focuses on accurate measurements, proper glass specification, precise fabrication, careful handling, accurate layout, hardware alignment, secure installation, clean joints, and professional finishing.',
      'Because frameless glass partitions are highly visible architectural elements, we pay close attention to glass alignment, consistent joints, hardware placement, door operation, and the finished appearance of the entire system.',
      "No two commercial interiors are exactly the same. Finelines Glass Installations works according to the project's approved design, scope, dimensions, site conditions, and technical requirements.",
      'Whether the project is a small private office or a large corporate workplace, we collaborate with designers and contractors to develop and install a glass partition system that supports the intended architectural design.',
    ],
    codeDisclaimer: "Glass specifications, safety glazing, engineering, acoustic performance, accessibility, building-code, permit, and other requirements vary by project and jurisdiction. Final specifications and compliance are determined by the approved project documents, applicable authority having jurisdiction, and qualified design professionals where required.",
  },
  {
    number: 3,
    slug: 'privacy-boardroom-black-framed',
    title: 'Privacy Glass, Boardroom Enclosures & Black-Framed Partitions',
    subtitle: 'Commercial Architectural Glass, Custom Workplace Solutions',
    image: '/images/partition-design-3-privacy-boardroom-black-framed.jpg',
    blurb: 'From frosted privacy glass to frameless boardrooms and contemporary black-framed partitions — three ways to define a workspace without closing it in.',
    intro: [
      'Finelines Glass Installations provides custom commercial glass partition solutions designed to create functional, sophisticated, and visually connected work environments.',
      'From privacy and specialty glass to frameless meeting rooms and contemporary black-framed office partitions, we work with interior designers, architects, contractors, builders, and project teams to bring the approved design and scope of work to life.',
    ],
    blocks: [
      {
        heading: 'Privacy Glass & Specialty Glass',
        intro: "Privacy and specialty glass can provide visual separation while maintaining the benefits of natural light. The appropriate glass is selected according to the project's design, application, performance requirements, and scope of work.",
        items: [
          { title: 'Frosted or Privacy Glass', body: 'Provides visual separation for offices, meeting rooms, and sensitive areas.' },
          { title: 'Tinted Glass', body: 'Adds a controlled level of colour and visual character.' },
          { title: 'Textured Glass', body: 'Provides privacy while introducing a distinct architectural surface.' },
          { title: 'Decorative Glass', body: 'Allows patterns, graphics, or other design elements to become part of the partition.' },
          { title: 'Laminated or Specialty Glass', body: 'Can be specified when particular safety, acoustic, privacy, or other performance characteristics are required.' },
        ],
      },
      {
        heading: 'Glass Meeting & Boardroom Enclosures',
        paragraphs: [
          'Frameless glass meeting and boardroom enclosures provide a sophisticated way to define collaborative spaces without making the workplace feel closed in. Large glass panels maintain visibility, natural light, and visual connection while establishing a dedicated meeting environment.',
        ],
        bullets: [
          'Meeting rooms',
          'Boardrooms',
          'Executive offices',
          'Conference spaces',
          'Collaborative work areas',
          'Reception and feature areas',
        ],
        note: 'Door locations, glass configuration, hardware, privacy requirements, and specialty glass can be coordinated with the approved architectural design.',
      },
      {
        heading: 'Black-Framed Office Partitions',
        paragraphs: [
          'Black-framed glass partitions provide a strong contemporary architectural appearance while creating clearly defined offices and workspaces. The contrast between dark framing and glass creates clean visual lines while preserving daylight and openness.',
          "This system can be used for private offices, conference rooms, reception areas, corridors, and larger commercial layouts. Framing profiles, door configurations, glass selection, and finish can be coordinated with the project's overall architectural language.",
        ],
      },
      {
        heading: 'Working With Designers & Contractors',
        paragraphs: [
          "Finelines Glass Installations works according to the project's drawings, specifications, scope of work, and site conditions.",
          'Every commercial interior has different requirements. We coordinate with the designer and contractor to determine the appropriate glass, hardware, layout, dimensions, finishes, doors, and installation approach for the project.',
          'Our objective is to make the glass installation work as part of the complete building design, not as a separate element added after construction.',
        ],
      },
      {
        heading: 'Glass Selection Based on the Project',
        paragraphs: [
          'Glass specifications are selected according to the application and project requirements. Depending on the scope, options may include clear, low-iron, frosted, tinted, textured, decorative, laminated, or other specialty glass products.',
          'Where enhanced privacy, acoustics, safety, solar control, or other performance characteristics are required, the glass specification can be tailored to the project in coordination with the design and construction team.',
        ],
      },
    ],
    hardware: {
      body: 'Office glass systems can be coordinated with different hinges, pulls, patch fittings, channels, locks, handles, and other architectural hardware depending on the selected system and project requirements.',
    },
    approach: [
      'Finelines Glass Installations can make it happen with quality assurance. Our process focuses on accurate field measurements, proper glass specification, precise fabrication, careful handling, accurate layout, hardware alignment, secure installation, clean joints, and professional finishing.',
      'Because office glass partitions are highly visible architectural elements, we pay close attention to consistent glass joints, alignment, door operation, hardware placement, and the finished appearance of the complete system.',
      "No two commercial interiors are exactly the same. Finelines Glass Installations works with the project team to adapt the glass solution to the approved design, scope, dimensions, site conditions, and technical requirements.",
      'Whether the project calls for privacy glass, a sophisticated boardroom enclosure, or a contemporary black-framed office system, we work with designers and contractors to deliver a finished installation that reflects the intended design.',
    ],
    codeDisclaimer: "Glass specifications, safety glazing, engineering, acoustic performance, accessibility, building-code, permit, and other requirements vary by project and jurisdiction. Final specifications and compliance are determined by the approved project documents, applicable authority having jurisdiction, and qualified design professionals where required.",
  },
];

// Closing panel shown after the three commercial glazing / office partition
// systems above, for projects with non-standard layouts or requirements.
export const PARTITION_CUSTOM_NOTE = {
  heading: "Have a commercial space with its own requirements?",
  body: "Every building, floor plate, and tenant improvement comes with its own structural conditions, code requirements, and design intent. We work with your designer, architect, or contractor to fit the glazing system to the actual project — bring us your drawings, specifications, or scope of work.",
};

// The three mirror finishes, shown on the Mirrors service page and each with
// its own dedicated detail page at /services/mirrors/:slug. Content drawn
// from the Finelines mirror design-reference sheets. Uses the same flexible
// `blocks` array as PARTITION_DESIGNS since the three source sheets don't
// share one fixed section structure — see MirrorDesignDetail.jsx.
export const MIRROR_DESIGNS = [
  {
    number: 1,
    slug: 'bronze',
    title: 'Bronze Mirror',
    subtitle: 'Warm Architectural Reflection, Hospitality & High-End Interiors',
    image: '/images/mirror-design-1-bronze.jpg',
    blurb: 'A warm, elegant reflective finish that works especially well in hotel lobbies, restaurants, and high-end interiors alongside stone, wood, and warm lighting.',
    intro: [
      'Finelines Glass Installations provides custom bronze mirror installations for residential, hospitality, commercial, and high-end architectural interiors. Bronze mirror adds a warm, elegant reflective quality that works particularly well with stone, wood, brass, bronze, and warm architectural lighting.',
    ],
    blocks: [
      {
        heading: 'Hospitality & Hotel Applications',
        paragraphs: [
          'Bronze mirror is especially effective in hotel lobbies, reception areas, lounges, restaurants, bars, elevators, corridors, and feature walls. Its warm tone can enhance ambient lighting and create a sophisticated sense of depth without the brighter appearance of traditional clear mirror.',
          'Large-format bronze mirror can be used to create dramatic architectural walls, reception backdrops, decorative panels, and feature installations.',
        ],
      },
      {
        heading: 'Custom Mirror Designs',
        paragraphs: [
          'Finelines Glass Installations can work with different custom mirror designs and configurations depending on the requirements of the project.',
        ],
        bullets: [
          'Full-height feature walls',
          'Wall-to-wall mirror installations',
          'Reception and lobby feature walls',
          'Hotel and hospitality interiors',
          'Restaurant and bar feature walls',
          'Decorative columns and architectural details',
          'Elevator interiors',
          'Custom-shaped mirror panels',
          'Multiple-panel layouts with coordinated joints',
          'Mirror integrated with wood, stone, metal, and millwork',
        ],
      },
      {
        heading: 'Working With Designers & Contractors',
        paragraphs: [
          "Finelines Glass Installations works closely with interior designers, architects, contractors, and builders to understand the project's design intent and installation requirements.",
          'The configuration of the mirror installation can be coordinated with the overall architectural design, including:',
        ],
        bullets: [
          'Panel sizes and layout',
          'Joint locations',
          'Wall conditions',
          'Corners and transitions',
          'Lighting',
          'Millwork and cabinetry',
          'Electrical components',
          'Surrounding stone and other finishes',
          'Hardware and installation requirements',
        ],
        note: 'Our goal is to ensure the mirror installation becomes an integrated part of the design rather than simply being placed onto the finished wall.',
      },
      {
        heading: 'Precision & Custom Fabrication',
        paragraphs: [
          'Most of our mirror projects are custom-cut to size. Accurate field measurements are an important part of the process, particularly for large feature walls and complex architectural configurations.',
          'We carefully consider finished dimensions and surrounding conditions before fabrication so the panels can be installed with clean lines, consistent joints, and a professional finished appearance.',
        ],
      },
    ],
    approach: [
      'Finelines Glass Installations focuses on precise measurements, careful fabrication coordination, proper glass handling, accurate installation, clean seams, and quality finishing.',
      'Whether the project calls for a dramatic bronze-mirror hotel lobby, an elegant restaurant feature wall, or a custom residential installation, we work with the project team to achieve the intended design.',
    ],
    codeDisclaimer: "Mirror specifications, safety considerations, substrate conditions, installation methods, and other requirements vary by application. Final product selection and installation details are determined by the project scope, site conditions, applicable requirements, and qualified professionals where required.",
  },
  {
    number: 2,
    slug: 'gray',
    title: 'Gray Mirror',
    subtitle: 'Contemporary Smoked Reflection, Sophisticated Interior Applications',
    image: '/images/mirror-design-2-gray.jpg',
    blurb: 'A softer, smoked-toned reflection that adds depth and a contemporary edge to home bars, dining areas, powder rooms, and feature walls.',
    intro: [
      'Finelines Glass Installations provides custom gray mirror installations for residential and commercial interiors where a darker, more sophisticated reflective finish is desired.',
      'Gray mirror, sometimes referred to as smoked or gray-toned mirror, provides a softer and more contemporary reflection than traditional clear mirror. Its darker tone can add depth, contrast, and a refined architectural character to an interior.',
    ],
    blocks: [
      {
        heading: 'Where Gray Mirror Works Best',
        paragraphs: [
          'Gray mirror is particularly effective in spaces where the design calls for a sophisticated feature rather than the bright, highly reflective appearance of a traditional clear mirror.',
        ],
        items: [
          { title: 'Home Bars & Entertainment Areas', body: 'Creates an elegant backdrop behind bar counters, bottle displays, shelving, and cabinetry.' },
          { title: 'Dining Areas', body: 'Adds depth and reflection while complementing wood, stone, metal, and decorative lighting.' },
          { title: 'Powder Rooms', body: 'Provides a dramatic alternative to traditional clear vanity mirrors.' },
          { title: 'Luxury Bathrooms', body: 'Works well with contemporary stone, dark cabinetry, black hardware, and warm lighting.' },
          { title: 'Feature Walls', body: 'Can visually expand an interior while creating a strong architectural focal point.' },
          { title: 'Commercial & Hospitality Interiors', body: 'Suitable for restaurants, lounges, offices, reception areas, hotels, and other designed spaces.' },
          { title: 'Retail & Showroom Interiors', body: 'Can provide a premium backdrop for displays and architectural features.' },
        ],
      },
      {
        heading: 'Custom-Sized Gray Mirror',
        paragraphs: [
          'Most Finelines Glass Installations mirror projects are custom-cut to the dimensions required by the space. Gray mirror can be fabricated for wall-to-wall applications, feature walls, vanity areas, bar backs, columns, niches, and other architectural conditions.',
          'Custom fabrication allows the mirror layout to be coordinated with corners, cabinetry, countertops, lighting, electrical outlets, wall features, and other elements within the design.',
        ],
      },
      {
        heading: 'Precise Measurements',
        paragraphs: [
          'Finelines Glass Installations takes precise field measurements before fabrication to help achieve an accurate installation.',
          'For large or detailed mirror installations, measurement accuracy is particularly important. We consider finished wall dimensions, corners, reveals, cabinetry, millwork, lighting, outlets, countertops, trim, and other site conditions that may affect the final fit.',
        ],
      },
      {
        heading: 'Designed With Your Interior',
        paragraphs: [
          'Finelines Glass Installations works with interior designers, architects, contractors, builders, and homeowners to coordinate the mirror installation with the overall design.',
          'Gray mirror can be used as a feature material alongside wood, natural stone, marble, metal, black finishes, warm lighting, and contemporary cabinetry. The result can be subtle and elegant or become a major architectural focal point depending on the design.',
        ],
      },
      {
        heading: 'Installation & Finishing',
        paragraphs: [
          'Our installation process focuses on accurate layout, proper handling, clean edges, consistent joints, secure installation, and careful finishing. Where multiple mirror panels are required, we pay close attention to panel alignment and seam consistency.',
          'Custom openings or cutouts can also be coordinated where required for outlets, switches, lighting, faucets, mounting hardware, or other architectural components.',
        ],
      },
      {
        heading: 'Mirror Selection',
        paragraphs: [
          "Gray mirror is one of the three popular mirror options offered by Finelines Glass Installations, alongside clear mirror and bronze mirror. The appropriate mirror colour is selected according to the project's design intent, surrounding materials, lighting, and scope of work.",
        ],
      },
    ],
    hardware: {
      body: 'Where mirror installations incorporate related glass hardware or architectural components, available styles and finishes can be coordinated with the overall interior design.',
    },
    approach: [
      'Finelines Glass Installations can make it happen with quality assurance. From field measurement and fabrication coordination through final installation, our focus is on precision, clean detailing, and a finished result that complements the surrounding architecture.',
    ],
    codeDisclaimer: "Mirror specifications, safety considerations, substrate conditions, installation methods, and other requirements vary by application. Final product selection and installation details are determined by the project scope, site conditions, applicable requirements, and qualified professionals where required.",
  },
  {
    number: 3,
    slug: 'clear',
    title: 'Clear Mirror',
    subtitle: 'Custom-Cut Architectural Mirrors, Precise Measurements',
    image: '/images/mirror-design-3-clear.jpg',
    blurb: 'A clean, bright, and highly reflective finish — the most popular choice for bathrooms, vanities, gyms, and home gyms.',
    intro: [
      'Finelines Glass Installations provides custom clear mirror installations for residential and commercial spaces where a clean, bright, and highly reflective finish is desired.',
      'Clear mirror is one of the most commonly used mirror products and is especially popular for bathrooms, vanity areas, gyms, and home gyms. It can also be incorporated into bedrooms, dressing areas, commercial facilities, hospitality spaces, feature walls, and other interior applications.',
    ],
    blocks: [
      {
        heading: 'Custom Sizes & Cut-to-Size Mirrors',
        paragraphs: [
          "Most Finelines Glass Installations mirror projects are fabricated to the dimensions required for the specific space. Rather than relying on standard off-the-shelf mirror sizes, we work with the project's actual measurements and design requirements.",
          'Custom sizing is particularly important for wall-to-wall installations, vanity mirrors, large gym mirrors, full-height mirrors, feature walls, and spaces with architectural details that require precise fitting.',
        ],
      },
      {
        heading: 'Precise Measurement Matters',
        paragraphs: [
          'Finelines Glass Installations takes precise field measurements to establish the required dimensions before fabrication and installation.',
          'We consider wall dimensions, corners, finished surfaces, cabinetry, countertops, electrical outlets, lighting, faucets, backsplashes, trim, and other conditions that can affect the final fit. The objective is a clean, accurately fitted installation with consistent lines and properly coordinated edges throughout the finished space.',
        ],
      },
      {
        heading: 'Popular Applications',
        items: [
          { title: 'Bathrooms & Vanities', body: 'Custom mirrors provide a clean finished appearance and can visually expand the room.' },
          { title: 'Gyms', body: 'Expansive mirrors allow users to monitor form and movement while making the fitness space feel larger and brighter.' },
          { title: 'Home Gyms', body: 'Custom-sized mirrors can be fitted around equipment, walls, outlets, and other room conditions.' },
          { title: 'Bedrooms & Dressing Areas', body: 'Full-height or custom wall mirrors provide functional dressing and reflection areas.' },
          { title: 'Commercial Interiors', body: 'Mirrors can be used in fitness facilities, salons, hospitality spaces, retail environments, and other commercial applications.' },
        ],
      },
      {
        heading: 'Designed Around the Project',
        paragraphs: [
          'Finelines Glass Installations works with interior designers, architects, contractors, builders, and homeowners to achieve the intended design and installation requirements.',
          'For projects involving designers and contractors, we work from the drawings, specifications, scope of work, and actual site conditions. Mirror dimensions, locations, cutouts, edges, and installation methods can be coordinated with the surrounding construction.',
        ],
      },
      {
        heading: 'Custom Cutouts & Coordination',
        paragraphs: [
          'Where required, mirrors can be fabricated with carefully coordinated openings or cutouts for electrical outlets, switches, faucets, lighting, mounting hardware, and other architectural components.',
          'These details make accurate field measurement especially important because the finished mirror needs to coordinate with the elements already installed or planned within the space.',
        ],
      },
      {
        heading: 'Professional Installation',
        paragraphs: [
          'Our installation process focuses on accurate layout, proper glass handling, correct positioning, clean edges, consistent alignment, secure installation, and careful finishing.',
          'For large mirror installations, proper planning and handling are particularly important. Our team works to achieve a finished result that looks intentional, precise, and integrated with the surrounding architecture.',
        ],
      },
      {
        heading: 'Mirror Options',
        paragraphs: [
          'Clear mirror is one of the primary mirror options offered by Finelines Glass Installations. Depending on the design, we can also work with other popular mirror selections such as gray mirror and bronze mirror, along with specialty options when required by the project.',
        ],
      },
    ],
    approach: [
      'Finelines Glass Installations can make it happen with quality assurance. From precise field measurements through fabrication and installation, our focus is on accuracy and a clean finished appearance.',
      'Most importantly, we understand that custom mirror work is measured and fabricated for a specific space. Precision at the measurement stage helps establish the foundation for a successful installation.',
    ],
    codeDisclaimer: "Mirror specifications, safety considerations, substrate conditions, installation methods, and other requirements vary by application. Final product selection and installation details are determined by the project scope, site conditions, applicable requirements, and qualified professionals where required.",
  },
];

// Closing panel shown after the three mirror finishes above, for projects
// that don't fit neatly into one finish or need help deciding.
export const MIRROR_CUSTOM_NOTE = {
  heading: "Not sure which mirror finish is right for your space?",
  body: "Bronze, gray, and clear mirror all suit different lighting, materials, and moods — and most of our mirror work is custom-cut to the exact space regardless of which one you choose. Bring us your room, your finishes, or just a photo of what you're going for.",
};

// Real completed-project photos, shared with the Projects page gallery.
// Captions describe the work only — never a client's exact address (see the
// website report / discovery checklist for why).
export const PROJECTS_PREVIEW = [
  { src: '/images/project-25.jpg', caption: 'Marine Drive - Skybar - Backlit Onyx Bar & Wine Storage' },
  { src: '/images/project-1.jpg', caption: 'West Vancouver - Frameless Shower' },
  { src: '/images/project-2.jpg', caption: 'Bellevue Dr. - Exterior Glass Railing' },
  { src: '/images/project-3.jpg', caption: 'Richmond - Shower Enclosure' },
  { src: '/images/project-4.jpg', caption: 'Bellevue Dr. - Interior Railing' },
  { src: '/images/project-5.jpg', caption: 'Bellevue Dr. - Wine Cellar' },
  { src: '/images/project-6.jpg', caption: 'Bellevue Dr. - Frameless Shower Enclosures' },
  { src: '/images/project-7.jpg', caption: 'Pender Island - Exterior Railing' },
  { src: '/images/project-8.jpg', caption: 'Cedarhurst St. - Wine Cellar' },
  { src: '/images/project-9.jpg', caption: 'West 34th Vancouver - Shower Enclosures' },
  { src: '/images/project-14.jpg', caption: 'Marine Drive - Skybar - Backlit Onyx Feature Wall' },
  { src: '/images/project-15.jpg', caption: 'Marine Drive - Skybar - Outdoor Kitchen & Bar' },
  { src: '/images/project-19.jpg', caption: 'West Cordova - Vancouver - Frameless Shower Enclosure' },
  { src: '/images/project-21.jpg', caption: 'West Cordova - Vancouver - Ensuite Shower & Freestanding Tub' },
  { src: '/images/project-22.jpg', caption: 'West Cordova - Vancouver - Walk-In Closet Feature Mirror' },
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
      { src: '/images/project-10.jpg', label: 'Exterior Glass Railing' },
      { src: '/images/project-11.jpg', label: 'Deck Railing - Marina View' },
      { src: '/images/project-12.jpg', label: 'Railing Detail' },
      { src: '/images/project-13.jpg', label: 'Railing - Roofline Detail' },
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
  {
    name: 'Marine Drive - Skybar',
    photos: [
      { src: '/images/project-25.jpg', label: 'Backlit Onyx Bar & Wine Storage' },
      { src: '/images/project-14.jpg', label: 'Backlit Onyx Feature Wall' },
      { src: '/images/project-15.jpg', label: 'Outdoor Kitchen & Bar' },
      { src: '/images/project-16.jpg', label: 'Glass Shelving - Installation' },
      { src: '/images/project-17.jpg', label: 'Stone & Glass Detail' },
      { src: '/images/project-18.jpg', label: 'On-Site Installation' },
    ],
  },
  {
    name: 'West Cordova - Vancouver',
    photos: [
      { src: '/images/project-19.jpg', label: 'Frameless Shower Enclosure' },
      { src: '/images/project-20.jpg', label: 'Walk-In Closet - Glass Wardrobe Doors' },
      { src: '/images/project-21.jpg', label: 'Ensuite - Frameless Shower & Freestanding Tub' },
      { src: '/images/project-22.jpg', label: 'Walk-In Closet - Feature Mirror' },
      { src: '/images/project-23.jpg', label: 'Vanity Mirror' },
      { src: '/images/project-24.jpg', label: 'Frameless Shower Enclosure - Bench Seat' },
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

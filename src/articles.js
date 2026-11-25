// Articles live in their own file so their text only downloads on article
// pages, not on every page of the site. Add new articles here.

// ---------------------------------------------------------------------------
// ARTICLES
// Blog/resources content, shown at /articles (listing) and /articles/:slug
// (full post). Add a new article by pushing another object onto this array —
// ArticleDetail.jsx and Articles.jsx are both driven entirely from here, no
// other code changes needed for a new post.
//
// SCHEDULING: each article has a `publishAt` ISO timestamp (Vancouver time)
// alongside the pretty `publishDate` string shown on the page. An article
// whose `publishAt` is still in the future is excluded from both the
// /articles listing and direct /articles/:slug access (see getPublishedArticles()
// below, used by Articles.jsx and ArticleDetail.jsx) — it simply doesn't
// exist on the live site yet. This means you can paste a finished article
// into articles.js and push it to GitHub whenever it's convenient, days ahead of
// time even, and it will stay invisible until the moment `publishAt` passes —
// no extra step needed on publish day. This check runs in the visitor's
// browser against the real current time, so it takes effect automatically,
// without a new deploy, the instant the date/time arrives.
//
// Each article's `blocks` array uses the same flexible block schema as the
// service design-detail pages, plus one addition specific to articles:
//   - heading: string              -> section heading
//   - intro / note: string         -> optional lead-in / trailing paragraph
//   - paragraphs: string[]         -> plain paragraphs
//   - bullets: string[]            -> a plain bulleted list
//   - items: { title, body }[]     -> a bulleted list with bold lead-ins
//   - flow: string[]               -> a horizontal step-flow row (e.g.
//                                      Measure -> Plan -> Install -> Finish)
//
// Optional `heroImagePosition` (CSS object-position, e.g. 'left center') sets
// which part of a wide banner stays visible in the 16:9 listing card.
// ---------------------------------------------------------------------------
export const ARTICLES = [
  {
    slug: 'frameless-shower-enclosures-jobsite-to-finished-product',
    title: 'Frameless Shower Enclosures: From Jobsite to a Beautiful Finished Product',
    seoTitle: 'Frameless Shower Enclosures, Jobsite to Finish | Finelines Glass',
    metaDescription: 'Discover how a frameless shower enclosure goes from jobsite measurements and installation to a beautiful finished product. Explore glass design, door placement, hardware, and installation considerations.',
    keywords: ['frameless shower enclosures', 'frameless shower glass', 'custom shower glass', 'glass shower doors', 'frameless glass shower doors', 'custom glass shower enclosure', 'shower glass installation', 'glass shower enclosure Vancouver', 'glass shower enclosure Surrey', 'custom glass installation', 'bathroom glass installation'],
    publishDate: 'October 5, 2026',
    publishAt: '2026-10-05T00:00:00-07:00', // Vancouver time (PDT) — article goes live at midnight on this date
    heroImage: '/images/articles/frameless-shower-jobsite-to-finished.webp',
    heroImageAlt: 'A Finelines Glass installer fitting a frameless glass shower panel on the jobsite, next to a photo of the same enclosure fully finished',
    excerpt: "A frameless glass shower can completely change the appearance of a bathroom — but that clean look doesn't happen by simply installing a piece of glass. Here's what actually happens between the jobsite and the finished enclosure.",
    intro: [
      "A frameless glass shower can completely change the appearance of a bathroom. Instead of heavy frames and bulky profiles, clear glass creates a clean, open look that allows the tile, fixtures, lighting, and overall bathroom design to remain visible.",
      "But achieving that clean appearance doesn't happen by simply installing a piece of glass. Behind every successful frameless shower enclosure is careful site preparation, accurate measurements, glass planning, hardware placement, installation, and final adjustment.",
      "At Finelines Glass, we approach every project as a complete glass installation — not simply a piece of glass placed into an opening.",
    ],
    blocks: [
      {
        heading: 'From the Jobsite to the Finished Shower',
        intro: "One of the best ways to understand professional glass installation is to look at what happens on the jobsite. Before the finished enclosure looks clean and almost invisible, the installer has to work around the realities of the construction site. Walls may still require finishing, floors and shower bases need to be properly prepared, plumbing fixtures have to be considered, and niches, corners, ceiling conditions, and surrounding surfaces all affect how the glass should be installed.",
      },
      {
        heading: '1. Understanding the Shower Layout',
        paragraphs: [
          "Every bathroom is different. A frameless enclosure might include a fixed glass panel, a hinged glass door, multiple fixed panels, return panels, corner configurations, floor-to-ceiling glass, custom hardware, or specialty glass. The first step is understanding how the enclosure will work within the space. For the featured installation, the design includes a large fixed glass panel extending close to the ceiling, paired with a separate hinged door. The door is intentionally positioned lower than the fixed panel, creating a distinctive stepped glass profile while maintaining the open appearance of a frameless enclosure.",
        ],
      },
      {
        heading: '2. Accurate Measuring Is Critical',
        paragraphs: [
          "Glass is not a material that can simply be trimmed on site like drywall or lumber. Once the glass has been fabricated, the dimensions are essentially fixed. That makes accurate field measurements extremely important. Our installation process considers opening width and height, wall conditions, out-of-level or out-of-plumb surfaces, floor or shower-base conditions, glass-to-wall clearances, door swing, hinge locations, hardware placement, finished tile or wall surfaces, and ceiling conditions. Good glass installation starts with good information.",
        ],
      },
      {
        heading: '3. Planning the Fixed Glass Panel',
        paragraphs: [
          "The fixed panel is one of the most visually important components of a frameless shower. Because there is little or no framing surrounding the glass, the panel itself becomes part of the architectural design. In the featured installation, the fixed glass panel reaches nearly to the ceiling, creating a strong vertical line and giving the enclosure a custom-built appearance. This requires careful consideration of panel dimensions, wall conditions, ceiling clearance, glass specification, hardware location, support requirements, silicone joints, finishing, and the relationship to the shower door.",
        ],
      },
      {
        heading: '4. Installing the Frameless Shower Door',
        paragraphs: [
          "The shower door is where precision becomes particularly important. A hinged glass door needs to operate smoothly while maintaining the correct clearances from the surrounding glass, walls, floor, and shower fixtures. The hinges must be accurately positioned and securely installed, and the door needs to be aligned correctly with the fixed panel. In our featured project, the door is intentionally lower than the adjacent fixed panel by approximately one foot, creating a clean transition between the two pieces of glass. That difference is an important part of the design and should not be mistaken for an installation error.",
        ],
      },
      {
        heading: '5. Hardware Matters More Than You Think',
        paragraphs: [
          "With frameless glass, there is nowhere for poor hardware placement to hide. Because the design uses minimal framing, hinges and other hardware become part of the visual composition. Hardware needs to be positioned carefully so that it supports the door properly, allows correct operation, maintains appropriate clearances, works with the surrounding glass, and complements the bathroom fixtures. In the featured installation, the visible hardware is kept minimal, allowing the glass to remain the dominant visual element.",
        ],
      },
      {
        heading: '6. Installation Is About More Than Making the Glass Fit',
        paragraphs: [
          "A professional glass installer has to work with the existing construction. That can mean adjusting to slightly uneven walls, tile variations, floor transitions, existing plumbing, recessed shower niches, ceiling conditions, limited working space, and existing bathroom fixtures. The jobsite photos tell an important part of the story: what eventually becomes a clean, almost invisible glass enclosure begins as a real construction environment — with tools, protective materials, measurements, hardware, and an installer carefully making the necessary adjustments.",
        ],
      },
      {
        heading: '7. The Finished Product',
        paragraphs: [
          "Once installation is complete, the goal is for the glass enclosure to become almost invisible. The eye should notice the bathroom — not a bulky frame. Clear frameless glass allows the shower tile, fixtures, lighting, niche, floor, and architectural details to remain visible. This can make the bathroom feel more open, brighter, and less visually crowded. The finished enclosure shown in our project photos demonstrates this approach: large areas of clear glass provide separation while maintaining visual continuity throughout the shower.",
        ],
      },
      {
        heading: 'Why Choose a Frameless Shower Enclosure?',
        items: [
          { title: 'A cleaner architectural appearance', body: 'Minimal framing creates a contemporary appearance that works particularly well with modern bathrooms.' },
          { title: 'More visual openness', body: 'Clear glass allows the entire shower design to remain visible.' },
          { title: 'Custom configurations', body: 'Frameless glass can be designed around different bathroom layouts rather than forcing the space into a standard enclosure configuration.' },
          { title: 'Works with different design styles', body: 'Depending on the glass, hardware, and surrounding finishes, a frameless enclosure can complement modern, minimalist, transitional, or luxury bathroom designs.' },
          { title: 'Easy to coordinate with other finishes', body: 'Hardware can be selected to work with faucets, shower fixtures, cabinetry, lighting, and other bathroom elements.' },
        ],
      },
      {
        heading: 'What Homeowners Should Consider Before Ordering Shower Glass',
        items: [
          { title: 'Where will the fixed panels go?', body: 'The panel layout affects the appearance and functionality of the enclosure.' },
          { title: 'Where should the door be located?', body: 'Door position can affect access, swing clearance, plumbing fixtures, and the overall balance of the design.' },
          { title: 'How high should the glass be?', body: 'A standard-height enclosure and a near-ceiling or floor-to-ceiling installation create very different visual effects.' },
          { title: 'What hardware finish should be used?', body: 'The hardware should coordinate with the rest of the bathroom.' },
          { title: 'Are the walls and floor ready for glass installation?', body: 'Properly finished surfaces help ensure the glass can be measured and installed accurately.' },
          { title: 'Has the glass installer been involved early enough?', body: 'Early coordination can help prevent costly changes later in the renovation.' },
        ],
      },
      {
        heading: 'Working With Designers and Contractors',
        paragraphs: [
          "A successful glass installation is often a collaboration. At Finelines Glass, we can work with homeowners, designers, builders, renovation contractors, and other trades to coordinate the glass portion of a project. Early communication can help address glass layout, measurements, hardware selection, door swing, finished wall conditions, installation sequence, access requirements, and coordination with other trades.",
        ],
      },
      {
        heading: 'From Jobsite to Finished Product',
        paragraphs: [
          "The finished shower may look simple: a few large sheets of clear glass, a couple of hinges, clean lines, and minimal hardware. But that simplicity is intentional. The finished appearance depends on the work that happens behind the scenes:",
        ],
        flow: ['Measure', 'Plan', 'Fabricate', 'Prepare', 'Install', 'Adjust', 'Finish'],
      },
      {
        heading: 'Thinking About a Frameless Shower Enclosure?',
        paragraphs: [
          "Whether you're building a new bathroom, renovating an existing space, or working with a designer or contractor on a custom project, the glass enclosure should be considered as part of the overall design. From the first measurement at the jobsite to the final adjustment of the door, every detail contributes to the finished result.",
          "Finelines Glass provides custom glass installation solutions for residential and commercial projects, including frameless shower enclosures, glass railings, custom mirrors, office partitions, specialty glass, and other architectural glass applications.",
        ],
      },
    ],
    ctaNote: "If you're planning a shower renovation and want a clean, custom glass enclosure, contact Finelines Glass to discuss your project.",
    tagline: 'Finelines Glass — Where precision meets the finished product.',
  },
  {
    slug: 'how-to-clean-glass-shower-doors',
    title: 'How to Clean Glass Shower Doors and Prevent Water Spots',
    seoTitle: 'How to Clean Glass Shower Doors and Prevent Water Spots',
    metaDescription: 'Learn how to clean glass shower doors, prevent water spots, remove soap scum, and maintain a clear frameless shower enclosure with practical tips from Finelines Glass.',
    keywords: ['how to clean glass shower doors', 'prevent water spots on shower glass', 'remove hard-water stains from glass', 'frameless shower enclosure maintenance', 'clean frameless glass shower doors', 'glass shower door cleaning tips'],
    publishDate: 'October 5, 2026',
    publishAt: '2026-10-05T06:00:00-07:00',
    heroImage: '/images/articles/how-to-clean-glass-shower-doors.webp',
    heroImageAlt: 'Cleaning a glass shower door to prevent water spots beside a clear frameless shower enclosure',
    excerpt: 'Keep your frameless glass shower enclosure looking clear, spotless, and beautiful with the right cleaning routine — what causes water spots, how to remove them, and how to prevent them from coming back.',
    intro: [
      "A frameless glass shower enclosure can make a bathroom feel brighter, more spacious, and more modern. However, regular exposure to water, soap, shampoo, and body-care products can leave glass doors looking cloudy or covered in spots.",
      "The good news is that proper maintenance can help keep your shower glass looking its best. With a few simple habits and the right cleaning products, homeowners can reduce water spots, minimize soap scum, and protect the appearance of their glass shower enclosure.",
      "At Finelines Glass, we understand that a beautiful glass shower is an investment in your home. Knowing how to care for it properly helps preserve its appearance long after installation.",
    ],
    blocks: [
      {
        heading: 'Why Do Glass Shower Doors Get Water Spots?',
        intro: 'Water spots commonly develop when water droplets dry on the glass and leave behind dissolved minerals, particularly calcium and magnesium. This is often called hard-water staining.',
        items: [
          { title: 'Soap scum', body: 'Soap residue combines with minerals and body oils, leaving a cloudy film.' },
          { title: 'Shampoo and conditioner residue', body: 'These products can create streaks and buildup on glass.' },
          { title: 'Standing water', body: 'Droplets left to dry naturally can contribute to visible spots.' },
          { title: 'Infrequent cleaning', body: 'Mineral deposits and residue become more difficult to remove when they accumulate over time.' },
        ],
        note: 'Regular cleaning helps prevent these deposits from building up and keeps your shower enclosure looking clearer.',
      },
      {
        heading: 'How to Clean Glass Shower Doors Step by Step',
        items: [
          { title: '1. Rinse the Glass', body: 'Rinse the shower glass with clean, lukewarm water to loosen soap residue and surface dirt. Avoid using extremely hot water, which is unnecessary for routine cleaning.' },
          { title: '2. Use a Gentle Glass Cleaner', body: 'Apply a cleaner specifically suitable for shower glass, following the product instructions. A mild, non-abrasive cleaning solution is generally preferable. Avoid abrasive powders, scouring pads, and harsh cleaning tools that could scratch the glass or damage nearby finishes.' },
          { title: '3. Wipe With a Microfiber Cloth', body: 'Use a clean, soft microfiber cloth to wipe the glass. Work from top to bottom, paying attention to corners and areas where water tends to collect. For stubborn mineral deposits, use a product specifically designed for hard-water stains and confirmed as compatible with your glass, coatings, and hardware.' },
          { title: '4. Rinse Away Cleaning Residue', body: 'If the cleaner requires rinsing, rinse thoroughly with clean water. Leaving cleaning products on the glass can result in streaks or residue.' },
          { title: '5. Dry the Glass', body: 'Use a dry microfiber cloth to remove remaining moisture. Drying the glass helps reduce visible water marks and leaves the surface looking clearer.' },
        ],
      },
      {
        heading: 'How to Prevent Water Spots on Glass Shower Doors',
        intro: 'Prevention is easier than removing heavy mineral buildup. A simple daily routine can make a noticeable difference.',
        items: [
          { title: 'Use a shower squeegee after each shower', body: 'Starting at the top, draw the squeegee down the glass in overlapping passes. Wipe the blade between passes if needed.' },
          { title: 'Keep a microfiber cloth nearby', body: 'Drying remaining droplets around the edges and lower sections can help reduce spotting.' },
          { title: 'Improve bathroom ventilation', body: 'Use your bathroom exhaust fan as recommended to help manage humidity and moisture.' },
          { title: 'Clean regularly', body: 'Do not wait until the glass looks cloudy. Frequent, gentle cleaning helps prevent soap scum and mineral deposits from accumulating.' },
          { title: 'Check your water conditions', body: 'If mineral spots repeatedly appear, hard water may be contributing to the problem. Appropriate cleaning and maintenance can help manage the buildup.' },
        ],
      },
      {
        heading: 'What Should You Avoid When Cleaning Shower Glass?',
        intro: 'The wrong cleaning method can damage more than just the glass surface. It may also affect metal hardware, seals, nearby tile, or specialized glass coatings. Avoid the following unless the manufacturer specifically confirms compatibility:',
        bullets: [
          'Steel wool, abrasive pads, and gritty cleaning powders.',
          'Strong acidic or alkaline cleaners that may damage finishes or coatings.',
          'Scraping tools used without appropriate guidance.',
          'Mixing cleaning chemicals, especially products containing bleach with acidic cleaners.',
          'Spraying harsh cleaners directly onto hinges or other hardware.',
        ],
        note: 'Always follow the glass, coating, hardware, and cleaning-product manufacturers’ care instructions. If your shower glass has a protective treatment, use only cleaning methods approved for that treatment.',
      },
      {
        heading: 'Can You Remove Existing Hard-Water Stains?',
        paragraphs: [
          "Light water spots and fresh soap residue can often be removed with an appropriate glass cleaner and a soft cloth. However, heavy mineral buildup may require a specialized hard-water stain remover. Test the product in a small, inconspicuous area first and confirm that it is safe for your particular glass and hardware.",
          "If the glass remains cloudy after careful cleaning, the marks may be more than surface residue. In some cases, prolonged mineral exposure can cause permanent etching or damage to the glass surface. Aggressive scrubbing may make the condition worse. When in doubt, seek professional advice before attempting restoration.",
        ],
      },
      {
        heading: 'Does a Frameless Glass Shower Enclosure Require Special Care?',
        paragraphs: [
          "Frameless shower enclosures are designed to provide a clean, open appearance with minimal framing. Because the glass is a prominent feature, streaks and water spots can be especially noticeable.",
          "Routine care should include more than the glass itself. Check the hinges, seals, and other hardware periodically for residue, looseness, or signs of wear. Clean these components using products suitable for their finish, and never use the glass door as a support.",
          "If a hinge becomes loose, the door starts to sag, or the glass appears damaged, stop using the enclosure if there is a safety concern and arrange for qualified professional inspection.",
        ],
      },
      {
        heading: 'Why Professional Glass Installation Matters',
        paragraphs: [
          "Proper installation is an important part of a shower enclosure's long-term performance. Accurate measurements, suitable hardware, correct door alignment, and careful installation all contribute to a finished enclosure that functions as intended.",
          "At Finelines Glass, we provide custom glass installation solutions designed around each project's layout and requirements. We work with homeowners, designers, and contractors to help bring bathroom renovation plans to life.",
          "Whether you are planning a new frameless shower enclosure or upgrading an existing bathroom, our team can help you explore glass options that suit your space and design goals.",
        ],
      },
      {
        heading: 'Frequently Asked Questions',
        items: [
          { title: 'How often should I clean my glass shower doors?', body: 'A quick squeegee after each shower is a useful habit. Wipe down the glass as needed and use a suitable glass cleaner regularly to prevent soap scum and mineral buildup.' },
          { title: 'Does vinegar remove water spots from shower glass?', body: 'Vinegar can help loosen some mineral deposits, but it is not suitable for every glass treatment, metal finish, seal, or surrounding material. Check manufacturer instructions before using it, and never mix vinegar with bleach or other cleaning chemicals.' },
          { title: 'Can water spots permanently damage shower glass?', body: 'Yes. If mineral deposits remain on the surface for a prolonged period, they may contribute to etching that ordinary cleaning cannot remove. Early and consistent maintenance helps reduce this risk.' },
          { title: 'Should I use a razor blade to remove stubborn stains?', body: 'Do not use a razor blade unless the glass manufacturer or a qualified professional confirms that the method is appropriate. Incorrect scraping can scratch the glass or damage coatings.' },
          { title: 'Can Finelines Glass help with a new shower enclosure?', body: 'Yes. Finelines Glass provides custom glass installation services, including frameless shower enclosures. Contact us to discuss your bathroom project and installation requirements.' },
        ],
      },
      {
        heading: 'Keep Your Shower Glass Looking Its Best',
        paragraphs: [
          "A clear glass shower enclosure can enhance the appearance of a bathroom for years. The key is consistent care: rinse away residue, use a squeegee, clean with suitable products, and address mineral buildup before it becomes difficult to remove.",
          "If you are planning a bathroom renovation or considering a custom frameless shower enclosure, Finelines Glass can help you explore a solution tailored to your space.",
        ],
      },
    ],
    ctaNote: 'Contact Finelines Glass to discuss your custom glass shower project and bring a clean, modern finish to your bathroom.',
    tagline: 'Care note: Cleaning guidance is general. For coated glass, specialized finishes, and hardware, follow the relevant manufacturers’ instructions.',
  },
  {
    slug: 'glass-railing-for-modern-homes',
    title: 'Glass Railing for Modern Homes',
    seoTitle: 'Choosing Glass Railings for a Modern Home | Finelines Glass',
    metaDescription: 'Explore how glass railings bring an open, modern look to balconies, decks, and stairways, and what homeowners, designers, and contractors should consider before installation.',
    keywords: ['glass railing', 'glass railing for modern homes', 'frameless glass railing', 'glass balcony railing', 'glass deck railing', 'glass stair railing', 'glass railing installation Vancouver', 'glass railing installation Surrey'],
    publishDate: 'October 12, 2026',
    publishAt: '2026-10-12T06:00:00-07:00',
    heroImage: '/images/articles/glass-railing-for-modern-homes.webp',
    heroImageAlt: 'A glass railing installation in progress on a rooftop deck, next to the same glass railing fully finished on a modern home',
    excerpt: 'Glass railings create an open architectural look on balconies, decks, terraces, and stairways — here’s what homeowners, designers, and contractors should consider before installation.',
    intro: [
      "This article introduces homeowners, designers, builders, and contractors to modern glass railing systems and the key considerations that should be addressed before installation. The goal is to show how glass railings can provide an open architectural look while emphasizing proper design, site conditions, material selection, and professional installation.",
    ],
    blocks: [
      {
        heading: 'Why Glass Railings Are Popular in Modern Homes',
        paragraphs: [
          "Glass railings are increasingly used on balconies, decks, terraces, stairways, and rooftop spaces because they create a visually open barrier without interrupting the surrounding view. Clear glass can allow more natural light through a space and complement contemporary and transitional architecture.",
        ],
      },
      {
        heading: '1. Choosing the Right Glass Railing Design',
        paragraphs: [
          "The first step is determining how the railing should look and how it will interact with the structure. Depending on the project, glass railings may use minimal visible framing, discreet hardware, or a more defined support system. The appropriate configuration depends on the application, structure, design intent, and project requirements.",
        ],
      },
      {
        heading: '2. Frameless vs. Framed Appearance',
        paragraphs: [
          "Frameless-style glass railings are often selected for their minimalist appearance and uninterrupted sightlines. Other projects may benefit from posts, rails, channels, or other visible components. The right choice depends on the property, mounting conditions, design goals, and project specifications.",
        ],
      },
      {
        heading: '3. Mounting and Site Conditions Matter',
        paragraphs: [
          "Glass railing installation begins with understanding what the system will be attached to. Concrete, steel, wood, membrane-covered decks, tiled surfaces, and other substrates can require different approaches. Existing construction, waterproofing, finished surfaces, drainage, and access should be reviewed before fabrication and installation.",
        ],
      },
      {
        heading: '4. Safety Should Be Part of the Design From the Beginning',
        paragraphs: [
          "A glass railing must be designed and installed for its intended application. Glass type, thickness, support method, hardware, dimensions, attachment details, and applicable requirements all need to be considered. Because requirements can vary by application and jurisdiction, project-specific details should be confirmed with the appropriate professionals before fabrication and installation.",
        ],
      },
      {
        heading: '5. Glass Railings and Modern Outdoor Living',
        paragraphs: [
          "One of the biggest advantages of a glass railing is how naturally it fits into outdoor living spaces. On a balcony, terrace, deck, or rooftop, transparent glazing can help maintain a strong connection to the surrounding environment. This is particularly valuable where the view is a major part of the home's design.",
        ],
      },
      {
        heading: '6. Working With Designers and Contractors',
        paragraphs: [
          "Glass railings are often one part of a larger renovation or construction project. Finelines Glass can work with homeowners, designers, builders, and contractors to coordinate the glass scope with the overall project. Early communication can help coordinate measurements, fabrication, finishes, site readiness, and installation scheduling.",
        ],
      },
      {
        heading: 'What Homeowners Should Ask Before Choosing a Glass Railing',
        bullets: [
          'Where will the railing be installed, and what is the existing or planned substrate?',
          'What railing appearance best suits the architecture and surrounding finishes?',
          'What glass and hardware options are appropriate for the application?',
          'How will the railing interface with waterproofing, flooring, or other finished surfaces?',
          'Who is responsible for site preparation, measurements, fabrication, and installation?',
          'What project-specific requirements should be confirmed before fabrication?',
        ],
      },
      {
        heading: 'Professional Glass Installation Makes a Difference',
        paragraphs: [
          "A glass railing can look simple when it is finished, but achieving a clean result requires careful planning and installation. Accurate measurements, appropriate hardware, proper handling of glass, attention to finished surfaces, and coordination with other trades all contribute to the final result.",
          "Finelines Glass provides custom glass railing solutions and professional installation for residential, renovation, and construction projects. Contact Finelines Glass to discuss your project.",
        ],
      },
    ],
    ctaNote: 'Ready to explore a glass railing for your home or renovation project? Finelines Glass works with homeowners, designers, builders, and contractors on custom glass railing projects. Contact us to discuss your project, design goals, site conditions, and installation requirements.',
  },
  {
    slug: 'custom-mirrors-that-make-small-spaces-feel-bigger',
    title: 'Custom Mirrors That Make Small Spaces Feel Bigger',
    seoTitle: 'Mirrors That Make Small Spaces Feel Bigger | Finelines Glass',
    metaDescription: 'Discover how custom mirrors can make bathrooms, entryways, gyms, and other interiors feel brighter and more spacious, with design and placement ideas from Finelines Glass.',
    keywords: ['custom mirrors', 'custom mirror installation', 'bathroom mirrors', 'full-wall mirrors', 'gym mirrors', 'custom mirror Vancouver', 'custom mirror Surrey', 'mirrors for small spaces'],
    publishDate: 'October 19, 2026',
    publishAt: '2026-10-19T06:00:00-07:00',
    heroImage: '/images/articles/custom-mirrors-small-spaces.webp',
    heroImageAlt: 'A custom bathroom vanity mirror alongside full-wall mirror installations in a home gym and living space',
    excerpt: 'Custom mirrors can do much more than provide a place to check your reflection — the right size, placement, shape, and installation can make an interior feel brighter, more open, and more finished.',
    intro: [
      "Custom mirrors can do much more than provide a place to check your reflection. The right size, placement, shape, and installation can make an interior feel brighter, more open, and more finished. This article explains how custom mirrors can be used in bathrooms, entryways, gyms, living areas, offices, and other spaces.",
    ],
    blocks: [
      {
        heading: 'Why Custom Mirrors Make a Difference',
        paragraphs: [
          "Standard-size mirrors can leave awkward gaps or fail to take advantage of the available wall area. A custom mirror can be planned around the dimensions of the room, cabinetry, lighting, fixtures, and surrounding finishes. This creates a more integrated result and can make the mirror feel like part of the architecture rather than an afterthought.",
        ],
      },
      {
        heading: '1. Make Small Bathrooms Feel More Spacious',
        paragraphs: [
          "A large bathroom mirror can visually expand the room by reflecting light and surrounding surfaces. Wall-to-wall or carefully sized mirrors can work particularly well above vanities. The final design should account for faucets, lighting, outlets, backsplash details, cabinets, and other elements that meet the mirror.",
        ],
      },
      {
        heading: '2. Use Mirrors to Increase the Sense of Light',
        paragraphs: [
          "Mirrors reflect both natural and artificial light. When positioned thoughtfully opposite or near a light source, they can help distribute brightness through a room. This can be especially useful in bathrooms, hallways, entry areas, and interiors with limited natural light.",
        ],
      },
      {
        heading: '3. Full-Wall and Oversized Mirror Applications',
        paragraphs: [
          "An oversized mirror can become a strong architectural feature. Full-wall mirrors are popular in fitness rooms, studios, commercial spaces, dressing areas, and contemporary interiors. Larger installations require careful planning of panel sizes, access, seams, and the finished wall condition.",
        ],
      },
      {
        heading: '4. Custom Bathroom Mirrors',
        paragraphs: [
          "Bathroom mirrors can be designed around the vanity and the overall style of the room. Options can include simple rectangular designs, oversized installations, specialty shapes, and coordinated mirror layouts. The goal is to create a clean relationship between the mirror, countertop, cabinetry, lighting, and plumbing fixtures.",
        ],
      },
      {
        heading: '5. Mirrors for Home Gyms and Commercial Spaces',
        paragraphs: [
          "Large mirrors are valuable in gyms and fitness rooms because they improve visibility and can make the space feel larger. They are also commonly used in dance studios, salons, retail environments, offices, and other commercial interiors. Commercial projects benefit from early coordination between the glass installer, designer, and contractor.",
        ],
      },
      {
        heading: '6. Mirror Edges, Shapes and Finishing Details',
        paragraphs: [
          "Small finishing details can have a major effect on the final appearance. Depending on the application, a project may call for clean polished edges, specific shapes, multiple panels, or carefully planned seams. The surrounding materials and the intended visual style should guide these decisions.",
        ],
      },
      {
        heading: '7. Why Accurate Measurement Matters',
        paragraphs: [
          "Custom mirrors are fabricated to suit a specific space, so accurate measurements and site conditions are important. Wall irregularities, finished surfaces, electrical locations, cabinetry, tile, and other obstacles should be considered before fabrication. Early site coordination can help prevent surprises during installation.",
        ],
      },
      {
        heading: '8. Working With Designers and Contractors',
        paragraphs: [
          "Custom mirrors are often part of a larger renovation or construction project. Finelines Glass can work with homeowners, interior designers, builders, and contractors to coordinate dimensions, finishes, access, scheduling, and installation requirements. Bringing the glass installer into the project at the right stage can help the finished result come together smoothly.",
        ],
      },
      {
        heading: 'Where Can Custom Mirrors Be Used?',
        bullets: [
          'Bathroom vanities and full-wall bathroom applications',
          'Entryways, foyers, and hallways',
          'Home gyms and fitness rooms',
          'Dance studios and commercial fitness facilities',
          'Bedrooms and dressing areas',
          'Living and dining spaces',
          'Salons, retail spaces, offices, and other commercial interiors',
        ],
      },
      {
        heading: 'Questions to Ask Before Ordering a Custom Mirror',
        bullets: [
          'What size and shape will best suit the room?',
          'Where should the mirror be positioned to maximize light and visual space?',
          'How will it coordinate with cabinetry, tile, lighting, outlets, and fixtures?',
          'Are multiple panels or a large single installation more appropriate?',
          'What edge and finishing details are suitable for the application?',
          'Is the wall ready and accessible for accurate measuring and installation?',
        ],
      },
      {
        heading: 'Professional Installation Completes the Design',
        paragraphs: [
          "A custom mirror can be one of the most visually effective upgrades in an interior, but the installation needs to be planned carefully. Accurate measurements, proper handling, suitable installation methods, and attention to finished surfaces all contribute to a clean final result.",
          "Finelines Glass provides custom mirrors and professional glass installation for residential, renovation, and commercial projects. Contact Finelines Glass to discuss your project.",
        ],
      },
    ],
    ctaNote: 'Looking for a custom mirror for your home or business? Finelines Glass works with homeowners, designers, builders, and contractors on custom mirror projects. Contact us to discuss your space, design goals, dimensions, and installation requirements.',
  },
  {
    slug: 'choosing-shower-glass-hardware-finishes',
    title: 'Choosing Shower Glass Hardware Finishes for Your Bathroom',
    seoTitle: 'Choosing Shower Glass Hardware Finishes | Finelines Glass',
    metaDescription: 'A guide to choosing shower glass hardware finishes — hinges, handles, and clamps — that coordinate with your bathroom’s faucets, cabinetry, and lighting, from Finelines Glass.',
    keywords: ['shower glass hardware finishes', 'shower hinge finishes', 'shower door hardware', 'matte black shower hardware', 'brushed nickel shower hardware', 'shower glass hardware Vancouver', 'shower glass hardware Surrey', 'CRL shower hardware'],
    publishDate: 'October 26, 2026',
    publishAt: '2026-10-26T06:00:00-07:00',
    heroImage: '/images/articles/choosing-shower-glass-hardware-finishes.webp',
    heroImageAlt: 'A shower enclosure with matte black hardware next to a chart of shower glass hinge finish families, from polished chrome to modern gold',
    excerpt: 'Shower hardware is a small part of a bathroom renovation, but it can have a major visual impact — here’s how to choose a hinge and handle finish that belongs with the rest of your bathroom design.',
    intro: [
      "Shower hardware is a small part of a bathroom renovation, but it can have a major visual impact. The hinge, pull handle, clamps and other visible components become design details that should work with the faucet, shower system, cabinet hardware, lighting and other metal accents. This guide explains the main finish families and the practical decisions to consider before ordering a custom shower enclosure.",
    ],
    blocks: [
      {
        heading: '1. Start With the Overall Bathroom Design',
        intro: 'Before selecting a hinge finish, look at the bathroom as one composition. Identify the dominant metal finishes already being used and decide whether the shower hardware should match them, complement them, or deliberately create contrast. A consistent finish usually produces a calm, coordinated appearance, while a controlled contrast can create a stronger contemporary look.',
        bullets: [
          'Faucet and shower-system finish',
          'Cabinet knobs and pulls',
          'Towel bars and bathroom accessories',
          'Lighting trim and visible metal accents',
          'Door, mirror and other interior hardware',
        ],
      },
      {
        heading: '2. Understand the Finish Families',
        intro: "CRL's shower hardware collection organizes finishes across several visual families. Exact finish availability depends on the specific hardware series, so the finish should be selected together with the hinge or handle model rather than treated as a separate decision.",
        items: [
          { title: 'Cool Metals', body: 'Polished Chrome, Brushed Chrome, Matte Black' },
          { title: 'Neutral Metals', body: 'Polished Stainless Steel, Brushed Stainless Steel' },
          { title: 'Warm White Metals', body: 'Brushed Nickel, Polished Nickel, Satin Nickel, Gunmetal, Matte Gunmetal, Oil Rubbed Bronze' },
          { title: 'Warm Yellow Metals', body: 'Polished Brass, Satin Brass, Vintage Brass, Brushed Bronze, Dark Brushed Bronze, French Gold, Modern Gold' },
          { title: 'Pink Toned', body: 'Rose Gold' },
          { title: 'Unlacquered / Living Finish', body: 'Unlacquered Brass' },
        ],
      },
      {
        heading: '3. Match, Coordinate or Contrast?',
        items: [
          { title: 'Match', body: 'Use the same finish across the shower and other major bathroom hardware. This is the safest choice for a clean, unified design.' },
          { title: 'Coordinate', body: 'Use finishes that belong to the same visual temperature — for example, different brushed or warm-metal treatments — while keeping the overall palette controlled.' },
          { title: 'Contrast', body: 'Use a deliberately different finish as a design statement. Matte black hardware against a light stone bathroom is a common example, but the contrast works best when it is repeated elsewhere in the room.' },
        ],
      },
      {
        heading: '4. Why the Hinge Model Matters',
        intro: 'Finish is only one part of the selection. The hinge geometry, mounting configuration, door size, glass thickness and enclosure layout also need to be considered. A beautiful finish cannot compensate for hardware that is not appropriate for the door configuration or site conditions.',
        bullets: [
          'Wall-to-glass versus glass-to-glass mounting',
          'Door dimensions and weight',
          'Tempered glass thickness and configuration',
          'Required hinge swing and door clearance',
          'Placement of handles, seals and other hardware',
          'Wall structure and finished tile conditions',
        ],
      },
      {
        heading: '5. Think About Maintenance',
        paragraphs: [
          'Different finishes can show water spots, fingerprints and mineral deposits differently. A bathroom with hard water may require more frequent cleaning regardless of the finish selected. The best approach is to choose a finish that fits both the design and the maintenance expectations of the homeowner.',
        ],
      },
      {
        heading: '6. Coordinate the Hardware Before the Glass Is Ordered',
        paragraphs: [
          'Hardware decisions should be made early enough that the glass layout, door location and mounting requirements can be reviewed together. This is especially important when a designer or contractor has already specified faucets, cabinetry, tile and other finishes.',
        ],
        note: 'For designers and contractors: Early coordination helps reduce last-minute finish changes, avoids conflicts between hardware and the enclosure layout, and gives the homeowner a clearer picture of the completed bathroom.',
      },
      {
        heading: '7. Questions to Ask Before Selecting a Finish',
        bullets: [
          'What finish is being used on the faucet and shower system?',
          'Are the cabinet pulls and bathroom accessories matching or intentionally different?',
          'Will the shower hardware be a visual feature or a subtle detail?',
          'Which hinge style fits the glass configuration?',
          'Is the selected finish available for the required hardware series?',
          'How will the finish look with the tile, stone, lighting and mirror?',
          'Who will confirm the final hardware specification before fabrication?',
        ],
      },
      {
        heading: '8. The Finelines Approach',
        paragraphs: [
          'A custom glass enclosure should be treated as part of the bathroom design — not simply as a piece of glass installed at the end of the renovation. Finelines Glass can work with homeowners, interior designers and contractors to review the enclosure configuration, hardware style and finish selection before installation.',
          'The goal is a finished shower that combines clean glass lines, properly selected hardware and a finish that belongs naturally in the space.',
        ],
      },
      {
        heading: 'Recommended Applications',
        bullets: [
          'Frameless shower enclosures',
          'Custom glass shower doors',
          'Glass-to-glass shower configurations',
          'Wall-mounted shower door systems',
          'Custom shower hardware coordination',
          'Renovation and new-build bathroom projects',
        ],
      },
    ],
    ctaNote: 'Ready to plan your shower enclosure? Bring your bathroom finish selections, renovation plans or design drawings to the conversation early. The right hardware finish is easier to achieve when the glass, hardware and surrounding finishes are coordinated from the beginning.',
    tagline: 'Supplier reference: CRL Canada shower hardware finish collection and finish guide. Finish names and availability may vary by hardware series and product selection.',
  },
  {
    slug: 'what-affects-the-cost-of-a-glass-project',
    title: 'What Affects the Cost of a Glass Shower, Railing, or Custom Glass Project?',
    seoTitle: 'What Affects the Cost of a Glass Project? | Finelines Glass',
    metaDescription: 'Why glass showers, railings, and custom glass are quoted after a site visit: the site conditions, glass, hardware, and job complexity that shape the final price.',
    keywords: ['glass shower cost Vancouver', 'glass railing cost Vancouver', 'frameless shower price', 'custom glass quote', 'glass installation estimate', 'what affects glass installation cost'],
    publishDate: 'November 2, 2026',
    publishAt: '2026-11-02T06:00:00-08:00', // PST: daylight saving ends Nov 1
    heroImage: '/images/articles/what-affects-the-cost-of-a-glass-project.webp',
    heroImageAlt: 'A frameless glass shower enclosure, a glass stair railing and an exterior glass deck railing, with the factors that shape a glass project cost: material selection, design and complexity, and installation requirements',
    heroImagePosition: 'left center', // banner text sits on the left, keep it in the card crop
    excerpt: "\"How much does it cost?\" is the first question almost everyone asks. The honest answer is that it depends on the site and the job, and here's what actually moves the number.",
    intro: [
      '"How much will it cost?" is usually the first question people ask about a glass shower, a railing, or a custom glass piece, and it is a fair one. The honest answer is that it depends on what we find on site and how involved the job is.',
      'Two showers that look similar in a photo can be very different jobs once we see the walls, the floor, and the access. That is why Finelines Glass quotes every project after looking at the actual space, rather than giving a price list that would not hold up.',
      'This guide explains what shapes the cost of a glass project, so you know what to expect and how to get an accurate estimate quickly.',
    ],
    blocks: [
      {
        heading: 'The Site Itself',
        intro: 'Conditions on site are the biggest reason prices vary from job to job.',
        items: [
          { title: 'Walls, floors, and openings', body: 'Walls that are out of plumb, floors that slope, or openings that are not square all change how the glass has to be measured, cut, and fitted.' },
          { title: 'What the glass attaches to', body: 'Tile, stone, drywall, concrete, and wood framing each need different fixing methods. Railings also depend on the structure underneath the deck, balcony, or stair.' },
          { title: 'Access', body: 'Stairs, narrow hallways, elevators, upper floors, and how close we can park all affect how large panels are carried in and how many people the job needs.' },
          { title: 'Existing glass or fixtures', body: 'Removing an old shower door, railing, mirror, or window adds work compared with installing into a clean, ready opening.' },
        ],
      },
      {
        heading: 'How Complex the Job Is',
        items: [
          { title: 'Size and number of panels', body: 'More glass and more panels mean more material, more hardware, and more installation time.' },
          { title: 'Layout and angles', body: 'A straight inline shower is simpler than a neo-angle or a return panel. Stairs and curved or stepped railings take more planning than a straight run.' },
          { title: 'Cut-outs and custom shapes', body: 'Notches around tile, sloped ceilings, outlets, or trim, and one-off shapes all add fabrication work.' },
          { title: 'Coordination with other trades', body: 'On renovations and new builds, timing the install around tile, plumbing, framing, and finishing can affect the schedule and the number of visits.' },
        ],
      },
      {
        heading: 'Glass and Hardware Choices',
        items: [
          { title: 'Glass type and thickness', body: 'Clear, low-iron, frosted, tinted, and mirrored glass, along with the thickness the design calls for, all carry different costs.' },
          { title: 'Hardware and finish', body: 'Hinges, handles, clamps, standoffs, and railing systems come in many finishes. Standard finishes are usually quicker to source, while specialty finishes can cost more and take longer to arrive.' },
          { title: 'Safety and code requirements', body: 'Tempered safety glass, railing heights, and load requirements are set by the application and the BC Building Code. Some projects also need engineering or a permit, which we flag early.' },
        ],
      },
      {
        heading: 'Why We Quote After Seeing the Space',
        flow: ['Tell us about the project', 'Site visit & measure', 'Written estimate', 'Install'],
        paragraphs: [
          'Every frameless enclosure, railing, and custom piece is measured and templated on site, because the glass has to fit the real walls and floors, not an ideal drawing. Seeing the space first is what lets us give you a price that will not change once the work starts.',
          'A quote given without that visit has to either guess high to cover surprises, or guess low and change later. Neither is fair to you.',
        ],
      },
      {
        heading: 'How to Get an Accurate Estimate Faster',
        intro: 'You can help us scope the job before the site visit by sending:',
        bullets: [
          'A few photos of the space, including the walls, floor, and any existing glass.',
          'Rough dimensions, if you have them.',
          'Your location and when you would like the work done.',
          'Any design ideas, such as glass type, hardware finish, or inspiration photos.',
          'Plans or drawings from your designer or contractor, for renovations and new builds.',
        ],
        note: 'Our estimate request form lets you attach a photo or PDF, which is often the quickest way to get started.',
      },
      {
        heading: 'Frequently Asked Questions',
        items: [
          { title: 'Can you give me a price over the phone?', body: 'We are happy to talk through your project and what will affect the cost, but a firm price comes after we have seen and measured the space.' },
          { title: 'Is the estimate free?', body: 'Requesting an estimate carries no obligation. Tell us about your project and we will walk you through the options.' },
          { title: 'Will the price change after the quote?', body: 'Measuring on site before quoting is how we avoid surprises. If you change the design, glass, or hardware after the quote, we will update it with you before going ahead.' },
          { title: 'Why do two similar-looking projects cost different amounts?', body: 'Site conditions, access, layout, and the glass and hardware chosen often differ more than photos suggest. Those details are what the price is built on.' },
        ],
      },
    ],
    ctaNote: "Ready to find out what your project involves? Request an estimate and tell us about the space, and we'll take it from there.",
    tagline: 'Every project is different. Final pricing is confirmed after a site visit and measurement.',
  },
  {
    slug: 'glass-shower-enclosures-for-small-bathrooms',
    title: 'Glass Shower Enclosures for Small Bathrooms',
    seoTitle: 'Glass Shower Enclosures for Small Bathrooms | Finelines Glass',
    metaDescription: 'Space-saving glass shower enclosure ideas for small bathrooms: door layout, light, hardware finishes, site conditions and cleaning, from Finelines Glass.',
    keywords: ['glass shower enclosures for small bathrooms', 'small bathroom shower glass', 'frameless shower small bathroom', 'shower door clearance', 'glass shower enclosure Vancouver', 'custom shower glass Lower Mainland'],
    publishDate: 'November 2, 2026',
    publishAt: '2026-11-02T00:00:00-08:00', // PST: daylight saving ends Nov 1
    heroImage: '/images/articles/glass-shower-enclosures-small-bathrooms.webp',
    heroImageAlt: 'A compact bathroom with a clear frameless glass shower enclosure, black hardware and a floating vanity',
    heroImagePosition: 'left center', // banner text sits on the left, keep it in the card crop
    excerpt: 'A small bathroom does not have to feel cramped. The right glass shower enclosure can create a cleaner sightline, let more light move through the room and help the design feel more cohesive.',
    intro: [
      "A small bathroom does not have to feel cramped. The right shower enclosure can create a cleaner sightline, let more light move through the room and help the overall design feel more cohesive. While glass does not increase the actual floor area, it can reduce the visual division created by a curtain or a bulky enclosure.",
    ],
    blocks: [
      {
        heading: '1. Keep the Design Visually Open',
        paragraphs: [
          "Clear glass is often a strong choice for compact bathrooms because it allows the eye to travel across the room and keeps tilework visible. Frameless or minimally framed designs can create a streamlined appearance, but the best solution depends on the bathroom layout, glass configuration, mounting conditions and project requirements.",
        ],
      },
      {
        heading: '2. Choose a Door Layout That Fits the Room',
        paragraphs: [
          "In a smaller bathroom, door clearance is a practical design decision. A hinged door needs room to swing without hitting the vanity, toilet, towel bar or other fixtures. Depending on the available space, a different hinge position, door orientation or fixed-panel arrangement may work better. These details should be considered before the glass is ordered.",
        ],
      },
      {
        heading: '3. Make the Most of Natural and Artificial Light',
        paragraphs: [
          "An opaque curtain or partition can interrupt light, while clear glass helps daylight and bathroom lighting reach more of the room. Pairing glass with well-planned lighting, a consistent tile palette and uncluttered surfaces can support a brighter, more spacious impression.",
        ],
      },
      {
        heading: '4. Coordinate Hardware With the Bathroom',
        paragraphs: [
          "Hinges, handles and other visible hardware contribute to the finished design. Chrome and stainless finishes can provide a restrained, timeless look; matte black creates contrast; and warmer metal tones can complement brass fixtures or wood cabinetry. Finish availability varies by hardware series, so confirm the available options for the selected product.",
        ],
      },
      {
        heading: '5. Review Site Conditions Before Fabrication',
        paragraphs: [
          "A successful enclosure begins with accurate measurements and a review of the finished opening. Tile alignment, wall plumb, curb or threshold details, floor slope, waterproofing and suitable mounting points can all affect the final layout. Coordinating these details early helps the glass fit the project and reduces the likelihood of avoidable changes.",
        ],
      },
      {
        heading: '6. Consider Cleaning and Everyday Use',
        paragraphs: [
          "Clear glass can show water spots and soap residue, so maintenance should be part of the decision. Regular rinsing or squeegeeing and using products suitable for the glass and hardware can help preserve the finish. Homeowners should follow the care instructions supplied for the specific glass treatment and hardware.",
        ],
      },
      {
        heading: 'Why Work With Finelines Glass?',
        paragraphs: [
          "A custom glass enclosure needs to balance appearance, function and the realities of the installation site. Finelines Glass works with homeowners, interior designers and contractors to coordinate enclosure layouts, hardware choices, measurements and installation requirements. Whether the project is a compact ensuite or part of a larger bathroom renovation, early coordination helps bring the design and the finished glass work together.",
        ],
      },
      {
        heading: 'Questions to Consider Before Ordering',
        bullets: [
          'Which enclosure layout best fits the room dimensions and nearby fixtures?',
          'Will the door open comfortably and safely within the available clearance?',
          'Which glass and hardware finishes complement the bathroom design?',
          'Have tile, curb, wall and mounting conditions been checked before fabrication?',
          'Who will coordinate final measurements and installation timing?',
        ],
      },
      {
        heading: 'Plan Your Bathroom Upgrade',
        paragraphs: [
          "If you are planning a bathroom renovation, Finelines Glass can help you assess the glass enclosure options for your space and coordinate the next steps with your project team. Discuss your layout, design preferences and site requirements before ordering so the finished enclosure supports both the look and the everyday function of your bathroom.",
        ],
      },
    ],
    ctaNote: 'Finelines Glass provides custom glass solutions and professional installation for homeowners, designers and contractors across Vancouver, the Lower Mainland and the Fraser Valley.',
    tagline: 'Final design, hardware selection and installation requirements depend on site conditions, measurements and product specifications.',
  },
  {
    slug: 'glass-office-partitions',
    title: 'Glass Office Partitions: Creating Bright, Flexible Workspaces',
    seoTitle: 'Glass Office Partitions: Bright, Flexible Workspaces | Finelines Glass',
    metaDescription: 'How interior glass office partitions bring light into the workplace, define meeting rooms and offices, and what to plan for privacy, hardware, acoustics and coordination.',
    keywords: ['glass office partitions', 'office glass partitions Vancouver', 'glass meeting room', 'black framed glass partitions', 'privacy glass office', 'commercial glass installation Lower Mainland'],
    publishDate: 'November 9, 2026',
    publishAt: '2026-11-09T00:00:00-08:00',
    heroImage: '/images/articles/glass-office-partitions.webp',
    heroImageAlt: 'A glass-walled meeting room with black-framed glass partitions in a bright modern office',
    heroImagePosition: 'left center',
    excerpt: "Today's workplaces need to balance collaboration, privacy and flexibility. Interior glass partitions define meeting rooms, offices and shared areas without making the floor plan feel closed off.",
    intro: [
      "Today's workplaces often need to balance collaboration, privacy and flexibility. Interior glass partitions help define meeting rooms, offices and shared areas without making the floor plan feel closed off. By allowing sightlines and light to pass through, glass can create a more open atmosphere while maintaining clear boundaries between different functions.",
    ],
    blocks: [
      {
        heading: '1. Bring More Light Into the Office',
        paragraphs: [
          "Opaque walls can block daylight from reaching the interior of a floor plan. Glass partitions can help daylight travel farther into adjacent spaces, depending on the building layout and glazing configuration. The result can feel brighter and more connected, especially when meeting rooms sit near windows or along the main circulation route.",
        ],
      },
      {
        heading: '2. Define Spaces Without Making Them Feel Closed In',
        paragraphs: [
          "Glass can separate a conference room, private office, reception area or collaboration zone while preserving visual continuity. This is useful for businesses that want a clean architectural look but do not want every room to feel boxed in. Partition layouts should still provide suitable circulation, door access and clearances for the way each space will be used.",
        ],
      },
      {
        heading: '3. Choose the Right Level of Privacy',
        paragraphs: [
          "Not every room needs the same degree of visibility. Clear glass suits spaces where openness is a priority, while frosted, patterned or privacy-treated glass can help reduce direct views into meeting rooms and offices. Privacy requirements should be discussed early, particularly for rooms used for confidential conversations, human resources, financial discussions or client meetings.",
        ],
      },
      {
        heading: '4. Consider Framing and Hardware',
        paragraphs: [
          "The appearance of a glass partition depends on more than the glass itself. Minimal hardware can create a clean, understated look, while black-framed systems can introduce strong lines and a more defined industrial or contemporary style. Door pulls, hinges, framing and other visible components should coordinate with the overall interior design and intended use.",
        ],
      },
      {
        heading: '5. Plan for Acoustics and Function',
        paragraphs: [
          "Glass partitions can define rooms visually, but they do not automatically provide the same acoustic performance as a fully constructed wall. Sound control depends on the complete system, including glass specification, seals, door gaps, framing and installation details. If speech privacy or noise reduction is important, discuss those requirements with the design and construction team before selecting a system.",
        ],
      },
      {
        heading: '6. Coordinate the Design Before Construction',
        paragraphs: [
          "Successful commercial glass installation begins with coordination. Floor plans, ceiling conditions, finished floor levels, door locations, adjacent finishes and building requirements should be reviewed before fabrication. Early communication between the client, designer, contractor and glass installer can help reduce conflicts and support a smoother installation process.",
        ],
      },
      {
        heading: 'Questions to Ask Before Installing Glass Partitions',
        intro: 'Before finalizing an office partition layout, consider the following questions with your project team:',
        bullets: [
          'Which areas need visual openness, and which need privacy?',
          'Will the partition include hinged doors, sliding doors or fixed glass panels?',
          'Is sound control important for meeting rooms or private offices?',
          'Which glass treatment, framing and hardware best suit the design?',
          'Have ceiling, floor, wall and door clearances been confirmed?',
          'Are building, accessibility, fire-safety and other applicable requirements being addressed by the project team?',
          'Who is responsible for final site measurements and coordinating installation timing?',
        ],
      },
      {
        heading: 'Why Work With Finelines Glass?',
        paragraphs: [
          "Glass partitions are both a design feature and a functional part of a commercial interior. Finelines Glass works with business owners, interior designers, architects and contractors to coordinate glass layouts, hardware details, site measurements and installation requirements. From meeting-room enclosures to black-framed office partitions and privacy-glass applications, our focus is on helping each project achieve a clean, professional finish.",
        ],
      },
      {
        heading: 'Plan Your Office Glass Project',
        paragraphs: [
          "Whether you are updating an existing office or planning a new commercial space, involve your glass installer early. Discuss the room layout, privacy needs, door configuration, finishes and site conditions before final specifications are approved. This gives your project team a clearer path from design intent to installation.",
        ],
      },
    ],
    ctaNote: 'Planning a commercial renovation? Contact Finelines Glass to discuss glass office partitions, meeting-room enclosures and privacy-glass options for your project.',
    tagline: 'Serving Vancouver, the Lower Mainland and the Fraser Valley. Final system selection depends on project requirements, site conditions and product specifications.',
  },
  {
    slug: 'glass-stair-railings-mounting-safety-care',
    title: 'Glass Stair Railings: Mounting Options, Safety and Long-Term Care',
    seoTitle: 'Glass Stair Railings: Mounting, Safety & Care | Finelines Glass',
    metaDescription: 'Planning a glass stair railing? How base shoe, post, clamp and side-mount systems compare, what safety details to confirm, and how to keep the railing looking its best.',
    keywords: ['glass stair railing', 'glass staircase railing', 'interior glass railing', 'glass railing mounting options', 'base shoe glass railing', 'glass stair railing Vancouver'],
    publishDate: 'November 16, 2026',
    publishAt: '2026-11-16T00:00:00-08:00',
    heroImage: '/images/articles/glass-stair-railings-mounting-safety-care.webp',
    heroImageAlt: 'Interior glass stair railings with standoff-mounted panels, stainless and wood handrails in modern homes',
    heroImagePosition: 'left center',
    excerpt: 'A glass stair railing can make a staircase feel lighter and let light move between floors. Here is how the mounting options compare, what safety details to confirm, and how to care for the railing over time.',
    intro: [
      "A staircase is often one of the first things people see when they walk into a home. A glass stair railing lets light move between floors, keeps sightlines open and makes the staircase feel lighter than a solid wall or a row of balusters. Getting that clean look depends on choosing the right mounting system, confirming the safety details early and planning for how the railing will be used and cleaned every day.",
    ],
    blocks: [
      {
        heading: '1. Where Glass Works on a Staircase',
        paragraphs: [
          "Glass can be used along the open side of a staircase, around the stairwell opening on an upper floor, and across interior landings and lofts. Because a stair railing is touched and passed every day, the layout should consider where people will hold on, how the glass meets walls and newel locations, and how the railing transitions from the sloped stair run to the level landing.",
        ],
      },
      {
        heading: '2. Compare the Mounting Options',
        paragraphs: [
          "Glass stair railings are usually supported in one of a few ways. A base shoe or channel holds the bottom edge of the glass in a continuous track, which gives a very clean, uninterrupted look. Posts with clamps support the glass at set points and introduce more visible metal. Standoff or side-mounted hardware attaches the glass to the face of the stair stringer or floor edge, which can keep the stair treads clear and suits many contemporary designs.",
          "The right choice depends on the stair structure, the available edge distance, the finish materials and the look you want. Mounting should be planned with the appropriate design and building professionals rather than chosen on appearance alone.",
        ],
      },
      {
        heading: '3. Choose a Look That Fits the Home',
        paragraphs: [
          "A frameless-style railing puts the focus on the glass itself, while posts, channels or a top rail add more defined lines. A handrail is often part of a stair design, and its material and finish set much of the overall character. Consider how hardware finishes relate to other metal details in the home, such as door hardware, light fixtures and window frames.",
        ],
      },
      {
        heading: '4. Safety Starts With the Complete System',
        paragraphs: [
          "A stair railing is a protective barrier, so its design must account for the applicable building requirements, including height, openings, handrail needs and loads, together with the specified glass and hardware system. Glass type, thickness, edge treatment, support spacing and anchorage all matter. Requirements can vary by jurisdiction, so confirm the applicable code and engineered requirements before fabrication or installation.",
        ],
      },
      {
        heading: '5. Plan Around the Stair Structure and Finishes',
        paragraphs: [
          "Mounting a glass railing on a staircase means working with the stringers, framing, flooring and wall finishes. Blocking or structural support may need to be in place before drywall and flooring go in, and finished surfaces such as hardwood, tile or stone need careful handling during installation. Bringing the glass installer in before finishes are complete makes it easier to coordinate these details.",
        ],
      },
      {
        heading: '6. Keep Cleaning and Long-Term Care in Mind',
        paragraphs: [
          "Indoor glass railings stay out of the weather, but fingerprints and dust build up quickly on a busy staircase, especially at hand height. Consider how easily each side of the glass can be reached for cleaning, including panels over an open stairwell. Hardware and glass should be cared for according to the product manufacturer's instructions, and the railing should be checked periodically for signs of movement, damage or loose components. Any concern about structural integrity should be assessed by a qualified professional.",
        ],
      },
      {
        heading: 'Questions to Discuss Before Installation',
        intro: 'Early planning helps the railing work with both the staircase design and the construction details. Discuss these questions with your project team:',
        bullets: [
          'Which parts of the staircase, landing or stairwell opening will have glass?',
          'Which mounting style suits the stair structure and the look you want?',
          'Is there enough structural support and edge distance for the chosen system?',
          'Will the design include a handrail, and how will it be attached?',
          'Have the railing height, openings and loads been checked against applicable codes and design requirements?',
          'Will flooring and wall finishes be installed before or after the glass?',
          'Who will coordinate final measurements, fabrication and installation timing?',
        ],
      },
      {
        heading: 'Why Work With Finelines Glass?',
        paragraphs: [
          "A glass stair railing needs to look right, fit the structure and be installed as part of a coordinated system. Finelines Glass works with homeowners, designers and contractors to review layouts, coordinate hardware and mounting details, and plan installation around the project conditions, with the goal of a clean, professional finish that complements the home.",
        ],
      },
      {
        heading: 'Planning a Glass Stair Railing?',
        paragraphs: [
          "Whether you are renovating an existing staircase or designing a new home, bring the glass railing into the conversation early. Share the drawings, finish selections and site details with your project team so mounting and safety requirements can be addressed before fabrication. For balconies and decks, see our article on exterior glass railings.",
        ],
      },
    ],
    ctaNote: 'Ready to discuss your staircase? Contact Finelines Glass to talk through glass stair railing options for your home or renovation.',
    tagline: 'Serving Vancouver, the Lower Mainland and the Fraser Valley. Final design and installation requirements depend on site conditions, product specifications and applicable codes.',
  },
  {
    slug: 'exterior-glass-railings-balconies-decks',
    title: 'Exterior Glass Railings: Design, Safety & Installation Considerations for Balconies and Decks',
    seoTitle: 'Exterior Glass Railings for Balconies & Decks | Finelines Glass',
    metaDescription: 'Planning exterior glass railings for a balcony or deck: railing style, mounting, waterproofing, safety, weather exposure and early coordination with your project team.',
    keywords: ['exterior glass railings', 'glass balcony railings', 'glass deck railings', 'balcony railing waterproofing', 'glass railing installation Vancouver', 'glass railings Fraser Valley'],
    publishDate: 'November 23, 2026',
    publishAt: '2026-11-23T00:00:00-08:00',
    heroImage: '/images/articles/exterior-glass-railings-balconies-decks.webp',
    heroImageAlt: 'A balcony with a frameless exterior glass railing overlooking the water and mountains at sunset',
    heroImagePosition: 'left center',
    excerpt: 'Exterior glass railings keep the view connected to your balcony or deck. Here is what to plan for style, mounting, waterproofing, safety and weather exposure.',
    intro: [
      "A balcony or deck can be one of the most enjoyable parts of a home, especially when it opens onto a garden, water or mountain views. Exterior glass railings provide a protective boundary while keeping the surrounding landscape visually connected to the outdoor living area. Their clean lines suit many contemporary homes, but the right design depends on the building, the intended use of the space and the conditions at the installation site.",
    ],
    blocks: [
      {
        heading: '1. Choose a Railing Style That Suits the Property',
        paragraphs: [
          "Glass railing systems can be designed with a minimal appearance or with visible posts, channels and top rails. A more uninterrupted glass line can help preserve views, while posts or rails may complement other architectural details. The decision should consider the home's style, the shape of the balcony or deck, the preferred hardware finish and the requirements of the selected railing system.",
        ],
      },
      {
        heading: '2. Understand the Mounting Configuration',
        paragraphs: [
          "Exterior glass railings may use a base shoe or channel, posts, clamps or other system-specific supports. Depending on the design, the system may be mounted on top of the deck or slab, or attached at the side of the structure. Each method has different structural, dimensional and waterproofing implications. The supporting structure and anchorage must be appropriate for the system and the loads it is expected to resist.",
        ],
      },
      {
        heading: '3. Treat Waterproofing as a Key Design Detail',
        paragraphs: [
          "Balconies and elevated decks often rely on a waterproofing membrane to protect the building below. Railing posts or anchors can create penetrations that need careful coordination with the waterproofing design. The location and method of attachment should be reviewed with the project team before installation, especially where membranes, drainage paths and finished surfaces meet. Do not assume a sealant alone resolves every waterproofing requirement.",
        ],
      },
      {
        heading: '4. Safety Depends on the Complete Railing System',
        paragraphs: [
          "Glass railings are protective barriers, so the glass, supports, anchors, edge conditions and overall layout must be selected for the project. Applicable requirements may address railing height, openings, loads, glass type and other details. Requirements vary by jurisdiction and building conditions; confirm the applicable building code and any engineering specifications before fabrication. A visually appealing system should never be selected on appearance alone.",
        ],
      },
      {
        heading: '5. Consider Weather, Drainage and Long-Term Exposure',
        paragraphs: [
          "Outdoor installations are exposed to rain, temperature changes, wind-driven moisture, dirt and other environmental conditions. Hardware and support components must be suitable for the exposure. Drainage should remain functional, and the design should avoid creating details that trap water or make routine cleaning difficult. Periodic inspection can help identify damaged glass, corrosion, loose components or other issues that need professional attention.",
        ],
      },
      {
        heading: '6. Select Glass and Hardware With the Setting in Mind',
        paragraphs: [
          "The right glass specification and hardware depend on the railing system, the location and the project requirements. Hardware finishes can be chosen to coordinate with exterior doors, window frames and other architectural details. For coastal or highly exposed locations, confirm with the supplier that the selected components are suitable for the environment and maintenance expectations.",
        ],
      },
      {
        heading: '7. Coordinate Early With the Project Team',
        paragraphs: [
          "Glass railings are easier to plan when the glass installer is involved before deck finishes and waterproofing details are finalized. Drawings, dimensions, substrate conditions, edge distances, drainage, finish selections and installation sequence should be reviewed with the builder, designer and relevant technical professionals. Early coordination can help reduce site conflicts and avoid changes after materials have been ordered.",
        ],
      },
      {
        heading: 'Questions to Discuss Before Installation',
        intro: 'Use these questions to guide early conversations with your contractor, designer and glass railing installer:',
        bullets: [
          'Which railing style best suits the architecture and preserves the desired view?',
          'What mounting system is appropriate for the deck, slab or balcony edge?',
          'Have the supporting structure, anchorage and project loads been reviewed?',
          'How will mounting details coordinate with the waterproofing membrane and drainage?',
          'Are the glass and hardware specifications suitable for the location and exposure?',
          'Have applicable code requirements and any required engineering been confirmed?',
          'Who will coordinate final measurements, fabrication and installation timing?',
        ],
      },
      {
        heading: 'Why Work With Finelines Glass?',
        paragraphs: [
          "A well-designed exterior glass railing should complement the property while being planned around the real conditions of the building. Finelines Glass works with homeowners, designers and contractors to coordinate railing layouts, mounting details, glass and hardware selections, and installation requirements. Our focus is on clear communication, careful planning and a professional finish that fits the project.",
        ],
      },
      {
        heading: 'Planning a Balcony or Deck Upgrade?',
        paragraphs: [
          "Bring your glass railing into the conversation early, particularly when the project includes a waterproofing membrane, new deck finishes or structural changes. Sharing drawings and site details before fabrication helps the project team confirm the right approach for the location.",
        ],
      },
    ],
    ctaNote: 'Ready to discuss your project? Contact Finelines Glass to explore exterior glass railing options for your balcony, deck or residential renovation.',
    tagline: 'Serving Vancouver, the Lower Mainland and the Fraser Valley. Final system selection and installation requirements depend on site conditions, product specifications, applicable codes and any required engineering.',
  },
  {
    slug: 'shower-door-hardware-hinges-handles-finishes',
    title: 'Shower Door Hardware: Hinges, Handles & Finishes Explained',
    seoTitle: 'Shower Door Hardware: Hinges, Handles & Finishes | Finelines Glass',
    metaDescription: 'How shower door hinges, handles and finishes affect function, durability and bathroom design, and what to confirm before your glass is fabricated.',
    keywords: ['shower door hardware', 'shower door hinges', 'shower door handles', 'shower hardware finishes', 'frameless shower hardware', 'shower glass Vancouver'],
    publishDate: 'November 30, 2026',
    publishAt: '2026-11-30T00:00:00-08:00',
    heroImage: '/images/articles/shower-door-hardware-hinges-handles-finishes.webp',
    heroImageAlt: 'A frameless glass shower enclosure with matte black hinges and a pull handle in a modern bathroom',
    heroImagePosition: 'left center',
    excerpt: 'Shower hardware may be small compared with the glass and tile, but it plays an important role in how an enclosure looks and operates. Here is how to coordinate hinges, handles and finishes.',
    intro: [
      "Shower hardware may be small compared with the glass panels and tile, but it plays an important role in how an enclosure looks and operates. Hinges must support the door and suit the selected glass and mounting conditions. Handles need to be comfortable to use and placed appropriately. Finishes help connect the shower enclosure to faucets, cabinet pulls, lighting and other bathroom details.",
    ],
    blocks: [
      {
        heading: '1. Choose Hinges for the Door and Site Conditions',
        paragraphs: [
          "Hinge selection depends on the door configuration, glass specification, weight and dimensions, wall or glass mounting arrangement, and the hardware system's stated limits. Some hinges are designed for wall-to-glass applications; others connect glass panels. Door swing, clearances and the condition of the mounting surface should be reviewed before ordering. Hardware should be selected as part of a compatible system rather than by appearance alone.",
        ],
      },
      {
        heading: '2. Select a Handle That Suits Everyday Use',
        paragraphs: [
          "Shower handles range from compact knobs to longer pulls and combination pull/towel-bar designs. The right choice depends on the door layout, available clearance, user comfort and visual style. A handle should be easy to grip and positioned so it works naturally with the door's opening direction. The chosen handle must also be compatible with the glass thickness and hole preparation specified for the enclosure.",
        ],
      },
      {
        heading: '3. Coordinate the Finish With the Bathroom',
        paragraphs: [
          "Hardware finishes can create a quiet, coordinated look or a deliberate contrast. Polished chrome offers a bright, classic appearance; brushed stainless and nickel tones are often more subdued; matte black adds definition; and brass, bronze or gold-toned finishes can introduce warmth. The names and appearance of finishes vary between manufacturers, so compare actual samples when possible rather than assuming two products with similar names will match exactly.",
        ],
      },
      {
        heading: '4. Understand Common Finish Families',
        paragraphs: [
          "Cool metal tones such as chrome can complement contemporary white, grey or blue palettes. Neutral stainless finishes can blend with a range of styles. Warm finishes, including brass, bronze and gold tones, often work well with warm tile, wood cabinetry and warmer lighting. Matte black can coordinate with black faucets, window frames or lighting, but it can also be used as a deliberate accent. There is no single correct rule: consistency across key visible details is usually more important than matching every item exactly.",
        ],
      },
      {
        heading: '5. Check Availability by Hardware Series',
        paragraphs: [
          "Not every finish is available for every hinge, handle or accessory. Availability may differ by product series, hardware function and supplier. Before specifying a finish, confirm that it is offered for the exact components required and that the pieces are compatible with one another. Finelines Glass can help coordinate the glass enclosure and discuss hardware options available for the selected system.",
        ],
      },
      {
        heading: '6. Balance Appearance With Maintenance',
        paragraphs: [
          "All finishes need appropriate care. Water spots, soap residue and cleaning products can affect the appearance of glass and metal hardware over time. Use soft cloths and cleaning products recommended by the product manufacturer; avoid abrasive pads or harsh chemicals unless specifically approved. Some specialty finishes may require more careful maintenance, so review care instructions before making the final selection.",
        ],
      },
      {
        heading: '7. Plan Hardware Before the Glass Is Fabricated',
        paragraphs: [
          "Hinges, handles and clamps can affect glass dimensions, cut-outs, clearances and mounting details. Confirming hardware choices early helps the project team coordinate the required glass preparation and installation method. Changes made after fabrication may be difficult or costly, so the selected hardware, door swing and site measurements should be checked before the order is finalized.",
        ],
      },
      {
        heading: 'Questions to Ask Before Choosing Hardware',
        intro: 'Consider these questions with your designer, contractor or glass installer:',
        bullets: [
          'Which hinge type suits the door configuration, glass and mounting surface?',
          'Will the door swing freely without hitting nearby fixtures or walls?',
          'Which handle style is comfortable and appropriate for the enclosure?',
          'Are the selected finishes available across the required hardware pieces?',
          'Have the hardware, glass thickness, cut-outs and measurements been confirmed together?',
          'What cleaning products and maintenance routine are recommended for the chosen finish?',
        ],
      },
      {
        heading: 'Why Work With Finelines Glass?',
        paragraphs: [
          "A well-finished shower enclosure depends on the relationship between glass, hardware, site conditions and installation. Finelines Glass works with homeowners, designers and contractors to coordinate custom shower glass, hinge and handle choices, finish details and installation requirements. Our goal is to help each enclosure look cohesive, operate smoothly and suit the needs of the space.",
        ],
      },
      {
        heading: 'Planning a Bathroom Upgrade?',
        paragraphs: [
          "If you are renovating a bathroom or specifying a new shower enclosure, discuss hardware and finish choices before the glass is fabricated. Early coordination helps confirm compatibility, clearances and the intended design.",
        ],
      },
    ],
    ctaNote: 'Ready to plan your shower enclosure? Contact Finelines Glass to discuss custom shower glass, hardware options and finish coordination for your project.',
    tagline: 'Serving Vancouver, the Lower Mainland and the Fraser Valley. Final hardware availability and installation requirements depend on the selected product series, site conditions and project specifications.',
  },
  {
    slug: 'glass-backsplashes-for-modern-kitchens',
    title: 'Glass Backsplashes for Modern Kitchens',
    seoTitle: 'Glass Backsplashes for Modern Kitchens | Finelines Glass',
    metaDescription: 'Choosing a glass or mirror backsplash for a modern kitchen: glass selection, finishes, cut-outs, heat and moisture near the cooktop, and everyday care.',
    keywords: ['glass backsplash', 'kitchen glass backsplash', 'mirror backsplash', 'glass backsplash Vancouver', 'custom glass backsplash Lower Mainland', 'backsplash glass installation'],
    publishDate: 'December 7, 2026',
    publishAt: '2026-12-07T00:00:00-08:00',
    heroImage: '/images/articles/glass-backsplashes-modern-kitchens.webp',
    heroImageAlt: 'A modern kitchen with a smooth glass backsplash behind the cooktop and white stone countertops',
    heroImagePosition: 'left center',
    excerpt: 'A glass backsplash gives a kitchen a clean, contemporary look with fewer grout lines. Here is how to choose the right glass and finish, and what to plan around the cooktop, outlets and cabinets.',
    intro: [
      "A glass backsplash can give a kitchen a clean, contemporary appearance with fewer grout lines than many tiled surfaces. It can reflect light, complement cabinetry and countertops, and create a smooth visual finish behind a work area. The best choice depends on the kitchen layout, the cooking equipment, the desired colour and the glass product's suitability for the intended location.",
    ],
    blocks: [
      {
        heading: '1. Selecting the Right Glass',
        paragraphs: [
          "Not every type of glass is suitable for every backsplash location. Selection should account for the distance from cooktops and other heat sources, the mounting method, panel size, edge treatment, cut-outs and the manufacturer's specifications. Tempered or other specially processed glass may be appropriate in some applications, but the correct specification must be confirmed for the exact installation. Do not assume ordinary glass is suitable directly behind every type of stove or cooktop.",
        ],
      },
      {
        heading: '2. Mirror Backsplashes',
        paragraphs: [
          "Mirror backsplash panels can brighten a kitchen by reflecting available light and creating a sense of depth. They may work particularly well in selected areas where a reflective finish suits the overall design. Consider what the mirror will reflect, how visible fingerprints and splashes may be, and whether the location is suitable for the mirror product and its backing. Mirror is not automatically the right choice behind every cooktop; heat exposure and manufacturer guidance must be checked carefully before specifying it.",
        ],
      },
      {
        heading: '3. Clear, Tinted and Decorative Options',
        paragraphs: [
          "Depending on the design and product range, glass may be clear, tinted, textured or otherwise decorative. Clear glass is often used to protect a feature surface while allowing it to remain visible, whereas tinted or coloured glass can introduce a different tone. Decorative choices should be reviewed alongside countertop patterns, cabinet finishes and lighting so the backsplash complements rather than competes with the rest of the kitchen.",
        ],
      },
      {
        heading: '4. Plan Around Outlets, Cabinets and Countertops',
        paragraphs: [
          "Kitchen backsplashes often need precise cut-outs for electrical outlets, switches, fixtures or other penetrations. Cabinet undersides, countertop levels, corner conditions and appliance dimensions all affect panel measurements. Because custom glass is fabricated to order, the team should confirm when final measurements can be taken and whether cabinets, counters and other adjacent finishes must be fully installed first. Changes after fabrication can be costly or may require a new panel.",
        ],
      },
      {
        heading: '5. Heat, Moisture and Installation Requirements',
        paragraphs: [
          "Areas around cooking equipment can involve high temperatures, grease and frequent cleaning. The glass type, any backing or coating, adhesive or mounting system, and the distance from heat sources must all be appropriate for the specific location. Follow the product manufacturer's instructions and applicable requirements. Where there is uncertainty, especially behind gas or high-output cooking appliances, confirm the intended use with the glass supplier and qualified project professionals before proceeding.",
        ],
      },
      {
        heading: '6. Cleaning and Everyday Care',
        paragraphs: [
          "A smooth glass surface is generally straightforward to wipe down, but fingerprints, grease and water marks can still show. Use a soft cloth and a cleaner approved for the glass and its finish. Avoid abrasive pads or harsh chemicals unless specifically permitted. Mirror products may have particular care requirements at edges and on the coated side, so follow the supplier's guidance.",
        ],
      },
      {
        heading: 'Questions to Ask Before Ordering',
        intro: 'Before selecting a glass backsplash, discuss these points with your designer, contractor or glass installer:',
        bullets: [
          'Is this glass product suitable for the exact location, including the distance from the cooktop?',
          'Would clear, tinted or mirror glass best suit the design?',
          'Can I review a physical finish sample under my kitchen lighting?',
          'Have all outlet cut-outs, corners, appliance clearances and panel dimensions been confirmed?',
          'When should final measurements be taken, and are adjacent finishes ready?',
          'Which mounting method and cleaning instructions apply to this specific product?',
        ],
      },
      {
        heading: 'How Finelines Glass Can Help',
        paragraphs: [
          "A successful glass backsplash starts with choosing a suitable product and coordinating the details before fabrication. Finelines Glass works with homeowners, designers and contractors to review the intended look, site measurements, cut-outs, mounting details and installation sequence. Whether you are considering a mirror backsplash or another glass finish, we can discuss the practical considerations for your project and coordinate the installation requirements.",
        ],
      },
      {
        heading: 'Planning a Kitchen Upgrade?',
        paragraphs: [
          "Bring your glass installer into the conversation while cabinetry, countertops and appliances are being finalized. Early coordination helps confirm the right glass option, dimensions and site preparation before the panel is ordered.",
        ],
      },
    ],
    ctaNote: 'Ready to explore a glass backsplash? Contact Finelines Glass to discuss glass selection, mirror backsplash ideas and installation planning for your kitchen.',
    tagline: 'Serving Vancouver, the Lower Mainland and the Fraser Valley. Final glass selection and installation requirements depend on the product, heat exposure, site conditions and manufacturer specifications.',
  },
  {
    slug: 'framed-vs-frameless-glass',
    title: 'Framed vs. Frameless Glass: Which Design Is Right for Your Project?',
    seoTitle: 'Framed vs. Frameless Shower Glass: Which Is Right? | Finelines Glass',
    metaDescription: 'Framed or frameless shower glass? Compare appearance, glass and hardware needs, cleaning, water control and cost to choose the right enclosure for your bathroom.',
    keywords: ['framed vs frameless shower', 'frameless shower enclosure', 'framed shower enclosure', 'shower glass options', 'shower enclosure cost', 'shower glass Vancouver'],
    publishDate: 'December 14, 2026',
    publishAt: '2026-12-14T00:00:00-08:00',
    heroImage: '/images/articles/framed-vs-frameless-glass.webp',
    heroImageAlt: 'A black-framed glass shower enclosure side by side with a frameless glass shower enclosure',
    heroImagePosition: 'left center',
    excerpt: 'The choice between framed and frameless glass affects more than appearance. Compare looks, hardware, cleaning, water control and cost to find the right enclosure for your bathroom.',
    intro: [
      "When planning a bathroom renovation or a new shower enclosure, the choice between framed and frameless glass affects more than appearance. The enclosure must work with the room layout, door clearance, hardware, cleaning routine and project budget. Both styles can create a practical, attractive shower when the system is selected for the space and installed according to its specifications.",
    ],
    blocks: [
      {
        heading: 'What Is a Framed Shower Enclosure?',
        paragraphs: [
          "A framed enclosure uses a metal frame around some or all of the glass panels. The frame defines the enclosure visually and forms part of the system that supports and aligns the glass. Depending on the product, framed systems may offer a traditional look and a range of configurations. Their suitability depends on the specific design, hardware and site conditions, not simply on whether a frame is present.",
        ],
      },
      {
        heading: 'What Is a Frameless Shower Enclosure?',
        paragraphs: [
          "A frameless enclosure uses heavier glass panels and purpose-designed hinges, clamps or channels, with little or no surrounding metal framing. This creates a more open appearance and allows tile, stone and other finishes to remain visible. Frameless does not mean hardware-free: the glass still needs a compatible support and sealing system designed for the panel dimensions and installation conditions.",
        ],
      },
      {
        heading: '1. Appearance and Bathroom Style',
        paragraphs: [
          "Framed enclosures create more visible lines and can coordinate with black, chrome or other metal finishes used elsewhere in the bathroom. Frameless enclosures emphasize clean glass edges and a minimal look, often suiting contemporary bathrooms. Neither style is universally better. Consider the tile pattern, vanity, fixtures, available light and the overall architectural character of the space.",
        ],
      },
      {
        heading: '2. Glass, Hardware and Site Requirements',
        paragraphs: [
          "The glass specification and hardware must match the enclosure design, panel sizes, door configuration and mounting surfaces. Frameless doors place specific demands on hinges, clamps, anchors and the supporting structure. Framed systems also require accurate measurements and compatible components. Wall conditions, finished tile, curb or threshold details and available clearances should be checked before fabrication.",
        ],
      },
      {
        heading: '3. Cleaning and Maintenance',
        paragraphs: [
          "Both styles need regular cleaning. Frameless designs have fewer frame channels where residue may collect, but water spots and soap deposits can still show on glass and hardware. Framed enclosures may have additional edges or channels that need attention. Good ventilation, routine squeegeeing and manufacturer-approved cleaning products can help maintain either style. Actual maintenance depends on the enclosure design, water conditions and household use.",
        ],
      },
      {
        heading: '4. Water Control and Seals',
        paragraphs: [
          "A shower enclosure is not automatically watertight simply because it is framed or frameless. Water control depends on the layout, panel alignment, door gaps, seals, threshold or curb design, showerhead direction and installation quality. Some configurations are designed to manage incidental splash rather than contain all water. The proposed layout should be reviewed for the shower's size, spray pattern and drainage.",
        ],
      },
      {
        heading: '5. Cost and Overall Value',
        paragraphs: [
          "Pricing depends on more than the label 'framed' or 'frameless.' Glass dimensions and thickness, hardware type and finish, door style, site access, wall conditions and installation complexity all influence the final cost. A frameless enclosure may involve heavier glass and specialized hardware, while framed products have their own system-specific requirements. Compare complete, like-for-like specifications rather than assuming one style always costs a fixed amount more.",
        ],
      },
      {
        heading: '6. Which Option Fits Your Project?',
        paragraphs: [
          "A framed enclosure may suit a project where the preferred look, product configuration or budget aligns with an available framed system. Frameless glass may be a strong choice when a more open visual effect is a priority and the site can accommodate the required hardware and support. The best decision balances design goals with practical constraints, not trends alone.",
        ],
      },
      {
        heading: 'Questions to Ask Before Choosing',
        intro: 'Before selecting a shower enclosure, discuss these points with your designer, contractor or glass installer:',
        bullets: [
          "Which style best suits the bathroom's design and layout?",
          'Will the door open freely without hitting fixtures, walls or other doors?',
          'Are the walls, curb and finished surfaces suitable for the selected system?',
          'What glass and hardware specifications are required for the panel sizes?',
          'How will seals, door gaps and shower spray affect water control?',
          'What cleaning and maintenance routine does the manufacturer recommend?',
          'Have measurements and hardware choices been confirmed before fabrication?',
        ],
      },
      {
        heading: 'Why Work With Finelines Glass?',
        paragraphs: [
          "The right shower enclosure combines the desired appearance with careful measurement, compatible hardware and a layout suited to the room. Finelines Glass works with homeowners, designers and contractors to review framed and frameless options, coordinate finishes and plan the installation details. Our goal is to help each custom glass enclosure complement the bathroom and function well in everyday use.",
        ],
      },
      {
        heading: 'Planning a Bathroom Renovation?',
        paragraphs: [
          "Discuss the enclosure style early, before final measurements and glass fabrication. Sharing your layout, tile selections, fixture locations and hardware preferences helps the project team confirm door clearances, mounting conditions and the intended finish.",
        ],
      },
    ],
    ctaNote: 'Ready to discuss your shower enclosure? Contact Finelines Glass to explore framed and frameless glass options for your bathroom renovation or new build.',
    tagline: 'Serving Vancouver, the Lower Mainland and the Fraser Valley. Final product selection and installation requirements depend on the chosen system, site conditions and manufacturer specifications.',
  },
  {
    slug: 'early-glass-installer-coordination-renovation-projects',
    title: 'Why Early Glass-Installer Coordination Helps Renovation Projects',
    seoTitle: 'Why Early Glass-Installer Coordination Helps Renovations | Finelines Glass',
    metaDescription: 'Why bringing your glass installer in early makes renovations smoother: scope, measurement timing, mounting, hardware, trade coordination and a practical checklist.',
    keywords: ['glass installer coordination', 'renovation glass planning', 'when to measure shower glass', 'contractor glass installer', 'custom glass renovation Vancouver', 'glass installation schedule'],
    publishDate: 'December 21, 2026',
    publishAt: '2026-12-21T00:00:00-08:00',
    heroImage: '/images/articles/early-glass-installer-coordination.webp',
    heroImageAlt: 'A glass installer reviewing renovation drawings with a homeowner and designer beside a finished glass shower',
    heroImagePosition: 'left center',
    excerpt: 'Glass is often installed near the end of a renovation, but many decisions that shape the result happen much earlier. Here is how early coordination leads to a smoother installation.',
    intro: [
      "Glass is often installed near the end of a renovation, but many decisions that affect the final result need to happen much earlier. Shower enclosures, mirrors, glass backsplashes, railings and interior partitions all depend on accurate dimensions, suitable mounting conditions and coordination with surrounding finishes. Involving the glass installer during planning gives the project team time to identify requirements before they become last-minute problems.",
    ],
    blocks: [
      {
        heading: '1. Confirm the Design Intent and Scope',
        paragraphs: [
          "At the beginning, clarify what glass is being supplied, where it will be installed and what the finished result should look like. Review drawings, elevations, door locations, glass panel layouts, visible hardware and finish preferences. Confirming the scope helps the homeowner, designer, contractor and glass installer work toward the same outcome and reduces assumptions about what is included.",
        ],
      },
      {
        heading: '2. Coordinate Measurements With Construction Progress',
        paragraphs: [
          "Glass is commonly fabricated to specific site dimensions. Measuring too early, before tile, flooring, countertops or other relevant finishes are complete, can result in dimensions that no longer match the finished opening. On the other hand, waiting until the very end to involve the glass installer can leave too little time for site review, product selection and fabrication. Agree on when preliminary measurements, final field measurements and fabrication approval should occur.",
        ],
      },
      {
        heading: '3. Review Mounting and Substrate Conditions',
        paragraphs: [
          "Glass panels and hardware need suitable support. The installer and project team should review the surfaces where hinges, channels, clamps, anchors or other mounting components will attach. Wall construction, backing, slab edges, floor transitions and finished surfaces can all affect the installation method. For railings and other applications with structural or waterproofing implications, the relevant design and building professionals should confirm the required support and details before work proceeds.",
        ],
      },
      {
        heading: '4. Select Hardware and Finishes Before Ordering',
        paragraphs: [
          "Hinges, handles, clamps, channels and other visible components can affect both appearance and technical requirements. Finish availability may vary by product series, and hardware selection can influence glass cut-outs, clearances and door operation. Confirming choices early gives the team time to check compatibility and coordinate with faucets, cabinetry, window frames and other finishes without delaying fabrication.",
        ],
      },
      {
        heading: '5. Coordinate With Tile, Cabinetry and Other Trades',
        paragraphs: [
          "Glass installations often meet surfaces completed by other trades. Shower glass depends on finished tile, curb geometry and wall conditions; mirrors may need to align with lighting, outlets or vanities; backsplashes must fit around cabinets, counters and electrical cut-outs. Early communication helps establish responsibilities, identify dependencies and confirm which surfaces must be complete before final measurements or installation.",
        ],
      },
      {
        heading: '6. Plan the Schedule and Site Readiness',
        paragraphs: [
          "Custom glass typically requires time for final measurement, specification review, fabrication, delivery and installation. These steps should be built into the renovation schedule rather than treated as an immediate final task. Before installation, confirm that the work area is accessible, adjacent finishes are ready, mounting surfaces are suitable and other trades will not interfere with the work. A clear schedule helps reduce avoidable return visits and disruptions.",
        ],
      },
      {
        heading: '7. Resolve Questions Before Fabrication',
        paragraphs: [
          "Once custom glass has been fabricated, changes to panel dimensions, holes, edge details or hardware preparation may be difficult or costly to correct. Before approving an order, confirm the measurements, glass specification, finish, hardware, door swing, panel arrangement and any cut-outs. Make sure the people responsible for design, site preparation and installation have reviewed the same information.",
        ],
      },
      {
        heading: '8. Keep Communication Open Throughout the Project',
        paragraphs: [
          "Renovation conditions can change. If tile thickness, cabinet dimensions, fixture locations or construction details change, notify the glass installer before fabrication or installation proceeds. A simple process for sharing updated drawings, photos and site information helps everyone respond to changes in time. Clear communication is especially valuable when several trades work in the same area.",
        ],
      },
      {
        heading: 'A Practical Coordination Checklist',
        intro: 'Use this checklist with your contractor, designer and glass installer as the project moves from planning to installation.',
        bullets: [
          'Confirm the glass scope, intended layout and design requirements.',
          'Share current drawings, elevations and relevant site dimensions.',
          'Identify required backing, mounting locations and substrate conditions.',
          'Choose compatible hardware and confirm finish availability.',
          'Coordinate glass dimensions with tile, cabinetry, countertops and fixtures.',
          'Agree on preliminary and final measurement dates.',
          'Allow sufficient time for specification approval, fabrication and delivery.',
          'Confirm the area is ready, accessible and clear before installation.',
          'Communicate any site or design changes before fabrication or installation.',
        ],
      },
      {
        heading: 'How Finelines Glass Supports Renovation Projects',
        paragraphs: [
          "Finelines Glass works with homeowners, designers, builders and contractors to coordinate glass requirements with the wider renovation schedule. Early discussions can help clarify measurements, hardware and finish choices, mounting conditions, site readiness and installation timing. Whether the project includes a shower enclosure, custom mirror, glass backsplash, railing or interior partition, our focus is on clear communication and a well-coordinated installation.",
        ],
      },
      {
        heading: 'Bring Your Glass Installer Into the Plan Early',
        paragraphs: [
          "The best time to discuss glass is before the surrounding work is complete, not after every finish has been installed. Including the glass installer early gives the project team an opportunity to confirm requirements, schedule measurements and plan fabrication with fewer surprises.",
        ],
      },
    ],
    ctaNote: 'Planning a renovation or new build? Contact Finelines Glass early to discuss your glass scope, site conditions and installation schedule.',
    tagline: 'Serving Vancouver, the Lower Mainland and the Fraser Valley. Final measurements, product selection and installation timing depend on the project scope, site conditions and product specifications.',
  },
  {
    slug: 'plan-your-2027-glass-upgrade',
    title: 'Plan Your 2027 Upgrade: Glass Improvements for Homes and Businesses',
    seoTitle: 'Plan Your 2027 Glass Upgrade for Home or Business | Finelines Glass',
    metaDescription: 'Planning a 2027 upgrade? Shower enclosures, glass railings, custom mirrors, partitions and kitchen glass, plus how to build a practical glass-upgrade plan.',
    keywords: ['2027 home upgrade', 'glass renovation ideas', 'custom shower enclosure', 'glass railings', 'custom mirrors', 'glass partitions', 'glass installation Vancouver'],
    publishDate: 'December 28, 2026',
    publishAt: '2026-12-28T00:00:00-08:00',
    heroImage: '/images/articles/plan-your-2027-glass-upgrade.webp',
    heroImageAlt: 'A collage of a glass shower, a glass stair railing, a glass-walled meeting room and a kitchen glass backsplash',
    heroImagePosition: 'left center',
    excerpt: 'The end of the year is a good time to plan the improvements you want in 2027. Here are the glass upgrades to consider and how to build a practical plan.',
    intro: [
      "The end of the year is a useful time to identify improvements you want to make to your home or commercial space in 2027. Glass features can change how a room feels, improve sightlines, support privacy or contribute to a more cohesive design. A successful project starts by defining the purpose of the upgrade, reviewing the space and coordinating the glass work with the wider renovation plan.",
    ],
    blocks: [
      {
        heading: '1. Upgrade Your Bathroom With a Custom Shower Enclosure',
        paragraphs: [
          "A custom glass shower enclosure can help a bathroom feel more open and connect visually with tile, stone and other finishes. When planning an upgrade, consider the shower layout, door swing, access, glass configuration, hardware finish and cleaning routine. Wall conditions, finished tile, curb details and mounting requirements should be reviewed before final measurements and fabrication. Discuss the enclosure with your glass installer early enough to coordinate with the contractor and other trades.",
        ],
      },
      {
        heading: '2. Add Glass Railings to Open Up the View',
        paragraphs: [
          "Glass railings can preserve sightlines on balconies, decks, terraces and staircases while providing a clean architectural appearance. The appropriate system depends on the location, supporting structure, attachment method, design requirements and applicable building-code considerations. Railings are safety-critical assemblies, so the project team should confirm the required glass specification, support details, engineering or permit requirements where applicable, and installation method before ordering.",
        ],
      },
      {
        heading: '3. Use Custom Mirrors to Enhance Interior Spaces',
        paragraphs: [
          "Custom mirrors can reflect light and create a sense of depth in bathrooms, entryways, dressing areas, gyms and commercial interiors. Size, shape, edge treatment, mounting method and placement all affect the result. Planning should account for nearby lighting, outlets, moisture exposure and the surface that will support the mirror. Accurate measurements and coordination with cabinetry or other finishes help achieve a neat, integrated appearance.",
        ],
      },
      {
        heading: '4. Consider Interior Glass Partitions',
        paragraphs: [
          "Glass partitions can separate meeting rooms, offices or selected areas of a home while maintaining visual connection and allowing light to travel through a space. Clear glass supports openness; frosted or patterned options can provide additional visual privacy. Before choosing a system, consider door operation, sound privacy expectations, accessibility, attachment points and how the partition will meet walls, floors and ceilings.",
        ],
      },
      {
        heading: '5. Explore Specialty Glass for Kitchens and Interiors',
        paragraphs: [
          "Glass backsplashes and other specialty glass features can provide a smooth, contemporary finish. Mirror backsplash panels may suit selected areas where reflection is desired. Product suitability must be checked for the exact location, especially near cooktops or other heat sources. Confirm the glass specification, coating, edge details, mounting method and manufacturer requirements before fabrication.",
        ],
      },
      {
        heading: '6. Plan Hardware, Finishes and Details Early',
        paragraphs: [
          "Hinges, handles, clamps, channels and other visible hardware influence both function and appearance. Finishes may vary by product series, so confirm availability and compatibility for the components required. Hardware can also affect glass cut-outs, panel dimensions and door clearances. Early decisions give the project team time to coordinate these details with faucets, cabinetry, lighting and other finishes.",
        ],
      },
      {
        heading: '7. Coordinate the Project Before Work Begins',
        paragraphs: [
          "Custom glass is often fabricated to specific site dimensions. Final measurements may depend on completed tile, countertops, cabinetry, flooring or other adjacent finishes. Involving the glass installer early helps establish measurement timing, identify mounting or substrate requirements, confirm site readiness and allow time for fabrication and delivery. If the design or site conditions change, communicate the update before fabrication or installation proceeds.",
        ],
      },
      {
        heading: 'Build a Practical Glass-Upgrade Plan',
        paragraphs: [
          "Before requesting a quote, list the areas you want to improve and gather any available drawings, dimensions, photos and finish selections. Identify your priorities, such as appearance, privacy, easier cleaning, openness or replacement of an existing feature. Discuss the project timeline and any dependencies with your contractor or designer. The glass installer can then help review suitable options and identify details that need confirmation before an order is placed.",
        ],
      },
      {
        heading: 'Questions to Consider for Your 2027 Project',
        bullets: [
          'Which area would benefit most from a glass upgrade?',
          'What is the main goal: appearance, privacy, openness, function or replacement?',
          'Are there structural, mounting, heat, moisture or code requirements to review?',
          'Which glass type, hardware and finishes suit the space?',
          'When will final site measurements be possible?',
          'Who is coordinating the glass installer with the other trades?',
          'What is the target budget and preferred installation window?',
        ],
      },
      {
        heading: 'Plan With Finelines Glass',
        paragraphs: [
          "Finelines Glass works with homeowners, designers, builders and contractors on custom glass projects for residential and commercial spaces. From shower enclosures and mirrors to glass railings, interior partitions and specialty glass, our team can discuss the intended design, review site conditions and coordinate installation requirements with your project team.",
        ],
      },
      {
        heading: 'Make Your 2027 Glass Project a Priority',
        paragraphs: [
          "Starting the conversation early helps you explore options, coordinate measurements and finishes, and build realistic timing into your renovation plan. Prepare your ideas and project details, then contact Finelines Glass to discuss the next steps.",
        ],
      },
    ],
    ctaNote: 'Planning a home or commercial upgrade for 2027? Contact Finelines Glass to discuss your project and arrange the next steps.',
    tagline: 'Serving Vancouver, the Lower Mainland and the Fraser Valley. Final product selection, measurements and installation requirements depend on the application, site conditions and manufacturer specifications.',
  },
];

// Articles whose publishAt has already passed, oldest first for lookups and
// newest-first for display — see the SCHEDULING note above ARTICLES. Pages
// should use this (not ARTICLES directly) for anything a site visitor sees.
// Articles to show under "Related reading" on each service page and its
// design pages (see components/RelatedLinks.jsx). Listed by service slug,
// best match first. Future articles can be listed here already: only the
// ones that have been published are shown.
export const SERVICE_ARTICLES = {
  'frameless-shower-enclosures': [
    'glass-shower-enclosures-for-small-bathrooms',
    'framed-vs-frameless-glass',
    'shower-door-hardware-hinges-handles-finishes',
    'choosing-shower-glass-hardware-finishes',
    'how-to-clean-glass-shower-doors',
    'frameless-shower-enclosures-jobsite-to-finished-product',
    'what-affects-the-cost-of-a-glass-project',
  ],
  'glass-railings': [
    'glass-railing-for-modern-homes',
    'glass-stair-railings-mounting-safety-care',
    'exterior-glass-railings-balconies-decks',
    'what-affects-the-cost-of-a-glass-project',
  ],
  'wine-cellars': [
    'framed-vs-frameless-glass',
    'early-glass-installer-coordination-renovation-projects',
    'what-affects-the-cost-of-a-glass-project',
  ],
  'commercial-glazing-office-partitions': [
    'glass-office-partitions',
    'plan-your-2027-glass-upgrade',
    'what-affects-the-cost-of-a-glass-project',
  ],
  mirrors: [
    'custom-mirrors-that-make-small-spaces-feel-bigger',
    'what-affects-the-cost-of-a-glass-project',
  ],
  'window-replacement-film': [
    'plan-your-2027-glass-upgrade',
    'what-affects-the-cost-of-a-glass-project',
  ],
  skylights: [
    'plan-your-2027-glass-upgrade',
    'what-affects-the-cost-of-a-glass-project',
  ],
  'custom-glass-solutions': [
    'glass-backsplashes-for-modern-kitchens',
    'custom-mirrors-that-make-small-spaces-feel-bigger',
    'early-glass-installer-coordination-renovation-projects',
    'what-affects-the-cost-of-a-glass-project',
  ],
};

// Published articles related to a service, in the order listed above (max 4).
export function getServiceArticles(serviceSlug, limit = 4) {
  const published = getPublishedArticles();
  return (SERVICE_ARTICLES[serviceSlug] || [])
    .map((slug) => published.find((a) => a.slug === slug))
    .filter(Boolean)
    .slice(0, limit);
}

export function getPublishedArticles() {
  const now = new Date();
  return ARTICLES
    .filter((a) => !a.publishAt || new Date(a.publishAt) <= now)
    .sort((a, b) => new Date(b.publishAt) - new Date(a.publishAt));
}

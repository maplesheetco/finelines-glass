// ---------------------------------------------------------------------------
// PAGE TITLES, DESCRIPTIONS & SITEMAP
// Works out the <title>, meta description, share image and canonical URL for
// every page from the content in data.js, so a new service, design or article
// gets its own search listing automatically. Used in two places:
//   - components/PageMeta.jsx updates the browser tab/head as visitors move
//     between pages.
//   - vite.config.js writes a real HTML file per page at build time (so
//     Google, Facebook, iMessage etc. see the right title without running
//     JavaScript) and generates /sitemap.xml.
// ---------------------------------------------------------------------------
import {
  COMPANY,
  SERVICES,
  SHOWER_DESIGNS,
  RAILING_DESIGNS,
  WINE_DESIGNS,
  PARTITION_DESIGNS,
  MIRROR_DESIGNS,
  WINDOW_DESIGNS,
  SKYLIGHT_DESIGNS,
  CUSTOM_GLASS_DESIGNS,
  ARTICLES,
} from './data.js';

// The live domain. Every canonical URL, share link and sitemap entry uses it.
export const SITE_URL = 'https://finelinesglass.ca';

// Photo shown when a page is shared and has no image of its own.
const DEFAULT_IMAGE = '/images/project-1.jpg';

const BRAND = COMPANY.shortName; // 'Finelines Glass'
const AREAS = 'Lower Mainland, Greater Vancouver, Tri-City & Fraser Valley';

const HOME = {
  title: 'Finelines Glass | Custom Glass, Railings & Mirrors in Vancouver',
  description: `Family-run glass contractor serving the ${AREAS} since 1994. Showers, railings, mirrors, windows, skylights.`,
};

// Fixed pages. Keep each description under ~160 characters so Google shows
// it in full.
const STATIC_PAGES = {
  '/': HOME,
  '/about': {
    title: `About ${BRAND} | Vancouver Glass Contractor Since 1994`,
    description: 'Finelines Glass Installation Ltd. is a family-run Vancouver glass contractor serving the Lower Mainland, Tri-City and Fraser Valley for over 30 years.',
  },
  '/services': {
    title: `Glass Installation Services in Vancouver | ${BRAND}`,
    description: 'Frameless showers, glass railings, wine cellars, office partitions, mirrors, windows, skylights and custom glass, installed across the Lower Mainland.',
  },
  '/hardware-finishes': {
    title: `Shower & Glass Hardware Finishes | ${BRAND}`,
    description: 'Hardware finishes, shower and railing glass types and thicknesses, and mirror colors and edges, sourced through multiple suppliers to suit your project.',
  },
  '/projects': {
    title: `Completed Glass Projects in Vancouver | ${BRAND}`,
    description: 'Photos of completed Finelines Glass jobs across Vancouver: frameless showers, glass railings, wine cellars, storefronts, skylights and mirrors.',
  },
  '/articles': {
    title: `Glass Tips & Guides | ${BRAND} Articles`,
    description: 'Practical guides on frameless showers, glass railings, mirrors and hardware finishes from a Vancouver glass installer with 30+ years of experience.',
  },
  '/contact': {
    title: `Contact ${BRAND} | ${COMPANY.phone}`,
    description: `Call ${COMPANY.phone} or email Finelines Glass. Mon–Fri 7:00 AM–3:30 PM, Saturday by appointment. Serving the Lower Mainland and Fraser Valley.`,
  },
  '/service-areas': {
    title: `Glass Installation Service Areas | ${BRAND}`,
    description: 'Finelines Glass installs showers, railings, mirrors and custom glass across Greater Vancouver, the Tri-Cities, the Fraser Valley and the Lower Mainland.',
  },
  '/request-estimate': {
    title: `Request a Free Estimate | ${BRAND}`,
    description: 'Tell us about your shower, railing, mirror, window or custom glass project and Finelines Glass will get back to you with an estimate.',
  },
};

// Which design list belongs to which service page (/services/:slug/:designSlug).
const DESIGNS_BY_SERVICE = {
  'frameless-shower-enclosures': SHOWER_DESIGNS,
  'glass-railings': RAILING_DESIGNS,
  'wine-cellars': WINE_DESIGNS,
  'commercial-glazing-office-partitions': PARTITION_DESIGNS,
  mirrors: MIRROR_DESIGNS,
  'window-replacement-film': WINDOW_DESIGNS,
  skylights: SKYLIGHT_DESIGNS,
  'custom-glass-solutions': CUSTOM_GLASS_DESIGNS,
};

const NOT_FOUND = {
  title: `Page Not Found | ${BRAND}`,
  description: HOME.description,
  noindex: true,
};

// Shortens text to fit a search snippet without cutting a word in half.
function clip(text, max = 160) {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, clean.lastIndexOf(' ', max - 1)).replace(/[,;:.\s—–-]+$/, '') + '…';
}

// "Glass Shelving" -> "Glass Shelving in Vancouver | Finelines Glass", leaving
// out "in Vancouver" when the title would get too long for Google (~60 chars).
function withBrand(name) {
  const local = `${name} in Vancouver | ${BRAND}`;
  return local.length <= 60 ? local : `${name} | ${BRAND}`;
}

function isPublished(article, now) {
  return !article.publishAt || new Date(article.publishAt) <= now;
}

// Strips a trailing slash so /services/ and /services are the same page.
export function normalizePath(pathname) {
  const p = pathname.replace(/\/+$/, '');
  return p === '' ? '/' : p;
}

// Returns { path, title, description, image, noindex } for a URL path.
export function getPageMeta(pathname, now = new Date()) {
  const path = normalizePath(pathname);
  let meta = STATIC_PAGES[path];

  if (!meta) {
    const [, section, slug, designSlug, extra] = path.split('/');

    if (section === 'services' && slug && !extra) {
      const service = SERVICES.find((s) => s.slug === slug);
      if (service && !designSlug) {
        meta = {
          title: withBrand(service.title),
          description: clip(service.blurb),
        };
      } else if (service) {
        const design = (DESIGNS_BY_SERVICE[slug] || []).find((d) => d.slug === designSlug);
        if (design) {
          meta = {
            title: withBrand(design.title),
            description: clip(design.blurb),
            image: design.image,
          };
        }
      }
    }

    if (section === 'articles' && slug && !designSlug) {
      const article = ARTICLES.find((a) => a.slug === slug);
      if (article && isPublished(article, now)) {
        meta = {
          title: article.seoTitle || `${article.title} | ${BRAND}`,
          description: clip(article.metaDescription || article.excerpt),
          image: article.heroImage,
          type: 'article',
        };
      }
    }
  }

  const page = {
    path,
    image: DEFAULT_IMAGE,
    type: 'website',
    noindex: false,
    ...(meta || NOT_FOUND),
  };
  // The site shows .webp photos, but some link previews (LinkedIn, older
  // apps) only accept JPEG, so shares point at the .jpg copy of each photo.
  return { ...page, image: page.image.replace(/\.webp$/, '.jpg') };
}

// Every page that should be in Google, for the sitemap and the build step.
// Articles are included only once their publishAt has passed.
export function getSitemapPaths(now = new Date()) {
  const paths = Object.keys(STATIC_PAGES);
  for (const service of SERVICES) {
    paths.push(`/services/${service.slug}`);
    for (const design of DESIGNS_BY_SERVICE[service.slug] || []) {
      paths.push(`/services/${service.slug}/${design.slug}`);
    }
  }
  for (const article of ARTICLES) {
    if (isPublished(article, now)) paths.push(`/articles/${article.slug}`);
  }
  return paths;
}

export const absoluteUrl = (path) => SITE_URL + (path === '/' ? '/' : path);

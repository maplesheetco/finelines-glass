import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Creates or updates a <meta> tag in the <head>.
function setMeta(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

// Keeps the page title, description, share tags and canonical URL in sync
// with the current page as visitors click around. The wording lives in
// src/seo.js. Renders nothing.
//
// The page a visitor lands on already has the right tags from the build, so
// seo.js (which carries every page title, including all designs and
// articles) is only downloaded once they move to another page.
export default function PageMeta() {
  const { pathname } = useLocation();
  const firstPath = useRef(pathname);

  useEffect(() => {
    if (pathname === firstPath.current) return;
    firstPath.current = null;
    let cancelled = false;
    import('../seo.js').then(({ getPageMeta, absoluteUrl }) => {
      if (!cancelled) applyMeta(getPageMeta(pathname), absoluteUrl);
    });
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}

function applyMeta(meta, absoluteUrl) {
  const url = absoluteUrl(meta.path);
  const image = absoluteUrl(meta.image);

  document.title = meta.title;
  setMeta('name', 'description', meta.description);
  setMeta('property', 'og:type', meta.type);
  setMeta('property', 'og:title', meta.title);
  setMeta('property', 'og:description', meta.description);
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:image', image);

  const robots = document.head.querySelector('meta[name="robots"]');
  if (meta.noindex) setMeta('name', 'robots', 'noindex');
  else if (robots) robots.remove();

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (meta.noindex) {
    if (canonical) canonical.remove();
  } else {
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }
}

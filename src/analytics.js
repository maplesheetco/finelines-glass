// ---------------------------------------------------------------------------
// GOOGLE ANALYTICS EVENTS
// gtag is set up in index.html (live domain only). These events are the
// leads the site produces; mark them as key events in GA4 (Admin > Events)
// so they show up as conversions:
//   - generate_lead      someone pressed Submit on the estimate or contact form
//   - phone_call_click   someone tapped the phone number
//   - email_click        someone tapped the email address
// ---------------------------------------------------------------------------

export function trackEvent(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

// One listener for every tel: and mailto: link on the site, so new links are
// counted without extra code. link_location says which part of the page it was.
export function trackContactClicks() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest && e.target.closest('a[href^="tel:"], a[href^="mailto:"]');
    if (!link) return;
    const isPhone = link.getAttribute('href').startsWith('tel:');
    const location = link.closest('header') ? 'header' : link.closest('footer') ? 'footer' : 'page';
    trackEvent(isPhone ? 'phone_call_click' : 'email_click', { link_location: location });
  });
}

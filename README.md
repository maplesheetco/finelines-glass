# Finelines Glass — Website (v2)

Rebuild of finelinesglass.ca, off Wix, on the same stack as MapleSheet:
**React + Vite**, deployed on **Vercel**, auto-deploying from this GitHub repo.

## What's already done

- Home, About, Services, Projects, and Contact pages
- All real company info wired in (phone, email, address) from the current site
- The friendliness/trust-signal fixes from the earlier website report are already
  built in: trust badge strip, testimonial section, FAQ section, a persistent
  "Get a Free Quote" button, business hours, and an embedded Google Map
- Brand colors, company info, services, and nav all live in one file:
  `src/data.js` — change something once, it updates everywhere

## What still needs your input (marked `TODO` in the code)

Search the codebase for `TODO` to find all of these:

1. **Real photos.** The Projects page is placeholder boxes until you add photos
   to `public/images/` (see the README in that folder).
2. **Real testimonials.** `src/data.js` has two placeholder quotes — swap in
   real ones whenever you have them (even a sentence from a past text or email works).
3. **Contact form doesn't send anywhere yet.** Right now it just shows a
   "message received" confirmation locally. Easiest real fix: create a free
   form at [formspree.io](https://formspree.io), then in `src/pages/Contact.jsx`
   change the `<form>` tag to point at your Formspree URL. Takes about 10 minutes.
4. **Business hours** in `src/data.js` are a placeholder guess — confirm the real ones.
5. **Brand colors** in `src/data.js` (the `B` object) are a placeholder blue/navy/amber
   palette — swap in real brand colors or a logo whenever you have them.
6. **Email** — the site shows `info@finelinesglass.ca`. Set up free email
   forwarding from that address to your existing Gmail inbox (your domain
   registrar or Vercel can usually do this), or change it back to
   `finelinesglass@gmail.com` in `src/data.js` if you'd rather not set that up yet.
7. **Instagram link** in `src/data.js` is a placeholder — paste your real profile URL.

None of these block deploying the site — it works fine as-is. They're just the
follow-ups worth doing in the first week or two.

## Local development (optional)

You don't need this to deploy — Vercel builds the site automatically. This is
only if you want to preview changes on your own computer before pushing them:

```
npm install
npm run dev      # preview at http://localhost:5173
npm run build    # production build, output in /dist
```

## Deploying (step-by-step)

See the message this file came with for the full walkthrough — short version:

1. Create a new GitHub repo and upload everything in this folder to it.
2. Import that repo into Vercel (vercel.com → Add New Project).
   Vercel auto-detects Vite — no config needed.
3. Once it's live on a `*.vercel.app` URL and everything looks right, add
   `finelinesglass.ca` as a custom domain in the Vercel project settings,
   then update the DNS records at your domain registrar to match what Vercel
   shows you.
4. Only after the new site is confirmed working on the real domain, remove
   the old pages from Wix (or just let the Wix plan lapse).

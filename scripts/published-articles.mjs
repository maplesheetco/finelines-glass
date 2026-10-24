// Writes the slugs of every article whose publishAt has passed to
// published-articles.txt. The publish-scheduled-articles workflow runs this
// every few hours and commits the file when it changes, so the push to main
// makes Vercel rebuild and the new article lands in sitemap.xml and gets its
// own prerendered page without anyone touching the site.
import fs from 'node:fs'
import { ARTICLES } from '../src/data.js'

const now = new Date()
const slugs = ARTICLES
  .filter((a) => !a.publishAt || new Date(a.publishAt) <= now)
  .map((a) => a.slug)

fs.writeFileSync(new URL('../published-articles.txt', import.meta.url), slugs.join('\n') + '\n')

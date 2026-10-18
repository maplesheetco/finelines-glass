import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getPageMeta, getSitemapPaths, absoluteUrl } from './src/seo.js'

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// After each build, writes a copy of index.html for every page with that
// page's own title, description, share tags and canonical URL (so search
// engines and link previews see them without running JavaScript), plus
// sitemap.xml. Page wording lives in src/seo.js. Articles scheduled for
// later are left out until a build runs after their publish time.
function seoPages() {
  let outDir
  return {
    name: 'seo-pages',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      const block = /<!-- page-meta[\s\S]*?<!-- \/page-meta -->/
      if (!block.test(template)) throw new Error('index.html is missing the page-meta markers')

      const now = new Date()
      const paths = getSitemapPaths(now)
      for (const pagePath of paths) {
        const meta = getPageMeta(pagePath, now)
        const tags = [
          `<title>${escapeHtml(meta.title)}</title>`,
          `<meta name="description" content="${escapeHtml(meta.description)}" />`,
          `<link rel="canonical" href="${absoluteUrl(meta.path)}" />`,
          `<meta property="og:type" content="${meta.type}" />`,
          `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
          `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
          `<meta property="og:url" content="${absoluteUrl(meta.path)}" />`,
          `<meta property="og:image" content="${absoluteUrl(meta.image)}" />`,
        ].join('\n    ')
        const file = path.join(outDir, pagePath, 'index.html')
        fs.mkdirSync(path.dirname(file), { recursive: true })
        fs.writeFileSync(file, template.replace(block, tags))
      }

      const urls = paths
        .map((p) => `  <url><loc>${absoluteUrl(p)}</loc></url>`)
        .join('\n')
      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoPages()],
})

import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getPageMeta, getSitemapPaths, absoluteUrl } from './src/seo.js'

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// After each build, writes a copy of index.html for every page with that
// page's own title, description, share tags, canonical URL and fully
// rendered content (so search engines and link previews see them without
// running JavaScript), plus sitemap.xml. Page wording lives in src/seo.js.
// Articles scheduled for later are left out until a build runs after their
// publish time.
function seoPages() {
  let outDir
  let isSsrBuild
  return {
    name: 'seo-pages',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
      isSsrBuild = Boolean(config.build.ssr)
    },
    async closeBundle() {
      if (isSsrBuild) return

      // Build a server-side copy of the app that can render a page to HTML.
      const ssrOutDir = path.resolve(outDir, '..', 'dist-ssr')
      await build({
        configFile: false,
        logLevel: 'warn',
        plugins: [react()],
        build: { ssr: 'src/entry-server.jsx', outDir: ssrOutDir, emptyOutDir: true },
      })
      const { render } = await import(pathToFileURL(path.join(ssrOutDir, 'entry-server.js')).href)

      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      const block = /<!-- page-meta[\s\S]*?<!-- \/page-meta -->/
      if (!block.test(template)) throw new Error('index.html is missing the page-meta markers')

      // Empty copy for any URL without a page file of its own (unknown URLs,
      // articles published since the last build). vercel.json sends those here.
      fs.writeFileSync(path.join(outDir, 'app-shell.html'), template)

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
        const html = template
          .replace(block, tags)
          .replace('<div id="root"></div>', () => `<div id="root">${render(pagePath)}</div>`)
        fs.writeFileSync(file, html)
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

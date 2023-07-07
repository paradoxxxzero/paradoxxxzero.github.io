// Pre-render the app into static HTML.
// run `yarn generate` and then `dist/static` can be served as a static site.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = p => path.resolve(__dirname, p)

const template = fs.readFileSync(resolve('./docs/index.html'), 'utf-8')
const { render } = await import('./dist/ssr.js')

const routesToPrerender = ['/']

;(async () => {
  for (const url of routesToPrerender) {
    const context = {}
    const { appHtml, appJss } = render(url, context, null, true)

    const html = template
      .replace(`<!--app-html-->`, appHtml)
      .replace(`<!--app-jss-->`, appJss)

    const filePath = `./docs/${url === '/' ? '/index' : url}.html`
    fs.writeFileSync(resolve(filePath), html)
    console.log('pre-rendered:', resolve(filePath))
  }
})()

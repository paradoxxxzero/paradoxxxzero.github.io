import { readFileSync, writeFileSync } from 'fs'
import render from './dist/index.js'

const htmlPath = './build/index.html'

const patchHtml = () => {
  const { app, style } = render()
  writeFileSync(
    htmlPath,
    readFileSync(htmlPath, { encoding: 'utf-8' })
      .replace('<!-- APP -->', app)
      .replace('<!-- STYLE -->', style),
    { encoding: 'utf-8' }
  )
}

patchHtml()

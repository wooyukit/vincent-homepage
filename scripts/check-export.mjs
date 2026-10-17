import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import path from 'node:path'
import { projects } from '../data/projects.js'

const routes = [
  '/',
  '/works',
  '/portfolio',
  '/dashboard',
  '/404',
  ...projects.map(project => `/portfolio/${project.id}`)
]
const canonicals = new Set()
let images = 0
for (const route of routes) {
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`
  const html = await readFile(path.join('out', file), 'utf8')
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/)
  assert.ok(canonical, `${route}: canonical missing`)
  assert.equal(
    canonical[1],
    `https://vincent-homepage.web.app${route === '/' ? '/' : route}`
  )
  assert.ok(!canonicals.has(canonical[1]), `${route}: duplicate canonical`)
  canonicals.add(canonical[1])
  assert.match(
    html,
    /<meta name="description" content="[^"]+"/,
    `${route}: description missing`
  )
  assert.match(
    html,
    /<meta property="og:image" content="https:\/\/[^"]+"/,
    `${route}: social image missing`
  )
  assert.equal(
    [...html.matchAll(/<h1\b/g)].length,
    1,
    `${route}: expected one page heading`
  )
  assert.ok(
    !/<article[^>]+style="[^"]*opacity:0/.test(html),
    `${route}: content hidden before hydration`
  )
  assert.ok(!html.includes('?imwidth='), `${route}: obsolete image loader`)
  for (const [, source] of html.matchAll(/<img[^>]+src="([^\"]+)"/g)) {
    if (!source.startsWith('/')) continue
    await access(path.join('out', source.split('?')[0]))
    images += 1
  }
}
const missing = await readFile('out/404.html', 'utf8')
assert.match(missing, /noindex/)
const hosting = JSON.parse(await readFile('firebase.json', 'utf8')).hosting
assert.ok(
  !hosting.rewrites?.some(
    rule => rule.source === '**' && rule.destination === '/index.html'
  )
)
console.log(
  `Verified ${routes.length} exported pages, unique metadata, ${images} image references, readable HTML, and 404 hosting configuration.`
)

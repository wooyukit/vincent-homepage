import test from 'node:test'
import assert from 'node:assert/strict'
import { projects, featuredProjects } from '../data/projects.js'
import { getPageMetadata } from '../lib/seo.js'
import { getImageDimensions, selectImageSource } from '../lib/image-path.js'
import { cachedData, loadGitHub, loadCrates } from '../lib/dashboard-data.js'

test('every project has a unique canonical URL and its own social image', () => {
  const urls = new Set()
  for (const project of projects) {
    const metadata = getPageMetadata(`/portfolio/${project.id}?ref=test#images`)
    assert.equal(
      metadata.canonical,
      `https://vincent-homepage.web.app/portfolio/${project.id}`
    )
    assert.equal(metadata.description, project.description)
    assert.ok(metadata.image.endsWith(project.src))
    assert.ok(!urls.has(metadata.canonical))
    assert.ok(project.tech.length > 0)
    urls.add(metadata.canonical)
  }
  assert.equal(projects.length, 34)
  assert.equal(featuredProjects.length, 3)
  assert.ok(getPageMetadata('/404').noindex)
})

test('responsive image selection uses existing variants and never upscales', () => {
  const images = {
    '/photo.jpg': {
      hash: 'test-image',
      widths: [128, 640, 960]
    }
  }
  assert.equal(
    selectImageSource(images, '/photo.jpg', 100),
    '/_optimized/test-image-128.webp'
  )
  assert.equal(
    selectImageSource(images, '/photo.jpg', 400),
    '/_optimized/test-image-640.webp'
  )
  assert.equal(
    selectImageSource(images, '/photo.jpg', 1920),
    '/_optimized/test-image-960.webp'
  )
  assert.equal(selectImageSource(images, '/icon.svg', 32), '/icon.svg')
})

test('gallery sizing uses native image dimensions instead of inflated page metadata', () => {
  const images = {
    '/screenshot.webp': { width: 190, height: 336 }
  }
  assert.deepEqual(
    getImageDimensions(images, {
      path: '/screenshot.webp',
      w: '1900',
      h: '3360'
    }),
    { width: 190, height: 336 }
  )
  assert.deepEqual(
    getImageDimensions(images, { path: '/other.svg', w: '1280', h: '720' }),
    { width: 1280, height: 720 }
  )
})

test('dashboard cache deduplicates requests, supports refresh, and recovers from errors', async () => {
  let requests = 0
  const loader = async () => ++requests
  assert.deepEqual(
    await Promise.all([
      cachedData('test-data', loader),
      cachedData('test-data', loader)
    ]),
    [1, 1]
  )
  assert.equal(await cachedData('test-data', loader), 1)
  assert.equal(await cachedData('test-data', loader, true), 2)
  await assert.rejects(
    cachedData('test-error', async () => {
      throw new Error('offline')
    }),
    /offline/
  )
  assert.equal(
    await cachedData('test-error', async () => 'recovered'),
    'recovered'
  )
})

test('dashboard pagination includes all repositories, languages, and crates', async t => {
  const languages = [
    'Swift',
    'Kotlin',
    'Rust',
    'Java',
    'Python',
    'JavaScript',
    'TypeScript',
    'C',
    'C++'
  ]
  const mockFetch = async url => {
    if (url === 'https://api.github.com/users/wooyukit')
      return Response.json({ public_repos: 9 })
    if (url.includes('/repos?'))
      return Response.json(
        languages.slice(0, 5).map(language => ({ language })),
        { headers: { link: '<https://api.github.com/repos-next>; rel="next"' } }
      )
    if (url === 'https://api.github.com/repos-next')
      return Response.json(languages.slice(5).map(language => ({ language })))
    if (url.includes('/users/wooyukit'))
      return Response.json({ user: { id: 123 } })
    if (url.includes('page=1'))
      return Response.json({
        crates: [{ name: 'one', downloads: 10 }],
        meta: { total: 2 }
      })
    return Response.json({
      crates: [{ name: 'two', downloads: 20 }],
      meta: { total: 2 }
    })
  }
  t.mock.method(globalThis, 'fetch', mockFetch)
  const github = await loadGitHub(true)
  assert.equal(github.repos.length, 9)
  assert.equal(
    github.languages.reduce((sum, language) => sum + language.value, 0),
    9
  )
  assert.deepEqual(github.languages.at(-1), { name: 'Other', value: 2 })
  assert.equal((await loadCrates(true)).crates.length, 2)
})

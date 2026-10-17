import { createHash } from 'node:crypto'
import { mkdir, readFile, readdir, writeFile, access } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const output = path.join(root, 'public/_optimized')
const manifestPath = path.join(root, 'lib/generated-images.json')
const widths = [64, 128, 256, 384, 640, 960, 1280, 1920]
const manifest = {}
let generated = 0
let previous = {}

try {
  previous = JSON.parse(await readFile(manifestPath, 'utf8'))
} catch (error) {
  if (error.code !== 'ENOENT') throw error
}

const walk = async directory => {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(entry => {
      const file = path.join(directory, entry.name)
      return entry.isDirectory() ? walk(file) : file
    })
  )
  return files.flat()
}

await mkdir(output, { recursive: true })
const files = (await walk(path.join(root, 'public/images')))
  .filter(file => /\.(jpe?g|png|webp)$/i.test(file))
  .sort()

// Bound concurrency so development startup does not saturate the machine.
const queue = [...files]
await Promise.all(
  Array.from({ length: 3 }, async () => {
    while (queue.length) {
      const file = queue.shift()
      const source = `/${path
        .relative(path.join(root, 'public'), file)
        .split(path.sep)
        .join('/')}`
      const input = await readFile(file)
      const hash = createHash('sha256')
        .update(input)
        .update('webp-80-v1')
        .digest('hex')
        .slice(0, 16)
      const cached = previous[source]

      if (cached?.hash === hash) {
        const cachedWidths =
          cached.widths || Object.keys(cached.files).map(Number)
        const exists = await Promise.all(
          cachedWidths.map(width =>
            access(path.join(output, `${hash}-${width}.webp`)).then(
              () => true,
              () => false
            )
          )
        )
        if (exists.every(Boolean)) {
          manifest[source] = {
            hash,
            width: cached.width,
            height: cached.height,
            widths: cachedWidths
          }
          continue
        }
      }

      const metadata = await sharp(input).rotate().metadata()
      const nativeWidth = metadata.autoOrient?.width || metadata.width
      const variants = [
        ...new Set([
          ...widths.filter(width => width < nativeWidth),
          Math.min(nativeWidth, 1920)
        ])
      ]
      for (const width of variants) {
        const filename = `${hash}-${width}.webp`
        await sharp(input)
          .rotate()
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(path.join(output, filename))
        generated += 1
      }
      manifest[source] = {
        hash,
        width: nativeWidth,
        height: metadata.autoOrient?.height || metadata.height,
        widths: variants
      }
    }
  })
)

const sorted = Object.fromEntries(
  Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b))
)
await writeFile(manifestPath, `${JSON.stringify(sorted, null, 2)}\n`)
console.log(
  `Images: ${files.length} sources, ${generated} new responsive WebP variants.`
)

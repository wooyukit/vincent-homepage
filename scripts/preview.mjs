import { createServer } from 'node:http'
import { createReadStream } from 'node:fs'
import { access, stat } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve('out')
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.glb': 'model/gltf-binary',
  '.pdf': 'application/pdf',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2'
}

await access(path.join(root, 'index.html'))
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, 'http://localhost').pathname
    )
    const resolved = path.resolve(root, `.${pathname}`)
    if (resolved !== root && !resolved.startsWith(`${root}${path.sep}`)) {
      response.writeHead(400).end('Invalid path')
      return
    }
    let file
    for (const candidate of [
      resolved,
      `${resolved}.html`,
      path.join(resolved, 'index.html')
    ]) {
      if (
        await stat(candidate).then(
          value => value.isFile(),
          () => false
        )
      ) {
        file = candidate
        break
      }
    }
    const status = file ? 200 : 404
    file ||= path.join(root, '404.html')
    response.writeHead(status, {
      'Content-Type': types[path.extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-store'
    })
    if (request.method === 'HEAD') response.end()
    else createReadStream(file).pipe(response)
  } catch {
    response.writeHead(400).end('Invalid request')
  }
})

let port = Number(process.env.PORT || 3000)
server.on('error', error => {
  if (error.code === 'EADDRINUSE' && port < 3010)
    server.listen(++port, '0.0.0.0')
  else throw error
})
server.on('listening', () =>
  console.log(`Portfolio preview: http://localhost:${port}`)
)
server.listen(port, '0.0.0.0')

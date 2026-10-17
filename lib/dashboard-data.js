const cache = new Map()
const CACHE_TTL = 5 * 60 * 1000

export const cachedData = async (key, loader, refresh = false) => {
  const entry = cache.get(key)
  if (entry?.promise) return entry.promise
  if (!refresh && entry && entry.expires > Date.now()) return entry.data

  const promise = loader()
    .then(data => {
      cache.set(key, { data, expires: Date.now() + CACHE_TTL })
      return data
    })
    .catch(error => {
      cache.delete(key)
      throw error
    })
  cache.set(key, { promise })
  return promise
}

const readJson = async url => {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10000)
  try {
    const response = await fetch(url, { signal: controller.signal })
    if (!response.ok) {
      throw new Error(
        response.status === 403 || response.status === 429
          ? 'The service is temporarily rate limited. Please try again later.'
          : `Unable to load data (${response.status}). Please try again.`
      )
    }
    return { data: await response.json(), headers: response.headers }
  } finally {
    clearTimeout(timeout)
  }
}

export const loadGitHub = (refresh = false) =>
  cachedData(
    'github',
    async () => {
      const [user, firstPage] = await Promise.all([
        readJson('https://api.github.com/users/wooyukit'),
        readJson(
          'https://api.github.com/users/wooyukit/repos?per_page=100&sort=updated'
        )
      ])
      const repos = [...firstPage.data]
      let headers = firstPage.headers
      let next = headers.get('link')?.match(/<([^>]+)>;\s*rel="next"/)
      while (next) {
        const page = await readJson(next[1])
        repos.push(...page.data)
        headers = page.headers
        next = headers.get('link')?.match(/<([^>]+)>;\s*rel="next"/)
      }

      const counts = {}
      repos.forEach(repo => {
        if (repo.language)
          counts[repo.language] = (counts[repo.language] || 0) + 1
      })
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])
      const languages = sorted
        .slice(0, 7)
        .map(([name, value]) => ({ name, value }))
      if (sorted.length > 7) {
        languages.push({
          name: 'Other',
          value: sorted.slice(7).reduce((sum, [, count]) => sum + count, 0)
        })
      }
      return { user: user.data, repos, languages }
    },
    refresh
  )

export const loadCrates = (refresh = false) =>
  cachedData(
    'crates',
    async () => {
      const user = await readJson('https://crates.io/api/v1/users/wooyukit')
      const crates = []
      let page = 1
      let total
      do {
        const result = await readJson(
          `https://crates.io/api/v1/crates?user_id=${user.data.user.id}&per_page=50&sort=downloads&page=${page}`
        )
        crates.push(...result.data.crates)
        total = result.data.meta.total
        if (!result.data.crates.length) break
        page += 1
      } while (crates.length < total)
      return { crates }
    },
    refresh
  )

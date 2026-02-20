# Dashboard Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a `/dashboard` page showing live GitHub and crates.io metrics with recharts visualizations.

**Architecture:** New page at `pages/dashboard.js` using client-side fetch (`useEffect`) to pull data from GitHub REST API and crates.io API. Uses existing `Layout` (Article), `Section`, and Chakra components. Adds `recharts` for charts.

**Tech Stack:** Next.js 12, Chakra UI 1.x, recharts, GitHub REST API, crates.io API

---

### Task 1: Install recharts dependency

**Files:**
- Modify: `package.json`

**Step 1: Install recharts**

Run: `npm install recharts`

**Step 2: Verify install**

Run: `npm ls recharts`
Expected: `recharts@2.x.x` listed

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add recharts dependency for dashboard charts"
```

---

### Task 2: Add Dashboard link to navbar

**Files:**
- Modify: `components/navbar.js`

**Step 1: Add the dashboard icon import**

At line 20 in `navbar.js`, add the `IoBarChartOutline` import:

```js
import { IoLogoGithub, IoBarChartOutline } from 'react-icons/io5'
```

**Step 2: Add desktop nav link**

After the Portfolio `LinkItem` (line 88) and before the Source `LinkItem` (line 89), add:

```jsx
<LinkItem href="/dashboard"
	path={path}
	display='inline-flex'
	alignItems="center"
	style={{ gap: 4 }}
	pl={2}>
	<IoBarChartOutline />
	Dashboard
</LinkItem>
```

**Step 3: Add mobile menu item**

After the Portfolio `MenuItem` (line 116) and before the View Source `MenuItem` (line 117), add:

```jsx
<NextLink href="/dashboard" passHref>
	<MenuItem as={Link} style={{ gap: 4 }}><IoBarChartOutline />Dashboard</MenuItem>
</NextLink>
```

**Step 4: Verify dev server renders navbar**

Run: `npm run dev`
Expected: New "Dashboard" link visible in navbar (desktop and mobile). Clicking navigates to `/dashboard` (404 is expected — page not created yet).

**Step 5: Commit**

```bash
git add components/navbar.js
git commit -m "feat(nav): add Dashboard link to navbar"
```

---

### Task 3: Create the dashboard page skeleton

**Files:**
- Create: `pages/dashboard.js`

**Step 1: Create the page with layout, sections, and headings only (no data fetching)**

```jsx
import { Container, Box, Heading, Text, useColorModeValue, SimpleGrid, Skeleton, SkeletonText } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Dashboard = () => {
  const subtitleColor = useColorModeValue('gray.600', 'gray.400')
  const cardBorder = useColorModeValue('gray.400', 'gray.600')

  return (
    <Layout title="Dashboard">
      <Container maxW="container.md" pt={6}>
        {/* Header */}
        <Section delay={0.1}>
          <Box textAlign="center" mb={10}>
            <Heading as="h1" size="xl" mb={4}>
              Dashboard
            </Heading>
            <Text fontSize="md" color={subtitleColor} maxW="500px" mx="auto">
              Live metrics from GitHub and crates.io
            </Text>
          </Box>
        </Section>

        {/* GitHub Section */}
        <Section delay={0.2}>
          <Heading as="h3" fontSize="xl" mb={6}>
            GitHub Activity
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={8}>
            {[1, 2, 3, 4].map(i => (
              <Box key={i} p={4} borderRadius="xl" textAlign="center" border="1px dashed" borderColor={cardBorder}>
                <Skeleton height="24px" width="40px" mx="auto" mb={2} />
                <SkeletonText noOfLines={1} width="60px" mx="auto" />
              </Box>
            ))}
          </SimpleGrid>
          <Skeleton height="200px" borderRadius="xl" mb={8} />
        </Section>

        {/* Crates.io Section */}
        <Section delay={0.3}>
          <Heading as="h3" fontSize="xl" mb={6}>
            Crates.io
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} mb={8}>
            {[1, 2].map(i => (
              <Box key={i} p={4} borderRadius="xl" textAlign="center" border="1px dashed" borderColor={cardBorder}>
                <Skeleton height="24px" width="40px" mx="auto" mb={2} />
                <SkeletonText noOfLines={1} width="60px" mx="auto" />
              </Box>
            ))}
          </SimpleGrid>
          <Skeleton height="200px" borderRadius="xl" mb={8} />
        </Section>

        {/* Product Events Placeholder */}
        <Section delay={0.4}>
          <Box
            p={8}
            borderRadius="xl"
            border="1px dashed"
            borderColor={cardBorder}
            textAlign="center"
          >
            <Heading as="h3" fontSize="xl" mb={3}>
              Product Events
            </Heading>
            <Text color={subtitleColor} fontSize="sm">
              Coming soon — event tracking and analytics will appear here.
            </Text>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Dashboard
```

**Step 2: Verify page renders**

Run: `npm run dev` and navigate to `http://localhost:3000/dashboard`
Expected: Page renders with heading, skeleton loading states, and "Coming soon" placeholder. Navbar link works.

**Step 3: Commit**

```bash
git add pages/dashboard.js
git commit -m "feat(dashboard): add page skeleton with loading states"
```

---

### Task 4: Add GitHub data fetching and stat cards

**Files:**
- Modify: `pages/dashboard.js`

**Step 1: Add state and useEffect for GitHub API**

Add `useState` and `useEffect` imports from React. Add state variables and fetch logic at the top of the `Dashboard` component:

```jsx
import { useState, useEffect } from 'react'
```

State:
```jsx
const [githubUser, setGithubUser] = useState(null)
const [githubRepos, setGithubRepos] = useState([])
const [githubLoading, setGithubLoading] = useState(true)
const [githubError, setGithubError] = useState(null)
```

Fetch function:
```jsx
const fetchGithub = async () => {
  setGithubLoading(true)
  setGithubError(null)
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/wooyukit'),
      fetch('https://api.github.com/users/wooyukit/repos?per_page=100&sort=updated')
    ])
    if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error')
    const user = await userRes.json()
    const repos = await reposRes.json()
    setGithubUser(user)
    setGithubRepos(repos)
  } catch (err) {
    setGithubError(err.message)
  } finally {
    setGithubLoading(false)
  }
}

useEffect(() => { fetchGithub() }, [])
```

**Step 2: Compute derived stats**

```jsx
const totalStars = githubRepos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)

const githubStats = githubUser ? [
  { label: 'Public Repos', value: githubUser.public_repos, emoji: '📦' },
  { label: 'Total Stars', value: totalStars, emoji: '⭐' },
  { label: 'Followers', value: githubUser.followers, emoji: '👥' },
  { label: 'Following', value: githubUser.following, emoji: '👤' }
] : []
```

**Step 3: Replace GitHub skeleton section with real stat cards**

Replace the GitHub stat card skeletons with:

```jsx
{githubLoading ? (
  <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={8}>
    {[1, 2, 3, 4].map(i => (
      <Box key={i} p={4} borderRadius="xl" textAlign="center" border="1px dashed" borderColor={cardBorder}>
        <Skeleton height="24px" width="40px" mx="auto" mb={2} />
        <SkeletonText noOfLines={1} width="60px" mx="auto" />
      </Box>
    ))}
  </SimpleGrid>
) : githubError ? (
  <Box p={4} borderRadius="xl" border="1px dashed" borderColor="red.300" textAlign="center" mb={8}>
    <Text color="red.400" mb={2}>Failed to load GitHub data</Text>
    <Button size="sm" colorScheme="teal" onClick={fetchGithub}>Retry</Button>
  </Box>
) : (
  <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={8}>
    {githubStats.map(stat => (
      <Box
        key={stat.label}
        p={4}
        borderRadius="xl"
        textAlign="center"
        border="1px dashed"
        borderColor={cardBorder}
        _hover={{ transform: 'translateY(-4px)', borderColor: 'teal.400' }}
        transition="all 0.3s"
      >
        <Text fontSize="2xl" mb={1}>{stat.emoji}</Text>
        <Text fontSize="2xl" fontWeight="bold" color="teal.500">{stat.value}</Text>
        <Text fontSize="xs" color={subtitleColor} fontWeight="medium">{stat.label}</Text>
      </Box>
    ))}
  </SimpleGrid>
)}
```

Add `Button` to the Chakra imports.

**Step 4: Verify stat cards render with live data**

Run: `npm run dev` and navigate to `/dashboard`
Expected: 4 stat cards showing real GitHub numbers (repos, stars, followers, following). Skeleton shows briefly during load.

**Step 5: Commit**

```bash
git add pages/dashboard.js
git commit -m "feat(dashboard): add GitHub data fetching and stat cards"
```

---

### Task 5: Add GitHub language chart and top repos

**Files:**
- Modify: `pages/dashboard.js`

**Step 1: Add recharts imports**

```jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
```

**Step 2: Compute language data from repos**

```jsx
const languageData = githubRepos
  .filter(r => r.language)
  .reduce((acc, r) => {
    acc[r.language] = (acc[r.language] || 0) + 1
    return acc
  }, {})
const languageChartData = Object.entries(languageData)
  .map(([name, value]) => ({ name, value }))
  .sort((a, b) => b.value - a.value)
  .slice(0, 8)

const CHART_COLORS = ['#38B2AC', '#4FD1C5', '#81E6D9', '#B2F5EA', '#E6FFFA', '#319795', '#2C7A7B', '#285E61']
```

**Step 3: Compute top repos**

```jsx
const topRepos = [...githubRepos]
  .sort((a, b) => b.stargazers_count - a.stargazers_count)
  .slice(0, 6)
```

**Step 4: Add language pie chart and top repos list after stat cards**

Replace the GitHub skeleton chart placeholder with:

```jsx
{!githubLoading && !githubError && (
  <>
    {/* Language Breakdown */}
    {languageChartData.length > 0 && (
      <Box mb={8}>
        <Text fontWeight="semibold" mb={3} fontSize="sm" color={subtitleColor}>
          Language Breakdown
        </Text>
        <Box height="250px">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={languageChartData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {languageChartData.map((entry, index) => (
                  <Cell key={entry.name} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    )}

    {/* Top Repos */}
    {topRepos.length > 0 && (
      <Box mb={8}>
        <Text fontWeight="semibold" mb={3} fontSize="sm" color={subtitleColor}>
          Top Repositories
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
          {topRepos.map(repo => (
            <Box
              key={repo.name}
              as="a"
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              p={4}
              borderRadius="xl"
              border="1px dashed"
              borderColor={cardBorder}
              _hover={{ borderColor: 'teal.400', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
              display="block"
            >
              <Text fontWeight="bold" fontSize="sm" mb={1} isTruncated>{repo.name}</Text>
              <Text fontSize="xs" color={subtitleColor} noOfLines={2} mb={2}>{repo.description || 'No description'}</Text>
              <Flex gap={3}>
                {repo.language && <Badge colorScheme="teal" fontSize="xs">{repo.language}</Badge>}
                <Text fontSize="xs" color={subtitleColor}>⭐ {repo.stargazers_count}</Text>
                <Text fontSize="xs" color={subtitleColor}>🍴 {repo.forks_count}</Text>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    )}
  </>
)}
```

Add `Badge, Flex` to Chakra imports if not already present.

**Step 5: Verify charts and repos render**

Run: `npm run dev` and navigate to `/dashboard`
Expected: Language pie chart renders with colored segments. Top repos shown in 2-column grid with names, descriptions, stars, forks.

**Step 6: Commit**

```bash
git add pages/dashboard.js
git commit -m "feat(dashboard): add GitHub language chart and top repos section"
```

---

### Task 6: Add crates.io data fetching and stat cards

**Files:**
- Modify: `pages/dashboard.js`

**Step 1: Add crates.io state**

```jsx
const [cratesData, setCratesData] = useState([])
const [cratesLoading, setCratesLoading] = useState(true)
const [cratesError, setCratesError] = useState(null)
```

**Step 2: Add crates.io fetch function**

```jsx
const fetchCrates = async () => {
  setCratesLoading(true)
  setCratesError(null)
  try {
    const userRes = await fetch('https://crates.io/api/v1/users/wooyukit')
    if (!userRes.ok) throw new Error('Crates.io user API error')
    const userData = await userRes.json()
    const userId = userData.user.id

    const cratesRes = await fetch(`https://crates.io/api/v1/crates?user_id=${userId}&per_page=100`)
    if (!cratesRes.ok) throw new Error('Crates.io crates API error')
    const cratesJson = await cratesRes.json()
    setCratesData(cratesJson.crates || [])
  } catch (err) {
    setCratesError(err.message)
  } finally {
    setCratesLoading(false)
  }
}
```

Add `fetchCrates()` to the existing `useEffect`:
```jsx
useEffect(() => {
  fetchGithub()
  fetchCrates()
}, [])
```

**Step 3: Compute crates stats**

```jsx
const totalDownloads = cratesData.reduce((sum, c) => sum + (c.downloads || 0), 0)

const cratesStats = [
  { label: 'Published Crates', value: cratesData.length, emoji: '📦' },
  { label: 'Total Downloads', value: totalDownloads.toLocaleString(), emoji: '📥' }
]
```

**Step 4: Replace crates.io skeleton with real stat cards**

Same pattern as GitHub section — loading skeleton, error state with retry, or stat cards.

```jsx
{cratesLoading ? (
  <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} mb={8}>
    {[1, 2].map(i => (
      <Box key={i} p={4} borderRadius="xl" textAlign="center" border="1px dashed" borderColor={cardBorder}>
        <Skeleton height="24px" width="40px" mx="auto" mb={2} />
        <SkeletonText noOfLines={1} width="60px" mx="auto" />
      </Box>
    ))}
  </SimpleGrid>
) : cratesError ? (
  <Box p={4} borderRadius="xl" border="1px dashed" borderColor="red.300" textAlign="center" mb={8}>
    <Text color="red.400" mb={2}>Failed to load crates.io data</Text>
    <Button size="sm" colorScheme="teal" onClick={fetchCrates}>Retry</Button>
  </Box>
) : (
  <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} mb={8}>
    {cratesStats.map(stat => (
      <Box
        key={stat.label}
        p={4}
        borderRadius="xl"
        textAlign="center"
        border="1px dashed"
        borderColor={cardBorder}
        _hover={{ transform: 'translateY(-4px)', borderColor: 'teal.400' }}
        transition="all 0.3s"
      >
        <Text fontSize="2xl" mb={1}>{stat.emoji}</Text>
        <Text fontSize="2xl" fontWeight="bold" color="teal.500">{stat.value}</Text>
        <Text fontSize="xs" color={subtitleColor} fontWeight="medium">{stat.label}</Text>
      </Box>
    ))}
  </SimpleGrid>
)}
```

**Step 5: Verify crates stats render**

Run: `npm run dev` and navigate to `/dashboard`
Expected: Crates.io section shows published crates count and total downloads.

**Step 6: Commit**

```bash
git add pages/dashboard.js
git commit -m "feat(dashboard): add crates.io data fetching and stat cards"
```

---

### Task 7: Add crates.io download bar chart

**Files:**
- Modify: `pages/dashboard.js`

**Step 1: Prepare crate download chart data**

```jsx
const crateChartData = [...cratesData]
  .sort((a, b) => b.downloads - a.downloads)
  .slice(0, 10)
  .map(c => ({ name: c.name, downloads: c.downloads }))
```

**Step 2: Add bar chart after crates stat cards**

```jsx
{!cratesLoading && !cratesError && crateChartData.length > 0 && (
  <Box mb={8}>
    <Text fontWeight="semibold" mb={3} fontSize="sm" color={subtitleColor}>
      Downloads by Crate
    </Text>
    <Box height="300px">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={crateChartData} layout="vertical" margin={{ left: 20 }}>
          <XAxis type="number" stroke={chartAxisColor} fontSize={12} />
          <YAxis type="category" dataKey="name" width={120} stroke={chartAxisColor} fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: tooltipBg,
              border: 'none',
              borderRadius: '8px',
              fontSize: '12px'
            }}
          />
          <Bar dataKey="downloads" fill="#38B2AC" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  </Box>
)}
```

**Step 3: Add color-mode-aware chart colors**

Add these near the other `useColorModeValue` calls:
```jsx
const chartAxisColor = useColorModeValue('#718096', '#A0AEC0')
const tooltipBg = useColorModeValue('#ffffff', '#2D3748')
```

**Step 4: Verify bar chart renders**

Run: `npm run dev` and navigate to `/dashboard`
Expected: Horizontal bar chart showing crate names on Y-axis and download counts on X-axis. Colors adapt to light/dark mode.

**Step 5: Commit**

```bash
git add pages/dashboard.js
git commit -m "feat(dashboard): add crates.io download bar chart"
```

---

### Task 8: Verify build and lint

**Files:** None (verification only)

**Step 1: Run lint**

Run: `npm run lint`
Expected: No errors

**Step 2: Run production build**

Run: `npm run build`
Expected: Build succeeds. `out/dashboard.html` is generated.

**Step 3: Fix any lint or build errors if found**

**Step 4: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "fix(dashboard): fix lint and build issues"
```

import { useState, useEffect, useCallback, useMemo } from 'react'
import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Link,
  Badge,
  Flex,
  Button,
  Skeleton,
  SkeletonText,
  useColorModeValue
} from '@chakra-ui/react'
import { IoLogoGithub, IoStarOutline, IoGitBranchOutline } from 'react-icons/io5'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const CHART_COLORS = [
  '#38B2AC',
  '#4FD1C5',
  '#81E6D9',
  '#B2F5EA',
  '#E6FFFA',
  '#319795',
  '#2C7A7B',
  '#285E61'
]

const GITHUB_USER = 'wooyukit'
const CRATES_USER = 'wooyukit'

const StatCard = ({ label, value, isLoaded }) => {
  const cardBorder = useColorModeValue('gray.400', 'gray.600')
  const subtitleColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box
      p={4}
      borderRadius="xl"
      textAlign="center"
      border="1px dashed"
      borderColor={cardBorder}
      _hover={{ transform: 'translateY(-4px)', borderColor: 'teal.400' }}
      transition="all 0.3s"
    >
      <Skeleton isLoaded={isLoaded} fadeDuration={0.8}>
        <Text fontSize="2xl" fontWeight="bold" color="teal.500">
          {value}
        </Text>
      </Skeleton>
      <Skeleton isLoaded={isLoaded} fadeDuration={0.8}>
        <Text fontSize="xs" color={subtitleColor} fontWeight="medium">
          {label}
        </Text>
      </Skeleton>
    </Box>
  )
}

const ErrorBox = ({ message, onRetry }) => {
  const errorBg = useColorModeValue('red.50', 'red.900')

  return (
    <Box
      p={4}
      borderRadius="xl"
      border="1px solid"
      borderColor="red.300"
      bg={errorBg}
      textAlign="center"
    >
      <Text color="red.500" mb={2}>{message}</Text>
      <Button size="sm" colorScheme="red" variant="outline" onClick={onRetry}>
        Retry
      </Button>
    </Box>
  )
}

const CustomTooltip = ({ active, payload, tooltipBg, tooltipColor }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        bg={tooltipBg}
        color={tooltipColor}
        p={2}
        borderRadius="md"
        shadow="md"
        fontSize="sm"
      >
        <Text fontWeight="bold">{payload[0].name}</Text>
        <Text>
          {payload[0].dataKey === 'downloads'
            ? `${payload[0].value.toLocaleString()} downloads`
            : `${payload[0].value} repos`}
        </Text>
      </Box>
    )
  }
  return null
}

const Dashboard = () => {
  const cardBorder = useColorModeValue('gray.400', 'gray.600')
  const subtitleColor = useColorModeValue('gray.600', 'gray.400')
  const cardBg = useColorModeValue('white', 'whiteAlpha.50')
  const tooltipBg = useColorModeValue('#fff', '#2D3748')
  const tooltipColor = useColorModeValue('#1A202C', '#fff')
  const chartTextColor = useColorModeValue('#4A5568', '#A0AEC0')

  // Wait for section fade-in animations to finish before rendering charts
  // Section delays: 0.2 (GitHub), 0.3 (Crates) + 0.8s duration = ~1.1s max
  const [chartsReady, setChartsReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setChartsReady(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  // Track when pie animation finishes so labels appear after slices
  const [pieAnimDone, setPieAnimDone] = useState(false)

  // GitHub state
  const [ghUser, setGhUser] = useState(null)
  const [ghRepos, setGhRepos] = useState([])
  const [ghLanguages, setGhLanguages] = useState([])
  const [ghLoading, setGhLoading] = useState(true)
  const [ghError, setGhError] = useState(null)

  // Crates.io state
  const [cratesList, setCratesList] = useState([])
  const [cratesStats, setCratesStats] = useState({
    count: 0,
    totalDownloads: 0
  })
  const [cratesLoading, setCratesLoading] = useState(true)
  const [cratesError, setCratesError] = useState(null)

  const fetchGitHub = useCallback(async () => {
    setGhLoading(true)
    setGhError(null)
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USER}`),
        fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`
        )
      ])
      if (userRes.status === 403 || reposRes.status === 403) {
        throw new Error('GitHub API rate limit exceeded — please try again later')
      }
      if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API request failed')
      const userData = await userRes.json()
      const reposData = await reposRes.json()

      setGhUser(userData)
      setGhRepos(reposData)

      // Build language breakdown
      const langMap = {}
      reposData.forEach(repo => {
        if (repo.language) {
          langMap[repo.language] = (langMap[repo.language] || 0) + 1
        }
      })
      const sorted = Object.entries(langMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([name, value]) => ({ name, value }))
      setGhLanguages(sorted)
    } catch (err) {
      setGhError(err.message || 'Failed to fetch GitHub data')
    } finally {
      setGhLoading(false)
    }
  }, [])

  const fetchCrates = useCallback(async () => {
    setCratesLoading(true)
    setCratesError(null)
    const cratesHeaders = {
      headers: { 'User-Agent': 'vincent-homepage (wooyukit@gmail.com)' }
    }
    try {
      const userRes = await fetch(
        `https://crates.io/api/v1/users/${CRATES_USER}`,
        cratesHeaders
      )
      if (!userRes.ok) throw new Error('Crates.io user lookup failed')
      const userData = await userRes.json()
      const userId = userData.user.id

      const cratesRes = await fetch(
        `https://crates.io/api/v1/crates?user_id=${userId}&per_page=50&sort=downloads`,
        cratesHeaders
      )
      if (!cratesRes.ok) throw new Error('Crates.io crates lookup failed')
      const cratesData = await cratesRes.json()

      const crates = cratesData.crates || []
      setCratesList(crates)
      setCratesStats({
        count: crates.length,
        totalDownloads: crates.reduce(
          (sum, c) => sum + (c.downloads || 0),
          0
        )
      })
    } catch (err) {
      setCratesError(err.message || 'Failed to fetch Crates.io data')
    } finally {
      setCratesLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchGitHub()
    fetchCrates()
  }, [fetchGitHub, fetchCrates])

  const totalStars = useMemo(
    () => ghRepos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0),
    [ghRepos]
  )

  const topRepos = useMemo(
    () =>
      [...ghRepos]
        .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
        .slice(0, 6),
    [ghRepos]
  )

  const topCrates = useMemo(
    () =>
      [...cratesList].slice(0, 10).map(c => ({
        name: c.name,
        downloads: c.downloads || 0
      })),
    [cratesList]
  )

  return (
    <Layout title="Dashboard">
      <Container maxW="container.md" pt={6}>
        {/* Header */}
        <Section delay={0.1}>
          <Box textAlign="center" mb={8}>
            <Heading as="h1" size="xl" mb={2}>
              Dashboard
            </Heading>
            <Text fontSize="md" color={subtitleColor}>
              Live metrics from GitHub and Crates.io
            </Text>
          </Box>
        </Section>

        {/* GitHub Section */}
        <Section delay={0.2}>
          <Heading as="h3" fontSize="xl" mb={4}>
            GitHub
          </Heading>

          {ghError ? (
            <ErrorBox message={ghError} onRetry={fetchGitHub} />
          ) : (
            <>
              {/* Stat Cards */}
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={6}>
                <StatCard
                  label="Public Repos"
                  value={ghUser?.public_repos ?? 0}
                  isLoaded={!ghLoading}
                />
                <StatCard
                  label="Total Stars"
                  value={totalStars}
                  isLoaded={!ghLoading}
                />
                <StatCard
                  label="Followers"
                  value={ghUser?.followers ?? 0}
                  isLoaded={!ghLoading}
                />
                <StatCard
                  label="Following"
                  value={ghUser?.following ?? 0}
                  isLoaded={!ghLoading}
                />
              </SimpleGrid>

              {/* Language Pie Chart */}
              <Box mb={6}>
                <Text fontSize="sm" fontWeight="semibold" mb={3} color={subtitleColor}>
                  Language Breakdown
                </Text>
                {ghLoading || !chartsReady ? (
                  <Skeleton height="250px" borderRadius="xl" fadeDuration={0.8} />
                ) : ghLanguages.length > 0 ? (
                  <Box
                    p={4}
                    borderRadius="xl"
                    border="1px dashed"
                    borderColor={cardBorder}
                  >
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={ghLanguages}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          nameKey="name"
                          animationBegin={0}
                          animationDuration={1200}
                          animationEasing="ease-out"
                          onAnimationEnd={() => setPieAnimDone(true)}
                          label={pieAnimDone
                            ? ({ name, percent }) =>
                                `${name} ${(percent * 100).toFixed(0)}%`
                            : false
                          }
                        >
                          {ghLanguages.map((_entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={CHART_COLORS[index % CHART_COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip cursor={false} isAnimationActive={false} content={<CustomTooltip tooltipBg={tooltipBg} tooltipColor={tooltipColor} />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>
                ) : null}
              </Box>

              {/* Top Repos */}
              <Box mb={6}>
                <Text fontSize="sm" fontWeight="semibold" mb={3} color={subtitleColor}>
                  Top Repositories
                </Text>
                {ghLoading || !chartsReady ? (
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {[...Array(6)].map((_, i) => (
                      <Box
                        key={i}
                        p={4}
                        borderRadius="xl"
                        border="1px dashed"
                        borderColor={cardBorder}
                      >
                        <Skeleton height="18px" mb={2} />
                        <SkeletonText noOfLines={2} spacing={2} />
                      </Box>
                    ))}
                  </SimpleGrid>
                ) : (
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {topRepos.map(repo => (
                      <Link
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        _hover={{ textDecoration: 'none' }}
                      >
                        <Box
                          p={4}
                          borderRadius="xl"
                          border="1px dashed"
                          borderColor={cardBorder}
                          bg={cardBg}
                          _hover={{
                            transform: 'translateY(-4px)',
                            borderColor: 'teal.400'
                          }}
                          transition="all 0.3s"
                          h="100%"
                        >
                          <Flex align="center" mb={2} gap={2}>
                            <IoLogoGithub />
                            <Text fontWeight="bold" fontSize="sm" isTruncated>
                              {repo.name}
                            </Text>
                          </Flex>
                          <Text
                            fontSize="xs"
                            color={subtitleColor}
                            noOfLines={2}
                            mb={3}
                          >
                            {repo.description || 'No description'}
                          </Text>
                          <Flex gap={3} align="center" flexWrap="wrap">
                            {repo.language && (
                              <Badge
                                colorScheme="teal"
                                borderRadius="full"
                                px={2}
                                fontSize="xs"
                              >
                                {repo.language}
                              </Badge>
                            )}
                            <Flex align="center" gap={1}>
                              <IoStarOutline size={12} />
                              <Text fontSize="xs" color={subtitleColor}>
                                {repo.stargazers_count}
                              </Text>
                            </Flex>
                            <Flex align="center" gap={1}>
                              <IoGitBranchOutline size={12} />
                              <Text fontSize="xs" color={subtitleColor}>
                                {repo.forks_count}
                              </Text>
                            </Flex>
                          </Flex>
                        </Box>
                      </Link>
                    ))}
                  </SimpleGrid>
                )}
              </Box>
            </>
          )}
        </Section>

        {/* Crates.io Section */}
        <Section delay={0.3}>
          <Heading as="h3" fontSize="xl" mb={4}>
            Crates.io
          </Heading>

          {cratesError ? (
            <ErrorBox message={cratesError} onRetry={fetchCrates} />
          ) : (
            <>
              {/* Stat Cards */}
              <SimpleGrid columns={2} spacing={4} mb={6}>
                <StatCard
                  label="Published Crates"
                  value={cratesStats.count}
                  isLoaded={!cratesLoading}
                />
                <StatCard
                  label="Total Downloads"
                  value={cratesStats.totalDownloads.toLocaleString()}
                  isLoaded={!cratesLoading}
                />
              </SimpleGrid>

              {/* Downloads Bar Chart */}
              <Box mb={6}>
                <Text fontSize="sm" fontWeight="semibold" mb={3} color={subtitleColor}>
                  Top Crates by Downloads
                </Text>
                {cratesLoading || !chartsReady ? (
                  <Skeleton height="300px" borderRadius="xl" fadeDuration={0.8} />
                ) : topCrates.length > 0 ? (
                  <Box
                    p={4}
                    borderRadius="xl"
                    border="1px dashed"
                    borderColor={cardBorder}
                  >
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={topCrates}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis
                          type="number"
                          tick={{ fill: chartTextColor, fontSize: 12 }}
                          tickFormatter={v => v.toLocaleString()}
                        />
                        <YAxis
                          dataKey="name"
                          type="category"
                          width={120}
                          tick={{ fill: chartTextColor, fontSize: 12 }}
                        />
                        <Tooltip cursor={false} isAnimationActive={false} content={<CustomTooltip tooltipBg={tooltipBg} tooltipColor={tooltipColor} />} />
                        <Bar
                          dataKey="downloads"
                          radius={[0, 6, 6, 0]}
                          animationBegin={0}
                          animationDuration={1500}
                          animationEasing="ease-out"
                        >
                          {topCrates.map((_entry, index) => (
                            <Cell
                              key={`bar-${index}`}
                              fill={CHART_COLORS[index % CHART_COLORS.length]}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>
                ) : (
                  <Text fontSize="sm" color={subtitleColor}>
                    No crates found.
                  </Text>
                )}
              </Box>
            </>
          )}
        </Section>

        {/* Product Events Placeholder */}
        <Section delay={0.4}>
          <Heading as="h3" fontSize="xl" mb={4}>
            Product Events
          </Heading>
          <Box
            p={8}
            borderRadius="xl"
            border="1px dashed"
            borderColor={cardBorder}
            textAlign="center"
            mb={6}
          >
            <Text fontSize="lg" color={subtitleColor}>
              Coming soon
            </Text>
            <Text fontSize="sm" color={subtitleColor} mt={1}>
              Product analytics and event tracking will appear here.
            </Text>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Dashboard

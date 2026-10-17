import { useState, useEffect, useMemo } from 'react'
import { useReducedMotion } from 'framer-motion'
import { loadGitHub, loadCrates } from '../lib/dashboard-data'
import { useDashboardResource } from '../lib/use-dashboard-resource'
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
  VisuallyHidden,
  useColorModeValue
} from '@chakra-ui/react'
import {
  IoLogoGithub,
  IoStarOutline,
  IoGitBranchOutline
} from 'react-icons/io5'
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

const DASHBOARD_CONFIG = {
  chartsReadyDelay: 1200,
  pieAnimationDuration: 1200,
  barAnimationDuration: 1500,
  pieChartHeight: 250,
  barChartHeight: 300,
  chartColors: [
    '#86a4ff',
    '#a3b8ce',
    '#8bc7b6',
    '#dba0a4',
    '#a3c5a0',
    '#dcc28f',
    '#a9a2cd',
    '#b4c0db'
  ]
}

const pieLabel = ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`

const StatCard = ({ label, value, isLoaded }) => {
  const subtitleColor = 'text-muted'

  return (
    <Box
      className="surface-card"
      layerStyle="glassCard"
      p={4}
      borderRadius="xl"
      textAlign="center"
      _hover={{ transform: 'translateY(-4px)', borderColor: 'blue.400' }}
      transition="all 0.3s"
    >
      <Skeleton isLoaded={isLoaded} fadeDuration={0.8}>
        <Text fontSize="2xl" fontWeight="bold" color="text-accent">
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
  const errorBg = 'surface-error'

  return (
    <Box
      p={4}
      borderRadius="xl"
      border="1px solid"
      borderColor="red.300"
      bg={errorBg}
      textAlign="center"
    >
      <Text color="red.500" mb={2}>
        {message}
      </Text>
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

const ChartDataTable = ({ data, valueKey, caption, valueLabel }) => (
  <VisuallyHidden>
    <table>
      <caption>{caption}</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">{valueLabel}</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.name}>
            <th scope="row">{item.name}</th>
            <td>{item[valueKey]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </VisuallyHidden>
)

const Dashboard = () => {
  const chartColors = useColorModeValue(
    [
      '#4165df',
      '#647d9b',
      '#39846e',
      '#b86f78',
      '#66895f',
      '#9b783b',
      '#7e71ac',
      '#788ba6'
    ],
    DASHBOARD_CONFIG.chartColors
  )
  const subtitleColor = 'text-muted'
  const tooltipBg = useColorModeValue('#fff', '#1b232e')
  const tooltipColor = useColorModeValue('#1A202C', '#fff')
  const chartTextColor = useColorModeValue('#526078', '#b0b8c6')

  // Keep chart animations separate from the page and section entrances.
  // The longest entrance is 240ms delay + 560ms duration, below this 1.2s gate.
  const [chartsReady, setChartsReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(
      () => setChartsReady(true),
      DASHBOARD_CONFIG.chartsReadyDelay
    )
    return () => clearTimeout(timer)
  }, [])

  const github = useDashboardResource(loadGitHub)
  const crates = useDashboardResource(loadCrates)
  const reducedMotion = useReducedMotion()
  const ghUser = github.data?.user
  const ghRepos = useMemo(() => github.data?.repos || [], [github.data])
  const ghLanguages = github.data?.languages || []
  const ghLoading = github.loading
  const ghError = github.error
  const fetchGitHub = github.retry
  const cratesList = useMemo(() => crates.data?.crates || [], [crates.data])
  const cratesLoading = crates.loading
  const cratesError = crates.error
  const fetchCrates = crates.retry
  const cratesStats = {
    count: cratesList.length,
    totalDownloads: cratesList.reduce(
      (sum, crate) => sum + (crate.downloads || 0),
      0
    )
  }

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
        <Section revealOnScroll={false} delay={0.1}>
          <Box textAlign="center" mb={8}>
            <Text className="eyebrow" mb={3}>
              Code & community
            </Text>
            <Heading as="h1" size="xl" mb={2}>
              Open source
            </Heading>
            <Text fontSize="md" color={subtitleColor}>
              Public activity from GitHub and crates.io · cached for five
              minutes
            </Text>
          </Box>
        </Section>

        {/* GitHub Section */}
        <Section revealOnScroll={false} delay={0.2}>
          <Heading as="h2" fontSize="xl" mb={4}>
            GitHub
          </Heading>

          {ghError ? (
            <ErrorBox message={ghError} onRetry={fetchGitHub} />
          ) : (
            <Box aria-live="polite" aria-busy={ghLoading}>
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
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  mb={3}
                  color={subtitleColor}
                >
                  Repository languages
                </Text>
                {ghLoading || !chartsReady ? (
                  <Skeleton
                    height={`${DASHBOARD_CONFIG.pieChartHeight}px`}
                    borderRadius="xl"
                    fadeDuration={0.8}
                  />
                ) : ghLanguages.length > 0 ? (
                  <Box p={4} borderRadius="xl" layerStyle="glassCard">
                    <ResponsiveContainer
                      width="100%"
                      height={DASHBOARD_CONFIG.pieChartHeight}
                    >
                      <PieChart>
                        <Pie
                          data={ghLanguages}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          nameKey="name"
                          animationBegin={0}
                          animationDuration={
                            DASHBOARD_CONFIG.pieAnimationDuration
                          }
                          animationEasing="ease-out"
                          label={pieLabel}
                          isAnimationActive={!reducedMotion}
                        >
                          {ghLanguages.map((_entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={chartColors[index % chartColors.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          cursor={false}
                          isAnimationActive={false}
                          content={
                            <CustomTooltip
                              tooltipBg={tooltipBg}
                              tooltipColor={tooltipColor}
                            />
                          }
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    <ChartDataTable
                      data={ghLanguages}
                      valueKey="value"
                      caption="Repositories by primary language"
                      valueLabel="Repositories"
                    />
                  </Box>
                ) : null}
              </Box>

              {/* Top Repos */}
              <Box mb={6}>
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  mb={3}
                  color={subtitleColor}
                >
                  Top Repositories
                </Text>
                {ghLoading || !chartsReady ? (
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {[...Array(6)].map((_, i) => (
                      <Box
                        key={i}
                        p={4}
                        borderRadius="xl"
                        layerStyle="glassCard"
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
                          layerStyle="glassCard"
                          _hover={{
                            transform: 'translateY(-4px)',
                            borderColor: 'blue.400'
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
                                colorScheme="blue"
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
            </Box>
          )}
        </Section>

        {/* Crates.io Section */}
        <Section revealOnScroll={false} delay={0.3}>
          <Heading as="h2" fontSize="xl" mb={4}>
            Crates.io
          </Heading>

          {cratesError ? (
            <ErrorBox message={cratesError} onRetry={fetchCrates} />
          ) : (
            <Box aria-live="polite" aria-busy={cratesLoading}>
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
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  mb={3}
                  color={subtitleColor}
                >
                  Top Crates by Downloads
                </Text>
                {cratesLoading || !chartsReady ? (
                  <Skeleton
                    height={`${DASHBOARD_CONFIG.barChartHeight}px`}
                    borderRadius="xl"
                    fadeDuration={0.8}
                  />
                ) : topCrates.length > 0 ? (
                  <Box p={4} borderRadius="xl" layerStyle="glassCard">
                    <ResponsiveContainer
                      width="100%"
                      height={DASHBOARD_CONFIG.barChartHeight}
                    >
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
                        <Tooltip
                          cursor={false}
                          isAnimationActive={false}
                          content={
                            <CustomTooltip
                              tooltipBg={tooltipBg}
                              tooltipColor={tooltipColor}
                            />
                          }
                        />
                        <Bar
                          isAnimationActive={!reducedMotion}
                          dataKey="downloads"
                          radius={[0, 6, 6, 0]}
                          animationBegin={0}
                          animationDuration={
                            DASHBOARD_CONFIG.barAnimationDuration
                          }
                          animationEasing="ease-out"
                        >
                          {topCrates.map((_entry, index) => (
                            <Cell
                              key={`bar-${index}`}
                              fill={chartColors[index % chartColors.length]}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                    <ChartDataTable
                      data={topCrates}
                      valueKey="downloads"
                      caption="Top Rust crates by total downloads"
                      valueLabel="Downloads"
                    />
                  </Box>
                ) : (
                  <Text fontSize="sm" color={subtitleColor}>
                    No crates found.
                  </Text>
                )}
              </Box>
            </Box>
          )}
        </Section>
      </Container>
    </Layout>
  )
}

export default Dashboard

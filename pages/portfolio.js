import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import ProjectCard from '../components/project-card'
import { projects } from '../data/projects'

const filters = ['All', 'Mobile', 'Web', 'Other']
const matches = (project, filter) =>
  filter === 'All' ||
  (filter === 'Mobile' && /iOS|Android|Game/.test(project.category)) ||
  (filter === 'Web' && project.category === 'Web') ||
  (filter === 'Other' && ['Design', 'Research'].includes(project.category))

const Portfolio = () => {
  const [filter, setFilter] = useState('All')
  const muted = useColorModeValue('gray.600', 'gray.400')
  const visible = projects.filter(project => matches(project, filter))

  return (
    <Layout title="Portfolio">
      <Container maxW="container.lg" px={0} py={8}>
        <Section>
          <Box maxW="620px" mb={8}>
            <Text className="eyebrow" mb={3}>
              Project archive
            </Text>
            <Heading as="h1" size="2xl" mb={4}>
              Selected work & projects
            </Heading>
            <Text fontSize="lg" color={muted} lineHeight="tall">
              Mobile apps, websites, and experiments from a career spent
              building. Explore the projects and the technology behind them.
            </Text>
          </Box>
          <HStack
            spacing={2}
            flexWrap="wrap"
            role="group"
            aria-label="Filter projects"
            mb={4}
          >
            {filters.map(value => (
              <Button
                key={value}
                onClick={() => setFilter(value)}
                aria-pressed={filter === value}
                colorScheme={filter === value ? 'blue' : 'gray'}
                variant={filter === value ? 'primary' : 'ghost'}
                size="sm"
              >
                {value}
              </Button>
            ))}
          </HStack>
          <Text role="status" color={muted} fontSize="sm">
            {visible.length} projects
          </Text>
        </Section>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {visible.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              priority={index === 0}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Portfolio

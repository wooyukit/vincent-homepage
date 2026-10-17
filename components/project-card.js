import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Heading, Text, Link, Badge, Flex } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useReveal } from '../lib/use-reveal'

const ProjectCard = ({ project, priority = false, index = 0 }) => {
  const ref = useReveal()
  const muted = 'text-muted'
  const accent = 'text-accent'

  return (
    <Box
      as="article"
      ref={ref}
      className="project-card surface-card section-reveal"
      style={{ '--section-delay': `${(index % 2) * 0.08}s` }}
      layerStyle="glassCard"
      borderRadius="3xl"
      overflow="hidden"
      h="full"
    >
      <Link
        as={NextLink}
        href={`/portfolio/${project.id}`}
        display="block"
        aria-label={`View ${project.title}`}
      >
        <Box overflow="hidden" bg="gray.100">
          <Image
            className="project-card-thumbnail"
            src={project.src}
            alt={project.title}
            width={640}
            height={360}
            sizes="(min-width: 62em) 460px, (min-width: 48em) 45vw, 100vw"
            priority={priority}
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </Box>
      </Link>
      <Box p={{ base: 5, md: 6 }}>
        <Text
          color={accent}
          fontSize="xs"
          fontWeight="bold"
          letterSpacing="wide"
          mb={2}
        >
          {project.category} · {project.date}
        </Text>
        <Heading as="h3" fontSize="xl" mb={3} lineHeight="short">
          <Link as={NextLink} href={`/portfolio/${project.id}`} color="inherit">
            {project.title}
          </Link>
        </Heading>
        <Text color={muted} fontSize="sm" lineHeight="tall" mb={4}>
          {project.description}
        </Text>
        <Flex gap={2} flexWrap="wrap" mb={5}>
          {project.tech.slice(0, 4).map(tech => (
            <Badge
              key={tech}
              variant="subtle"
              colorScheme="gray"
              textTransform="none"
              px={2}
              py={1}
              borderRadius="md"
            >
              {tech}
            </Badge>
          ))}
        </Flex>
        <Link
          as={NextLink}
          href={`/portfolio/${project.id}`}
          color={accent}
          fontWeight="semibold"
          fontSize="sm"
          display="inline-flex"
          className="arrow-link"
          alignItems="center"
          gap={2}
        >
          Explore project <ArrowForwardIcon aria-hidden />
        </Link>
      </Box>
    </Box>
  )
}

export default ProjectCard

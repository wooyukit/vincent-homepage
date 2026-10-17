import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Box, Button, Heading, Text, Spinner } from '@chakra-ui/react'

const Planet = dynamic(() => import('./planet'), {
  ssr: false,
  loading: () => (
    <Box py={16} textAlign="center">
      <Spinner label="Loading the interactive planet" />
    </Box>
  )
})

const PlanetPreview = () => {
  const [expanded, setExpanded] = useState(false)
  const muted = 'text-muted'

  return (
    <Box
      className="surface-card"
      textAlign="center"
      p={{ base: 6, md: 8 }}
      my={8}
      layerStyle="glassCard"
      borderRadius="xl"
    >
      <Text className="eyebrow" mb={3}>
        Play / Explore
      </Text>
      <Heading as="h2" fontSize="lg" mb={2}>
        A little curiosity, in 3D.
      </Heading>
      <Text color={muted} fontSize="sm" mb={4}>
        An interactive planet. Drag to take a look around.
      </Text>
      <Button
        variant={expanded ? 'glass' : 'primary'}
        size="sm"
        onClick={() => setExpanded(value => !value)}
        aria-expanded={expanded}
        aria-controls="planet-preview"
      >
        {expanded ? 'Close the planet' : 'Explore the planet'}
      </Button>
      {expanded && (
        <Box id="planet-preview" mt={4}>
          <Planet />
        </Box>
      )}
    </Box>
  )
}

export default PlanetPreview

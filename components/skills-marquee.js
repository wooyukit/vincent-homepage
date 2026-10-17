import { useRef } from 'react'
import { Box, Flex, Text, VisuallyHidden } from '@chakra-ui/react'
import { useMotionVisibility } from '../lib/use-motion-visibility'

const skills = [
  'Swift',
  'Kotlin',
  'React',
  'Flutter',
  'Rust',
  'Architecture',
  'Team leadership'
]

const SkillsMarquee = () => {
  const ref = useRef(null)
  useMotionVisibility(ref)
  return (
    <Box ref={ref} className="skills-marquee" data-motion="paused" py={6}>
      <VisuallyHidden>Skills: {skills.join(', ')}.</VisuallyHidden>
      <Box className="skills-track" aria-hidden="true">
        {[0, 1].map(copy => (
          <Box
            key={copy}
            className="skills-group"
            aria-hidden={copy === 1 ? 'true' : undefined}
          >
            {skills.map(skill => (
              <Flex key={skill} align="center" gap={10} flexShrink={0}>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  fontWeight="semibold"
                  whiteSpace="nowrap"
                >
                  {skill}
                </Text>
                <Box w="5px" h="5px" borderRadius="full" bg="blue.400" />
              </Flex>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default SkillsMarquee

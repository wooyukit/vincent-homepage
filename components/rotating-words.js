import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Box, VisuallyHidden } from '@chakra-ui/react'
import { useMotionVisibility } from '../lib/use-motion-visibility'

const words = ['better experiences.', 'stronger teams.', 'lasting impact.']

const RotatingWords = () => {
  const ref = useRef(null)
  const timer = useRef(null)
  const [index, setIndex] = useState(0)
  const reducedMotion = useReducedMotion()
  const visibilityChange = useCallback(active => {
    clearInterval(timer.current)
    if (active)
      timer.current = setInterval(
        () => setIndex(value => (value + 1) % words.length),
        3400
      )
  }, [])
  useMotionVisibility(ref, visibilityChange)

  return (
    <Box ref={ref} position="relative" minH="1.4em">
      <VisuallyHidden>
        better experiences, stronger teams, and lasting impact.
      </VisuallyHidden>
      <Box aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={index}
            initial={{ opacity: 0, y: reducedMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'block' }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </Box>
    </Box>
  )
}

export default RotatingWords

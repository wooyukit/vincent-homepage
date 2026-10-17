import { Box } from '@chakra-ui/react'
import { useReveal } from '../lib/use-reveal'

const Section = ({ children, delay = 0, revealOnScroll = true, ...props }) => {
  const ref = useReveal(revealOnScroll)
  return (
    <Box
      ref={ref}
      className="section-reveal"
      style={{ '--section-delay': `${Math.max(0, Math.min(delay, 0.24))}s` }}
      mb={6}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Section

import { useRef } from 'react'
import { keyframes } from '@emotion/react'
import { Box } from '@chakra-ui/react'
import { useMotionVisibility } from '../lib/use-motion-visibility'

const ripple = keyframes`
  0% { transform: scale(0.8); opacity: 0; }
  20% { opacity: 0.7; }
  100% { transform: scale(2.8); opacity: 0; }
`

const CurrentJobIndicator = () => {
  const ref = useRef(null)
  useMotionVisibility(ref)

  return (
    <Box
      ref={ref}
      className="current-job-indicator"
      position="relative"
      w="full"
      h="full"
      borderRadius="full"
      pointerEvents="none"
      sx={{
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          border: '2px solid',
          borderColor: 'text-accent',
          animation: `${ripple} 2.4s linear infinite`,
          animationPlayState: 'paused'
        },
        '&::after': { animationDelay: '-1.2s' },
        '&[data-motion="active"]::before, &[data-motion="active"]::after': {
          animationPlayState: 'running'
        },
        '@media (prefers-reduced-motion: reduce)': {
          '&::before, &::after': { display: 'none' }
        }
      }}
    >
      <Box
        position="absolute"
        inset={0}
        borderRadius="full"
        bg="text-accent"
        border="3px solid"
        borderColor="border-accent"
      />
    </Box>
  )
}

export default CurrentJobIndicator

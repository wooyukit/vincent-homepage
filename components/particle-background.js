import { useRef } from 'react'
import { keyframes } from '@emotion/react'
import { Box } from '@chakra-ui/react'
import { useMotionVisibility } from '../lib/use-motion-visibility'

// Stable positions keep the exported HTML and hydration identical. The first
// eight points form the smaller mobile arrangement.
const positions = [
  [6, 22],
  [88, 14],
  [14, 62],
  [82, 74],
  [42, 12],
  [58, 48],
  [94, 46],
  [36, 82],
  [24, 30],
  [72, 28],
  [48, 64],
  [8, 86],
  [66, 88],
  [92, 88],
  [32, 52],
  [54, 24],
  [18, 10],
  [76, 54]
]

const drift = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0);
    opacity: 0.2;
  }
  50% {
    transform: translate3d(var(--particle-x), var(--particle-y), 0);
    opacity: 0.85;
  }
`

const ParticleBackground = () => {
  const ref = useRef(null)
  useMotionVisibility(ref)

  return (
    <Box
      ref={ref}
      className="particle-background"
      aria-hidden="true"
      position="absolute"
      inset={0}
      maxH="1000px"
      overflow="hidden"
      pointerEvents="none"
      zIndex={-1}
      sx={{
        maskImage:
          'linear-gradient(to bottom, transparent, black 100px, black 680px, transparent 1000px)',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent, black 100px, black 680px, transparent 1000px)',
        '& .particle': {
          position: 'absolute',
          borderRadius: 'full',
          bg: 'page-particle',
          boxShadow: '0 0 12px 2px var(--chakra-colors-page-particle-glow)',
          animation: `${drift} var(--particle-duration) ease-in-out infinite`,
          animationPlayState: 'paused'
        },
        '&[data-motion="active"] .particle': {
          animationPlayState: 'running'
        },
        '@media (max-width: 47.99em)': {
          '& .particle:nth-of-type(n + 9)': { display: 'none' }
        },
        '@media (prefers-reduced-motion: reduce), (prefers-reduced-transparency: reduce), (prefers-contrast: more), (forced-colors: active)':
          { display: 'none' }
      }}
    >
      {positions.map(([x, y], index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: 3 + (index % 3),
            height: 3 + (index % 3),
            '--particle-x': `${
              (index % 2 ? 1 : -1) * (24 + (index % 4) * 12)
            }px`,
            '--particle-y': `${-64 - (index % 5) * 14}px`,
            '--particle-duration': `${18 + (index % 5) * 3}s`,
            animationDelay: `${-index * 2.7}s`
          }}
        />
      ))}
    </Box>
  )
}

export default ParticleBackground

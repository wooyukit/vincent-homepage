import { useRef } from 'react'
import { keyframes } from '@emotion/react'
import { Box } from '@chakra-ui/react'
import { useMotionVisibility } from '../lib/use-motion-visibility'

// Independent, overlapping light clusters reveal the same aligned dot grid.
// Fixed coordinates and negative delays keep hydration stable and avoid a
// synchronized start, without a canvas or JavaScript animation loop.
const clusters = [
  [
    [8, 14],
    [72, 72],
    [92, 38]
  ],
  [
    [36, 26],
    [12, 80],
    [72, 18]
  ],
  [
    [56, 56],
    [93, 88],
    [28, 4]
  ],
  [
    [16, 48],
    [56, 92],
    [88, 10]
  ],
  [
    [86, 60],
    [34, 74],
    [48, 8]
  ],
  [
    [66, 32],
    [6, 94],
    [44, 46]
  ]
]

const glow = keyframes`
  0%, 100% { opacity: 0.04; }
  42% { opacity: 0.8; }
  72% { opacity: 0.18; }
`

const ParticleBackground = () => {
  const ref = useRef(null)
  useMotionVisibility(ref)

  return (
    <Box
      ref={ref}
      className="particle-background"
      aria-hidden="true"
      position="fixed"
      inset={0}
      overflow="hidden"
      pointerEvents="none"
      zIndex={-1}
      opacity={{ base: 0.55, md: 0.7 }}
      sx={{
        // Keep the pattern quieter through the reading area.
        maskImage:
          'linear-gradient(90deg, black, rgba(0, 0, 0, 0.48) 30%, rgba(0, 0, 0, 0.48) 70%, black)',
        WebkitMaskImage:
          'linear-gradient(90deg, black, rgba(0, 0, 0, 0.48) 30%, rgba(0, 0, 0, 0.48) 70%, black)',
        '& .particle-cluster': {
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, var(--chakra-colors-page-particle) 1.5px, var(--chakra-colors-page-particle-glow) 2px, transparent 4px)',
          backgroundSize: 'var(--particle-spacing) var(--particle-spacing)',
          animation: `${glow} var(--particle-duration) ease-in-out infinite`,
          animationPlayState: 'paused'
        },
        '&[data-motion="active"] .particle-cluster': {
          animationPlayState: 'running'
        },
        '@media (max-width: 47.99em)': {
          '& .particle-cluster:nth-of-type(n + 5)': { display: 'none' }
        },
        '@media (prefers-reduced-motion: reduce), (prefers-reduced-transparency: reduce), (prefers-contrast: more), (forced-colors: active)':
          { display: 'none' }
      }}
    >
      {clusters.map((centers, index) => {
        const mask = centers
          .map(
            ([x, y]) =>
              `radial-gradient(ellipse clamp(150px, 20vw, 280px) clamp(160px, 24vh, 280px) at ${x}% ${y}%, black, transparent 85%)`
          )
          .join(', ')

        return (
          <span
            key={index}
            className="particle-cluster"
            style={{
              maskImage: mask,
              WebkitMaskImage: mask,
              '--particle-duration': `${7 + index}s`,
              animationDelay: `${-index * 2.3 - 1.4}s`
            }}
          />
        )
      })}
    </Box>
  )
}

export default ParticleBackground

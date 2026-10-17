import { useRef } from 'react'
import { keyframes } from '@emotion/react'
import { Box } from '@chakra-ui/react'
import { useMotionVisibility } from '../lib/use-motion-visibility'

// Stable coordinates keep the static export and hydration identical. Small,
// flat points move in separate currents without a JavaScript rendering loop.
const createLayer = layer => {
  let seed = 9127 + layer * 1013
  const random = () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }

  return Array.from({ length: 144 }, () => {
    const x = -80 + random() * 1440
    const spread = (random() + random() + random() - 1.5) * 130
    const y =
      450 +
      Math.sin(x / 220 + layer * 0.32) * 145 +
      Math.cos(x / 390 + layer * 0.5) * 65 +
      (layer - 2.5) * 85 +
      spread
    const radius = 0.45 + layer * 0.08 + random() * 0.65

    return {
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
      radius: Number(radius.toFixed(2)),
      opacity: Number((0.3 + random() * 0.65).toFixed(2))
    }
  })
}

const layers = Array.from({ length: 6 }, (_, index) => createLayer(index))

const flow = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0);
    opacity: 0.55;
  }
  50% {
    transform: translate3d(var(--particle-drift-x), var(--particle-drift-y), 0);
    opacity: 1;
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
      position="fixed"
      inset={0}
      overflow="hidden"
      pointerEvents="none"
      zIndex={-1}
      opacity={{ base: 0.55, md: 0.65 }}
      sx={{
        maskImage:
          'linear-gradient(90deg, black, rgba(0, 0, 0, 0.24) max(0px, calc(50% - 528px)), rgba(0, 0, 0, 0.24) min(100%, calc(50% + 528px)), black)',
        WebkitMaskImage:
          'linear-gradient(90deg, black, rgba(0, 0, 0, 0.24) max(0px, calc(50% - 528px)), rgba(0, 0, 0, 0.24) min(100%, calc(50% + 528px)), black)',
        '& .particle-wave': {
          position: 'absolute',
          inset: '-5%',
          animation: `${flow} var(--particle-duration) ease-in-out infinite`,
          animationPlayState: 'paused'
        },
        '&[data-motion="active"] .particle-wave': {
          animationPlayState: 'running'
        },
        '@media (max-width: 47.99em)': {
          '& .particle-wave:nth-of-type(even)': { display: 'none' }
        },
        '@media (prefers-reduced-motion: reduce), (prefers-reduced-transparency: reduce), (prefers-contrast: more), (forced-colors: active)':
          { display: 'none' }
      }}
    >
      {layers.map((particles, index) => (
        <Box
          key={index}
          className="particle-wave"
          style={{
            '--particle-duration': `${14 + index * 2}s`,
            '--particle-drift-x': `${
              (index % 2 ? -1 : 1) * (32 + index * 5)
            }px`,
            '--particle-drift-y': `${-24 - index * 4}px`,
            animationDelay: `${-index * 3.7 - 2}s`
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1280 900"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            fill="var(--chakra-colors-page-particle)"
          >
            {particles.map((particle, particleIndex) => (
              <circle
                key={particleIndex}
                cx={particle.x}
                cy={particle.y}
                r={particle.radius}
                opacity={particle.opacity}
              />
            ))}
          </svg>
        </Box>
      ))}
    </Box>
  )
}

export default ParticleBackground

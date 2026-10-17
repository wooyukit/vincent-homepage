import { useId, useRef } from 'react'
import { keyframes } from '@emotion/react'
import { Box } from '@chakra-ui/react'
import { useMotionVisibility } from '../lib/use-motion-visibility'

// Generate the same cloud for the static export and hydration. Six independently
// moving depth layers give the spheres parallax without a rendering loop.
const createLayer = layer => {
  let seed = 9127 + layer * 1013
  const random = () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }

  return Array.from({ length: 84 }, () => {
    const x = -80 + random() * 1440
    const spread = (random() + random() + random() - 1.5) * 130
    const y =
      450 +
      Math.sin(x / 220 + layer * 0.32) * 145 +
      Math.cos(x / 390 + layer * 0.5) * 65 +
      (layer - 2.5) * 85 +
      spread
    const radius = 1.3 + layer * 0.55 + random() * 1.8

    return {
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
      radius: Number(radius.toFixed(2)),
      opacity: Number((0.45 + random() * 0.55).toFixed(2))
    }
  })
}

const layers = Array.from({ length: 6 }, (_, index) => createLayer(index))

const flow = keyframes`
  0%, 100% {
    transform: translate3d(-18px, -12px, 0) rotate(-2deg) scale(0.98);
  }
  50% {
    transform: translate3d(22px, 18px, 0) rotate(2deg) scale(1.025);
  }
`

const ParticleBackground = () => {
  const ref = useRef(null)
  const id = useId().replace(/:/g, '')
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
      {layers.map((particles, index) => {
        const gradient = `${id}-sphere-${index}`

        return (
          <Box
            key={index}
            className="particle-wave"
            style={{
              '--particle-duration': `${12 + index * 2}s`,
              animationDelay: `${-index * 3.7 - 2}s`
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1280 900"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <defs>
                <radialGradient id={gradient} cx="28%" cy="24%" r="72%">
                  <stop
                    offset="0%"
                    stopColor="var(--chakra-colors-page-particle-highlight)"
                  />
                  <stop
                    offset="38%"
                    stopColor="var(--chakra-colors-page-particle-body)"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--chakra-colors-page-particle-shadow)"
                  />
                </radialGradient>
              </defs>
              {particles.map((particle, particleIndex) => (
                <circle
                  key={particleIndex}
                  cx={particle.x}
                  cy={particle.y}
                  r={particle.radius}
                  opacity={particle.opacity}
                  fill={`url(#${gradient})`}
                />
              ))}
            </svg>
          </Box>
        )
      })}
    </Box>
  )
}

export default ParticleBackground

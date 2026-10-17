import { Box } from '@chakra-ui/react'

// Defined silhouettes make the material's blur visible. One fixed glass sheet
// bounds the filtered area to the viewport, even on long project grids.
const GlassBackdrop = () => (
  <>
    <Box
      className="glass-scene"
      aria-hidden="true"
      position="fixed"
      inset={0}
      overflow="hidden"
      pointerEvents="none"
      zIndex={-1}
      sx={{
        '@media (prefers-reduced-transparency: reduce), (prefers-contrast: more), (forced-colors: active)':
          { display: 'none' }
      }}
    >
      <svg
        viewBox="0 0 1440 1000"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        focusable="false"
        style={{ display: 'block' }}
      >
        <defs>
          <linearGradient
            id="glass-ribbon"
            x1="850"
            y1="0"
            x2="1250"
            y2="1000"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--chakra-colors-scene-ribbon-start)" />
            <stop
              offset="0.4"
              stopColor="var(--chakra-colors-scene-ribbon-middle)"
            />
            <stop
              offset="0.75"
              stopColor="var(--chakra-colors-scene-ribbon-end)"
            />
            <stop
              offset="1"
              stopColor="var(--chakra-colors-scene-ribbon-tail)"
            />
          </linearGradient>
          <radialGradient id="glass-orb" cx="32%" cy="26%" r="74%">
            <stop stopColor="var(--chakra-colors-scene-orb-highlight)" />
            <stop
              offset="0.55"
              stopColor="var(--chakra-colors-scene-orb-middle)"
            />
            <stop offset="1" stopColor="var(--chakra-colors-scene-orb-edge)" />
          </radialGradient>
        </defs>
        <circle
          cx="155"
          cy="300"
          r="230"
          fill="url(#glass-orb)"
          opacity="0.7"
        />
        <path
          d="M 1150 -160 C 1650 160 1420 470 1060 540 C 740 604 520 820 620 1180 L 870 1180 C 760 920 900 805 1210 716 C 1650 590 1850 160 1400 -160 Z"
          fill="url(#glass-ribbon)"
          opacity="0.8"
          stroke="var(--chakra-colors-scene-rim)"
          strokeWidth="2"
        />
      </svg>
    </Box>
    <Box
      className="glass-page-canvas"
      aria-hidden="true"
      position="fixed"
      top={{ base: '80px', md: '88px' }}
      bottom={-6}
      left="50%"
      transform="translateX(-50%)"
      w={{ base: 'calc(100% - 16px)', md: 'calc(100% - 32px)' }}
      maxW="container.lg"
      borderRadius={{ base: '28px 28px 0 0', md: '32px 32px 0 0' }}
      pointerEvents="none"
      zIndex={0}
      layerStyle="glassCanvas"
    />
  </>
)

export default GlassBackdrop

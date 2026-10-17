import { extendTheme } from '@chakra-ui/react'
import { semanticColors } from './color-tokens'

// Keep complex values on CSS properties: Chakra 2 treats commas in custom
// property values as token fallbacks. Individual color variables stay intact.
export const glassReflection =
  'linear-gradient(135deg, var(--glass-reflection-start), var(--glass-reflection-middle) 48%, var(--glass-reflection-end))'
export const glassShadow =
  'inset 0 1px 0 var(--glass-edge-top), inset 0 -1px 0 var(--glass-edge-bottom), 0 6px 18px -10px var(--glass-shadow-color), 0 20px 48px -30px var(--glass-shadow-color)'
const glassFloatingShadow =
  'inset 0 1px 0 var(--glass-edge-top), inset 0 -1px 0 var(--glass-edge-bottom), 0 12px 32px -14px var(--glass-shadow-color)'

const solidGlassPreference =
  '@media (prefers-reduced-transparency: reduce), (prefers-contrast: more)'

// Cards share the material without creating a blur layer for every project.
const glassMaterial = {
  backgroundColor: 'var(--glass-card)',
  backgroundImage: glassReflection,
  border: '1px solid',
  borderColor: 'var(--glass-border)',
  boxShadow: glassShadow
}

const glassPreferences = {
  [solidGlassPreference]: {
    bg: 'var(--glass-solid)',
    backgroundImage: 'none',
    borderColor: 'var(--glass-strong-border)',
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none'
  },
  '@media (forced-colors: active)': {
    bg: 'Canvas',
    color: 'CanvasText',
    borderColor: 'CanvasText',
    backgroundImage: 'none',
    boxShadow: 'none',
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none'
  }
}

const glassCard = { ...glassMaterial, ...glassPreferences }

const glassFloating = {
  ...glassMaterial,
  backgroundColor: 'var(--glass-solid)',
  boxShadow: glassFloatingShadow,
  '@supports ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)))':
    {
      backgroundColor: 'var(--glass-tint)',
      backdropFilter: 'blur(16px) saturate(135%)',
      WebkitBackdropFilter: 'blur(16px) saturate(135%)'
    },
  // Keep preference rules after feature detection so opaque surfaces win.
  ...glassPreferences
}

const styles = {
  global: {
    body: {
      bg: 'var(--chakra-colors-page-bg)',
      color: 'var(--chakra-colors-page-text)',
      WebkitFontSmoothing: 'antialiased',
      position: 'relative',
      isolation: 'isolate',
      '--particle-spacing': '32px',
      '--glass-solid': 'var(--chakra-colors-glass-solid)',
      '--glass-card': 'var(--chakra-colors-glass-card)',
      '--glass-tint': 'var(--chakra-colors-glass-tint)',
      '--glass-border': 'var(--chakra-colors-glass-border)',
      '--glass-strong-border': 'var(--chakra-colors-glass-strong-border)',
      '--glass-reflection-start': 'var(--chakra-colors-glass-reflection-start)',
      '--glass-reflection-middle':
        'var(--chakra-colors-glass-reflection-middle)',
      '--glass-reflection-end': 'var(--chakra-colors-glass-reflection-end)',
      '--glass-edge-top': 'var(--chakra-colors-glass-edge-top)',
      '--glass-edge-bottom': 'var(--chakra-colors-glass-edge-bottom)',
      '--glass-shadow-color': 'var(--chakra-colors-glass-shadow-color)',
      '--glass-control': 'var(--chakra-colors-glass-control)',
      '--glass-control-hover': 'var(--chakra-colors-glass-control-hover)',
      minHeight: '100vh',
      transition: 'background-color 200ms ease, color 200ms ease'
    },
    // The viewport background stays in place on long pages. Only the small
    // cluster layers change opacity; there is no full-page backdrop filter.
    'body::before': {
      content: '""',
      position: 'fixed',
      inset: 0,
      zIndex: -1,
      pointerEvents: 'none',
      backgroundImage:
        'radial-gradient(ellipse 90% 90% at 85% 0%, var(--chakra-colors-page-light), transparent 75%), radial-gradient(circle, var(--chakra-colors-page-dot) 0.8px, transparent 1px)',
      backgroundSize:
        '100% 100%, var(--particle-spacing) var(--particle-spacing)',
      backgroundRepeat: 'no-repeat, repeat'
    },
    '@media (max-width: 47.99em)': {
      body: { '--particle-spacing': '28px' }
    },
    html: { scrollPaddingTop: '6rem' },
    '::selection': { bg: 'var(--chakra-colors-selection-bg)' },
    '.eyebrow': {
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--chakra-colors-eyebrow-text)'
    },
    '.surface-card': { position: 'relative' },
    '@keyframes page-enter': {
      from: { opacity: 0.85, transform: 'translate3d(0, 16px, 0)' },
      to: { opacity: 1, transform: 'none' }
    },
    '.page-transition': {
      animation: 'page-enter 500ms cubic-bezier(0.22, 1, 0.36, 1) both'
    },
    '@keyframes section-reveal': {
      from: {
        opacity: 'var(--reveal-opacity, 0.85)',
        transform: 'translate3d(0, 22px, 0)'
      },
      to: { opacity: 1, transform: 'none' }
    },
    '.section-reveal': {
      animation:
        'section-reveal 560ms cubic-bezier(0.22, 1, 0.36, 1) backwards',
      animationDelay: 'var(--section-delay, 0s)'
    },
    '.section-reveal[data-reveal="waiting"]': {
      animation: 'none',
      opacity: 0,
      transform: 'translate3d(0, 22px, 0)'
    },
    '.section-reveal[data-reveal="visible"]': { '--reveal-opacity': 0 },
    '.section-reveal[data-reveal="complete"], .section-reveal[data-reveal="instant"]':
      { animation: 'none', opacity: 1, transform: 'none' },
    '@keyframes hero-enter': {
      from: { opacity: 0.7, transform: 'translate3d(0, 24px, 0)' },
      to: { opacity: 1, transform: 'none' }
    },
    '.hero-reveal': {
      animation: 'hero-enter 650ms cubic-bezier(0.22, 1, 0.36, 1) both',
      animationDelay: 'var(--hero-delay, 0s)'
    },
    '.portrait-frame': {
      position: 'relative',
      isolation: 'isolate',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: '12px -10px -10px 12px',
        borderRadius: '28px',
        bg: 'var(--chakra-colors-portrait-backing)',
        backgroundImage: glassReflection,
        border: '1px solid',
        borderColor: 'var(--glass-border)',
        boxShadow: glassShadow,
        transform: 'rotate(4deg)',
        zIndex: -1,
        pointerEvents: 'none'
      }
    },
    '.portrait-image': {
      transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)'
    },
    '.portrait-caption': {
      transition: 'transform 400ms cubic-bezier(0.22, 1.2, 0.36, 1)'
    },
    '.project-card': {
      transition:
        'transform 380ms cubic-bezier(0.22, 1.2, 0.36, 1), box-shadow 300ms ease, border-color 250ms ease'
    },
    '.project-card-thumbnail': {
      transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)'
    },
    '.project-card:focus-within': {
      borderColor: 'var(--chakra-colors-link-text)'
    },
    '.arrow-link > svg': {
      transition: 'transform 260ms cubic-bezier(0.22, 1, 0.36, 1)'
    },
    '.arrow-link:focus-visible > svg': { transform: 'translateX(5px)' },
    '@keyframes skills-travel': {
      from: { transform: 'translateX(0)' },
      to: { transform: 'translateX(-50%)' }
    },
    '.skills-marquee': {
      overflow: 'hidden',
      maskImage:
        'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)'
    },
    '.skills-track': {
      display: 'flex',
      width: 'max-content',
      animation: 'skills-travel 36s linear infinite',
      animationPlayState: 'paused'
    },
    '[data-motion="active"] > .skills-track': { animationPlayState: 'running' },
    '.skills-marquee:hover > .skills-track': { animationPlayState: 'paused' },
    '.skills-group': {
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      paddingRight: '40px',
      flexShrink: 0
    },
    '@keyframes route-progress': {
      from: { transform: 'translateX(-100%)' },
      to: { transform: 'translateX(400%)' }
    },
    '.route-progress': {
      width: '25%',
      height: '100%',
      opacity: 0,
      bg: 'var(--chakra-colors-progress-bg)',
      transition: 'opacity 160ms ease'
    },
    '.route-progress.is-active': {
      opacity: 1,
      transitionDelay: '120ms',
      animation: 'route-progress 1100ms ease-in-out infinite'
    },
    '@keyframes greeting-wave': {
      '0%, 100%': { transform: 'rotate(0deg)' },
      '20%, 60%': { transform: 'rotate(16deg)' },
      '40%, 80%': { transform: 'rotate(-6deg)' }
    },
    '.greeting-wave': {
      display: 'inline-block',
      transformOrigin: '70% 80%',
      animation: 'greeting-wave 900ms ease-in-out 300ms 1'
    },
    '@media (hover: hover) and (pointer: fine)': {
      '.project-card:hover': {
        transform: 'translateY(-7px)',
        borderColor: 'var(--chakra-colors-card-hover-border)',
        boxShadow:
          'inset 0 1px 0 var(--glass-edge-top), 0 20px 42px -26px var(--chakra-colors-card-hover-shadow)'
      },
      '.project-card:hover .project-card-thumbnail': {
        transform: 'scale(1.045)'
      },
      '.portrait-frame:hover .portrait-image': { transform: 'scale(1.035)' },
      '.portrait-frame:hover .portrait-caption': {
        transform: 'translateY(-5px) rotate(-1deg)'
      },
      '.arrow-link:hover > svg': { transform: 'translateX(5px)' }
    },
    [solidGlassPreference]: {
      body: { backgroundImage: 'none' },
      'body::before': { display: 'none' }
    },
    '@media (forced-colors: active)': {
      body: { backgroundImage: 'none' },
      'body::before': { display: 'none' }
    },
    '@media (prefers-reduced-motion: reduce)': {
      '*, *::before, *::after': {
        animation: 'none !important',
        transition: 'none !important',
        scrollBehavior: 'auto !important'
      },
      '.section-reveal[data-reveal], .section-reveal, .page-transition, .hero-reveal':
        { opacity: '1 !important', transform: 'none !important' },
      '.chakra-button:hover, .chakra-button:active, .work-image-container:hover, .project-card, .project-card-thumbnail, .portrait-image, .portrait-caption, .greeting-wave, .arrow-link > svg, .skills-track':
        { transform: 'none !important' },
      '.skills-marquee': { maskImage: 'none' },
      '.skills-track': { width: 'auto' },
      '.skills-group': {
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        paddingRight: 0
      },
      '.skills-group[aria-hidden="true"]': { display: 'none' }
    }
  }
}

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'semibold',
      borderRadius: 'full',
      transition:
        'transform 220ms cubic-bezier(0.22, 1, 0.36, 1), background-color 180ms ease, color 180ms ease, box-shadow 180ms ease',
      _active: { transform: 'scale(0.96)' },
      '@media (hover: hover) and (pointer: fine)': {
        '&:hover': { transform: 'translateY(-3px)' },
        '&:active': { transform: 'scale(0.96)' }
      },
      '@media (prefers-reduced-motion: reduce)': {
        '&:hover, &:active': { transform: 'none' }
      }
    },
    variants: {
      primary: {
        backgroundColor: '#0071e3',
        color: '#ffffff',
        backgroundImage: 'none',
        fontWeight: 500,
        border: '1px solid',
        borderColor: 'transparent',
        boxShadow: 'none',
        _hover: {
          backgroundColor: '#006bd6',
          _disabled: { backgroundColor: '#0071e3' }
        },
        _active: { backgroundColor: '#0068d1' }
      },
      glass: {
        backgroundColor: 'var(--glass-control)',
        backgroundImage: glassReflection,
        color: 'var(--chakra-colors-control-text)',
        border: '1px solid',
        borderColor: 'var(--glass-border)',
        boxShadow: glassShadow,
        _hover: { backgroundColor: 'var(--glass-control-hover)' },
        _active: { backgroundColor: 'var(--chakra-colors-control-active)' },
        [solidGlassPreference]: {
          backgroundColor: 'var(--glass-solid)',
          backgroundImage: 'none',
          borderColor: 'var(--glass-strong-border)'
        }
      }
    }
  },
  Heading: {
    baseStyle: { letterSpacing: '-0.04em', fontWeight: 600 },
    variants: {
      'section-title': { fontSize: 22, marginTop: 3, marginBottom: 4 }
    }
  },
  Link: {
    baseStyle: {
      color: 'var(--chakra-colors-link-text)',
      textUnderlineOffset: 4
    }
  },
  Badge: {
    baseStyle: {
      fontFamily: 'body',
      fontWeight: 500,
      borderRadius: 'full',
      textTransform: 'none',
      letterSpacing: 0
    }
  },
  Menu: {
    baseStyle: {
      list: {
        ...glassFloating,
        '--glass-tint': 'var(--chakra-colors-menu-tint)',
        borderRadius: '2xl',
        p: 2
      },
      item: {
        bg: 'transparent',
        borderRadius: 'lg',
        _focus: { bg: 'var(--chakra-colors-menu-focus)' }
      }
    }
  },
  Divider: {
    baseStyle: { borderColor: 'var(--chakra-colors-divider-border)' }
  }
}

const gray = {
  50: '#fafafa',
  100: '#f2f2f4',
  200: '#e5e5e7',
  300: '#d2d2d7',
  400: '#aaaab1',
  500: '#686870',
  600: '#5c5c64',
  700: '#42424a',
  800: '#222226',
  900: '#1d1d1f'
}
const blue = {
  50: '#eff7ff',
  100: '#d9ecff',
  200: '#a9d2ff',
  300: '#7abbff',
  400: '#42a1ff',
  500: '#007aff',
  600: '#0071e3',
  700: '#0066cc',
  800: '#004e9d',
  900: '#003e7d'
}

const theme = extendTheme({
  config: { initialColorMode: 'light', useSystemColorMode: false },
  styles,
  semanticTokens: { colors: semanticColors },
  components,
  layerStyles: {
    glassCard,
    glassFloating,
    glassMedia: {
      ...glassFloating,
      '--glass-tint': 'rgba(18, 18, 20, 0.6)',
      '--glass-solid': '#1d1d1f',
      '--glass-reflection-start': 'rgba(255, 255, 255, 0.06)',
      '--glass-reflection-middle': 'rgba(255, 255, 255, 0.01)',
      '--glass-reflection-end': 'rgba(255, 255, 255, 0.03)',
      '--glass-border': 'rgba(255, 255, 255, 0.26)',
      color: '#ffffff'
    },
    glassFeature: {
      ...glassMaterial,
      backgroundImage: `${glassReflection}, linear-gradient(120deg, rgba(107, 144, 226, 0.06), rgba(145, 178, 190, 0.04))`,
      ...glassPreferences
    }
  },
  colors: { gray, blue, glassTeal: '#0071e3' },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace'
  }
})

// Chakra's default button variants resolve color mode during React rendering.
// Export both sets of rules so navigation controls also match before hydration.
for (const name of ['ghost', 'outline', 'solid', 'link']) {
  const variant = theme.components.Button.variants[name]
  theme.components.Button.variants[name] = props => ({
    ...variant({ ...props, colorMode: 'light' }),
    _dark: variant({ ...props, colorMode: 'dark' })
  })
}

export default theme

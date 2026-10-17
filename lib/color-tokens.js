// Both palettes are exported as CSS. ColorModeScript selects the saved palette
// before React hydrates, so static pages never need a light-first render.
export const semanticColors = {
  'page-bg': { default: '#f5f5f7', _dark: '#09090b' },
  'page-text': { default: '#1d1d1f', _dark: '#f5f5f7' },
  'glass-solid': { default: '#f5f5f7', _dark: '#1d1d1f' },
  'glass-card': {
    default: 'rgba(255, 255, 255, 0.22)',
    _dark: 'rgba(40, 40, 44, 0.28)'
  },
  'glass-tint': {
    default: 'rgba(255, 255, 255, 0.24)',
    _dark: 'rgba(20, 20, 24, 0.28)'
  },
  'glass-border': {
    default: 'rgba(255, 255, 255, 0.58)',
    _dark: 'rgba(255, 255, 255, 0.13)'
  },
  'glass-strong-border': { default: '#8393ad', _dark: '#95a5c1' },
  'glass-reflection-start': {
    default: 'rgba(255, 255, 255, 0.26)',
    _dark: 'rgba(255, 255, 255, 0.08)'
  },
  'glass-reflection-middle': {
    default: 'rgba(255, 255, 255, 0.02)',
    _dark: 'rgba(255, 255, 255, 0.015)'
  },
  'glass-reflection-end': {
    default: 'rgba(255, 255, 255, 0.08)',
    _dark: 'rgba(255, 255, 255, 0.035)'
  },
  'glass-edge-top': {
    default: 'rgba(255, 255, 255, 0.65)',
    _dark: 'rgba(255, 255, 255, 0.14)'
  },
  'glass-edge-bottom': {
    default: 'rgba(90, 105, 125, 0.08)',
    _dark: 'rgba(0, 0, 0, 0.16)'
  },
  'glass-shadow-color': {
    default: 'rgba(20, 30, 50, 0.14)',
    _dark: 'rgba(0, 0, 0, 0.4)'
  },
  'glass-control': {
    default: 'rgba(255, 255, 255, 0.12)',
    _dark: 'rgba(255, 255, 255, 0.035)'
  },
  'glass-control-hover': {
    default: 'rgba(255, 255, 255, 0.24)',
    _dark: 'rgba(255, 255, 255, 0.08)'
  },
  'selection-bg': { default: '#dbe4ff', _dark: '#324775' },
  'eyebrow-text': { default: '#62626b', _dark: '#b0b0b8' },
  'portrait-backing': {
    default: 'rgba(195, 210, 233, 0.16)',
    _dark: 'rgba(88, 113, 152, 0.12)'
  },
  'link-text': { default: '#0066cc', _dark: '#a9d2ff' },
  'progress-bg': { default: '#3157d5', _dark: '#a7bbff' },
  'card-hover-border': { default: '#c8d0da', _dark: '#526078' },
  'control-text': { default: '#25344d', _dark: '#e1e9f7' },
  'control-active': { default: '#e1e8f8', _dark: '#35435a' },
  'menu-tint': {
    default: 'rgba(255, 255, 255, 0.78)',
    _dark: 'rgba(29, 29, 31, 0.84)'
  },
  'menu-focus': { default: '#e4ebfb', _dark: '#35435a' },
  'divider-border': { default: '#e1e4e8', _dark: '#343f4f' },
  'text-strong': { default: 'gray.900', _dark: 'white' },
  'text-title': { default: 'gray.800', _dark: 'white' },
  'text-muted': { default: 'gray.600', _dark: 'gray.400' },
  'text-subtle': { default: 'gray.500', _dark: 'gray.400' },
  'text-description': { default: 'gray.600', _dark: 'gray.300' },
  'text-heading': { default: 'gray.700', _dark: 'gray.200' },
  'text-navigation': { default: 'gray.800', _dark: 'gray.200' },
  'text-accent': { default: 'blue.700', _dark: 'blue.200' },
  'border-default': { default: 'gray.200', _dark: 'gray.700' },
  'surface-subtle': { default: 'gray.100', _dark: 'gray.700' },
  'text-tag': { default: 'gray.700', _dark: 'gray.300' },
  'surface-control': { default: 'gray.100', _dark: 'whiteAlpha.100' },
  'border-control': { default: 'gray.300', _dark: 'gray.700' },
  'timeline-dot': { default: 'gray.400', _dark: 'gray.500' },
  'border-accent': { default: 'blue.100', _dark: 'blue.900' },
  'surface-error': { default: 'red.50', _dark: 'red.900' },
  'card-hover-shadow': {
    default: 'rgba(24, 33, 47, 0.2)',
    _dark: 'rgba(0, 0, 0, 0.5)'
  },
  'navigation-active': {
    default: 'rgba(0, 0, 0, 0.035)',
    _dark: 'rgba(255, 255, 255, 0.06)'
  },
  'navigation-shade-start': {
    default: 'rgba(245, 245, 247, 0.82)',
    _dark: 'rgba(9, 9, 11, 0.88)'
  },
  'navigation-shade-middle': {
    default: 'rgba(245, 245, 247, 0.54)',
    _dark: 'rgba(9, 9, 11, 0.62)'
  },
  'navigation-shade-end': {
    default: 'rgba(245, 245, 247, 0)',
    _dark: 'rgba(9, 9, 11, 0)'
  }
}

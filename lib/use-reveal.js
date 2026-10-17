import { useEffect, useRef } from 'react'

// Static HTML stays visible. Only content below the viewport is prepared for a
// reveal after the browser has initialized; keyboard focus always reveals it.
export const useReveal = (enabled = true) => {
  const ref = useRef(null)
  useEffect(() => {
    const element = ref.current
    if (!element || !enabled || !window.IntersectionObserver) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (
      preference.matches ||
      element.getBoundingClientRect().top < window.innerHeight
    )
      return

    element.dataset.reveal = 'waiting'
    const reveal = instant => {
      if (!instant && element.dataset.reveal !== 'waiting') return
      element.dataset.reveal = instant ? 'instant' : 'visible'
      observer.disconnect()
    }
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) reveal(false)
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )
    const focus = () => reveal(true)
    const preferenceChange = () => {
      if (preference.matches) reveal(true)
    }
    const finish = event => {
      if (event.target === element && event.animationName === 'section-reveal')
        element.dataset.reveal = 'complete'
    }
    observer.observe(element)
    element.addEventListener('focusin', focus)
    element.addEventListener('animationend', finish)
    preference.addEventListener('change', preferenceChange)
    return () => {
      observer.disconnect()
      element.removeEventListener('focusin', focus)
      element.removeEventListener('animationend', finish)
      preference.removeEventListener('change', preferenceChange)
      delete element.dataset.reveal
    }
  }, [enabled])
  return ref
}

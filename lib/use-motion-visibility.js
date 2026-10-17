import { useEffect } from 'react'
import { useAutomaticMotion } from './automatic-motion'

export const useMotionVisibility = (ref, onChange) => {
  const { paused } = useAutomaticMotion()
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const bounds = element.getBoundingClientRect()
    let inView = bounds.top < window.innerHeight && bounds.bottom > 0
    const sync = () => {
      const active =
        inView && !document.hidden && !preference.matches && !paused
      element.dataset.motion = active ? 'active' : 'paused'
      onChange?.(active)
    }
    const observer = window.IntersectionObserver
      ? new IntersectionObserver(([entry]) => {
          inView = entry.isIntersecting
          sync()
        })
      : null
    observer?.observe(element)
    document.addEventListener('visibilitychange', sync)
    preference.addEventListener('change', sync)
    sync()
    return () => {
      observer?.disconnect()
      document.removeEventListener('visibilitychange', sync)
      preference.removeEventListener('change', sync)
      onChange?.(false)
    }
  }, [ref, onChange, paused])
}

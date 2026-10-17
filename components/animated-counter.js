import { useCallback, useRef } from 'react'
import { animate } from 'framer-motion'
import { useMotionVisibility } from '../lib/use-motion-visibility'

const AnimatedCounter = ({ value, suffix = '+' }) => {
  const ref = useRef(null)
  const played = useRef(false)
  const controls = useRef(null)
  const visibilityChange = useCallback(
    active => {
      if (!active) {
        controls.current?.stop()
        if (played.current && ref.current) ref.current.textContent = value
        return
      }
      if (played.current) return
      played.current = true
      controls.current = animate(Math.floor(value * 0.55), value, {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: current => {
          if (ref.current) ref.current.textContent = Math.round(current)
        }
      })
    },
    [value]
  )
  useMotionVisibility(ref, visibilityChange)
  return (
    <span aria-label={`${value}${suffix}`}>
      <span ref={ref} aria-hidden="true">
        {value}
      </span>
      <span aria-hidden="true">{suffix}</span>
    </span>
  )
}

export default AnimatedCounter

import { useEffect, useRef } from 'react'
import { Portal, usePrefersReducedMotion } from '@chakra-ui/react'
import { CustomGallery, DefaultLayout } from 'react-photoswipe-gallery'
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default'

// A body-level portal keeps the fixed viewer outside animated page transforms
// and stacking contexts. Each project still shares one ordered set of images.
const ProjectGallery = ({ children }) => {
  const layoutRef = useRef(null)
  const instanceRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(
    () => () => {
      const instance = instanceRef.current
      if (!instance) return
      // close() unbinds document/window handlers; destroy() alone does not.
      instance.options.hideAnimationDuration = 0
      instance.close()
      if (instanceRef.current === instance) instance.destroy()
      instanceRef.current = null
    },
    []
  )

  const handleOpen = instance => {
    instanceRef.current = instance
    const trigger = instance.currItem.el
    layoutRef.current.setAttribute('aria-modal', 'true')
    instance.listen('destroy', () => {
      layoutRef.current?.removeAttribute('aria-modal')
      if (instanceRef.current === instance) instanceRef.current = null
      if (trigger?.isConnected) trigger.focus({ preventScroll: true })
    })
  }

  return (
    <CustomGallery
      layoutRef={layoutRef}
      ui={PhotoSwipeUI}
      options={{
        history: false,
        showAnimationDuration: reducedMotion ? 0 : 250,
        hideAnimationDuration: reducedMotion ? 0 : 250
      }}
      onOpen={handleOpen}
    >
      {children}
      <Portal appendToParentPortal={false}>
        <DefaultLayout ref={layoutRef} aria-label="Project image gallery" />
      </Portal>
    </CustomGallery>
  )
}

export default ProjectGallery

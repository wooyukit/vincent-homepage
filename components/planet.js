import { useEffect, useRef, useState } from 'react'
import { AspectRatio, Box, Spinner, Text } from '@chakra-ui/react'
import { useReducedMotion } from 'framer-motion'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { loadGLTFModel } from '../lib/model'

const disposeObject = object => {
  const textures = new Set()
  object.traverse(node => {
    node.geometry?.dispose()
    const materials = Array.isArray(node.material)
      ? node.material
      : [node.material]
    materials.filter(Boolean).forEach(material => {
      Object.values(material).forEach(value => {
        if (value?.isTexture) textures.add(value)
      })
      material.dispose()
    })
  })
  textures.forEach(texture => texture.dispose())
}

const Planet = () => {
  const containerRef = useRef(null)
  const reducedMotion = useReducedMotion()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    let active = true
    let ready = false
    let inViewport = true
    let frame = null
    let renderer
    const scene = new THREE.Scene()

    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    } catch {
      // WebGL support can only be detected after mounting a browser canvas.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setError(true)
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.domElement.setAttribute(
      'aria-label',
      'Interactive 3D planet. Drag to rotate.'
    )
    renderer.domElement.setAttribute('role', 'img')
    container.appendChild(renderer.domElement)

    const camera = new THREE.OrthographicCamera(
      -2.4,
      2.4,
      2.4,
      -2.4,
      0.2,
      50000
    )
    camera.position.set(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(-0.5, 0, 0)
    controls.autoRotate = !reducedMotion
    controls.autoRotateSpeed = 0.6
    controls.enableZoom = false
    camera.lookAt(controls.target)
    scene.add(new THREE.AmbientLight(0xcccccc, 0.2))

    const visible = () => active && ready && inViewport && !document.hidden
    const render = () => {
      frame = null
      if (!visible()) return
      if (!reducedMotion) controls.update()
      renderer.render(scene, camera)
      if (!reducedMotion) frame = requestAnimationFrame(render)
    }
    const syncLoop = () => {
      if (frame !== null) cancelAnimationFrame(frame)
      frame = null
      render()
    }
    const onControlChange = () => {
      if (reducedMotion && visible()) renderer.render(scene, camera)
    }
    const resize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      if (!width || !height) return
      camera.left = -2.4 * (width / height)
      camera.right = 2.4 * (width / height)
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      syncLoop()
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)
    const observer = new IntersectionObserver(([entry]) => {
      inViewport = entry.isIntersecting
      syncLoop()
    })
    observer.observe(container)
    document.addEventListener('visibilitychange', syncLoop)
    controls.addEventListener('change', onControlChange)
    resize()

    loadGLTFModel(scene, '/planet.glb', {
      receiveShadow: false,
      castShadow: false
    })
      .then(model => {
        if (!active) {
          disposeObject(model)
          return
        }
        ready = true
        setLoading(false)
        syncLoop()
      })
      .catch(() => {
        if (active) setError(true)
      })

    return () => {
      active = false
      if (frame !== null) cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      observer.disconnect()
      document.removeEventListener('visibilitychange', syncLoop)
      controls.removeEventListener('change', onControlChange)
      controls.dispose()
      disposeObject(scene)
      scene.clear()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [reducedMotion])

  if (error)
    return (
      <Text role="status" py={8}>
        The 3D preview isn’t available on this device.
      </Text>
    )

  return (
    <AspectRatio maxW="600px" mx="auto" ratio={1}>
      <Box ref={containerRef} position="relative">
        {loading && (
          <Spinner
            position="absolute"
            top="50%"
            left="50%"
            label="Loading the planet"
          />
        )}
      </Box>
    </AspectRatio>
  )
}

export default Planet

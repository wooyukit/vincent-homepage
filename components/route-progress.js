import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

const RouteProgress = ({ router }) => {
  const [pending, setPending] = useState(false)

  useEffect(() => {
    const start = (url, { shallow } = {}) => {
      const pathname = value => value.split(/[?#]/)[0]
      if (!shallow && pathname(url) !== pathname(router.asPath)) {
        setPending(true)
      }
    }
    const finish = () => setPending(false)

    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', finish)
    router.events.on('routeChangeError', finish)
    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', finish)
      router.events.off('routeChangeError', finish)
    }
  }, [router])

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="full"
      h="2px"
      zIndex={40}
      pointerEvents="none"
      overflow="hidden"
      aria-hidden="true"
    >
      <Box className={`route-progress${pending ? ' is-active' : ''}`} />
    </Box>
  )
}

export default RouteProgress

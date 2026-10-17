import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import { MotionConfig } from 'framer-motion'
import RouteProgress from '../components/route-progress'
import { AutomaticMotionProvider } from '../lib/automatic-motion'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <MotionConfig reducedMotion="user">
        <AutomaticMotionProvider>
          <RouteProgress router={router} />
          <Layout router={router}>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </AutomaticMotionProvider>
      </MotionConfig>
    </ChakraProvider>
  )
}

export default Website

import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container, Link } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Link
        href="#main-content"
        position="fixed"
        top={2}
        left={2}
        transform="translateY(-200%)"
        _focus={{ transform: 'none' }}
        bg="blue.600"
        color="white"
        p={3}
        borderRadius="md"
        zIndex={30}
      >
        Skip to content
      </Link>
      <Navbar path={router.asPath} />
      <Container
        as="main"
        id="main-content"
        tabIndex={-1}
        maxW="container.lg"
        pt={20}
        pb={8}
      >
        {children}
      </Container>
    </Box>
  )
}
export default Main

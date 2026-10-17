import NextLink from 'next/link'
import {
  Box,
  Heading,
  Container,
  Text,
  Divider,
  Button
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h1">Not Found</Heading>
        <Text>The page you are looking for was not found.</Text>
        <Divider my={6} />
        <Box my={6} align="center">
          <Button as={NextLink} href="/" colorScheme="blue">
            Return to home
          </Button>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFound

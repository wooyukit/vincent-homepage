import Head from 'next/head'
import Navbar from '../navbar.js'
import NoSsr from '../no-ssr.js'
import { Box, Container } from '@chakra-ui/react'
import Planet from '../planet.js'

const Main = ({ children, router }) => {
	return (
		<Box as="main">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Vincent Woo (WOO Yu Kit Vincent) — Engineering Lead | Mobile Developer</title>
			</Head>
			<Navbar path={router.asPath} />
			<Container maxW="container.lg" pt={16}>
				{children}
				<NoSsr>
					<Planet />
				</NoSsr>
			</Container>
		</Box>
	)
}
export default Main
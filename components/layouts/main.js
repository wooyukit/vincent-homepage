import Head from 'next/head'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'

const Planet = dynamic(() => import('../planet.js'), {
	ssr: false,
	loading: () => null
})

const Main = ({ children, router }) => {
	const [showPlanet, setShowPlanet] = useState(false)

	useEffect(() => {
		const idle = window.requestIdleCallback || (cb => setTimeout(cb, 1))
		const cancel = window.cancelIdleCallback || clearTimeout
		const id = idle(() => setShowPlanet(true), { timeout: 2000 })
		return () => cancel(id)
	}, [])

	return (
		<Box as="main">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Vincent Woo (WOO Yu Kit Vincent) — Engineering Lead | Mobile Developer</title>
			</Head>
			<Navbar path={router.asPath} />
			<Container maxW="container.lg" pt={16}>
				{children}
				{showPlanet && <Planet />}
			</Container>
		</Box>
	)
}
export default Main
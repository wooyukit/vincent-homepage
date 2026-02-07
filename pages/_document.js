import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
	render () {
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content="Vincent Woo - Engineering Lead with 17+ years of mobile development experience. Building high-performance iOS and Android apps at OKX, SCMP, and more." />
					<meta name="author" content="WOO Yu Kit Vincent" />
					<meta property="og:title" content="Vincent Woo - Engineering Lead" />
					<meta property="og:description" content="17+ years of mobile development experience building apps that millions love." />
					<meta property="og:image" content="https://vincent-homepage.web.app/images/kit-logo.jpg" />
					<meta property="og:url" content="https://vincent-homepage.web.app" />
					<meta property="og:type" content="website" />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="Vincent Woo - Engineering Lead" />
					<meta name="twitter:description" content="17+ years of mobile development experience building apps that millions love." />
					<meta name="twitter:image" content="https://vincent-homepage.web.app/images/kit-logo.jpg" />
				</Head>
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
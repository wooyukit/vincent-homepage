import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
	render () {
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content="Vincent Woo (WOO Yu Kit Vincent) — Engineering Lead with 17+ years of mobile development experience. Building high-performance iOS and Android apps at OKX, SCMP, Hang Seng Bank, and more." />
					<meta name="author" content="WOO Yu Kit Vincent" />
					<meta name="keywords" content="Vincent Woo, WOO Yu Kit Vincent, WOO Yu Kit, Yu Kit Vincent Woo, Engineering Lead, Mobile Developer, iOS Developer, Android Developer, Hong Kong Developer, OKX, SCMP" />
					<meta name="robots" content="index, follow" />
					<link rel="canonical" href="https://vincent-homepage.web.app" />
					<meta property="og:title" content="Vincent Woo (WOO Yu Kit Vincent) — Engineering Lead" />
					<meta property="og:description" content="17+ years of mobile development experience building apps that millions love. iOS, Android, Flutter, React, Rust." />
					<meta property="og:image" content="https://vincent-homepage.web.app/images/kit-logo.jpg" />
					<meta property="og:url" content="https://vincent-homepage.web.app" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Vincent Woo" />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="Vincent Woo (WOO Yu Kit Vincent) — Engineering Lead" />
					<meta name="twitter:description" content="17+ years of mobile development experience building apps that millions love." />
					<meta name="twitter:image" content="https://vincent-homepage.web.app/images/kit-logo.jpg" />
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
								'@context': 'https://schema.org',
								'@type': 'Person',
								name: 'Vincent Woo',
								alternateName: ['WOO Yu Kit Vincent', 'WOO Yu Kit', 'Yu Kit Vincent Woo'],
								givenName: 'Yu Kit Vincent',
								familyName: 'Woo',
								jobTitle: 'Engineering Lead',
								url: 'https://vincent-homepage.web.app',
								image: 'https://vincent-homepage.web.app/images/kit-logo.jpg',
								description:
									'Engineering Lead with 17+ years of mobile development experience, building high-performance iOS and Android apps.',
								worksFor: { '@type': 'Organization', name: 'OKX' },
								knowsAbout: [
									'iOS Development',
									'Android Development',
									'Swift',
									'Kotlin',
									'Flutter',
									'React',
									'Rust',
									'Mobile Engineering Leadership'
								],
								sameAs: [
									'https://github.com/wooyukit',
									'https://www.linkedin.com/in/yu-kit-vincent-woo-63400332/'
								]
							})
						}}
					/>
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
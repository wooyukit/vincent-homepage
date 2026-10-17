import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="author" content="WOO Yu Kit Vincent" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Vincent Woo',
                alternateName: [
                  'VincentWoo',
                  'Woo Yu Kit',
                  'WooYuKit',
                  'Woo Yu Kit Vincent',
                  'Vincent Woo Yu Kit',
                  'Yu Kit Woo',
                  'Yu Kit Vincent Woo',
                  'Vincent Yu Kit Woo'
                ],
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

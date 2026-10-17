import Head from 'next/head'
import { useRouter } from 'next/router'
import { getPageMetadata } from '../lib/seo'

const Seo = props => {
  const router = useRouter()
  const metadata = getPageMetadata(router.pathname, props)

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta
        name="description"
        content={metadata.description}
        key="description"
      />
      <meta
        name="robots"
        content={metadata.noindex ? 'noindex, follow' : 'index, follow'}
      />
      <link rel="canonical" href={metadata.canonical} key="canonical" />
      <meta property="og:title" content={metadata.title} key="og:title" />
      <meta
        property="og:description"
        content={metadata.description}
        key="og:description"
      />
      <meta property="og:url" content={metadata.canonical} key="og:url" />
      <meta property="og:image" content={metadata.image} key="og:image" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Vincent Woo" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.image} />
    </Head>
  )
}

export default Seo

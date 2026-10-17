import { getProject } from '../data/projects.js'

export const SITE_URL = 'https://vincent-homepage.web.app'

const pages = {
  '/': {
    title: 'Vincent Woo — Engineering Lead & Mobile Developer',
    description:
      'Vincent Woo is a Hong Kong engineering lead building iOS and Android apps. Explore work across OKX, SCMP, banking, and independent projects.'
  },
  '/works': {
    title: 'Experience — Vincent Woo',
    description:
      'Explore Vincent Woo’s mobile engineering and leadership experience at OKX, South China Morning Post, Hang Seng Bank, and more.'
  },
  '/portfolio': {
    title: 'Selected Work & Projects — Vincent Woo',
    description:
      'Mobile apps, websites, and independent projects by Vincent Woo. Browse work in news, banking, games, and enterprise software.'
  },
  '/dashboard': {
    title: 'Open Source Dashboard — Vincent Woo',
    description:
      'Explore Vincent Woo’s public GitHub repositories, programming languages, and Rust crate downloads.'
  },
  '/404': {
    title: 'Page Not Found — Vincent Woo',
    description:
      'This page could not be found. Explore Vincent Woo’s portfolio.'
  }
}

export const getPageMetadata = (pathname, overrides = {}) => {
  const path = pathname.split(/[?#]/)[0].replace(/\/$/, '') || '/'
  const project = path.startsWith('/portfolio/')
    ? getProject(path.slice('/portfolio/'.length))
    : undefined
  const metadata = project
    ? {
        title: `${project.title} — Vincent Woo`,
        description: project.description,
        image: project.src
      }
    : pages[path] || {
        title: `${overrides.title || 'Portfolio'} — Vincent Woo`,
        description: pages['/'].description
      }

  return {
    ...metadata,
    description: overrides.description || metadata.description,
    image: new URL(
      overrides.image || metadata.image || '/images/kit-logo.jpg',
      SITE_URL
    ).href,
    canonical: new URL(path, SITE_URL).href,
    noindex: path === '/404'
  }
}

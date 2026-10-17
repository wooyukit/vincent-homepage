import { getProject } from '../../data/projects'
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  SimpleGrid,
  Image,
  Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Gallery from '../../components/project-gallery'

const eyecatch = {
  path: '/images/portfolio/inkstone-eyecatch.webp',
  w: '1280',
  h: '720'
}
const srcs = [
  { path: '/images/portfolio/inkstone-1.webp', w: '1240', h: '2208' },
  { path: '/images/portfolio/inkstone-2.webp', w: '1240', h: '2208' },
  { path: '/images/portfolio/inkstone-3.webp', w: '1240', h: '2208' },
  { path: '/images/portfolio/inkstone-4.webp', w: '1240', h: '2208' },
  { path: '/images/portfolio/inkstone-5.webp', w: '1240', h: '2208' }
]
const srcSs = [
  { path: '/images/portfolio/inkstone-1.webp', w: '1500', h: '3000' },
  { path: '/images/portfolio/inkstone-2.webp', w: '1500', h: '3000' },
  { path: '/images/portfolio/inkstone-3.webp', w: '1500', h: '3000' },
  { path: '/images/portfolio/inkstone-4.webp', w: '1500', h: '3000' },
  { path: '/images/portfolio/inkstone-5.webp', w: '1500', h: '3000' }
]

const Work = () => {
  const project = getProject('inkstone')
  return (
    <Layout title="SCMP Inkstone App">
      <Container maxW="container.md">
        <Gallery>
          <Title>
            SCMP Inkstone App <Badge>{project.date}</Badge>
          </Title>
          <WorkImage mb={6} src={eyecatch} alt="SCMP Inkstone App" />
          <P>
            Inkstone is a daily look at what is happening in China. It is the
            accessible yet authoritative go-to source for readers who want to
            know more about a rising potential superpower. From elite politics
            to business and technology and what is buzzing in social media, plus
            all the human stories that get under the skin of a country changing
            faster than any other in history.
          </P>
          <List mx={4} my={4} spacing={4}>
            <ListItem>
              <Meta>Mobile App</Meta>
              <Link
                href="https://www.inkstonenews.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.inkstonenews.com/ <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Platform</Meta>
              <span>iOS / Android</span>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>{project.tech.join(', ')}</span>
            </ListItem>
            <ListItem>
              <Meta>Features</Meta>
              <span>
                A daily curated news brief of the key China stories you need to
                know
              </span>
            </ListItem>
            <ListItem>
              <Meta>Download</Meta>
              <Box display={{ sm: 'flex' }} align="center" alignItems="center">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.scmp.inkstone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    maxW={200}
                    src="/images/googleplay.png"
                    alt="Download on Google Play"
                  />
                </Link>
              </Box>
            </ListItem>
          </List>
          <Divider my={4} />

          <SimpleGrid
            mt={6}
            columns={[1, 2, 2, 3]}
            columnGap={2}
            alignItems="center"
          >
            {srcs.map(src => (
              <WorkImage
                key={src.path}
                src={src}
                alt="SCMP Inkstone App"
                mb={2}
              />
            ))}
          </SimpleGrid>
          <Divider my={4} />
          <SimpleGrid columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
            {srcSs.map(src => (
              <WorkImage
                key={src.path}
                src={src}
                alt="SCMP Inkstone App"
                mb={2}
              />
            ))}
          </SimpleGrid>
        </Gallery>
      </Container>
    </Layout>
  )
}
export default Work

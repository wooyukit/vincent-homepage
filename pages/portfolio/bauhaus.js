import { getProject } from '../../data/projects'
import {
  Container,
  Badge,
  List,
  ListItem,
  SimpleGrid,
  Divider,
  UnorderedList
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Gallery from '../../components/project-gallery'

const eyecatch = {
  path: '/images/portfolio/bauhaus-eyecatch.webp',
  w: '1280',
  h: '720'
}
const srcs = [
  { path: '/images/portfolio/bauhaus-1.webp', w: '1470', h: '2610' },
  { path: '/images/portfolio/bauhaus-2.webp', w: '1960', h: '3480' },
  { path: '/images/portfolio/bauhaus-3.webp', w: '1920', h: '3400' }
]

const Work = () => {
  const project = getProject('bauhaus')
  return (
    <Layout title="Bauhaus App">
      <Container maxW="container.md">
        <Gallery>
          <Title>
            Bauhaus Mobile App <Badge>{project.date}</Badge>
          </Title>
          <WorkImage mb={6} src={eyecatch} alt="Bauhaus App" />
          <P>
            Bauhaus mobile app provide great user experience for users to browse
            and buy the products.
          </P>
          <List mx={4} my={4} spacing={4}>
            <ListItem>
              <Meta>Mobile App (Hybrid)</Meta>
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
              <UnorderedList>
                <ListItem>e-commerce and shopping chart</ListItem>
                <ListItem>Hybrid App</ListItem>
                <ListItem>
                  Great user experience to look for the products
                </ListItem>
              </UnorderedList>
            </ListItem>
          </List>
          <Divider my={4} />

          <SimpleGrid
            mt={6}
            columns={[2, 3, 4, 4]}
            columnGap={2}
            alignItems="center"
          >
            {srcs.map(src => (
              <WorkImage key={src.path} src={src} alt="Bauhaus App" mb={2} />
            ))}
          </SimpleGrid>
        </Gallery>
      </Container>
    </Layout>
  )
}
export default Work

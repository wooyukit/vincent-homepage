import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/endy-chow-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/endy-chow-1.webp", "w": "156", "h": "304" },
	{ "path": "/images/portfolio/endy-chow-2.webp", "w": "156", "h": "304" },
	{ "path": "/images/portfolio/endy-chow-3.webp", "w": "316", "h": "160" },
]

const Work = () => {
	return (
		<Layout title="Endy Singer App">
			<Container maxW="container.md">
				<Title>
					Endy Singer App <Badge>2011</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Endy Singer App" />
				<P>
					Official artist app for Endy Chow with music catalog, event calendar, and exclusive content for fans. Browse the full discography, stay updated on upcoming events, and access in-app purchases for premium content.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Objective-C, AVFoundation, In-App Purchase</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Music catalog and album browsing</ListItem>
							<ListItem>Event calendar with concert dates</ListItem>
							<ListItem>Exclusive fan content with in-app purchases</ListItem>
							<ListItem>Social media sharing integration</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Endy Singer App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work

import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/musicnext-web-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/musicnext-web-1.webp", "w": "476", "h": "434" },
]

const Work = () => {
	return (
		<Layout title="MusicNext Website">
			<Container maxW="container.md">
				<Title>
					MusicNext Website <Badge>2010</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="MusicNext Website" />
				<P>
					Music discovery platform featuring new artists, album reviews, and concert listings. Users can explore new music, read reviews, and find upcoming live events.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>PHP, MySQL, jQuery, Flash Player</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Artist profiles and music discovery</ListItem>
							<ListItem>Album reviews and ratings</ListItem>
							<ListItem>Concert listings and event calendar</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="MusicNext Website" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work

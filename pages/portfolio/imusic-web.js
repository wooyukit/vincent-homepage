import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/imusic-web-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/imusic-web-1.webp", "w": "512", "h": "556" },
	{ "path": "/images/portfolio/imusic-web-2.webp", "w": "554", "h": "372" },
]

const Work = () => {
	return (
		<Layout title="iMusic Website">
			<Container maxW="container.md">
				<Title>
					iMusic Website <Badge>2010</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="iMusic Website" />
				<P>
					Digital music store with streaming previews, download purchases, and playlist management. A comprehensive platform for discovering and purchasing music online.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>PHP, MySQL, JavaScript, Payment Gateway</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Music streaming and previews</ListItem>
							<ListItem>Download purchases with payment gateway</ListItem>
							<ListItem>Playlist creation and management</ListItem>
							<ListItem>Artist and album catalog browsing</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="iMusic Website" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work

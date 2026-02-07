import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/cali-banner-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/cali-banner1.webp", "w": "556", "h": "640" },
	{ "path": "/images/portfolio/cali-banner2.webp", "w": "556", "h": "692" },
	{ "path": "/images/portfolio/cali-banner-3.webp", "w": "554", "h": "792" },
]

const Work = () => {
	return (
		<Layout title="Flash Banners">
			<Container maxW="container.md">
				<Title>
					California Red Flash Banners <Badge>2009 - 2010</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Flash Banners" />
				<P>
					Animated promotional banners and interactive advertisements for California Red marketing campaigns. Created eye-catching Flash animations for web promotions and digital advertising.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Flash, ActionScript, Photoshop, After Effects</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Animated promotional banners</ListItem>
							<ListItem>Interactive advertisement designs</ListItem>
							<ListItem>Campaign-specific creative content</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Flash Banners" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work

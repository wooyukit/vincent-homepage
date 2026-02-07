import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/soundclip-eyecatch.webp", "w": "1279", "h": "721" }
const srcs = [
	{ "path": "/images/portfolio/soundclip-1.webp", "w": "240", "h": "356" },
	{ "path": "/images/portfolio/soundclip-2.webp", "w": "238", "h": "356" },
	{ "path": "/images/portfolio/soundclip-3.webp", "w": "240", "h": "358" },
	{ "path": "/images/portfolio/soundclip-4.webp", "w": "238", "h": "354" },
	{ "path": "/images/portfolio/soundclip-5.webp", "w": "236", "h": "352" },
	{ "path": "/images/portfolio/soundclip-6.webp", "w": "234", "h": "352" },
]

const Work = () => {
	return (
		<Layout title="Sound Modify App">
			<Container maxW="container.md">
				<Title>
					Sound Modify App <Badge>2010</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Sound Modify App" />
				<P>
					Audio manipulation app with voice effects, pitch shifting, and sound recording capabilities. Users can record audio, apply various effects, and share their creations.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Objective-C, AVFoundation, Core Audio, Accelerate</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Voice recording with high quality audio</ListItem>
							<ListItem>Multiple voice effects and filters</ListItem>
							<ListItem>Pitch shifting and speed adjustment</ListItem>
							<ListItem>Audio playback and sharing</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Sound Modify App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work

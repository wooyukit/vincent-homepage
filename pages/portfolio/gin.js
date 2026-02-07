import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/gin-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/gin-1.webp", "w": "160", "h": "308" },
	{ "path": "/images/portfolio/gin-2.webp", "w": "160", "h": "304" },
	{ "path": "/images/portfolio/gin-3.webp", "w": "160", "h": "308" },
	{ "path": "/images/portfolio/gin-4.webp", "w": "156", "h": "306" },
	{ "path": "/images/portfolio/gin-5.webp", "w": "156", "h": "304" },
]

const Work = () => {
	return (
		<Layout title="Gin Singer App">
			<Container maxW="container.md">
				<Title>
					Gin Singer App <Badge>2011</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Gin Singer App" />
				<P>
					Fan engagement app for Gin Lee featuring discography, concert information, and social media integration. Browse albums, view upcoming tour dates, and connect with the fan community.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Objective-C, AVFoundation, Social Framework</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Full discography and album browsing</ListItem>
							<ListItem>Concert information and tour dates</ListItem>
							<ListItem>Photo gallery and media content</ListItem>
							<ListItem>Social media sharing and fan community</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Gin Singer App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work

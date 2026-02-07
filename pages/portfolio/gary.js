import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/gary-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/gary-1.webp", "w": "158", "h": "304" },
	{ "path": "/images/portfolio/gary-2.webp", "w": "156", "h": "306" },
	{ "path": "/images/portfolio/gary-3.webp", "w": "156", "h": "304" },
	{ "path": "/images/portfolio/gary-4.webp", "w": "156", "h": "304" },
	{ "path": "/images/portfolio/gary-5.webp", "w": "160", "h": "304" },
]

const Work = () => {
	return (
		<Layout title="Gary Singer App">
			<Container maxW="container.md">
				<Title>
					Gary Singer App <Badge>2011</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Gary Singer App" />
				<P>
					Official fan app for Gary Chaw featuring music streaming, tour dates, photo galleries, and fan community features. Fans can browse discography, view upcoming concerts, and engage with exclusive content.
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
							<ListItem>Music streaming and discography browsing</ListItem>
							<ListItem>Tour dates and concert information</ListItem>
							<ListItem>Photo gallery with high-resolution images</ListItem>
							<ListItem>Social media integration for sharing</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Gary Singer App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work

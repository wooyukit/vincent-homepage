import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/swire-drp-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/swire-drp-1.webp", "w": "5540", "h": "4160" },
	{ "path": "/images/portfolio/swire-drp-2.webp", "w": "5540", "h": "4160" },
	{ "path": "/images/portfolio/swire-drp-3.webp", "w": "5540", "h": "4160" },
	{ "path": "/images/portfolio/swire-drp-4.webp", "w": "5540", "h": "4160" },
	{ "path": "/images/portfolio/swire-drp-5.webp", "w": "5540", "h": "4160" },
	{ "path": "/images/portfolio/swire-drp-6.webp", "w": "5540", "h": "4160" },
]

const Work = () => {
	return (
		<Layout title="Swire DRP App">
			<Container maxW="container.md">
				<Title>
					Swire Disaster Recovery App <Badge>2013</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Swire DRP App" />
				<P>
					Swire Property Disaster Recovery Plan App is for property high management officers to track all issues status. The live update dashboard will let user to monitor the issue in real time.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Mobile App</Meta>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iPadOS</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Objective-C, StoryBoard</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Report disaster Issues of the property</ListItem>
							<ListItem>Real time dashboard to monitor the event</ListItem>
							<ListItem>Progress follow workflow</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Swire DRP App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work
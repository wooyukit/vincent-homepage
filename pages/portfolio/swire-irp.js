import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/swire-irp-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/swire-irp-1.webp", "w": "5540", "h": "4160" },
	{ "path": "/images/portfolio/swire-irp-2.webp", "w": "5540", "h": "4160" },
	{ "path": "/images/portfolio/swire-irp-3.webp", "w": "5540", "h": "4160" },
	{ "path": "/images/portfolio/swire-irp-4.webp", "w": "5540", "h": "4160" },
	{ "path": "/images/portfolio/swire-irp-5.webp", "w": "5540", "h": "4160" },
	{ "path": "/images/portfolio/swire-irp-6.webp", "w": "5540", "h": "4160" },
]

const Work = () => {
	return (
		<Layout title="Swire IRP App">
			<Container maxW="container.md">
				<Title>
					Swire Incident Recovery App <Badge>2013</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Swire IRP App" />
				<P>
					Swire Property Incident Recovery Plan App is for property management staff to record and report issues with urgency level. The well designed workflow is efficient for staff to follow and resolve those issues.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Mobile App</Meta>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS / iPadOS</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Objective-C, StoryBoard</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Report Issues of the property</ListItem>
							<ListItem>Photo capture and upload to server</ListItem>
							<ListItem>Progress follow work flow</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Swire IRP App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work
import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/ar-eyecatch.png" }
const srcs = [
	{ "path": "/images/portfolio/ar-1.png", "w": "2760", "h": "2640" },
	{ "path": "/images/portfolio/ar-2.png", "w": "3480", "h": "2620" },
	{ "path": "/images/portfolio/ar-3.png", "w": "2720", "h": "2040" },
	{ "path": "/images/portfolio/ar-4.png", "w": "2760", "h": "2080" },
	{ "path": "/images/portfolio/ar-5.png", "w": "2260", "h": "3000" },
	{ "path": "/images/portfolio/ar-6.png", "w": "2580", "h": "3440" },
	{ "path": "/images/portfolio/ar-7.png", "w": "2660", "h": "2000" },
]

const Work = () => {
	return (
		<Layout title="AR Research">
			<Container maxW="container.md">
				<Title>
					AR Research <Badge>2014</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="AR Research" />
				<P>
					AR Research for Qualcomm AR Framework and Unity Game integration.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Research & Development</Meta>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS / Android</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Objective-C, Java, Qualcomm AR Framework, Unity Game Framework, Blender</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Qualcomm AR Framework for Mobile App</ListItem>
							<ListItem>Unity and Blender 3D Model</ListItem>
							<ListItem>3D Model interaction with finger guesture</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="AR Research" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work
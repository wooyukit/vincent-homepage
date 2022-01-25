import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/letwork-eyecatch.png", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/letwork-1.png", "w": "2520", "h": "3840" },
	{ "path": "/images/portfolio/letwork-2.png", "w": "2560", "h": "3840" },
	{ "path": "/images/portfolio/letwork-3.png", "w": "2500", "h": "3800" },
	{ "path": "/images/portfolio/letwork-4.jpg", "w": "2500", "h": "3840" },
	{ "path": "/images/portfolio/letwork-5.png", "w": "2520", "h": "3760" },
	{ "path": "/images/portfolio/letwork-6.png", "w": "2520", "h": "3720" },
	{ "path": "/images/portfolio/letwork-7.png", "w": "4920", "h": "2840" },
]

const Work = () => {
	return (
		<Layout title="Letwork App">
			<Container maxW="container.md">
				<Title>
					Letwork Mobile App <Badge>2013</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Letwork Mobile App" />
				<P>
					AR Research for Qualcomm AR Framework and Unity Game integration.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Mobile App</Meta>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS / Android</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Objective-C, Java, CakePHP, CMS</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Manage and display the company business cards</ListItem>
							<ListItem>Well developed content management system to update the content of the app</ListItem>
							<ListItem>Rich information of business card</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Letwork Mobile App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work
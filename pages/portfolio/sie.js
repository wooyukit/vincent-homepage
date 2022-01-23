import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/sie-eyecatch.png" }
const srcs = [
	{ "path": "/images/portfolio/sie-1.png", "w": "1920", "h": "3420" },
	{ "path": "/images/portfolio/sie-2.png", "w": "1920", "h": "3420" },
	{ "path": "/images/portfolio/sie-3.png", "w": "1440", "h": "2560" },
	{ "path": "/images/portfolio/sie-4.png", "w": "1920", "h": "3420" },
	{ "path": "/images/portfolio/sie-5.png", "w": "1920", "h": "3420" },
	{ "path": "/images/portfolio/sie-6.png", "w": "1920", "h": "3420" },
]

const Work = () => {
	return (
		<Layout title="SIE Fund App">
			<Container maxW="container.md">
				<Title>
					Government SIE Fund App <Badge>2014</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="SIE Fund App" />
				<P>
					Government SIE Fund department app provide user with interactive function such as Funding News, Activities, Case sharing, Funding ideas and Funny games.
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
						<span>Objective-C, Java, Game Programming, Multiple Language, Accessibility Vision Support</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Brand News Design and User Experience</ListItem>
							<ListItem>Interest Games with Certifications Sharing</ListItem>
							<ListItem>Accessibility Vision Support for the disabled users</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="SIE Fund App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work
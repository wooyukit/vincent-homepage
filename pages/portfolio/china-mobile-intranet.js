import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/china-mobile-intranet-app-eyecatch.png", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/china-mobile-intranet-app-1.png", "w": "2160", "h": "3200" },
	{ "path": "/images/portfolio/china-mobile-intranet-app-2.png", "w": "2140", "h": "3200" },
	{ "path": "/images/portfolio/china-mobile-intranet-app-3.png", "w": "2200", "h": "3280" },
	{ "path": "/images/portfolio/china-mobile-intranet-app-4.png", "w": "2160", "h": "3220" },
	{ "path": "/images/portfolio/china-mobile-intranet-app-5.png", "w": "2240", "h": "3320" },
	{ "path": "/images/portfolio/china-mobile-intranet-app-6.png", "w": "2220", "h": "3320" },
]

const Work = () => {
	return (
		<Layout title="China Mobile Intranet App">
			<Container maxW="container.md">
				<Title>
				China Mobile Intranet App <Badge>2012</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="China Mobile Intranet App" />
				<P>
					China Mobile Intranet App is the soical network platform for internal china mobile staff to share information.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Mobile App</Meta>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Objective-C</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Interface design to work with web api</ListItem>
							<ListItem>Share photo, Vote, Live Feed</ListItem>
							<ListItem>Personal Photos and Storage Space</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="T1T Appointment App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work
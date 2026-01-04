import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/sino-club-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/sino-club-1.webp", "w": "2360", "h": "4160" },
	{ "path": "/images/portfolio/sino-club-2.webp", "w": "2380", "h": "4200" },
	{ "path": "/images/portfolio/sino-club-3.webp", "w": "2360", "h": "4200" },
	{ "path": "/images/portfolio/sino-club-4.webp", "w": "2300", "h": "4080" },
	{ "path": "/images/portfolio/sino-club-5.webp", "w": "2280", "h": "4060" },
	{ "path": "/images/portfolio/sino-club-6.webp", "w": "2280", "h": "4060" },
]

const Work = () => {
	return (
		<Layout title="Sino Club App">
			<Container maxW="container.md">
				<Title>
					Sino Club Mall App <Badge>2014</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Sino Club App" />
				<P>
					Sino Club Mall App is designed for shopping mall with iBeacon micro location service to identify customer location to get the mall points to redeem the price.
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
						<span>Objective-C, Java, iBeacon</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>iBeacon Micro Location to earn points</ListItem>
							<ListItem>Membership points to redeem the price</ListItem>
							<ListItem>Interactive location game</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Sino Club Mall App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work
import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/guzen-eyecatch.png", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/guzen-1.png", "w": "1900", "h": "3360" },
	{ "path": "/images/portfolio/guzen-2.png", "w": "1960", "h": "3480" },
	{ "path": "/images/portfolio/guzen-3.png", "w": "1960", "h": "3480" },
	{ "path": "/images/portfolio/guzen-4.png", "w": "1920", "h": "3440" },
	{ "path": "/images/portfolio/guzen-5.png", "w": "1920", "h": "3440" },
]

const Work = () => {
	return (
		<Layout title="Guzen App">
			<Container maxW="container.md">
				<Title>
					GuruOnline Guzen App <Badge>2014</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Guzen App" />
				<P>
					Guru Online christmas guzen app is for staff to upload and share their mixed image and play treasure hunt game via iBeacon and QR code.
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
						<span>Objective-C, Java, Image Process, iBeacon, Serverless</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Photo Mix with cute image frame</ListItem>
							<ListItem>iBeacon for treasure hunt</ListItem>
							<ListItem>Share and publish image via serverless services</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Guzen App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work
import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/25-master-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/25-master-1.webp", "w": "2180", "h": "3240" },
	{ "path": "/images/portfolio/25-master-2.webp", "w": "2160", "h": "3240" },
	{ "path": "/images/portfolio/25-master-3.webp", "w": "2160", "h": "3240" },
]

const Work = () => {
	return (
		<Layout title="25 Master Mobile Game">
			<Container maxW="container.md">
				<Title>
					25 Master Mobile Game<Badge>2012</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="25 Master Mobile Game" />
				<P>
					25 Master is the mini games mobile application.
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
						<span>Objective-C, UIKit</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Ranking with world players</ListItem>
							<ListItem>Game with great animations and design</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="25 Master Mobile Game" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work
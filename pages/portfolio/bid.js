import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/bid-eyecatch.webp", "w": "1276", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/bid-1.webp", "w": "212", "h": "316" },
	{ "path": "/images/portfolio/bid-2.webp", "w": "210", "h": "316" },
	{ "path": "/images/portfolio/bid-3.webp", "w": "210", "h": "316" },
	{ "path": "/images/portfolio/bid-4.webp", "w": "210", "h": "314" },
	{ "path": "/images/portfolio/bid-5.webp", "w": "210", "h": "314" },
]

const Work = () => {
	return (
		<Layout title="Bid Trending App">
			<Container maxW="container.md">
				<Title>
					Bid Trending App <Badge>2014</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Bid Trending App" />
				<P>
					Real-time auction and bidding platform with live updates, countdown timers, and secure payment processing. Users can browse items, place bids, and track auction progress in real time.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS / Android</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Swift, Java, WebSocket, Push Notifications</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Real-time auction bidding with live updates</ListItem>
							<ListItem>Countdown timers for auction items</ListItem>
							<ListItem>Secure payment processing</ListItem>
							<ListItem>Push notifications for bid status</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Bid Trending App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work

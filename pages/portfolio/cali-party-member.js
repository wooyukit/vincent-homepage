import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/cali-party-member-eyecatch.webp", "w": "1279", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/cali-party-member-1.webp", "w": "1280", "h": "3173" },
	{ "path": "/images/portfolio/cali-party-member-2.webp", "w": "554", "h": "630" },
	{ "path": "/images/portfolio/cali-party-member-3.webp", "w": "554", "h": "516" },
	{ "path": "/images/portfolio/cali-party-member-4.webp", "w": "554", "h": "756" },
	{ "path": "/images/portfolio/cali-party-member-5.webp", "w": "554", "h": "920" },
]

const Work = () => {
	return (
		<Layout title="Party Book & Member Songs">
			<Container maxW="container.md">
				<Title>
					Party Book &amp; Member Songs <Badge>2009 - 2010</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Party Book & Member Songs" />
				<P>
					Party room booking system with song catalog, membership management, and reservation features for California Red. Customers can browse party packages, book rooms, and manage memberships online.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>PHP, MySQL, JavaScript, jQuery</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Party room booking and reservation system</ListItem>
							<ListItem>Song catalog with search functionality</ListItem>
							<ListItem>Membership management and rewards</ListItem>
							<ListItem>Online payment gateway integration</ListItem>
							<ListItem>Member data transfer between systems</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Party Book & Member Songs" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work

import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/mega-show-eyecatch.webp", "w": "1276", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/mega-show-1.webp", "w": "228", "h": "340" },
	{ "path": "/images/portfolio/mega-show-2.webp", "w": "224", "h": "336" },
	{ "path": "/images/portfolio/mega-show-3.webp", "w": "224", "h": "336" },
	{ "path": "/images/portfolio/mega-show-4.webp", "w": "240", "h": "360" },
	{ "path": "/images/portfolio/mega-show-5.webp", "w": "240", "h": "360" },
]

const Work = () => {
	return (
		<Layout title="Mega Show Booth App">
			<Container maxW="container.md">
				<Title>
					Mega Show Booth App <Badge>2014</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Mega Show Booth App" />
				<P>
					Trade show companion app with exhibitor directory, floor maps, and appointment scheduling for Mega Show events. Browse exhibitor booths, plan your visit, and schedule meetings.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Swift, MapKit, Calendar API, QR Scanner</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Exhibitor directory with search</ListItem>
							<ListItem>Interactive floor maps for navigation</ListItem>
							<ListItem>Appointment scheduling with exhibitors</ListItem>
							<ListItem>QR code scanning for booth information</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Mega Show Booth App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work

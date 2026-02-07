import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/hkexa-web-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/hkexa-web-1.webp", "w": "550", "h": "380" },
]

const Work = () => {
	return (
		<Layout title="HKEXA Website">
			<Container maxW="container.md">
				<Title>
					HKEXA Website <Badge>2010</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="HKEXA Website" />
				<P>
					Association website for Hong Kong Examinations Authority with exam schedules and registration portal. Provides information about examinations, registration procedures, and results.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>PHP, MySQL, JavaScript, Bootstrap</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Exam schedules and registration portal</ListItem>
							<ListItem>Results lookup and verification</ListItem>
							<ListItem>Information resources for candidates</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="HKEXA Website" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work

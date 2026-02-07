import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/solomonsc-web-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/solomonsc-web.webp", "w": "554", "h": "380" },
]

const Work = () => {
	return (
		<Layout title="Solomon SC Website">
			<Container maxW="container.md">
				<Title>
					Solomon SC Website <Badge>2010</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Solomon SC Website" />
				<P>
					Corporate website for Solomon Systech with product showcases, investor relations, and news updates. Designed to present company information and products to stakeholders and customers.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Web</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>PHP, MySQL, jQuery, CSS3</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Product showcase and catalog</ListItem>
							<ListItem>Investor relations and financial reports</ListItem>
							<ListItem>Company news and press releases</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Solomon SC Website" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work

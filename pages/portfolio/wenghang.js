import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/weng-hang-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/weng-hang-1.webp", "w": "236", "h": "348" },
	{ "path": "/images/portfolio/weng-hang-2.webp", "w": "232", "h": "348" },
	{ "path": "/images/portfolio/weng-hang-3.webp", "w": "236", "h": "352" },
	{ "path": "/images/portfolio/weng-hang-4.webp", "w": "240", "h": "356" },
	{ "path": "/images/portfolio/weng-hang-5.webp", "w": "232", "h": "350" },
	{ "path": "/images/portfolio/weng-hang-6.webp", "w": "234", "h": "350" },
]

const Work = () => {
	return (
		<Layout title="Weng Hang Bank App">
			<Container maxW="container.md">
				<Title>
					Weng Hang Bank App <Badge>2014</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Weng Hang Bank App" />
				<P>
					Mobile banking application with account services, fund transfers, bill payments, and branch/ATM locator. Secure financial transactions with enterprise-grade security measures.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS / Android</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Swift, Java, Core Data, MapKit, Security Framework</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Account management and fund transfers</ListItem>
							<ListItem>Bill payments and transaction history</ListItem>
							<ListItem>Branch and ATM locator with maps</ListItem>
							<ListItem>Secure authentication and encryption</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Weng Hang Bank App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work

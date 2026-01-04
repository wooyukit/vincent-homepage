import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/apas-web-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/apas-web-1.webp", "w": "5520", "h": "3000" },
	{ "path": "/images/portfolio/apas-web-2.webp", "w": "5520", "h": "3180" },
	{ "path": "/images/portfolio/apas-web-3.webp", "w": "5520", "h": "3200" },
	{ "path": "/images/portfolio/apas-web-4.webp", "w": "5540", "h": "3180" },
	{ "path": "/images/portfolio/apas-web-5.webp", "w": "5540", "h": "3180" },
	{ "path": "/images/portfolio/apas-web-6.webp", "w": "5540", "h": "2500" },
]

const Work = () => {
	return (
		<Layout title="APAS Music Website">
			<Container maxW="container.md">
				<Title>
					APAS Music Website <Badge>2014</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="APAS Music Website" />
				<P>
					APAS Website is the platform for musician to share their performance and portfolio to the public. Also, there is the booking function and live chat functions for people to make appointment with musician to organize events.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://www.apas.com.hk" target="_blank">https://www.apas.com.hk <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Website platform</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>CakePHP, Javascript, MySql, HTML 5, CMS</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Well designed profile for musicians</ListItem>
							<ListItem>Album player function</ListItem>
							<ListItem>Live Chat with parties</ListItem>
							<ListItem>Search with keywords</ListItem>
							<ListItem>Make Booking with musician</ListItem>
							<ListItem>Membership features</ListItem>
							<ListItem>Content Manangement System for control</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="APAS Music Website" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work
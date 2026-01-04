import { Container, Badge, Link, List, ListItem, Box, Divider } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/takealook-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/takealook-1.webp", "w": "1352", "h": "4003" },
	{ "path": "/images/portfolio/takealook-2.webp", "w": "1352", "h": "6146" },
	{ "path": "/images/portfolio/takealook-3.webp", "w": "1352", "h": "2719" },
	{ "path": "/images/portfolio/takealook-4.webp", "w": "1247", "h": "1006" },
	{ "path": "/images/portfolio/takealook-5.webp", "w": "1247", "h": "1566" },
	{ "path": "/images/portfolio/takealook-6.webp", "w": "1352", "h": "3971" },
]

const Work = () => {
	return (
		<Layout title="Take A Look">
			<Container maxW="container.md">
				<Title>
					Take A Look <Badge>2016</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="TakeALook" />
				<P>
					Take A Look website is the platform for customers to buy the tickets and join local tour. There are shopping cart with payment gateway, live chat, activity search functions to provide seamless experience when booking activities. Moreover, we provided our business partners with content management system to organize activities for selling.
				</P>
				<List ml={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://www.takealook.com">
							https://www.takealook.com <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Laravel, PHP, ReactJS, Javascript, MariaDB, Redis, AWS, CentOS, Docker</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<span>Comprehensive CMS, Live Chat, Shopping Cart, Online Payment with AsiaPay, Over 11 Countries Activity for booking</span>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<Box pt={6} sx={{ columnCount: [1, 1, 2, 2], columnGap: "12px" }}>
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="TakeALook" mb={2} />
						))}
					</Box>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work
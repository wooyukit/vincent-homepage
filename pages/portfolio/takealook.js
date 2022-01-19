import { Container, Badge, Link, List, ListItem, Box, Divider } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

import eyecatch from "../../public/images/portfolio/takealook-eyecatch.png"

import src1 from "../../public/images/portfolio/takealook-1.png"
import src2 from "../../public/images/portfolio/takealook-2.png"
import src3 from "../../public/images/portfolio/takealook-3.png"
import src4 from "../../public/images/portfolio/takealook-4.png"
import src5 from "../../public/images/portfolio/takealook-5.png"
import src6 from "../../public/images/portfolio/takealook-6.png"

const srcs = [src1, src2, src3, src4, src5, src6]

const Work = () => {
	return (
		<Layout title="Take A Look">
			<Container maxW="container.md">
				<Title>
					Take A Look <Badge>2016</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="TakeALook" />
				<P>
					Take A Look website is the platform for customers to buy the tickets and join local tour. There are shopping cart with payment gateway to provide seamless experience when booking activities.
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
				<Box pt={6} sx={{ columnCount: [1, 1, 2, 2], columnGap: "12px" }}>
					{srcs.map((src) => (
						<WorkImage key={src} src={src} alt="TakeALook" mb={2} />
					))}
				</Box>
			</Container>
		</Layout>
	)
}
export default Work
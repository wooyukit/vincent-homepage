import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

import eyecatch from "../../public/images/portfolio/guzen-eyecatch.png"
import src1 from "../../public/images/portfolio/guzen-1.png"
import src2 from "../../public/images/portfolio/guzen-2.png"
import src3 from "../../public/images/portfolio/guzen-3.png"
import src4 from "../../public/images/portfolio/guzen-4.png"
import src5 from "../../public/images/portfolio/guzen-5.png"


const srcs = [src1, src2, src3, src4, src5]

const Work = () => {
	return (
		<Layout title="Guzen App">
			<Container maxW="container.md">
				<Title>
					GuruOnline Guzen App <Badge>2014</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Guzen App" />
				<P>
					Guru Online christmas guzen app is for staff to upload and share their mixed image and play treasure hunt game via iBeacon and QR code.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Mobile App</Meta>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS / Android</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Objective-C, Java, Image Process, iBeacon, Serverless</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Photo Mix with cute image frame</ListItem>
							<ListItem>iBeacon for treasure hunt</ListItem>
							<ListItem>Share and publish image via serverless services</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
					{srcs.map((src) => (
						<WorkImage key={src} src={src} alt="Guzen App" mb={2} />
					))}
				</SimpleGrid>
			</Container>
		</Layout>
	)
}
export default Work
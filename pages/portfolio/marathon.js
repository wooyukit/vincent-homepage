import { Container, Badge,  List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

import eyecatch from "../../public/images/portfolio/marathon-eyecatch.png"
import src1 from "../../public/images/portfolio/marathon-1.png"
import src2 from "../../public/images/portfolio/marathon-2.png"
import src3 from "../../public/images/portfolio/marathon-3.png"
import src4 from "../../public/images/portfolio/marathon-4.png"


const srcs = [src1, src2, src3, src4]

const Work = () => {
	return (
		<Layout title="Marathon App">
			<Container maxW="container.md">
				<Title>
					Marathon App <Badge>2014</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Marathon App" />
				<P>
					Marathon sport day app is for people to upload and share their mixed image and share to social network on sport campaign day. This app is using apple enterprise cert to distribute to the public without going to any store.
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
						<span>Objective-C, Java, Enterprise Cert Distribution</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Photo Mix with cute image frame</ListItem>
							<ListItem>Enterprice Cert Distribution</ListItem>
							<ListItem>Share and publish image to different social networks</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
					{srcs.map((src) => (
						<WorkImage key={src} src={src} alt="Marathon App" mb={2} />
					))}
				</SimpleGrid>
			</Container>
		</Layout>
	)
}
export default Work
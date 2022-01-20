import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

import eyecatch from "../../public/images/portfolio/sie-eyecatch.png"
import src1 from "../../public/images/portfolio/sie-1.png"
import src2 from "../../public/images/portfolio/sie-2.png"
import src3 from "../../public/images/portfolio/sie-3.png"
import src4 from "../../public/images/portfolio/sie-4.png"
import src5 from "../../public/images/portfolio/sie-5.png"
import src6 from "../../public/images/portfolio/sie-6.png"


const srcs = [src1, src2, src3, src4, src5, src6]

const Work = () => {
	return (
		<Layout title="SIE Fund App">
			<Container maxW="container.md">
				<Title>
					Government SIE Fund App <Badge>2014</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="SIE Fund App" />
				<P>
					Government SIE Fund department app provide user with interactive function such as Funding News, Activities, Case sharing, Funding ideas and Funny games.
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
						<span>Objective-C, Java, Game Programming, Multiple Language, Accessibility Vision Support</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Brand News Design and User Experience</ListItem>
							<ListItem>Interest Games with Certifications Sharing</ListItem>
							<ListItem>Accessibility Vision Support for the disabled users</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={4} alignItems="center">
					{srcs.map((src) => (
						<WorkImage key={src} src={src} alt="SIE Fund App" mb={2} />
					))}
				</SimpleGrid>
			</Container>
		</Layout>
	)
}
export default Work
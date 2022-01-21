import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

import eyecatch from "../../public/images/portfolio/bauhaus-eyecatch.png"
import src1 from "../../public/images/portfolio/bauhaus-1.png"
import src2 from "../../public/images/portfolio/bauhaus-2.png"
import src3 from "../../public/images/portfolio/bauhaus-3.png"


const srcs = [src1, src2, src3]

const Work = () => {
	return (
		<Layout title="Bauhaus App">
			<Container maxW="container.md">
				<Title>
					Bauhaus Mobile App <Badge>2014</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Bauhaus App" />
				<P>
					Bauhaus mobile app provide great user experience for users to browse and buy the products.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Mobile App (Hybrid)</Meta>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS / Android</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Objective-C, Java</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>e-commerce and shopping chart</ListItem>
							<ListItem>Hybrid App</ListItem>
							<ListItem>Great user experience to look for the products</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
					{srcs.map((src) => (
						<WorkImage key={src} src={src} alt="Bauhaus App" mb={2} />
					))}
				</SimpleGrid>
			</Container>
		</Layout>
	)
}
export default Work
import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

import eyecatch from "../../public/images/portfolio/ar-eyecatch.png"
import src1 from "../../public/images/portfolio/ar-1.png"
import src2 from "../../public/images/portfolio/ar-2.png"
import src3 from "../../public/images/portfolio/ar-3.png"
import src4 from "../../public/images/portfolio/ar-4.png"
import src5 from "../../public/images/portfolio/ar-5.png"
import src6 from "../../public/images/portfolio/ar-6.png"
import src7 from "../../public/images/portfolio/ar-7.png"


const srcs = [src1, src2, src3, src4, src5, src6, src7]

const Work = () => {
	return (
		<Layout title="AR Research">
			<Container maxW="container.md">
				<Title>
					AR Research <Badge>2014</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="AR Research" />
				<P>
					AR Research for Qualcomm AR Framework and Unity Game integration.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Research & Development</Meta>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS / Android</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Objective-C, Java, Qualcomm AR Framework, Unity Game Framework, Blender</span> 
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Qualcomm AR Framework for Mobile App</ListItem>
							<ListItem>Unity and Blender 3D Model</ListItem>
							<ListItem>3D Model interaction with finger guesture</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
					{srcs.map((src) => (
						<WorkImage key={src} src={src} alt="AR Research" mb={2} />
					))}
				</SimpleGrid>
			</Container>
		</Layout>
	)
}
export default Work
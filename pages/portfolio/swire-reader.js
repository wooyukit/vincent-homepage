import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

import eyecatch from "../../public/images/portfolio/swire-reader-eyecatch.png"
import src1 from "../../public/images/portfolio/swire-reader-1.png"
import src2 from "../../public/images/portfolio/swire-reader-2.png"
import src3 from "../../public/images/portfolio/swire-reader-3.png"
import src4 from "../../public/images/portfolio/swire-reader-4.png"


const srcs = [src1, src2, src3, src4]

const Work = () => {
	return (
		<Layout title="Swire Reader App">
			<Container maxW="container.md">
				<Title>
				Swire Reader App <Badge>2014</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Swire Reader App" />
				<P>
					Swire Reader App is for Swire Property staff to use during public anouncement.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Mobile App</Meta>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Objective-C, StoryBoard, Patch Update</span> 
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Clear Reading & Well Managed notes for anouncement</ListItem>
							<ListItem>Comprehensive note searching</ListItem>
							<ListItem>Fast navigation for the notes</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
					{srcs.map((src) => (
						<WorkImage key={src} src={src} alt="Swire Reader App" mb={2} />
					))}
				</SimpleGrid>
			</Container>
		</Layout>
	)
}
export default Work
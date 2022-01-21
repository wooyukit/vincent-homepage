import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

import eyecatch from "../../public/images/portfolio/t1t-eyecatch.png"
import src1 from "../../public/images/portfolio/t1t-1.png"
import src2 from "../../public/images/portfolio/t1t-2.png"
import src3 from "../../public/images/portfolio/t1t-3.png"
import src4 from "../../public/images/portfolio/t1t-4.png"
import src5 from "../../public/images/portfolio/t1t-5.jpg"


const srcs = [src1, src2, src3, src4, src5]

const Work = () => {
	return (
		<Layout title="T1T App">
			<Container maxW="container.md">
				<Title>
					T1T Appointment App <Badge>2013</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="T1T Appointment App" />
				<P>
					T1T Appointment App is the soical network platform for users to find people to have meal together.
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
						<span>Objective-C, StoryBoard, Location Service, Live Chat</span> 
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Local Service to meet others</ListItem>
							<ListItem>Live chat to share their thought with others</ListItem>
							<ListItem>Comment system to rate the appointment</ListItem>
							<ListItem>Membership and profile management system</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
					{srcs.map((src) => (
						<WorkImage key={src} src={src} alt="T1T Appointment App" mb={2} />
					))}
				</SimpleGrid>
			</Container>
		</Layout>
	)
}
export default Work
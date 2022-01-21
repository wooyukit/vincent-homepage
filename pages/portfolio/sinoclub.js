import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

import eyecatch from "../../public/images/portfolio/sino-club-eyecatch.png"
import src1 from "../../public/images/portfolio/sino-club-1.png"
import src2 from "../../public/images/portfolio/sino-club-2.png"
import src3 from "../../public/images/portfolio/sino-club-3.png"
import src4 from "../../public/images/portfolio/sino-club-4.png"
import src5 from "../../public/images/portfolio/sino-club-5.png"
import src6 from "../../public/images/portfolio/sino-club-6.png"


const srcs = [src1, src2, src3, src4, src5, src6]

const Work = () => {
	return (
		<Layout title="Sino Club App">
			<Container maxW="container.md">
				<Title>
					Sino Club Mall App <Badge>2014</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="SIE Fund App" />
				<P>
					Sino Club Mall App is designed for shopping mall with iBeacon micro location service to identify customer location to get the mall points to redeem the price.
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
						<span>Objective-C, Java, iBeacon</span> 
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>iBeacon Micro Location to earn points</ListItem>
							<ListItem>Membership points to redeem the price</ListItem>
							<ListItem>Interactive location game</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={4} alignItems="center">
					{srcs.map((src) => (
						<WorkImage key={src} src={src} alt="Sino Club Mall App" mb={2} />
					))}
				</SimpleGrid>
			</Container>
		</Layout>
	)
}
export default Work
import { Container, Badge, Link, List, ListItem, Box, SimpleGrid, Image, Divider, UnorderedList } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

import eyecatch from "../../public/images/portfolio/twinpeak-eyecatch.png"
import src1 from "../../public/images/portfolio/twinpeak-1.png"
import src2 from "../../public/images/portfolio/twinpeak-2.png"
import src3 from "../../public/images/portfolio/twinpeak-3.png"
import src4 from "../../public/images/portfolio/twinpeak-4.png"
import src5 from "../../public/images/portfolio/twinpeak-5.png"
import src6 from "../../public/images/portfolio/twinpeak-6.png"
import src7 from "../../public/images/portfolio/twinpeak-7.png"
import src8 from "../../public/images/portfolio/twinpeak-8.png"
import src9 from "../../public/images/portfolio/twinpeak-9.jpg"


const srcs = [src1, src2, src3, src4, src5, src6, src7, src8, src9]

const Work = () => {
	return (
		<Layout title="TwinPeak App">
			<Container maxW="container.md">
				<Title>
					KWah TwinPeak Property App <Badge>2015</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="KWah Twin Peak App" />
				<P>
					KWah Twin Peak mobile app is to promote Twin Peak property when selling period. The app has a great variety of functions such as property agent coffee redemption, property latest news, AR 3D preview by scanning floor plan on the leaflet and news alert. With the great gallery presentation and design of the app, it was able to assist property agent when selling their customers.
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
						<span>Objective-C, Java, ARKit, OpenCV, QR code Generation</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>AR 3D decoration by scanning floor plan on the leaflet</ListItem>
							<ListItem>Property agent EAA card scanning and recognition</ListItem>
							<ListItem>Coffee redemption function by generated QR Code</ListItem>
							<ListItem>Building floor plan preview</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={4} alignItems="center">
					{srcs.map((src) => (
						<WorkImage key={src} src={src} alt="KWah Twin Peak App" mb={2} />
					))}
				</SimpleGrid>
			</Container>
		</Layout>
	)
}
export default Work
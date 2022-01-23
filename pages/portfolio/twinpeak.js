import { Container, Badge, List, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/twinpeak-eyecatch.png" }
const srcs = [
	{ "path": "/images/portfolio/twinpeak-1.png", "w": "1960", "h": "3480" },
	{ "path": "/images/portfolio/twinpeak-2.png", "w": "1470", "h": "2610" },
	{ "path": "/images/portfolio/twinpeak-3.png", "w": "1920", "h": "3440" },
	{ "path": "/images/portfolio/twinpeak-4.png", "w": "1440", "h": "2560" },
	{ "path": "/images/portfolio/twinpeak-5.png", "w": "1247", "h": "2560" },
	{ "path": "/images/portfolio/twinpeak-6.png", "w": "1960", "h": "3500" },
	{ "path": "/images/portfolio/twinpeak-7.png", "w": "1470", "h": "2610" },
	{ "path": "/images/portfolio/twinpeak-8.png", "w": "1470", "h": "2610" },
	{ "path": "/images/portfolio/twinpeak-9.jpg", "w": "2760", "h": "4930" },
]

const Work = () => {
	return (
		<Layout title="TwinPeak App">
			<Container maxW="container.md">
				<Title>
					KWah TwinPeak Property App <Badge>2015</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="KWah Twin Peak App" />
				<P>
					KWah Twin Peak mobile app is to promote Twin Peak property when selling period. The app has a great variety of functions such as property agent to redeem coffee , property latest news, AR 3D preview by scanning floor plan on the leaflet and news alert. With the great gallery presentation and design of the app, it was able to assist property agent when selling their customers.
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
							<ListItem>Redeem Coffee function by generated QR Code</ListItem>
							<ListItem>Building floor plan preview</ListItem>
						</UnorderedList>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="KWah Twin Peak App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work
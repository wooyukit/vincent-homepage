import { Container, Badge, List, Box, Link, Image, ListItem, SimpleGrid, Divider, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = { "path": "/images/portfolio/china-mobile-eyecatch.png", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/china-mobile-1.png", "w": "2160", "h": "3200" },
	{ "path": "/images/portfolio/china-mobile-2.png", "w": "2140", "h": "3200" },
	{ "path": "/images/portfolio/china-mobile-3.png", "w": "2160", "h": "3220" },
	{ "path": "/images/portfolio/china-mobile-4.png", "w": "2160", "h": "3200" },
	{ "path": "/images/portfolio/china-mobile-5.png", "w": "2120", "h": "3180" },
	{ "path": "/images/portfolio/china-mobile-6.png", "w": "2140", "h": "3180" },
]

const Work = () => {
	return (
		<Layout title="China Mobile App">
			<Container maxW="container.md">
				<Title>
					China Mobile App <Badge>2012</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="China Mobile App" />
				<P>
					China Mobile App is an all-rounded, Comprehensive-Smart APP offering a variety of experiences and benefits to HongKong residents. It is committed to serve every aspect of daily lives in efforts to provide flexible communication service. It provides users with rich life information, intelligent life applications for Hong Kong residents.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Mobile App</Meta>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS, Android</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Objective-C, Java</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Smart and comprehensive conversational tips: New Smart Assistant provids careful Service. Remind you weather, etc.</ListItem>
							<ListItem>New Themes and Portrait Pendants, New visual revision to bring you a new experience.</ListItem>
							<ListItem>Convenient life, points rewards chosen by you, Jetso upgraded, added points mission module, Famous brand goods delivered to home!</ListItem>
						</UnorderedList>
					</ListItem>
					<ListItem>
						<Meta>Download</Meta>
						<Box display={{ sm: 'flex' }} align='center' alignItems="center">
							<Link
								href="https://apps.apple.com/hk/app/mylink-smart-life/id483513425?l=en"
								target="_blank">
								<Image maxW={200} src="/images/appstore.png" alt="Download on App Store" />
							</Link>
							<Link
								href="https://play.google.com/store/apps/details?id=com.ChinaMobile"
								target="_blank">
								<Image maxW={200} src="/images/googleplay.png" alt="Download on Google Play" />
							</Link>
						</Box>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={2} alignItems="center">
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="T1T Appointment App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work
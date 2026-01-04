import { Container, Badge, Link, List, ListItem, Box, SimpleGrid, Image, Divider, UnorderedList } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from "react-photoswipe-gallery";

const eyecatch = { "path": "/images/portfolio/hangseng-eyecatch.webp", "w": "1280", "h": "720" }
const srcs = [
	{ "path": "/images/portfolio/hangseng-1.webp", "w": "1242", "h": "2208" },
	{ "path": "/images/portfolio/hangseng-2.webp", "w": "1242", "h": "2208" },
	{ "path": "/images/portfolio/hangseng-3.webp", "w": "1242", "h": "2208" },
	{ "path": "/images/portfolio/hangseng-4.webp", "w": "1242", "h": "2208" },
	{ "path": "/images/portfolio/hangseng-5.webp", "w": "1242", "h": "2208" },
	{ "path": "/images/portfolio/hangseng-6.webp", "w": "1242", "h": "2208" },
	{ "path": "/images/portfolio/hangseng-7.webp", "w": "1242", "h": "2208" },
	{ "path": "/images/portfolio/hangseng-8.webp", "w": "1242", "h": "2208" },
]

const Work = () => {
	return (
		<Layout title="SCMP App V5">
			<Container maxW="container.md">
				<Title>
					Hang Seng Business Mobile App <Badge>2019</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="Hang Seng Business App" />
				<P>
					Hang Seng Business Mobile App improves your mobile banking experience by bringing enhanced features to meet your business banking needs. Try it now!
					To register for a Hang Seng Business e-Banking account, all you need is a Hang Seng Business e-Banking Registration e-mail and a mobile device.
					Push Notification now supports the notification of Marketing Promotion to keep you informed the latest status of Hang Seng Business marketing promotion
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Mobile App</Meta>
						<Link href="https://www.hangseng.com/en-hk/business/" target="_blank">https://www.hangseng.com/en-hk/business/ <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS / Android</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Objective-C, Java, RESTFul, AngularJS, Tracking, RxJava, Faster Payment, Cert Pinning, JailBreak Protection</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>ChatBot</ListItem>
							<ListItem>Faster Payment</ListItem>
							<ListItem>Face ID Login</ListItem>
							<ListItem>Web Package Update</ListItem>
						</UnorderedList>
					</ListItem>
					<ListItem>
						<Meta>Download</Meta>
						<Box display={{ sm: 'flex' }} align='center' alignItems="center">
							<Link
								href="https://apps.apple.com/hk/app/hang-seng-business-mobile-app/id1117207965?l=en"
								target="_blank">
								<Image maxW={200} src="/images/appstore.webp" alt="Download on App Store" />
							</Link>
							<Link
								href="https://play.google.com/store/apps/details?id=com.hangseng.cmbmobileapp"
								target="_blank">
								<Image maxW={200} src="/images/googleplay.webp" alt="Download on Google Play" />
							</Link>
						</Box>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[1, 2, 2, 3]} columnGap={2}>
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Hang Seng Business App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work
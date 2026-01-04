import { Container, Badge, Link, List, ListItem, Box, SimpleGrid, Image, Divider, UnorderedList } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'

const eyecatch = {"path": "/images/portfolio/scmpv5-eyecatch.webp", "w": "1280", "h": "720"}

const srcs = [
	{ "path": "/images/portfolio/scmpv5-1.webp", "w": "1242", "h": "2688" },
	{ "path": "/images/portfolio/scmpv5-2.webp", "w": "1242", "h": "2688" },
	{ "path": "/images/portfolio/scmpv5-3.webp", "w": "1242", "h": "2688" },
	{ "path": "/images/portfolio/scmpv5-4.webp", "w": "1242", "h": "2688" },
	{ "path": "/images/portfolio/scmpv5-5.webp", "w": "1242", "h": "2688" },
	{ "path": "/images/portfolio/scmpv5-6.webp", "w": "1242", "h": "2688" },
]
const srcSs = [
	{ "path": "/images/portfolio/scmpv5-1.webp", "w": "1230", "h": "2450" },
	{ "path": "/images/portfolio/scmpv5-2.webp", "w": "1230", "h": "2450" },
	{ "path": "/images/portfolio/scmpv5-3.webp", "w": "1230", "h": "2450" },
	{ "path": "/images/portfolio/scmpv5-4.webp", "w": "1230", "h": "2450" },
	{ "path": "/images/portfolio/scmpv5-5.webp", "w": "1230", "h": "2450" },
	{ "path": "/images/portfolio/scmpv5-6.webp", "w": "1230", "h": "2450" },
	{ "path": "/images/portfolio/scmpv5-7.webp", "w": "1230", "h": "2450" },
	{ "path": "/images/portfolio/scmpv5-8.webp", "w": "1230", "h": "2450" },
	{ "path": "/images/portfolio/scmpv5-9.webp", "w": "1230", "h": "2450" },
	{ "path": "/images/portfolio/scmpv5-10.webp", "w": "1230", "h": "2450" },
	{ "path": "/images/portfolio/scmpv5-11.webp", "w": "2740", "h": "2050" },
	{ "path": "/images/portfolio/scmpv5-12.webp", "w": "2740", "h": "2050" },
	{ "path": "/images/portfolio/scmpv5-13.webp", "w": "2740", "h": "2050" },
	{ "path": "/images/portfolio/scmpv5-14.webp", "w": "2740", "h": "2050" },
	{ "path": "/images/portfolio/scmpv5-15.webp", "w": "2740", "h": "2050" },
	{ "path": "/images/portfolio/scmpv5-16.webp", "w": "2740", "h": "2050" },
]


const Work = () => {
	return (
		<Layout title="SCMP App V5">
			<Container maxW="container.md">
				<Title>
					South China Morning Post Mobile App V5 <Badge>2020</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="SCMP v5 App" />
				<P>
					South China Morning Post app can receive instant access to the SCMP award-winning journalism including coverage of the latest breaking news, both regionally and globally, including: Coronavirus, US-China trade war and tech war, Biden vs Xi Jinping, the Hong Kong National Security law, Hong Kong protests and electoral changes, China military, South China Sea news, China relations with the EU, India and Australia, health and wellness, fashion and lifestyle updates, climate change and much much more.
				</P>
				<P>
					The app is our biggest app update ever. The update lets you explore curated content tailored to your news interests with My News, and informs you on the stories that matter to you with the redesigned top menu that allows you customise your reading preferences.
				</P>
				<List mx={4} my={4} spacing={4}>
					<ListItem>
						<Meta>Mobile App</Meta>
						<Link href="https://www.scmp.com" target="_blank">https://www.scmp.com <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>iOS / iPadOS / Android</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Swift, Kotlin, RESTFul, GraphQL, Firebase, Tracking, AppsFlyer, Litho, RxSwift, RxJava, InApp Purchase, Piano, WidgetKit, IGListKit</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Breaking news alerts to keep you updated with exclusives, explainers, live coverage and developing stories</ListItem>
							<ListItem>Article bookmarking to save your favourite features and articles</ListItem>
							<ListItem>My News - Follow your favourite topic/author and get five daily stories curated for you, plus a personalised feed of our most popular content</ListItem>
							<ListItem>Customisable top menu so you can move what matters to the top</ListItem>
							<ListItem>Resigned quick-access menu to browse articles with ease and speed</ListItem>
							<ListItem>Store articles under Reading history for later browsing</ListItem>
						</UnorderedList>
					</ListItem>
					<ListItem>
						<Meta>Download</Meta>
						<Box display={{ sm: 'flex' }} align='center' alignItems="center">
							<Link
								href="https://apps.apple.com/hk/app/south-china-morning-post/id623201967?l=en"
								target="_blank">
								<Image maxW={200} src="/images/appstore.png" alt="Download on App Store" />
							</Link>
							<Link
								href="https://play.google.com/store/apps/details?id=com.scmp.newspulse"
								target="_blank">
								<Image maxW={200} src="/images/googleplay.png" alt="Download on Google Play" />
							</Link>
						</Box>
					</ListItem>
				</List>
				<Divider my={4} />
				<Gallery>
					<SimpleGrid mt={6} columns={[1, 2, 2, 3]} columnGap={2}>
						{srcs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Scmp v5 App" mb={2} />
						))}
					</SimpleGrid>
					<Divider my={4} />
					<SimpleGrid mt={6} columns={[2, 3, 4, 5]} columnGap={2}>
						{srcSs.map((src) => (
							<WorkImage key={src.path} src={src} alt="Scmp v5 App" mb={2} />
						))}
					</SimpleGrid>
				</Gallery>
			</Container>
		</Layout>
	)
}
export default Work
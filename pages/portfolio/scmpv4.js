import { Container, Badge, Link, List, ListItem, Box, SimpleGrid, Image, Divider, UnorderedList } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

import eyecatch from "../../public/images/portfolio/scmpv4-eyecatch.png"
import src1 from "../../public/images/portfolio/scmpv4-1.jpg"
import src2 from "../../public/images/portfolio/scmpv4-2.png"
import src3 from "../../public/images/portfolio/scmpv4-3.png"
import src4 from "../../public/images/portfolio/scmpv4-4.png"
import src5 from "../../public/images/portfolio/scmpv4-5.png"
import src6 from "../../public/images/portfolio/scmpv4-6.png"
import src7 from "../../public/images/portfolio/scmpv4-7.png"
import src8 from "../../public/images/portfolio/scmpv4-8.png"
import src9 from "../../public/images/portfolio/scmpv4-9.png"


const srcs = [src1, src2, src3, src4, src5, src6, src7, src8, src9]

const Work = () => {
	return (
		<Layout title="SCMP App V4">
			<Container maxW="container.md">
				<Title>
					South China Morning Post Mobile App V4 <Badge>2016</Badge>
				</Title>
				<WorkImage mb={6} src={eyecatch} alt="SCMP v4 App" />
				<P>
					South China Morning Post app can receive instant access to the SCMP award-winning journalism including coverage of the latest breaking news, both regionally and globally, including: Coronavirus, US-China trade war and tech war, Biden vs Xi Jinping, the Hong Kong National Security law, Hong Kong protests and electoral changes, China military, South China Sea news, China relations with the EU, India and Australia, health and wellness, fashion and lifestyle updates, climate change and much much more.
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
						<span>Swift, Kotlin, RESTFul, Firebase, Tracking, AppsFlyer, RxSwift, RxJava, Digger2</span>
					</ListItem>
					<ListItem>
						<Meta>Features</Meta>
						<UnorderedList>
							<ListItem>Breaking news alerts to keep you updated with exclusives, explainers, live coverage and developing stories</ListItem>
							<ListItem>Article bookmarking to save your favourite features and articles</ListItem>
							<ListItem>Customisable top menu so you can move what matters to the top</ListItem>
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
				<SimpleGrid mt={6} columns={[2, 3, 4, 4]} columnGap={4} alignItems="center">
					{srcs.map((src) => (
						<WorkImage key={src} src={src} alt="SCMP v4 App" mb={2} />
					))}
				</SimpleGrid>
			</Container>
		</Layout>
	)
}
export default Work
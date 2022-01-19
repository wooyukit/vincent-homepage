import { Container, Badge, Link, List, ListItem, Box, SimpleGrid, Image, Divider, UnorderedList } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

import eyecatch from "../../public/images/portfolio/hangseng-eyecatch.jpeg"

import src1 from "../../public/images/portfolio/hangseng-1.webp"
import src2 from "../../public/images/portfolio/hangseng-2.webp"
import src3 from "../../public/images/portfolio/hangseng-3.webp"
import src4 from "../../public/images/portfolio/hangseng-4.webp"
import src5 from "../../public/images/portfolio/hangseng-5.webp"
import src6 from "../../public/images/portfolio/hangseng-6.webp"
import src7 from "../../public/images/portfolio/hangseng-7.webp"
import src8 from "../../public/images/portfolio/hangseng-8.webp"

const srcs = [src1, src2, src3, src4, src5, src6, src7, src8]

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
								<Image maxW={200} src="/images/appstore.png" alt="Download on App Store" />
							</Link>
							<Link
								href="https://play.google.com/store/apps/details?id=com.hangseng.cmbmobileapp"
								target="_blank">
								<Image maxW={200} src="/images/googleplay.png" alt="Download on Google Play" />
							</Link>
						</Box>
					</ListItem>
				</List>
				<Divider my={4} />
				<SimpleGrid mt={6} columns={[1, 2, 2, 3]} columnGap={2}>
					{srcs.map((src) => (
						<WorkImage key={src} src={src} alt="Hang Seng Business App" mb={2} />
					))}
				</SimpleGrid>
			</Container>
		</Layout>
	)
}
export default Work
import { Container, Heading, SimpleGrid, Box, Text, useColorModeValue, Badge, Flex, Button, Icon, Wrap, WrapItem } from "@chakra-ui/react"
import Image from 'next/image'
import NextLink from 'next/link'
import Layout from "../components/layouts/article"
import Section from "../components/section"
import { IoGlobeOutline } from 'react-icons/io5'

const portfolioItems = [
	{
		id: "scmpv5",
		title: "SCMPv5 App",
		src: "/images/portfolio/scmpv5-eyecatch.webp",
		date: "2018 - 2022",
		description: "Led the development of South China Morning Post's flagship news app v5 with complete UI/UX redesign, GraphQL integration, and enhanced personalization features.",
		tech: ["Swift", "Kotlin", "RxSwift", "GraphQL", "Firebase"],
		category: "iOS/Android"
	},
	{
		id: "hangseng",
		title: "Hang Seng Business App",
		src: "/images/portfolio/hangseng-eyecatch.webp",
		date: "2017 - 2018",
		description: "Developed enterprise mobile banking app for corporate clients with secure authentication, transaction management, and ML-powered fraud detection.",
		tech: ["Swift", "Kotlin", "Core Data", "Biometrics", "ML Kit"],
		category: "iOS/Android"
	},
	{
		id: "inkstone",
		title: "SCMP Inkstone App",
		src: "/images/portfolio/inkstone-eyecatch.webp",
		date: "2019 - 2020",
		description: "Built a dedicated China news app featuring curated content, offline reading, and push notifications for breaking news coverage.",
		tech: ["Swift", "Kotlin", "RxSwift", "Realm", "OneSignal"],
		category: "iOS/Android"
	},
	{
		id: "scmpv4",
		title: "SCMPv4 App",
		src: "/images/portfolio/scmpv4-eyecatch.webp",
		date: "2016 - 2018",
		description: "Developed the fourth generation SCMP news app with MVVM architecture, reactive programming, and content synchronization features.",
		tech: ["Swift", "Kotlin", "RxSwift", "RxJava", "SQLite"],
		category: "iOS/Android"
	},
	{
		id: "takealook",
		title: "Take a Look Website",
		src: "/images/portfolio/takealook-eyecatch.webp",
		date: "2015 - 2016",
		description: "Created a startup project - a social discovery platform connecting users with local events, deals, and trending spots using iBeacon technology.",
		tech: ["PHP", "MySQL", "jQuery", "Bootstrap", "iBeacon"],
		category: "Web"
	},
	{
		id: "twinpeak",
		title: "TwinPeak Property App",
		src: "/images/portfolio/twinpeak-eyecatch.webp",
		date: "2015",
		description: "Property showcase app for a luxury residential development featuring AR room visualization and 360-degree virtual tours.",
		tech: ["Swift", "Java", "ARKit", "SceneKit", "Core Location"],
		category: "iOS/Android"
	},
	{
		id: "guzen",
		title: "Christmas Guzen App",
		src: "/images/portfolio/guzen-eyecatch.webp",
		date: "2014",
		description: "Interactive Christmas campaign app with gamification, augmented reality features, and social sharing capabilities.",
		tech: ["Swift", "SpriteKit", "ARKit", "Social Framework"],
		category: "iOS"
	},
	{
		id: "bauhaus",
		title: "Bauhaus App",
		src: "/images/portfolio/bauhaus-eyecatch.webp",
		date: "2015",
		description: "Retail loyalty app for Bauhaus stores featuring product catalog, store locator, membership rewards, and promotional campaigns.",
		tech: ["Swift", "Java", "Core Data", "MapKit", "Push Notifications"],
		category: "iOS/Android"
	},
	{
		id: "marathon",
		title: "Marathon App",
		src: "/images/portfolio/marathon-eyecatch.webp",
		date: "2015",
		description: "Official marathon event app with real-time tracking, route maps, participant information, and race day notifications.",
		tech: ["Swift", "Java", "MapKit", "Core Location", "HealthKit"],
		category: "iOS/Android"
	},
	{
		id: "sie",
		title: "Government SIE App",
		src: "/images/portfolio/sie-eyecatch.webp",
		date: "2015",
		description: "Social Innovation and Entrepreneurship Development Fund app showcasing funded projects and connecting social entrepreneurs.",
		tech: ["Swift", "Java", "REST API", "SQLite"],
		category: "iOS/Android"
	},
	{
		id: "sinoclub",
		title: "Sino Club Mall App",
		src: "/images/portfolio/sino-club-eyecatch.webp",
		date: "2015",
		description: "Shopping mall loyalty app with membership management, reward points, exclusive offers, and indoor navigation.",
		tech: ["Swift", "Java", "iBeacon", "Core Bluetooth"],
		category: "iOS/Android"
	},
	{
		id: "ar",
		title: "AR Research",
		src: "/images/portfolio/ar-eyecatch.webp",
		date: "2014 - 2015",
		description: "Research and development of augmented reality solutions for retail and marketing applications using marker-based and markerless tracking.",
		tech: ["Vuforia", "Unity", "ARKit", "OpenCV"],
		category: "Research"
	},
	{
		id: "t1t",
		title: "T1T Appointment App",
		src: "/images/portfolio/t1t-eyecatch.webp",
		date: "2015",
		description: "Healthcare appointment booking system with doctor scheduling, patient management, and reminder notifications.",
		tech: ["Swift", "Java", "Calendar API", "Push Notifications"],
		category: "iOS/Android"
	},
	{
		id: "swire-reader",
		title: "Swire Property Reader App",
		src: "/images/portfolio/swire-reader-eyecatch.webp",
		date: "2014",
		description: "Corporate document reader app for Swire Properties with secure PDF viewing and offline document management.",
		tech: ["Swift", "PDFKit", "Core Data", "Keychain"],
		category: "iOS"
	},
	{
		id: "swire-irp",
		title: "Swire Incident Control App",
		src: "/images/portfolio/swire-irp-eyecatch.webp",
		date: "2014",
		description: "Enterprise incident reporting and management system for property management staff with real-time notifications.",
		tech: ["Swift", "Core Data", "Push Notifications", "Camera API"],
		category: "iOS"
	},
	{
		id: "swire-drp",
		title: "Swire Disaster Control App",
		src: "/images/portfolio/swire-drp-eyecatch.webp",
		date: "2014",
		description: "Disaster recovery planning app with emergency protocols, contact directories, and crisis communication features.",
		tech: ["Swift", "Core Data", "Local Notifications"],
		category: "iOS"
	},
	{
		id: "letwork",
		title: "Letwork Card App",
		src: "/images/portfolio/letwork-eyecatch.webp",
		date: "2014",
		description: "Digital business card app with NFC sharing, contact management, and networking features for professionals.",
		tech: ["Swift", "Java", "NFC", "Contacts Framework"],
		category: "iOS/Android"
	},
	{
		id: "apas",
		title: "APAS Music Website",
		src: "/images/portfolio/apas-web-eyecatch.webp",
		date: "2010 - 2011",
		description: "Music streaming and download platform for Asian Pop Artists with catalog management and payment integration.",
		tech: ["PHP", "MySQL", "JavaScript", "Flash", "Payment Gateway"],
		category: "Web"
	},
	{
		id: "china-mobile-intranet",
		title: "China Mobile Intranet App",
		src: "/images/portfolio/china-mobile-intranet-app-eyecatch.webp",
		date: "2011 - 2012",
		description: "Internal enterprise app for China Mobile staff with company news, HR services, and workflow management.",
		tech: ["Objective-C", "Java", "SQLite", "REST API"],
		category: "iOS/Android"
	},
	{
		id: "china-mobile",
		title: "China Mobile Customer App",
		src: "/images/portfolio/china-mobile-eyecatch.webp",
		date: "2011 - 2012",
		description: "Customer service app for mobile subscribers with account management, data usage tracking, and service subscriptions.",
		tech: ["Objective-C", "Java", "REST API", "Core Telephony"],
		category: "iOS/Android"
	},
	{
		id: "25-master",
		title: "25 Master Game App",
		src: "/images/portfolio/25-master-eyecatch.webp",
		date: "2024",
		description: "A fun card game app that challenges players to strategically place 25 cards in a 5x5 grid to form the best poker hands.",
		tech: ["Swift", "SwiftUI", "SpriteKit", "Game Center"],
		category: "Game"
	},
	{
		id: "bid",
		title: "Bid Trending App",
		src: "/images/portfolio/bid-eyecatch.webp",
		date: "2014",
		description: "Real-time auction and bidding platform with live updates, countdown timers, and secure payment processing.",
		tech: ["Swift", "Java", "WebSocket", "Push Notifications"],
		category: "iOS/Android"
	},
	{
		id: "gary",
		title: "Gary Singer App",
		src: "/images/portfolio/gary-eyecatch.webp",
		date: "2011",
		description: "Official fan app for Gary Chaw featuring music streaming, tour dates, photo galleries, and fan community.",
		tech: ["Objective-C", "AVFoundation", "Social Framework"],
		category: "iOS"
	},
	{
		id: "endy",
		title: "Endy Singer App",
		src: "/images/portfolio/endy-chow-eyecatch.webp",
		date: "2011",
		description: "Official artist app for Endy Chow with music catalog, event calendar, and exclusive content for fans.",
		tech: ["Objective-C", "AVFoundation", "In-App Purchase"],
		category: "iOS"
	},
	{
		id: "gin",
		title: "Gin Singer App",
		src: "/images/portfolio/gin-eyecatch.webp",
		date: "2011",
		description: "Fan engagement app for Gin Lee featuring discography, concert information, and social media integration.",
		tech: ["Objective-C", "AVFoundation", "Social Framework"],
		category: "iOS"
	},
	{
		id: "wenghang",
		title: "Weng Hang Bank App",
		src: "/images/portfolio/weng-hang-eyecatch.webp",
		date: "2014",
		description: "Mobile banking app with account services, fund transfers, bill payments, and branch/ATM locator.",
		tech: ["Swift", "Java", "Core Data", "MapKit", "Security Framework"],
		category: "iOS/Android"
	},
	{
		id: "soundclip",
		title: "Sound Modify App",
		src: "/images/portfolio/soundclip-eyecatch.webp",
		date: "2010",
		description: "Audio manipulation app with voice effects, pitch shifting, and sound recording capabilities.",
		tech: ["Objective-C", "AVFoundation", "Core Audio", "Accelerate"],
		category: "iOS"
	},
	{
		id: "megashow",
		title: "Mega Show Booth App",
		src: "/images/portfolio/mega-show-eyecatch.webp",
		date: "2014",
		description: "Trade show companion app with exhibitor directory, floor maps, and appointment scheduling for Mega Show events.",
		tech: ["Swift", "MapKit", "Calendar API", "QR Scanner"],
		category: "iOS"
	},
	{
		id: "solomonsc-web",
		title: "Solomon SC Website",
		src: "/images/portfolio/solomonsc-web-eyecatch.webp",
		date: "2010",
		description: "Corporate website for Solomon Systech with product showcases, investor relations, and news updates.",
		tech: ["PHP", "MySQL", "jQuery", "CSS3"],
		category: "Web"
	},
	{
		id: "hkexa-web",
		title: "HKEXA Website",
		src: "/images/portfolio/hkexa-web-eyecatch.webp",
		date: "2010",
		description: "Association website for Hong Kong Examinations Authority with exam schedules and registration portal.",
		tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
		category: "Web"
	},
	{
		id: "musicnext-web",
		title: "MusicNext Website",
		src: "/images/portfolio/musicnext-web-eyecatch.webp",
		date: "2010",
		description: "Music discovery platform featuring new artists, album reviews, and concert listings.",
		tech: ["PHP", "MySQL", "jQuery", "Flash Player"],
		category: "Web"
	},
	{
		id: "imusic-web",
		title: "iMusic Website",
		src: "/images/portfolio/imusic-web-eyecatch.webp",
		date: "2010",
		description: "Digital music store with streaming previews, download purchases, and playlist management.",
		tech: ["PHP", "MySQL", "JavaScript", "Payment Gateway"],
		category: "Web"
	},
	{
		id: "cali-banner",
		title: "Flash Banners",
		src: "/images/portfolio/cali-banner-eyecatch.webp",
		date: "2009 - 2010",
		description: "Animated promotional banners and interactive advertisements for California Red marketing campaigns.",
		tech: ["Flash", "ActionScript", "Photoshop", "After Effects"],
		category: "Design"
	},
	{
		id: "cali-party-member",
		title: "Party Book & Member Songs",
		src: "/images/portfolio/cali-party-member-eyecatch.webp",
		date: "2009 - 2010",
		description: "Party room booking system with song catalog, membership management, and reservation features for California Red.",
		tech: ["PHP", "MySQL", "JavaScript", "jQuery"],
		category: "Web"
	},
]

const ProjectCard = ({ item, index }) => {
	const cardBg = useColorModeValue('white', 'gray.800')
	const borderColor = useColorModeValue('gray.200', 'gray.700')
	const textColor = useColorModeValue('gray.600', 'gray.400')
	const titleColor = useColorModeValue('gray.800', 'white')
	const dateColor = useColorModeValue('teal.600', 'teal.300')
	const tagBg = useColorModeValue('gray.100', 'gray.700')
	const tagColor = useColorModeValue('gray.700', 'gray.300')

	return (
		<Box
			bg={cardBg}
			borderRadius="xl"
			overflow="hidden"
			border="1px solid"
			borderColor={borderColor}
			_hover={{
				transform: 'translateY(-4px)',
				shadow: 'xl',
				borderColor: 'teal.500'
			}}
			transition="all 0.3s ease"
		>
			{/* Image */}
			<NextLink href={`/portfolio/${item.id}`}>
				<Box
					position="relative"
					overflow="hidden"
					cursor="pointer"
					className="project-card-image"
				>
					<Image
						src={item.src}
						alt={item.title}
						width={640}
						height={360}
						priority={index < 4}
						className="project-thumbnail"
					/>
				</Box>
			</NextLink>

			{/* Content */}
			<Box p={5}>
				<NextLink href={`/portfolio/${item.id}`}>
					<Heading
						as="h3"
						size="md"
						color={titleColor}
						cursor="pointer"
						_hover={{ color: 'teal.500' }}
						transition="color 0.2s"
						mb={1}
					>
						{item.title}
					</Heading>
				</NextLink>

				<Text fontSize="sm" color={dateColor} fontWeight="medium" mb={3}>
					{item.date}
				</Text>

				<Text fontSize="sm" color={textColor} mb={4} noOfLines={3}>
					{item.description}
				</Text>

				{/* Tech Stack */}
				<Wrap spacing={2} mb={4}>
					{item.tech.map((tech) => (
						<WrapItem key={tech}>
							<Badge
								bg={tagBg}
								color={tagColor}
								px={2}
								py={1}
								borderRadius="md"
								fontSize="xs"
								fontWeight="medium"
							>
								{tech}
							</Badge>
						</WrapItem>
					))}
				</Wrap>

				{/* Action Buttons */}
				<Flex gap={3}>
					<NextLink href={`/portfolio/${item.id}`} passHref>
						<Button
							as="a"
							size="sm"
							variant="outline"
							leftIcon={<Icon as={IoGlobeOutline} />}
							borderRadius="lg"
							_hover={{ bg: 'teal.500', color: 'white', borderColor: 'teal.500' }}
						>
							Details
						</Button>
					</NextLink>
				</Flex>
			</Box>
		</Box>
	)
}

const Portfolio = () => {
	return (
		<Layout title="Portfolio">
			<Container maxW="container.lg" py={8}>
				<Section delay={0.1}>
					<Box textAlign="center" mb={10}>
						<Heading as="h1" size="2xl" mb={4}>
							My Projects
						</Heading>
						<Text fontSize="lg" color="gray.500" maxW="600px" mx="auto">
							A collection of mobile apps and web applications I&apos;ve built throughout my career. Here are a few of my favorites.
						</Text>
					</Box>
				</Section>

				<SimpleGrid columns={[1, 1, 2]} gap={6}>
					{portfolioItems.map((item, index) => (
						<Section key={item.id} delay={(Math.min(index, 6) + 1) * 0.1}>
							<ProjectCard item={item} index={index} />
						</Section>
					))}
				</SimpleGrid>
			</Container>
		</Layout>
	)
}

export default Portfolio

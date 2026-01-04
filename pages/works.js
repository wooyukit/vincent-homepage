import { Container, Box, Heading, Image, useColorModeValue, Text, Flex, Link, Button, Badge, keyframes } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoGlobeOutline } from 'react-icons/io5'

const pulse = keyframes`
	0% { box-shadow: 0 0 0 0 rgba(72, 187, 120, 0.7); }
	70% { box-shadow: 0 0 0 10px rgba(72, 187, 120, 0); }
	100% { box-shadow: 0 0 0 0 rgba(72, 187, 120, 0); }
`

const experiences = [
	{
		company: 'OKX',
		logo: '/images/works/okx-logo.jpeg',
		alt: 'OKX',
		position: 'Engineering Lead',
		location: 'Hong Kong',
		year: '2022 - Present',
		rounded: true,
		current: true,
		description: 'Leading iOS development team for one of the world\'s largest cryptocurrency exchanges. Managing mobile architecture, CI/CD pipelines, and cross-functional collaboration to deliver secure trading experiences to millions of users.',
		links: [
			{ label: 'Website', url: 'https://www.okx.com', icon: IoGlobeOutline }
		]
	},
	{
		company: 'South China Morning Post',
		logo: '/images/works/scmp-logo.png',
		alt: 'South China Morning Post',
		position: 'Lead Mobile Engineer',
		location: 'Hong Kong',
		year: '2018 - 2022',
		rounded: true,
		description: 'Led mobile engineering team to rebuild the flagship news app from scratch. Implemented reactive programming with RxSwift/RxJava, GraphQL integration, and established CI/CD pipelines serving millions of daily readers.',
		links: [
			{ label: 'Website', url: 'https://www.scmp.com', icon: IoGlobeOutline }
		]
	},
	{
		company: 'Hang Seng Bank',
		logo: '/images/works/hang-seng-logo.png',
		alt: 'Hang Seng Bank',
		position: 'Senior System Analyst',
		location: 'Hong Kong',
		year: '2017 - 2018',
		rounded: false,
		description: 'Developed enterprise mobile banking applications for corporate clients. Managed offshore development team and integrated ML-powered chatbot features with secure banking infrastructure.',
		links: [
			{ label: 'Website', url: 'https://www.hangseng.com', icon: IoGlobeOutline }
		]
	},
	{
		company: 'South China Morning Post',
		logo: '/images/works/scmp-logo.png',
		alt: 'South China Morning Post',
		position: 'Senior Mobile Developer',
		location: 'Hong Kong',
		year: '2016 - 2017',
		rounded: true,
		description: 'Developed universal mobile applications for iOS and Android platforms. Implemented MVVM architecture with reactive programming patterns and established code review practices.',
		links: []
	},
	{
		company: 'Guru Online',
		logo: '/images/works/guru-online-logo.png',
		alt: 'Guru Online',
		position: 'Senior Mobile Application Developer',
		location: 'Hong Kong',
		year: '2014 - 2016',
		rounded: true,
		description: 'R&D for emerging mobile technologies including iBeacon, Augmented Reality, and Apple Watch. Created startup project takealook.com and managed project schedules for multiple clients.',
		links: []
	},
	{
		company: 'Pactera',
		logo: '/images/works/pactera-logo.jpeg',
		alt: 'Pactera Limited',
		position: 'Consultant',
		location: 'Hong Kong',
		year: '2012 - 2014',
		rounded: true,
		description: 'Provided software consulting services for enterprise clients including MTR, Philips, and Prudential. Developed SharePoint portals with custom Web Parts and permission control systems.',
		links: []
	},
	{
		company: 'China Mobile',
		logo: '/images/works/china-mobile-logo.png',
		alt: 'China Mobile Hong Kong',
		position: 'Mobile Applications Developer',
		location: 'Hong Kong',
		year: '2011 - 2012',
		rounded: false,
		description: 'Developed iOS and Android applications for one of the largest telecommunications companies. Designed native mobile interfaces and server integration architecture.',
		links: []
	},
	{
		company: 'iMusicTech',
		logo: '/images/works/iMusicTech-logo.png',
		alt: 'iMusicTech Limited',
		position: 'Analyst Programmer',
		location: 'Hong Kong',
		year: '2010 - 2011',
		rounded: false,
		description: 'Full-stack development for web and mobile applications in the music technology space. Explored iPhone game development and multimedia applications.',
		links: []
	},
	{
		company: 'California Red',
		logo: '/images/works/california-red-logo.jpeg',
		alt: 'California Red Limited',
		position: 'Programmer',
		location: 'Hong Kong',
		year: '2009 - 2010',
		rounded: true,
		description: 'Developed member party booking systems and company intranet platforms for the entertainment industry. First professional role in software development.',
		links: []
	}
]

const ExperienceCard = ({ logo, alt, position, year, description, rounded, current, company, location, links, isLast }) => {
	const dateColor = useColorModeValue('gray.500', 'gray.400')
	const titleColor = useColorModeValue('gray.800', 'white')
	const locationColor = useColorModeValue('gray.500', 'gray.400')
	const descColor = useColorModeValue('gray.600', 'gray.300')
	const borderColor = useColorModeValue('gray.200', 'gray.700')
	const buttonBg = useColorModeValue('gray.100', 'whiteAlpha.100')
	const buttonBorder = useColorModeValue('gray.300', 'whiteAlpha.300')
	const timelineBg = useColorModeValue('gray.200', 'gray.700')
	const dotBg = useColorModeValue('gray.400', 'gray.500')

	return (
		<Flex position="relative">
			{/* Timeline */}
			<Box
				position="relative"
				mr={{ base: 4, md: 6 }}
				w="24px"
				flexShrink={0}
			>
				{/* Timeline Line - dashed, extends to connect with next dot */}
				{!isLast && (
					<Box
						position="absolute"
						left="50%"
						top={{ base: '25px', md: '30px' }}
						bottom={{ base: '-25px', md: '-30px' }}
						w="0"
						borderLeft="2px dashed"
						borderColor={timelineBg}
						transform="translateX(-50%)"
					/>
				)}
				{/* Timeline Dot - centered with logo (logo is 50-60px, so center at ~30px) */}
				<Box
					position="absolute"
					left="50%"
					top={{ base: '25px', md: '30px' }}
					transform="translate(-50%, -50%)"
					w={current ? '20px' : '16px'}
					h={current ? '20px' : '16px'}
					borderRadius="full"
					bg={current ? 'green.400' : dotBg}
					zIndex={1}
					animation={current ? `${pulse} 2s infinite` : 'none'}
					border={current ? '3px solid' : 'none'}
					borderColor={useColorModeValue('green.100', 'green.900')}
				/>
			</Box>

			{/* Content */}
			<Box flex={1} pb={8}>
				<Flex mb={4}>
					{/* Logo */}
					<Box
						w={{ base: '50px', md: '60px' }}
						h={{ base: '50px', md: '60px' }}
						borderRadius={rounded ? 'full' : 'lg'}
						overflow="hidden"
						mr={{ base: 4, md: 5 }}
						flexShrink={0}
						position="relative"
					>
						<Image
							src={logo}
							alt={alt}
							w="100%"
							h="100%"
							objectFit="cover"
						/>
					</Box>

					{/* Info */}
					<Box flex={1}>
						{/* Date with Current Badge */}
						<Flex align="center" gap={2} mb={1}>
							<Text fontSize="sm" color={dateColor}>
								{year}
							</Text>
							{current && (
								<Badge
									colorScheme="green"
									borderRadius="full"
									px={2}
									py={0.5}
									fontSize="xs"
								>
									Current
								</Badge>
							)}
						</Flex>

						{/* Title */}
						<Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} color={titleColor} fontWeight="bold" mb={1}>
							{position}
						</Heading>

						{/* Company & Location */}
						<Text fontSize="sm" color={locationColor}>
							{company} · {location}
						</Text>
					</Box>
				</Flex>

				{/* Description */}
				<Text fontSize="sm" color={descColor} lineHeight="1.7" mb={4} ml={{ base: 0, md: '76px' }}>
					{description}
				</Text>

				{/* Links */}
				{links && links.length > 0 && (
					<Flex gap={2} flexWrap="wrap" ml={{ base: 0, md: '76px' }}>
						{links.map((link, i) => (
							<Link key={i} href={link.url} target="_blank" _hover={{ textDecoration: 'none' }}>
								<Button
									size="sm"
									variant="outline"
									leftIcon={link.icon === IoLogoGithub ? <IoLogoGithub /> : <IoGlobeOutline />}
									bg={buttonBg}
									borderColor={buttonBorder}
									fontWeight="normal"
									fontSize="xs"
									_hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
									transition="all 0.2s"
								>
									{link.label}
								</Button>
							</Link>
						))}
					</Flex>
				)}

				{/* Dashed Separator */}
				{!isLast && (
					<Box
						borderBottom="1px dashed"
						borderColor={borderColor}
						mt={6}
						ml={{ base: 0, md: '76px' }}
					/>
				)}
			</Box>
		</Flex>
	)
}

const Works = () => {
	const subtitleColor = useColorModeValue('gray.600', 'gray.400')

	return (
		<Layout title="Work Experience">
			<Container maxW="container.md" pt={6}>
				{/* Header */}
				<Section delay={0.1}>
					<Box textAlign="center" mb={12}>
						<Heading as="h1" size="xl" mb={4}>
							Work Experience
						</Heading>
						<Text fontSize="md" color={subtitleColor} maxW="500px" mx="auto">
							{new Date().getFullYear() - 2009}+ years of experience building mobile and web applications with passionate teams.
						</Text>
					</Box>
				</Section>

				{/* Experience List with Timeline */}
				<Section delay={0.2}>
					<Box pl={{ base: 0, md: 4 }}>
						{experiences.map((exp, index) => (
							<ExperienceCard
								key={`${exp.company}-${exp.year}`}
								{...exp}
								isLast={index === experiences.length - 1}
							/>
						))}
					</Box>
				</Section>
			</Container>
		</Layout>
	)
}

export default Works

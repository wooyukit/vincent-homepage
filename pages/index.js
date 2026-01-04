import { Container, Box, Heading, Image, useColorModeValue, Button, Icon, Link, Tag, Wrap, WrapItem, Text, Badge, Flex, keyframes, SimpleGrid, VStack, HStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoPhonePortraitSharp, IoMail, IoLogoLinkedin } from 'react-icons/io5'

const wave = keyframes`
	0% { transform: rotate(0deg); }
	10% { transform: rotate(14deg); }
	20% { transform: rotate(-8deg); }
	30% { transform: rotate(14deg); }
	40% { transform: rotate(-4deg); }
	50% { transform: rotate(10deg); }
	60% { transform: rotate(0deg); }
	100% { transform: rotate(0deg); }
`

const pulse = keyframes`
	0% { box-shadow: 0 0 0 0 rgba(56, 178, 172, 0.4); }
	70% { box-shadow: 0 0 0 15px rgba(56, 178, 172, 0); }
	100% { box-shadow: 0 0 0 0 rgba(56, 178, 172, 0); }
`

const float = keyframes`
	0% { transform: translateY(0px); }
	50% { transform: translateY(-6px); }
	100% { transform: translateY(0px); }
`

const gradientMove = keyframes`
	0% { background-position: 0% 50%; }
	50% { background-position: 100% 50%; }
	100% { background-position: 0% 50%; }
`

const loves = [
	{ name: "Music", emoji: "🎵" },
	{ name: "Guitar", emoji: "🎸" },
	{ name: "Table Tennis", emoji: "🏓" },
	{ name: "Basketball", emoji: "🏀" },
	{ name: "Chinese Chess", emoji: "♟️" },
	{ name: "GYM", emoji: "🏋️" },
	{ name: "Movies", emoji: "🎬" },
	{ name: "BlockChain", emoji: "⛓️" },
	{ name: "Gaming", emoji: "🎮" },
	{ name: "3D Animation", emoji: "🎨" },
	{ name: "Tech", emoji: "💻" },
	{ name: "Machine Learning", emoji: "🤖" }
]

const skills = [
	{ name: "Swift", color: "orange", emoji: "🍎" },
	{ name: "Kotlin", color: "purple", emoji: "🤖" },
	{ name: "Rust", color: "red", emoji: "🦀" },
	{ name: "Flutter", color: "cyan", emoji: "🦋" },
	{ name: "React", color: "blue", emoji: "⚛️" },
	{ name: "JavaScript", color: "yellow", emoji: "📜" },
	{ name: "TypeScript", color: "blue", emoji: "💙" },
	{ name: "Node.js", color: "green", emoji: "💚" },
	{ name: "GraphQL", color: "pink", emoji: "📊" },
]

const stats = [
	{ number: `${new Date().getFullYear() - 2009}+`, label: "Years Experience", emoji: "⏱️" },
	{ number: "50+", label: "Projects Delivered", emoji: "🚀" },
	{ number: "10+", label: "Tech Stacks", emoji: "🛠️" },
	{ number: "2", label: "Degrees", emoji: "🎓" },
]

const Page = () => {
	const heroBg = useColorModeValue(
		'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #6B8DD6 100%)',
		'linear-gradient(135deg, #2d1b4e 0%, #1a3a5c 50%, #0d4d4d 100%)'
	)
	const borderColor = useColorModeValue('white', 'teal.200')
	const cardBorder = useColorModeValue('gray.400', 'gray.600')
	const subtitleColor = useColorModeValue('gray.600', 'gray.400')

	return (
		<Layout>
			{/* Hero Section */}
			<Box
				bg={heroBg}
				bgSize="200% 200%"
				animation={`${gradientMove} 15s ease infinite`}
				py={{ base: 12, md: 16 }}
				px={4}
				mb={8}
				borderRadius="2xl"
				position="relative"
				overflow="hidden"
			>
				<Container maxW="container.md">
					<Flex
						direction={{ base: 'column', md: 'row' }}
						align="center"
						justify="space-between"
						gap={8}
					>
						{/* Profile Image */}
						<Box
							flexShrink={0}
							order={{ base: 1, md: 2 }}
						>
							<Box
								borderColor={borderColor}
								borderWidth={4}
								borderStyle="solid"
								w={{ base: '140px', md: '160px' }}
								h={{ base: '140px', md: '160px' }}
								display="inline-block"
								borderRadius="full"
								overflow="hidden"
								animation={`${pulse} 2s infinite`}
								shadow="2xl"
							>
								<Image
									src="/images/kit-logo.jpg"
									alt="Profile Image"
									width="100%"
									height="100%"
									objectFit="cover"
								/>
							</Box>
						</Box>

						{/* Hero Content */}
						<VStack
							align={{ base: 'center', md: 'flex-start' }}
							spacing={4}
							order={{ base: 2, md: 1 }}
							textAlign={{ base: 'center', md: 'left' }}
						>
							<HStack>
								<Box
									as="span"
									animation={`${wave} 2.5s infinite`}
									display="inline-block"
									fontSize="2xl"
								>
									👋
								</Box>
								<Text color="whiteAlpha.900" fontSize="lg">
									Hey there! I&apos;m
								</Text>
							</HStack>

							<Heading
								as="h1"
								fontSize={{ base: '3xl', md: '4xl' }}
								color="white"
								fontWeight="bold"
								lineHeight="shorter"
							>
								Vincent Woo 🚀
							</Heading>

							<Text
								color="whiteAlpha.900"
								fontSize={{ base: 'md', md: 'lg' }}
								maxW="400px"
							>
								Lead Engineer crafting pixel-perfect mobile experiences that millions of users love! ✨
							</Text>

							<HStack spacing={3} pt={2}>
								<Link href="https://github.com/wooyukit" target="_blank" _hover={{ textDecoration: 'none' }}>
									<Button
										size="sm"
										bg="whiteAlpha.200"
										color="white"
										_hover={{ bg: 'whiteAlpha.300', transform: 'translateY(-2px)' }}
										leftIcon={<IoLogoGithub />}
										transition="all 0.2s"
									>
										GitHub
									</Button>
								</Link>
								<Link href="https://www.linkedin.com/in/yu-kit-vincent-woo-63400332/" target="_blank" _hover={{ textDecoration: 'none' }}>
									<Button
										size="sm"
										bg="whiteAlpha.200"
										color="white"
										_hover={{ bg: 'whiteAlpha.300', transform: 'translateY(-2px)' }}
										leftIcon={<IoLogoLinkedin />}
										transition="all 0.2s"
									>
										LinkedIn
									</Button>
								</Link>
							</HStack>
						</VStack>
					</Flex>
				</Container>
			</Box>

			<Container maxW="container.md">
				{/* Stats Section */}
				<Section delay={0.1}>
					<SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={8}>
						{stats.map((stat, index) => (
							<Box
								key={stat.label}
								p={4}
								borderRadius="xl"
								textAlign="center"
								border="1px dashed"
								borderColor={cardBorder}
								_hover={{ transform: 'translateY(-4px)', borderColor: 'teal.400' }}
								transition="all 0.3s"
								animation={`${float} 3s ease-in-out infinite`}
								style={{ animationDelay: `${index * 0.2}s` }}
							>
								<Text fontSize="2xl" mb={1}>{stat.emoji}</Text>
								<Text fontSize="2xl" fontWeight="bold" color="teal.500">
									{stat.number}
								</Text>
								<Text fontSize="xs" color={subtitleColor} fontWeight="medium">
									{stat.label}
								</Text>
							</Box>
						))}
					</SimpleGrid>
				</Section>

				{/* About Section */}
				<Section delay={0.2}>
					<Heading as="h3" fontSize="xl" mb={4}>
						👨‍💻 About Me
					</Heading>
					<Paragraph>
						With over {new Date().getFullYear() - 2009} years in mobile development, I specialize in building high-performance iOS and Android applications that serve millions of users daily. From cryptocurrency exchanges to award-winning news platforms, I bring ideas to life with clean, maintainable code.
					</Paragraph>
					<Paragraph>
						As a Lead Engineer, I architect scalable mobile solutions, mentor development teams, and drive technical decisions that shape product success. My expertise spans native development (Swift, Kotlin), cross-platform frameworks, and modern reactive programming patterns.
					</Paragraph>
					<Paragraph>
						I&apos;m passionate about creating seamless user experiences, implementing robust CI/CD pipelines, and staying at the forefront of mobile technology trends.
					</Paragraph>

					<Box mt={6} mb={6}>
						<Text fontWeight="semibold" mb={3} fontSize="sm" color={subtitleColor}>
							🛠️ TECH STACK
						</Text>
						<Wrap spacing={2}>
							{skills.map((skill) => (
								<WrapItem key={skill.name}>
									<Badge
										colorScheme={skill.color}
										px={3}
										py={1}
										borderRadius="full"
										fontSize="sm"
										fontWeight="medium"
										_hover={{ transform: 'scale(1.05)' }}
										transition="all 0.2s"
										cursor="default"
									>
										{skill.emoji} {skill.name}
									</Badge>
								</WrapItem>
							))}
						</Wrap>
					</Box>

					<Flex gap={3} justify="center" flexWrap="wrap">
						<NextLink href="/portfolio">
							<Button
								rightIcon={<ChevronRightIcon />}
								colorScheme="teal"
								size="lg"
								_hover={{ transform: 'scale(1.05)' }}
								transition="all 0.2s"
							>
								🎨 View Portfolio
							</Button>
						</NextLink>
						<NextLink href="/works">
							<Button
								rightIcon={<ChevronRightIcon />}
								variant="outline"
								colorScheme="teal"
								size="lg"
								_hover={{ transform: 'scale(1.05)' }}
								transition="all 0.2s"
							>
								💼 Work Experience
							</Button>
						</NextLink>
					</Flex>
				</Section>

				{/* Contact Section */}
				<Section delay={0.3}>
					<Box
						p={6}
						borderRadius="xl"
						mb={6}
						border="1px dashed"
						borderColor={cardBorder}
					>
						<Heading as="h3" fontSize="xl" mb={4}>
							📬 Get In Touch
						</Heading>
						<SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3}>
							<Link href="tel:+85263485516" _hover={{ textDecoration: 'none' }}>
								<Button
									w="full"
									variant="outline"
									colorScheme="teal"
									leftIcon={<Icon as={IoPhonePortraitSharp} />}
									_hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
									transition="all 0.2s"
									justifyContent="flex-start"
								>
									📞 +(852) 6348 5516
								</Button>
							</Link>
							<Link href="mailto:wooyukit@gmail.com" _hover={{ textDecoration: 'none' }}>
								<Button
									w="full"
									variant="outline"
									colorScheme="teal"
									leftIcon={<Icon as={IoMail} />}
									_hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
									transition="all 0.2s"
									justifyContent="flex-start"
								>
									✉️ wooyukit@gmail.com
								</Button>
							</Link>
						</SimpleGrid>
					</Box>
				</Section>

				{/* Education Section */}
				<Section delay={0.4}>
					<Heading as="h3" fontSize="xl" mb={4}>
						🎓 Where I Leveled Up
					</Heading>
					<VStack spacing={4} align="stretch">
						<Box
							p={5}
							borderRadius="xl"
							border="1px dashed"
							borderColor={cardBorder}
							_hover={{ borderColor: 'teal.400' }}
							transition="all 0.2s"
						>
							<Flex justify="space-between" align="flex-start" flexWrap="wrap" gap={2}>
								<Box>
									<Badge colorScheme="teal" mb={2}>📅 2017</Badge>
									<Heading as="h4" fontSize="md" mb={1}>
										🎯 Master of Science in Information System Management
									</Heading>
									<Text color={subtitleColor} fontSize="sm">
										City University of Hong Kong 🇭🇰
									</Text>
								</Box>
								<Badge colorScheme="purple">📊 GPA: 2.97</Badge>
							</Flex>
						</Box>

						<Box
							p={5}
							borderRadius="xl"
							border="1px dashed"
							borderColor={cardBorder}
							_hover={{ borderColor: 'teal.400' }}
							transition="all 0.2s"
						>
							<Flex justify="space-between" align="flex-start" flexWrap="wrap" gap={2}>
								<Box>
									<Badge colorScheme="teal" mb={2}>📅 2009</Badge>
									<Heading as="h4" fontSize="md" mb={1}>
										⚡ Bachelor of Electronic and Information Engineering
									</Heading>
									<Text color={subtitleColor} fontSize="sm">
										Hong Kong Polytechnic University 🇭🇰
									</Text>
								</Box>
								<Badge colorScheme="yellow">🏆 GPA: 3.2 Honors</Badge>
							</Flex>
						</Box>
					</VStack>
				</Section>

				{/* Interests Section */}
				<Section delay={0.5}>
					<Heading as="h3" fontSize="xl" mb={4}>
						❤️ When I&apos;m Not Coding
					</Heading>
					<Wrap spacing={2}>
						{loves.map((love, index) => (
							<WrapItem key={love.name}>
								<Tag
									borderRadius="full"
									variant="subtle"
									colorScheme="teal"
									size="lg"
									px={4}
									_hover={{ transform: 'scale(1.1)', shadow: 'sm' }}
									transition="all 0.2s"
									cursor="default"
									animation={`${float} 3s ease-in-out infinite`}
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									{love.emoji} {love.name}
								</Tag>
							</WrapItem>
						))}
					</Wrap>
				</Section>
			</Container>
		</Layout>
	)
}

export default Page

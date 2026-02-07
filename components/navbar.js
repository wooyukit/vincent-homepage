import Logo from './logo'
import NextLink from 'next/link'
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import { DiApple, DiAndroid, DiReact } from "react-icons/di";

const LinkItem = ({ href, path, target, children, ...props }) => {
	const active = path === href
	const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
	return (
		<NextLink href={href} passHref>
			<Link
				p={2}
				bg={active ? 'cyan' : undefined}
				color={active ? '#202023' : inactiveColor}
				target={target}
				{...props}>
				{children}
			</Link>
		</NextLink>
	)
}

const Navbar = props => {
	const { path } = props
	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue('#ffffff40', '#20202380')}
			style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
			zIndex={10}
			{...props}
		>
			<Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing={'tighter'}>
						<Logo />
					</Heading>
				</Flex>
				<Stack direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					flexGrow={1}
					mt={{ base: 4, md: 0 }}>
					<LinkItem href="/"
						path={path}
						display='inline-flex'
						alignItems="center"
						style={{ gap: 4 }}
						pl={2}>
						<DiApple />
						Profile
					</LinkItem>
					<LinkItem href="/works"
						path={path}
						display='inline-flex'
						alignItems="center"
						style={{ gap: 4 }}
						pl={2}>
						<DiAndroid />
						Works
					</LinkItem>
					<LinkItem href="/portfolio"
						path={path}
						display='inline-flex'
						alignItems="center"
						style={{ gap: 4 }}
						pl={2}>
						<DiReact />
						Portfolio
					</LinkItem>
					<LinkItem
						target="_blank"
						href="https://github.com/wooyukit/vincent-homepage"
						path={path}
						display='inline-flex'
						alignItems="center"
						style={{ gap: 4 }}
						pl={2}>
						<IoLogoGithub />
						Source
					</LinkItem>
				</Stack>
				<Box flex={1} align="right">
					<ThemeToggleButton />
					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<Menu>
							<MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label='Options' />
							<MenuList>
								<NextLink href="/" passHref>
									<MenuItem as={Link} style={{ gap: 4 }}><DiApple />Profile</MenuItem>
								</NextLink>
								<NextLink href="/works" passHref>
									<MenuItem as={Link} style={{ gap: 4 }}><DiAndroid />Works</MenuItem>
								</NextLink>
								<NextLink href="/portfolio" passHref>
									<MenuItem as={Link} style={{ gap: 4 }}><DiReact />Portfolio</MenuItem>
								</NextLink>
								<MenuItem as={Link} href="https://github.com/wooyukit/vincent-homepage" style={{ gap: 4 }}><IoLogoGithub />View Source</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Navbar
import NextLink from 'next/link'
import { Heading, Box, Link, Badge, Center, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { IoCalendarOutline } from 'react-icons/io5'
import Image from 'next/image'
import { Item } from 'react-photoswipe-gallery'

export const Title = ({ children, year }) => {
	return (
		<Box mb={6}>
			<NextLink href="/portfolio">
				<Link
					display="inline-flex"
					alignItems="center"
					gap={1}
					color="teal.500"
					fontWeight="medium"
					_hover={{ color: 'teal.600', transform: 'translateX(-4px)' }}
					transition="all 0.2s"
					mb={4}
				>
					<ChevronLeftIcon fontSize={20} />
					Back to Portfolio
				</Link>
			</NextLink>
			<Flex align="center" gap={3} flexWrap="wrap">
				<Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }}>
					{children}
				</Heading>
				{year && (
					<Badge
						colorScheme="teal"
						fontSize="md"
						px={3}
						py={1}
						borderRadius="full"
						display="flex"
						alignItems="center"
						gap={1}
					>
						<Icon as={IoCalendarOutline} />
						{year}
					</Badge>
				)}
			</Flex>
		</Box>
	)
}

export const ProjectInfo = ({ children }) => {
	const cardBg = useColorModeValue('white', 'gray.800')
	const borderColor = useColorModeValue('gray.200', 'gray.700')

	return (
		<Box
			bg={cardBg}
			borderRadius="xl"
			border="1px solid"
			borderColor={borderColor}
			p={6}
			my={6}
		>
			{children}
		</Box>
	)
}

export const InfoRow = ({ icon, label, children }) => {
	const labelColor = useColorModeValue('gray.600', 'gray.400')

	return (
		<Flex
			py={3}
			borderBottom="1px solid"
			borderColor={useColorModeValue('gray.100', 'gray.700')}
			_last={{ borderBottom: 'none', pb: 0 }}
			_first={{ pt: 0 }}
			direction={{ base: 'column', sm: 'row' }}
			gap={{ base: 2, sm: 4 }}
		>
			<Flex
				align="center"
				gap={2}
				minW={{ sm: '120px' }}
				color={labelColor}
			>
				{icon && <Icon as={icon} />}
				<Text fontWeight="semibold" fontSize="sm" textTransform="uppercase">
					{label}
				</Text>
			</Flex>
			<Box flex={1}>{children}</Box>
		</Flex>
	)
}

export const TechStack = ({ techs }) => {
	const tagBg = useColorModeValue('gray.100', 'gray.700')
	const tagColor = useColorModeValue('gray.700', 'gray.300')

	return (
		<Flex flexWrap="wrap" gap={2}>
			{techs.map((tech) => (
				<Badge
					key={tech}
					bg={tagBg}
					color={tagColor}
					px={3}
					py={1}
					borderRadius="full"
					fontSize="sm"
					fontWeight="medium"
				>
					{tech}
				</Badge>
			))}
		</Flex>
	)
}

export const WorkImage = ({ src, alt, ...props }) => (
	<Item
		original={src.path}
		thumbnail={src.path}
		width={src.w}
		height={src.h}
	>
		{({ ref, open }) => (
			<Center
				ref={ref}
				onClick={open}
				cursor="pointer"
				className="work-image-container"
				borderRadius="xl"
				overflow="hidden"
				_hover={{
					transform: 'scale(1.02)',
					shadow: 'xl'
				}}
				transition="all 0.3s ease"
				{...props}
			>
				<Image
					width={src.w}
					height={src.h}
					src={src.path}
					alt={alt}
					className="work-thumbnail"
				/>
			</Center>
		)}
	</Item>
)

export const HeroImage = ({ src, alt }) => {
	const borderColor = useColorModeValue('gray.200', 'gray.700')

	return (
		<Box
			borderRadius="xl"
			overflow="hidden"
			border="1px solid"
			borderColor={borderColor}
			mb={6}
			shadow="lg"
		>
			<Image
				width={src.w}
				height={src.h}
				src={src.path}
				alt={alt}
				priority
				className="hero-image"
			/>
		</Box>
	)
}

export const Meta = ({ children }) => (
	<Badge colorScheme="teal" mr={2}>
		{children}
	</Badge>
)

export const DownloadButtons = ({ appStoreUrl, playStoreUrl }) => (
	<Flex gap={3} flexWrap="wrap" align="center">
		{appStoreUrl && (
			<Link
				href={appStoreUrl}
				target="_blank"
				_hover={{ transform: 'scale(1.05)' }}
				transition="all 0.2s"
			>
				<Image
					width={150}
					height={50}
					src="/images/appstore.png"
					alt="Download on App Store"
				/>
			</Link>
		)}
		{playStoreUrl && (
			<Link
				href={playStoreUrl}
				target="_blank"
				_hover={{ transform: 'scale(1.05)' }}
				transition="all 0.2s"
			>
				<Image
					width={170}
					height={50}
					src="/images/googleplay.png"
					alt="Download on Google Play"
				/>
			</Link>
		)}
	</Flex>
)

export const GallerySection = ({ title, children }) => {
	const headingColor = useColorModeValue('gray.700', 'gray.200')

	return (
		<Box my={8}>
			{title && (
				<Heading as="h3" size="md" color={headingColor} mb={4}>
					{title}
				</Heading>
			)}
			{children}
		</Box>
	)
}

export const FeatureList = ({ features }) => {
	const textColor = useColorModeValue('gray.600', 'gray.400')

	return (
		<Box>
			{features.map((feature, index) => (
				<Flex key={index} align="flex-start" mb={2} _last={{ mb: 0 }}>
					<Text color="teal.500" mr={2} mt={1}>•</Text>
					<Text color={textColor} fontSize="sm">
						{feature}
					</Text>
				</Flex>
			))}
		</Box>
	)
}

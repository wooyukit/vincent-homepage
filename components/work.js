import NextLink from 'next/link'
import { Heading, HStack, Link, Badge, Center } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'

export const Title = ({ children }) => (
	<HStack mb={4} alignItems="center">
		<NextLink href="/portfolio">
			<Link fontSize={20}>Portfolio</Link>
		</NextLink>
		<span>
			<ChevronRightIcon />
		</span>
		<Heading display="inline-block" as="h3" fontSize={20} mb={4}>
			{children}
		</Heading>
	</HStack>
)

export const WorkImage = ({ src, alt, ...props }) => (
	<Center cursor="pointer" className='grid-item-thumbnail' {...props}>
		<Image src={src} alt={alt} placeholder='blur' />
	</Center>
)

export const Meta = ({ children }) => (
	<Badge colorScheme="teal" mr={2}>
		{children}
	</Badge>
)
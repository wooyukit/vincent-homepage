import NextLink from 'next/link'
import { Heading, Box, Link, Badge, Center, HStack } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Image from 'next/image'

export const Title = ({ children }) => (
	<Box>
		<NextLink href="/portfolio">
			<Link><HStack><ChevronLeftIcon fontSize={28} /><>Portfolio</></HStack></Link>
		</NextLink>
		<Box>
			<Heading display="inline-block" as="h3" fontSize={20} my={6}>
				{children}
			</Heading>
		</Box>
	</Box>
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
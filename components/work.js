import NextLink from 'next/link'
import { Heading, Box, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'

export const Title = ({ children }) => (
	<Box>
		<NextLink href="/portfolio">
			<Link>Portfolio</Link>
		</NextLink>
		<span>
			&nbsp;
			<ChevronRightIcon />
			&nbsp;
		</span>
		<Heading display="inline-block" as="h3" fontSize={20} mb={4}>
			{children}
		</Heading>
	</Box>
)

export const WorkImage = ({ src, alt }) => (
	<Box cursor="pointer" className='grid-item-thumbnail'>
		<Image src={src} alt={alt} placeholder='blur' />
	</Box>
)

export const Meta = ({ children }) => (
	<Badge colorScheme="teal" mr={2}>
		{children}
	</Badge>
)
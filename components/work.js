import NextLink from 'next/link'
import { Heading, Box, Link, Badge, Center } from '@chakra-ui/react'
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
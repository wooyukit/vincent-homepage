import NextLink from 'next/link'
import { Heading, Box, Link, Badge, Center, Tag, Image } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Item } from 'react-photoswipe-gallery'

export const Title = ({ children }) => (
	<Box>
		<NextLink href="/portfolio">
			<Link><Tag colorScheme="teal" variant="outline" size="lg"><ChevronLeftIcon fontSize={30} ml={-3} />Portfolio</Tag></Link>
		</NextLink>
		<Box>
			<Heading display="inline-block" as="h3" fontSize={24} my={4}>
				{children}
			</Heading>
		</Box>
	</Box>
)

export const WorkImage = ({ src, alt, ...props }) => (
	<Center cursor="pointer" className='grid-item-thumbnail' {...props}>
		<Item
			original={src.path}
			thumbnail={src.path}
			width={src.w}
			height={src.h}>
			{({ ref, open }) => (
				<Image ref={ref} onClick={open} src={src.path} alt={alt} />
			)}
		</Item>
	</Center>
)

export const Meta = ({ children }) => (
	<Badge colorScheme="teal" mr={2}>
		{children}
	</Badge>
)
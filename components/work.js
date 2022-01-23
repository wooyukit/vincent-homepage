import NextLink from 'next/link'
import { Heading, Box, Link, Badge, Center, Tag } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Image from 'next/image'
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
	<Item
		original={src.path}
		thumbnail={src.path}
		width={src.w}
		height={src.h}>
		{({ ref, open }) => (
			<Center ref={ref} onClick={open} cursor="pointer" className='grid-item-thumbnail' {...props}>
				<Image width={src.w} height={src.h} src={src.path} blurDataURL={src.path} alt={alt} placeholder="blur" />
			</Center>
		)}
	</Item>
)

export const Meta = ({ children }) => (
	<Badge colorScheme="teal" mr={2}>
		{children}
	</Badge>
)
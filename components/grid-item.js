import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
	<Box w="100%" align="center">
		<LinkBox cursor="pointer">
			<Image src={thumbnail}
				alt={title}
				className='grid-item-thumbnail'
				placeholder="blur"
				loading='lazy' />
			<LinkOverlay href={href} target="_blank">
				<Text mt={2}>{title}</Text>
			</LinkOverlay>
			<Text fontSize={14}>{children}</Text>
		</LinkBox>
	</Box>
)

export const PortfolioGridItem = ({ children, id, title, thumbnail, priority = false }) => (
	<Box w="100%" align="center">
		<NextLink href={`/portfolio/${id}`}>
			<LinkBox className='grid-item-linkbox' cursor="pointer">
				<Box className='grid-item-thumbnail'>
					<Image
						src={thumbnail}
						alt={title}
						width={640}
						height={360}
						priority={priority}
						loading={priority ? undefined : 'lazy'}
						style={{ objectFit: 'cover' }}
					/>
				</Box>
				<LinkOverlay href={`/portfolio/${id}`}>
					<Text mt={2} fontSize={18} fontWeight="bold" fontFamily="M PLUS Rounded 1c">
						{title}
					</Text>
				</LinkOverlay>
				<Text fontSize={14}>{children}</Text>
			</LinkBox>
		</NextLink>
	</Box>
)

export const GridItemStyle = () => (
	<Global styles={`
	.grid-item-linkbox:hover .grid-item-thumbnail {
		transform: scale(1.1);
	}
	.grid-item-thumbnail {
		transition: 500ms ease;
	}
	.grid-item-thumbnail img {
		border-radius: 12px;
	}
	.project-card-image:hover .project-thumbnail {
		transform: scale(1.05);
	}
	.project-thumbnail {
		object-fit: cover;
		transition: transform 0.3s ease;
	}
	`}
	/>
)
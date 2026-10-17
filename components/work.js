import NextLink from 'next/link'
import {
  Heading,
  Box,
  Link,
  Badge,
  Center,
  Flex,
  Icon,
  Text
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { IoCalendarOutline } from 'react-icons/io5'
import Image from 'next/image'
import { Item } from 'react-photoswipe-gallery'
import images from '../lib/generated-images.json'
import { getImageDimensions } from '../lib/image-path'

export const Title = ({ children, year }) => {
  const accent = 'text-accent'
  return (
    <Box mb={6}>
      <Link
        as={NextLink}
        href="/portfolio"
        display="inline-flex"
        alignItems="center"
        gap={1}
        color={accent}
        fontWeight="medium"
        _hover={{ color: accent, transform: 'translateX(-4px)' }}
        transition="all 0.2s"
        mb={4}
      >
        <ChevronLeftIcon fontSize={20} />
        Back to Portfolio
      </Link>
      <Text className="eyebrow" mb={3}>
        Project overview
      </Text>
      <Flex align="center" gap={3} flexWrap="wrap">
        <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }}>
          {children}
        </Heading>
        {year && (
          <Badge
            colorScheme="blue"
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
  return (
    <Box
      className="surface-card"
      layerStyle="glassCard"
      borderRadius="xl"
      p={6}
      my={6}
    >
      {children}
    </Box>
  )
}

export const InfoRow = ({ icon, label, children }) => {
  const labelColor = 'text-muted'

  return (
    <Flex
      py={3}
      borderBottom="1px solid"
      borderColor="surface-subtle"
      _last={{ borderBottom: 'none', pb: 0 }}
      _first={{ pt: 0 }}
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 2, sm: 4 }}
    >
      <Flex align="center" gap={2} minW={{ sm: '120px' }} color={labelColor}>
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
  const tagBg = 'surface-subtle'
  const tagColor = 'text-tag'

  return (
    <Flex flexWrap="wrap" gap={2}>
      {techs.map(tech => (
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

export const WorkImage = ({ src, alt, ...props }) => {
  const { width, height } = getImageDimensions(images, src)
  return (
    <Item
      original={src.path}
      thumbnail={src.path}
      width={width}
      height={height}
      title={alt}
    >
      {({ ref, open }) => (
        <Center
          as="button"
          type="button"
          w="full"
          aria-label={`Enlarge ${alt}`}
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
          _focusVisible={{
            outline: '3px solid',
            outlineColor: 'blue.400',
            outlineOffset: 3
          }}
          {...props}
        >
          <Image
            width={width}
            height={height}
            src={src.path}
            alt={alt}
            sizes={
              src.path.includes('eyecatch')
                ? '(min-width: 48em) 768px, 100vw'
                : '(min-width: 48em) 240px, 50vw'
            }
            priority={src.path.includes('eyecatch')}
            style={{ width: '100%', height: 'auto' }}
            className="work-thumbnail"
          />
        </Center>
      )}
    </Item>
  )
}

export const HeroImage = ({ src, alt }) => {
  const borderColor = 'border-default'

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
  <Badge colorScheme="blue" mr={2}>
    {children}
  </Badge>
)

export const DownloadButtons = ({ appStoreUrl, playStoreUrl }) => (
  <Flex gap={3} flexWrap="wrap" align="center">
    {appStoreUrl && (
      <Link
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
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
        rel="noopener noreferrer"
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
  const headingColor = 'text-heading'

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
  const textColor = 'text-muted'

  return (
    <Box>
      {features.map((feature, index) => (
        <Flex key={index} align="flex-start" mb={2} _last={{ mb: 0 }}>
          <Text color="blue.500" mr={2} mt={1}>
            •
          </Text>
          <Text color={textColor} fontSize="sm">
            {feature}
          </Text>
        </Flex>
      ))}
    </Box>
  )
}

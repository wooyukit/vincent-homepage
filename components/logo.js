import NextLink from 'next/link'
import Image from 'next/image'
import { Link, Text } from '@chakra-ui/react'

const Logo = () => (
  <Link
    as={NextLink}
    href="/"
    aria-label="Vincent Woo home"
    display="inline-flex"
    alignItems="center"
    gap={2}
    flexShrink={0}
    color="text-strong"
    _hover={{ textDecoration: 'none' }}
  >
    <Image
      src="/images/logo-ico.png"
      width={24}
      height={32}
      alt=""
      aria-hidden="true"
      style={{ objectFit: 'contain' }}
    />
    <Text
      as="span"
      fontWeight="bold"
      fontSize={{ base: 'md', md: 'lg' }}
      letterSpacing="tight"
      whiteSpace="nowrap"
    >
      Vincent Woo
      <Text as="span" color="text-accent">
        .
      </Text>
    </Text>
  </Link>
)

export default Logo

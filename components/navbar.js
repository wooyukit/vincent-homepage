import NextLink from 'next/link'
import { motion } from 'framer-motion'
import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoPauseOutline, IoPlayOutline } from 'react-icons/io5'
import { useAutomaticMotion } from '../lib/automatic-motion'
import { glassReflection } from '../lib/theme'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Projects' },
  { href: '/works', label: 'Experience' },
  { href: '/dashboard', label: 'Open source' }
]

const Navbar = ({ path }) => {
  const { paused, toggle } = useAutomaticMotion()
  const current = path.split(/[?#]/)[0]
  const accent = 'text-strong'
  const activeBg = 'var(--chakra-colors-navigation-active)'
  const inactive = 'text-navigation'
  const scrollShade =
    'linear-gradient(to bottom, var(--chakra-colors-navigation-shade-start), var(--chakra-colors-navigation-shade-middle) 62%, var(--chakra-colors-navigation-shade-end))'
  const isActive = href =>
    current === href || (href !== '/' && current.startsWith(`${href}/`))

  return (
    <Box
      as={motion.nav}
      layoutRoot
      layoutScroll
      aria-label="Main navigation"
      position="fixed"
      top={{ base: 2, md: 3 }}
      w="full"
      px={{ base: 2, md: 4 }}
      zIndex={20}
      _before={{
        content: '""',
        position: 'absolute',
        top: { base: -2, md: -3 },
        left: 0,
        width: 'full',
        height: '100px',
        backgroundImage: scrollShade,
        pointerEvents: 'none',
        zIndex: -1
      }}
    >
      <Container
        className="glass-navigation"
        layerStyle="glassFloating"
        maxW="container.lg"
        borderRadius={{ base: '2xl', md: 'full' }}
        px={{ base: 3, md: 4 }}
        py={2}
      >
        <Flex justify="space-between" align="center" gap={{ base: 2, md: 4 }}>
          <Logo />
          <HStack spacing={1} display={{ base: 'none', md: 'flex' }}>
            {navigation.map(item => (
              <Link
                as={NextLink}
                key={item.href}
                href={item.href}
                px={3}
                py={2}
                position="relative"
                isolation="isolate"
                borderRadius="full"
                fontSize="xs"
                fontWeight={isActive(item.href) ? 'semibold' : 'medium'}
                color={isActive(item.href) ? accent : inactive}
                transition="color 180ms ease"
                _hover={{ color: accent, textDecoration: 'none' }}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {isActive(item.href) && (
                  <motion.span
                    layoutId="active-navigation"
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 999,
                      backgroundColor: activeBg,
                      backgroundImage: glassReflection,
                      boxShadow: 'inset 0 1px 0 var(--glass-edge-top)',
                      border: '1px solid var(--glass-border)',
                      zIndex: -1
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 430,
                      damping: 34,
                      mass: 0.7
                    }}
                  />
                )}
                {item.label}
              </Link>
            ))}
          </HStack>
          <HStack spacing={{ base: 1, sm: 2 }}>
            <IconButton
              aria-label={
                paused
                  ? 'Resume automatic animations'
                  : 'Pause automatic animations'
              }
              title={
                paused
                  ? 'Resume automatic animations'
                  : 'Pause automatic animations'
              }
              icon={paused ? <IoPlayOutline /> : <IoPauseOutline />}
              variant="ghost"
              onClick={toggle}
              sx={{
                '@media (prefers-reduced-motion: reduce)': { display: 'none' }
              }}
            />
            <ThemeToggleButton />
            <Box display={{ base: 'block', md: 'none' }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="ghost"
                  aria-label="Open navigation"
                />
                <Portal>
                  <MenuList>
                    {navigation.map(item => (
                      <MenuItem
                        as={NextLink}
                        key={item.href}
                        href={item.href}
                        aria-current={isActive(item.href) ? 'page' : undefined}
                        fontWeight={isActive(item.href) ? 'bold' : 'normal'}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Portal>
              </Menu>
            </Box>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar

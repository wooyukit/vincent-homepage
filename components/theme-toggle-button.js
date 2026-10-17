import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label={useColorModeValue(
        'Switch to dark theme',
        'Switch to light theme'
      )}
      variant="ghost"
      colorScheme="gray"
      icon={
        <Box as="span" display="inline-flex">
          <MoonIcon sx={{ _dark: { display: 'none' } }} />
          <SunIcon display="none" sx={{ _dark: { display: 'inline-block' } }} />
        </Box>
      }
      onClick={toggleColorMode}
    />
  )
}

export default ThemeToggleButton

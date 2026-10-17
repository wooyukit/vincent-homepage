import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  Flex,
  SimpleGrid,
  HStack,
  Wrap,
  WrapItem,
  Badge,
  Divider,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowDownIcon } from '@chakra-ui/icons'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
  IoPhonePortraitOutline
} from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import ProjectCard from '../components/project-card'
import PlanetPreview from '../components/planet-preview'
import RotatingWords from '../components/rotating-words'
import AnimatedCounter from '../components/animated-counter'
import SkillsMarquee from '../components/skills-marquee'
import { featuredProjects } from '../data/projects'
import { getYearsOfExperience } from '../lib/constants'

const skills = [
  'Swift',
  'Kotlin',
  'Rust',
  'Flutter',
  'React',
  'TypeScript',
  'Node.js',
  'GraphQL'
]
const interests = [
  'Music & guitar',
  'Table tennis',
  'Basketball',
  'Chinese chess',
  'Gym',
  'Movies',
  'Blockchain',
  'Gaming',
  '3D animation',
  'Machine learning'
]

const Page = () => {
  const border = useColorModeValue('gray.200', 'gray.700')
  const muted = useColorModeValue('gray.600', 'gray.400')
  const accent = useColorModeValue('blue.700', 'blue.200')

  return (
    <Layout>
      <Box as="section" py={{ base: 8, md: 16 }} mb={{ base: 8, md: 10 }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          gap={{ base: 12, md: 10, lg: 14 }}
        >
          <Box flex={1} minW={0} w="full">
            <HStack
              className="hero-reveal"
              spacing={3}
              mb={5}
              style={{ '--hero-delay': '0s' }}
            >
              <Box
                as="span"
                className="greeting-wave"
                fontSize="xl"
                aria-hidden="true"
              >
                👋
              </Box>
              <Text className="eyebrow">Engineering Lead · Hong Kong</Text>
            </HStack>
            <Heading
              className="hero-reveal"
              as="h1"
              fontSize={{
                base: 'clamp(2.6rem, 11.8vw, 3.5rem)',
                md: '64px',
                lg: '80px'
              }}
              lineHeight="1.05"
              mb={5}
              style={{ '--hero-delay': '0.08s' }}
            >
              Vincent Woo
              <span style={{ color: 'var(--chakra-colors-blue-500)' }}>.</span>
            </Heading>
            <Box
              className="hero-reveal"
              fontSize={{ base: '2xl', lg: '3xl' }}
              lineHeight="1.35"
              fontWeight="medium"
              mb={5}
              style={{ '--hero-delay': '0.16s' }}
            >
              <Text>Engineering for</Text>
              <Box color={accent}>
                <RotatingWords />
              </Box>
            </Box>
            <Text
              className="hero-reveal"
              color={muted}
              fontSize={{ base: 'md', lg: 'lg' }}
              lineHeight="tall"
              maxW="460px"
              mb={7}
              style={{ '--hero-delay': '0.24s' }}
            >
              I lead mobile engineering at OKX. I build reliable apps, support
              thoughtful teams, and care about the details people feel.
            </Text>
            <Flex
              className="hero-reveal"
              gap={3}
              flexWrap="wrap"
              mb={6}
              style={{ '--hero-delay': '0.32s' }}
            >
              <Button
                as="a"
                href="#selected-work"
                variant="primary"
                rightIcon={<ArrowForwardIcon />}
                size="lg"
                px={6}
              >
                View my work
              </Button>
              <Button
                as="a"
                href="mailto:wooyukit@gmail.com"
                variant="glass"
                size="lg"
              >
                Let’s talk
              </Button>
            </Flex>
            <HStack
              className="hero-reveal"
              spacing={5}
              fontSize="sm"
              color={muted}
              style={{ '--hero-delay': '0.4s' }}
            >
              <Link
                href="https://github.com/wooyukit"
                isExternal
                display="inline-flex"
                alignItems="center"
                gap={2}
                color="inherit"
              >
                <IoLogoGithub aria-hidden />
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/yu-kit-vincent-woo-63400332/"
                isExternal
                display="inline-flex"
                alignItems="center"
                gap={2}
                color="inherit"
              >
                <IoLogoLinkedin aria-hidden />
                LinkedIn
              </Link>
            </HStack>
          </Box>
          <Box
            className="portrait-frame hero-reveal"
            flexShrink={0}
            w={{ base: '86%', md: '290px', lg: '330px' }}
            maxW="340px"
            mb={{ base: 5, md: 0 }}
            mr={{ base: 0, md: 3 }}
            style={{ '--hero-delay': '0.15s' }}
          >
            <Box
              borderRadius="28px"
              overflow="hidden"
              bg="gray.200"
              aspectRatio={4 / 5}
            >
              <Image
                className="portrait-image"
                src="/images/kit.jpg"
                alt="Vincent Woo"
                width={640}
                height={800}
                sizes="(min-width: 62em) 330px, (min-width: 48em) 290px, 80vw"
                priority
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '50% 40%'
                }}
              />
            </Box>
            <HStack
              className="portrait-caption"
              position="absolute"
              bottom={5}
              left={{ base: -3, md: -5 }}
              layerStyle="glassMedia"
              p={4}
              borderRadius="xl"
              spacing={3}
            >
              <Flex
                w={10}
                h={10}
                align="center"
                justify="center"
                borderRadius="full"
                bg="whiteAlpha.200"
                color="white"
              >
                <Icon as={IoPhonePortraitOutline} boxSize={5} />
              </Flex>
              <Box>
                <Text fontWeight="semibold" fontSize="sm">
                  Mobile, thoughtfully made.
                </Text>
                <Text color="whiteAlpha.900" fontSize="xs" mt={1}>
                  iOS · Android · Web
                </Text>
              </Box>
            </HStack>
          </Box>
        </Flex>
      </Box>

      <Section>
        <SimpleGrid
          columns={3}
          gap={{ base: 4, md: 10 }}
          py={7}
          px={{ base: 4, md: 7 }}
          layerStyle="glassCard"
          borderRadius="2xl"
        >
          <Box>
            <Text
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              letterSpacing="tight"
            >
              <AnimatedCounter value={getYearsOfExperience()} />
            </Text>
            <Text color={muted} fontSize={{ base: 'xs', md: 'sm' }} mt={1}>
              Years of experience
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              letterSpacing="tight"
            >
              <AnimatedCounter value={50} />
            </Text>
            <Text color={muted} fontSize={{ base: 'xs', md: 'sm' }} mt={1}>
              Projects delivered
            </Text>
          </Box>
          <Box alignSelf="center">
            <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="semibold">
              OKX · SCMP
            </Text>
            <Text color={muted} fontSize={{ base: 'xs', md: 'sm' }} mt={1}>
              Experience across fintech & media
            </Text>
          </Box>
        </SimpleGrid>
      </Section>
      <Box color={muted} mb={{ base: 10, md: 14 }}>
        <SkillsMarquee />
      </Box>

      <Section delay={0.08}>
        <Box id="selected-work">
          <Flex
            justify="space-between"
            align="flex-end"
            gap={4}
            mb={7}
            flexWrap="wrap"
          >
            <Box>
              <Text className="eyebrow" mb={3}>
                A few highlights
              </Text>
              <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }}>
                Selected work.
              </Heading>
            </Box>
            <Link
              as={NextLink}
              href="/portfolio"
              className="arrow-link"
              fontSize="sm"
              fontWeight="semibold"
              color={accent}
              pb={1}
            >
              Explore all projects <ArrowForwardIcon aria-hidden />
            </Link>
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
            <Box
              className="surface-card"
              layerStyle="glassCard"
              borderRadius="2xl"
              p={{ base: 7, md: 9 }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Text className="eyebrow" mb={4}>
                The people behind the product
              </Text>
              <Heading as="h3" fontSize="2xl" mb={4}>
                Good engineering is a team sport.
              </Heading>
              <Text color={muted} fontSize="sm" lineHeight="tall" mb={6}>
                Architecture, mentorship, and delivery. I help teams turn
                complex challenges into products that work well for the people
                using them.
              </Text>
              <Link
                as={NextLink}
                href="/works"
                className="arrow-link"
                color={accent}
                fontSize="sm"
                fontWeight="semibold"
              >
                Explore my experience <ArrowForwardIcon aria-hidden />
              </Link>
            </Box>
          </SimpleGrid>
        </Box>
      </Section>

      <Section delay={0.08}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: 8, md: 12 }}
          py={{ base: 8, md: 12 }}
        >
          <Box>
            <Text className="eyebrow" mb={4}>
              A little about me
            </Text>
            <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} mb={5}>
              Thoughtful systems.
              <br />
              Everyday experiences.
            </Heading>
            <Text color={muted} lineHeight="tall" mb={4}>
              From news platforms to banking and crypto, I work where reliable
              engineering meets everyday user experience. I architect mobile
              systems, mentor engineers, and help teams deliver.
            </Text>
            <Text color={muted} lineHeight="tall">
              My work spans native Swift and Kotlin, cross-platform development,
              and a growing interest in Rust and open source.
            </Text>
          </Box>
          <Box alignSelf="center">
            <Text fontWeight="semibold" mb={4}>
              Tools I work with
            </Text>
            <Wrap spacing={2} mb={6}>
              {skills.map(skill => (
                <WrapItem key={skill}>
                  <Badge px={4} py={2} borderRadius="full" colorScheme="gray">
                    {skill}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
            <Link
              as={NextLink}
              href="/dashboard"
              className="arrow-link"
              color={accent}
              fontSize="sm"
              fontWeight="semibold"
            >
              Explore my open source activity <ArrowForwardIcon aria-hidden />
            </Link>
          </Box>
        </SimpleGrid>
      </Section>

      <Section>
        <Divider mb={8} />
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mb={10}>
          <Box>
            <Heading as="h2" size="md" mb={4}>
              Education
            </Heading>
            <Text fontSize="sm" fontWeight="semibold">
              MSc, Information System Management
            </Text>
            <Text color={muted} fontSize="sm" mb={4}>
              City University of Hong Kong · 2017
            </Text>
            <Text fontSize="sm" fontWeight="semibold">
              Bachelor of Electronic and Information Engineering
            </Text>
            <Text color={muted} fontSize="sm">
              Hong Kong Polytechnic University · 2009
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="md" mb={4}>
              Away from the keyboard
            </Heading>
            <Text color={muted} fontSize="sm" lineHeight="tall">
              {interests.join(' · ')}
            </Text>
          </Box>
        </SimpleGrid>
      </Section>

      <Section>
        <Box
          id="contact"
          layerStyle="glassFeature"
          borderRadius="2xl"
          p={{ base: 7, md: 10 }}
        >
          <Text className="eyebrow" mb={4}>
            Let’s connect
          </Text>
          <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} mb={4}>
            Have something in mind?
          </Heading>
          <Text color={muted} lineHeight="tall" mb={6}>
            A project, an engineering challenge, or a conversation.
            <br />
            I’d love to hear from you.
          </Text>
          <Flex gap={5} align="center" flexWrap="wrap">
            <Button
              as="a"
              href="mailto:wooyukit@gmail.com"
              variant="primary"
              leftIcon={<IoMailOutline />}
              px={6}
            >
              Say hello
            </Button>
            <Link href="tel:+85263485516" color={accent} fontSize="sm">
              +852 6348 5516
            </Link>
          </Flex>
        </Box>
      </Section>
      <PlanetPreview />
      <Flex
        as="footer"
        borderTop="1px solid"
        borderColor={border}
        pt={6}
        justify="space-between"
        gap={3}
        flexWrap="wrap"
        color={muted}
        fontSize="xs"
      >
        <Text>Vincent Woo · Made in Hong Kong</Text>
        <HStack spacing={5}>
          <Link href="#main-content" color="inherit">
            Back to top <ArrowDownIcon transform="rotate(180deg)" aria-hidden />
          </Link>
          <Link
            href="https://github.com/wooyukit/vincent-homepage"
            isExternal
            color="inherit"
          >
            View source
          </Link>
        </HStack>
      </Flex>
    </Layout>
  )
}

export default Page

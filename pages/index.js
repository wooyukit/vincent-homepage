import { Container, Box, Heading, Image, useColorModeValue, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'


const Page = () => {
	return (
		<Layout>
			<Container>
				<Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
					Hello, I am a Mobile Application Developer based in Hong Kong!
				</Box>
				<Box display={{ md: 'flex' }} >
					<Box flexGrow={1}>
						<Heading as="h2" variant="page-title"> WOO Yu Kit Vincent</Heading>
						<p>Team Lead Engineer, Senior Mobile Appliction and Web Developer</p>
					</Box>
					<Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
						<Image
							borderColor={useColorModeValue('blackAlpha.400', 'whiteAlpha.800')}
							borderWidth={2}
							borderStyle="solid"
							maxWidth="100px"
							display="inline-block"
							borderRadius="full"
							src="/images/kit-logo.jpg"
							alt="Profile Image" />
					</Box>
				</Box>
				<Section delay={0.1}>
					<Heading as="h3" variant="section-title">
						Work
					</Heading>
					<Paragraph>
						12 years of Mobile Applications Development experience in iOS, Android and Web platforms. Skilled in Kotlin, Swift, Flutter, Java, JavaScript, PHP, ReactJS and .Net Framework. Supportive and enthusiastic team player dedicated to streamlining processes and efficiently resolving project issues.
					</Paragraph>
					<Box align="center" my={4}>
						<NextLink href="/works">
							<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
								Work Experience
							</Button>
						</NextLink>
					</Box>
					<Box align="center" my={4}>
						<NextLink href="/portfolio">
							<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
								My Portfolio
							</Button>
						</NextLink>
					</Box>
				</Section>
				<Section delay={0.2}>
					<Heading as="h3" variant="section-title">
						I ❤️
					</Heading>
					<Paragraph>
						Music🎵, Playing Guitar🎸, Table Tennis🏓, Basketball🏀, Chinese Chess, GYM🏋🏻‍♀️, Computer Games🕹, New Technologies🧑🏻‍💻, Machine Learning💻.
					</Paragraph>
				</Section>
				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						Education
					</Heading>
					<BioSection>
						<BioYear>2009</BioYear>
						Completed the Bachelor of Electronic and Information Engineering in <br />
						The Hong Kong Polytechnic University. <br />
						with Second Class Honors, Division 1 and Awarded GPA: 3.2
					</BioSection>
					<BioSection>
						<BioYear>2017</BioYear>
						Completed the Master of Science in Information system Management<br />
						Major in Information System Management <br />
						The City University of Hong Kong.<br />
						with Pass Classification and Awarded GPA: 2.97
					</BioSection>
				</Section>
			</Container>
		</Layout>
	)
}

export default Page
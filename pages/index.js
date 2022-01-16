import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
	return (
		<Container>
			<Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
				Hello, I'm a Mobile Application Developer based in Hong Kong!
			</Box>
			<Box display={{ md: 'flex' }} >
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title"> WOO Yu Kit Vincent</Heading>
					<p>Mobile Appliction Developer, Team Leader, Project Manager</p>
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
					Vincent is a mobile application developer with 12 years of Mobile Applications Development experience in iOS, Android and Web platforms. Skilled in Kotlin, Swift, Flutter, Java, JavaScript, PHP, ReactJS and .Net Framework. Supportive and enthusiastic team player dedicated to streamlining processes and efficiently resolving project issues.
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/works">
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
							My portfolio
						</Button>
					</NextLink>
				</Box>
			</Section>
			<Section delay={0.2}>
				<Heading as="h3" variant="section-title">
					Bio
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
				<BioSection>
					<BioYear>2017</BioYear>
					Completed the Master of Science in Information system Management<br />
					Major in Information System Management <br />
					The City University of Hong Kong.<br />
					with Pass Classification and Awarded GPA: 2.97
				</BioSection>
			</Section>
		</Container>
	)
}

export default Page
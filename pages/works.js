import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import { ExpSection, ExpYear, ExpPosition, ExpDuty } from '../components/experience'

const Works = () => {
	return (
		<Container>
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
					Experience
				</Heading>
				<ExpSection>
					<Box display='flex'>
						<Image maxHeight="80px"
							borderRadius="full"
							src='/images/portfolio/scmp-logo.png'
							alt='South China Morning Post' />
						<Box flexGrow={1}
							alignSelf="center">
							<ExpPosition>
								Lead Mobile Engineer in South China Morning Post
							</ExpPosition>
							<ExpYear>2018 to now</ExpYear>
						</Box>
					</Box>
					<ExpDuty>
						<ul>
							<li>Manage and allocate tasks to the application developers to produce new features and maintain mobile applications.</li>
							<li>Conduct CI/CD for QA and distribute the application.</li>
							<li>Communicate with parties and implement technical solution to fulfill business requirements and needs.</li>
							<li>Develop Newspaper and Magazine Universal Mobile Application for both iOS and Android Platform from scratch.</li>
							<li>Using Reactive Functional Programming (Kotlin, Swift, RxSwift, RxJava) to implement MVVM Architecture to decouple the dependencies.</li>
							<li>Implement GraphQL for data query</li>
						</ul>
					</ExpDuty>
				</ExpSection>
				<ExpSection>
					<Box display='flex'>
						<Image maxHeight="80px"
							src='/images/portfolio/hang-seng-logo.png'
							alt='Hang Seng Bank' />
						<Box flexGrow={1}
							alignSelf="center">
							<ExpPosition>
								Senior System Analyst in Hang Seng Bank
							</ExpPosition>
							<ExpYear>2017 to 2018</ExpYear>
						</Box>
					</Box>
					<ExpDuty>
						<ul>
							<li>Develop Mobile apps for both iOS and Android for the Corporate Clients from scratch.</li>
							<li>Manage the offshoring team in Mainland China to support agile development process</li>
							<li>Enhance the current Mobile apps to fulfill business user’s requirements</li>
							<li>Integrate the Machine Learning System with current website and mobile applications</li>
						</ul>
					</ExpDuty>
				</ExpSection>
				<ExpSection>
					<Box display='flex'>
						<Image maxHeight="80px"
							borderRadius="full"
							src='/images/portfolio/scmp-logo.png'
							alt='South China Morning Post' />
						<Box flexGrow={1}
							alignSelf="center">
							<ExpPosition>
								Senior Mobile Developer in South China Morning Post
							</ExpPosition>
							<ExpYear>2016 to 2017</ExpYear>
						</Box>
					</Box>
				</ExpSection>
				<ExpSection>
					<Box display='flex'>
						<Image maxHeight="80px"
							borderRadius="full"
							src='/images/portfolio/guru-online-logo.png'
							alt='Guru Online' />
						<Box flexGrow={1}
							alignSelf="center">
							<ExpPosition>
								Senior Mobile Application Developer in Guru Online Ltd
							</ExpPosition>
							<ExpYear>2014 to 2016</ExpYear>
						</Box>
					</Box>
					<ExpDuty>
						<ul>
							<li>Research and development the new mobile application technology such as iBeacon, AR with 3D models, payment gateway integration with mobile application, apple watch and Swift</li>
							<li>Develop the client projects for iOS, Android and web platform</li>
							<li>Manage the project schedule and allocate the job for colleagues</li>
							<li>System Design and prepare the documents for the new project development and pitching.</li>
							<li>At Guru Online Limited, Senior Mobile Application Developer</li>
							<li>Created a start up project. https://www.takealook.com</li>
							<li>Including responsive website development</li>
							<li>Mobile Application Development</li>
						</ul>
					</ExpDuty>
				</ExpSection>
				<ExpSection>
					<Box display='flex'>
						<Image maxHeight="80px"
							borderRadius="full"
							src='/images/portfolio/pactera-logo.jpeg'
							alt='Pactera Limited' />
						<Box flexGrow={1}
							alignSelf="center">
							<ExpPosition>
								Consultant in Pactera Limited
							</ExpPosition>
							<ExpYear>2012 to 2014</ExpYear>
						</Box>
					</Box>
					<ExpDuty>
						<ul>
							<li>Serve as a consultant to provide the software development system design and feasibility for client.</li>
							<li>Provided T and M service for Swire Property Limited and Philips limits, which enhanced their existing .NET programs such as Leasing system and their SharePoint internal portal and iPhone Mobile project for incident handling</li>
							<li>Maintain and fixing issues of company existing SharePoint 2007 and 2010 projects</li>
							<li>Enhancement project for Prudential Company to improve their current SharePoint portal.</li>
							<li>Developed a SharePoint portal for Philips to consolidate their company department information and document-sharing center.</li>
							<li>Developed a new SharePoint Portal for MTR Human Resource and administration department. The system is built on Microsoft SharePoint 2010 and is to consolidate the department services information, learning materials or share documents.</li>
							<li>Customizing the Microsoft SharePoint 2010 including layouts and system structure to fit the user’s requirements.</li>
							<li>Create custom Web Parts to enhance the user experience.</li>
							<li>Document Search and Advance Search Function</li>
							<li>System Permission control for different users</li>
							<li>Customized Blog and discussion forum</li>
							<li>Create a site template for user to create custom sub site for portal</li>
						</ul>
					</ExpDuty>
				</ExpSection>
				<ExpSection>
					<Box display='flex'>
						<Image maxHeight="80px"
							src='/images/portfolio/china-mobile-logo.png'
							alt='Chine Mobile Hong Kong Limited' />
						<Box flexGrow={1}
							alignSelf="center">
							<ExpPosition>
								Mobile Applications Developer in China Mobile Limited
							</ExpPosition>
							<ExpYear>2011 to 2012</ExpYear>
						</Box>
					</Box>
					<ExpDuty>
						<ul>
							<li>Developed the iPhone Apps, android Apps for internal and external users.</li>
							<li>Responsible for designing native mobile application and server interface such as customer service application for customers to check the billing information and promotions.</li>
						</ul>
					</ExpDuty>
				</ExpSection>
				<ExpSection>
					<Box display='flex'>
						<Image maxHeight="80px"
							src='/images/portfolio/iMusicTech-logo.png'
							alt='iMusicTect Limited' />
						<Box flexGrow={1}
							alignSelf="center">
							<ExpPosition>
								Analyst Programmer in iMusicTech Limited
							</ExpPosition>
							<ExpYear>2010 to 2011</ExpYear>
						</Box>
					</Box>
					<ExpDuty>
						<ul>
							<li>Focused on the web application as well as iPhone, Android mobile applications development.</li>
							<li>Keep trying the newest technology. For example, iPhone game development.</li>
							<li>Developed the company website, iPhone Apps, Flash stuff and the web application for company clients.</li>
						</ul>
					</ExpDuty>
				</ExpSection>
				<ExpSection>
					<Box display='flex'>
						<Image maxHeight="80px"
							borderRadius="full"	
							src='/images/portfolio/california-red-logo.jpeg'
							alt='California Red Limited' />
						<Box flexGrow={1}
							alignSelf="center">
							<ExpPosition>
								Programmer in California Red Limited
							</ExpPosition>
							<ExpYear>2009 to 2010</ExpYear>
						</Box>
					</Box>
					<ExpDuty>
						<ul>
							<li>Worked as a programmer of Information Technology Department</li>
							<li>Responsible for handling program coding, system analysis and design works for the company</li>
							<li>Cooperated with different department and participated in varies projects.</li>
							<li>Developed the member party booking system to provide a web platform for customers to purchase party stuff and give an online payment gateway, reconstruction of the company intranet, Songs transferring system, flash advertisements, web maintenance system and member transferring system to transfer member data and scores to other company.
							</li>
						</ul>
					</ExpDuty>
				</ExpSection>
			</Section>
		</Container>
	)
}

export default Works
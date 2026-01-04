import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import { ExpSection, ExpYear, ExpPosition, ExpDuty } from '../components/experience'
import Layout from '../components/layouts/article'

const experiences = [
	{
		company: 'OKX',
		logo: '/images/works/okx-logo.jpeg',
		alt: 'OKX',
		position: 'Senior Software Engineer at OKX',
		year: '2022 to now',
		rounded: true,
		duties: [
			'Develop Mobile apps for iOS.',
			'Manage the iOS team to support agile development process.',
			'Enhance the current Mobile apps to fulfill business users requirements.'
		]
	},
	{
		company: 'SCMP',
		logo: '/images/works/scmp-logo.png',
		alt: 'South China Morning Post',
		position: 'Lead Mobile Engineer in South China Morning Post',
		year: '2018 to 2022',
		rounded: true,
		duties: [
			'Manage and allocate tasks to the application developers to produce new features and maintain mobile applications.',
			'Conduct CI/CD for QA and distribute the application.',
			'Communicate with parties and implement technical solution to fulfill business requirements and needs.',
			'Develop Newspaper and Magazine Universal Mobile Application for both iOS and Android Platform from scratch.',
			'Using Reactive Functional Programming (Kotlin, Swift, RxSwift, RxJava) to implement MVVM Architecture to decouple the dependencies.',
			'Implement GraphQL for data query'
		]
	},
	{
		company: 'Hang Seng Bank',
		logo: '/images/works/hang-seng-logo.png',
		alt: 'Hang Seng Bank',
		position: 'Senior System Analyst in Hang Seng Bank',
		year: '2017 to 2018',
		rounded: false,
		duties: [
			'Develop Mobile apps for both iOS and Android for the Corporate Clients from scratch.',
			'Manage the offshoring team in Mainland China to support agile development process',
			'Enhance the current Mobile apps to fulfill business user\'s requirements',
			'Integrate the Machine Learning System with current website and mobile applications'
		]
	},
	{
		company: 'SCMP (Senior)',
		logo: '/images/works/scmp-logo.png',
		alt: 'South China Morning Post',
		position: 'Senior Mobile Developer in South China Morning Post',
		year: '2016 to 2017',
		rounded: true,
		duties: [
			'Develop Newspaper and Magazine Universal Mobile Application for both iOS and Android Platform form scratch.',
			'Using Reactive Functional Programming (Kotlin, Swift, RxSwift, RxJava) to implement MVVM Architecture to decouple the dependencies.',
			'Fine tune the performance to keep the User Experience smooth.',
			'Implemented automation test and CI for deployment to ensure the application quality.',
			'Code review and Unit test before merging branches.',
			'Follow scrum agile software development process.',
			'Communicate with product owners and UI / UX designers for developing the software layouts and architecture.'
		]
	},
	{
		company: 'Guru Online',
		logo: '/images/works/guru-online-logo.png',
		alt: 'Guru Online',
		position: 'Senior Mobile Application Developer in Guru Online Ltd',
		year: '2014 to 2016',
		rounded: true,
		duties: [
			'Research and development the new mobile application technology such as iBeacon, AR with 3D models, payment gateway integration with mobile application, apple watch and Swift',
			'Develop the client projects for iOS, Android and web platform',
			'Manage the project schedule and allocate the job for colleagues',
			'System Design and prepare the documents for the new project development and pitching.',
			'At Guru Online Limited, Senior Mobile Application Developer',
			'Created a start up project. https://www.takealook.com',
			'Including responsive website development',
			'Mobile Application Development'
		]
	},
	{
		company: 'Pactera',
		logo: '/images/works/pactera-logo.jpeg',
		alt: 'Pactera Limited',
		position: 'Consultant in Pactera Limited',
		year: '2012 to 2014',
		rounded: true,
		duties: [
			'Serve as a consultant to provide the software development system design and feasibility for client.',
			'Provided T and M service for Swire Property Limited and Philips limits, which enhanced their existing .NET programs such as Leasing system and their SharePoint internal portal and iPhone Mobile project for incident handling',
			'Maintain and fixing issues of company existing SharePoint 2007 and 2010 projects',
			'Enhancement project for Prudential Company to improve their current SharePoint portal.',
			'Developed a SharePoint portal for Philips to consolidate their company department information and document-sharing center.',
			'Developed a new SharePoint Portal for MTR Human Resource and administration department. The system is built on Microsoft SharePoint 2010 and is to consolidate the department services information, learning materials or share documents.',
			'Customizing the Microsoft SharePoint 2010 including layouts and system structure to fit the user\'s requirements.',
			'Create custom Web Parts to enhance the user experience.',
			'Document Search and Advance Search Function',
			'System Permission control for different users',
			'Customized Blog and discussion forum',
			'Create a site template for user to create custom sub site for portal'
		]
	},
	{
		company: 'China Mobile',
		logo: '/images/works/china-mobile-logo.png',
		alt: 'China Mobile Hong Kong Limited',
		position: 'Mobile Applications Developer in China Mobile Limited',
		year: '2011 to 2012',
		rounded: false,
		duties: [
			'Developed the iPhone Apps, android Apps for internal and external users.',
			'Responsible for designing native mobile application and server interface such as customer service application for customers to check the billing information and promotions.'
		]
	},
	{
		company: 'iMusicTech',
		logo: '/images/works/iMusicTech-logo.png',
		alt: 'iMusicTech Limited',
		position: 'Analyst Programmer in iMusicTech Limited',
		year: '2010 to 2011',
		rounded: false,
		duties: [
			'Focused on the web application as well as iPhone, Android mobile applications development.',
			'Keep trying the newest technology. For example, iPhone game development.',
			'Developed the company website, iPhone Apps, Flash stuff and the web application for company clients.'
		]
	},
	{
		company: 'California Red',
		logo: '/images/works/california-red-logo.jpeg',
		alt: 'California Red Limited',
		position: 'Programmer in California Red Limited',
		year: '2009 to 2010',
		rounded: true,
		duties: [
			'Worked as a programmer of Information Technology Department',
			'Responsible for handling program coding, system analysis and design works for the company',
			'Cooperated with different department and participated in varies projects.',
			'Developed the member party booking system to provide a web platform for customers to purchase party stuff and give an online payment gateway, reconstruction of the company intranet, Songs transferring system, flash advertisements, web maintenance system and member transferring system to transfer member data and scores to other company.'
		]
	}
]

const ExperienceCard = ({ logo, alt, position, year, duties, rounded }) => (
	<ExpSection>
		<Box display='flex'>
			<Image
				maxHeight="80px"
				borderRadius={rounded ? 'full' : undefined}
				src={logo}
				alt={alt}
			/>
			<Box flexGrow={1} alignSelf="center">
				<ExpPosition>{position}</ExpPosition>
				<ExpYear>{year}</ExpYear>
			</Box>
		</Box>
		<ExpDuty>
			<ul>
				{duties.map((duty, index) => (
					<li key={index}>{duty}</li>
				))}
			</ul>
		</ExpDuty>
	</ExpSection>
)

const Works = () => {
	const borderColor = useColorModeValue('blackAlpha.400', 'whiteAlpha.800')

	return (
		<Layout>
			<Container>
				<Box display={{ md: 'flex' }} >
					<Box flexGrow={1}>
						<Heading as="h2" variant="page-title"> WOO Yu Kit Vincent</Heading>
						<p>Team Lead Engineer, Senior Mobile Appliction and Web Developer</p>
					</Box>
					<Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
						<Image
							borderColor={borderColor}
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
						Experience 💼
					</Heading>
					{experiences.map((exp) => (
						<ExperienceCard key={exp.company} {...exp} />
					))}
				</Section>
			</Container>
		</Layout>
	)
}

export default Works

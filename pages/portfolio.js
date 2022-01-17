import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Section from "../components/section"
import { PortfolioGridItem } from "../components/grid-item"
import thumbCaliPartyMember from "../public/images/portfolio/cali-party-member-eyecatch.jpg"
import thumbCaliBanner from "../public/images/portfolio/cali-banner-eyecatch.jpg"
import thumbHKEXA from "../public/images/portfolio/hkexa-web-eyecatch.png"
import thumbiMusic from "../public/images/portfolio/imusic-web-eyecatch.jpg"
import thumbMusicNext from "../public/images/portfolio/musicnext-web-eyecatch.png"

const Portfolio = () => {
	return (
		<Container>
			<Heading as="h3" fontSize={20} mb={4}>
				Portfolio
			</Heading>
			<SimpleGrid columns={[1, 1, 2]} gap={6}>
				<Section delay={0.1}>
					<PortfolioGridItem id="cali-party-member" title="Party Book & Member Songs" thumbnail={thumbCaliPartyMember}>
						California Red Party Booking System with online payment service and member songs pre-ordered online.
					</PortfolioGridItem>
					</Section>
					<Section delay={0.2}>
					<PortfolioGridItem id="cali-banner" title="Flash Banners" thumbnail={thumbCaliBanner}>
						Flash Banner Development for website promotion. Membership point transition system for frontend staff.
					</PortfolioGridItem>
				</Section>
				<Section delay={0.3}>
					<PortfolioGridItem id="imusic-web" title="iMusic Website" thumbnail={thumbiMusic}>
						iMusic World website with sing along song flash game.
					</PortfolioGridItem>
				</Section>
				<Section delay={0.4}>
					<PortfolioGridItem id="musicnext-web" title="MusicNext Website" thumbnail={thumbMusicNext}>
						MusicNext entertainment company website developmenet.
					</PortfolioGridItem>
				</Section>
				<Section delay={0.5}>
					<PortfolioGridItem id="hkexa-web" title="HKEXA Website" thumbnail={thumbHKEXA}>
						Hong Kong Exhibitors Association website developement.
					</PortfolioGridItem>
				</Section>
			</SimpleGrid>
		</Container>
	)
}

export default Portfolio
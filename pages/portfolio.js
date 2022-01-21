import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { PortfolioGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import thumb25Master from "../public/images/portfolio/25-master-eyecatch.png"
import thumbApas from "../public/images/portfolio/apas-web-eyecatch.png"
import thumbAR from "../public/images/portfolio/ar-eyecatch.png"
import thumbBauhaus from "../public/images/portfolio/bauhaus-eyecatch.png"
import thumbBid from "../public/images/portfolio/bid-eyecatch.png"
import thumbCaliBanner from "../public/images/portfolio/cali-banner-eyecatch.jpg"
import thumbCaliPartyMember from "../public/images/portfolio/cali-party-member-eyecatch.jpg"
import thumbChinaMobile from "../public/images/portfolio/china-mobile-eyecatch.png"
import thumbChinaMobileIntranet from "../public/images/portfolio/china-mobile-intranet-app-eyecatch.png"
import thumbEndyChow from "../public/images/portfolio/endy-chow-eyecatch.jpg"
import thumbGary from "../public/images/portfolio/gary-eyecatch.jpg"
import thumbGin from "../public/images/portfolio/gin-eyecatch.jpg"
import thumbGuzen from "../public/images/portfolio/guzen-eyecatch.png"
import thumbHangSeng from "../public/images/portfolio/hangseng-eyecatch.jpeg"
import thumbHKEXA from "../public/images/portfolio/hkexa-web-eyecatch.png"
import thumbiMusic from "../public/images/portfolio/imusic-web-eyecatch.jpg"
import thumbInkstone from "../public/images/portfolio/inkstone-eyecatch.jpeg"
import thumbLetwork from "../public/images/portfolio/letwork-eyecatch.png"
import thumbMarathon from "../public/images/portfolio/marathon-eyecatch.png"
import thumbMegaShow from "../public/images/portfolio/mega-show-eyecatch.png"
import thumbMusicNext from "../public/images/portfolio/musicnext-web-eyecatch.png"
import thumbScmpv4 from "../public/images/portfolio/scmpv4-eyecatch.png"
import thumbScmpv5 from "../public/images/portfolio/scmpv5-eyecatch.png"
import thumbSie from "../public/images/portfolio/sie-eyecatch.png"
import thumbSinoClub from "../public/images/portfolio/sino-club-eyecatch.png"
import thumbSolomonsc from "../public/images/portfolio/solomonsc-web-eyecatch.png"
import thumbSoundClip from "../public/images/portfolio/soundclip-eyecatch.png"
import thumbSwireDrp from "../public/images/portfolio/swire-drp-eyecatch.png"
import thumbSwireIrp from "../public/images/portfolio/swire-irp-eyecatch.png"
import thumbSwireReader from "../public/images/portfolio/swire-reader-eyecatch.png"
import thumbT1T from "../public/images/portfolio/t1t-eyecatch.png"
import thumbTakealook from "../public/images/portfolio/takealook-eyecatch.png"
import thumbTwinPeak from "../public/images/portfolio/twinpeak-eyecatch.png"
import thumbWengHang from "../public/images/portfolio/weng-hang-eyecatch.png"

const portfolioItems = [
	{ id: "scmpv5", title: "SCMPv5 App", src: thumbScmpv5 },
	{ id: "hangseng", title: "Hang Seng Business App", src: thumbHangSeng },
	{ id: "inkstone", title: "SCMP Inkstone App", src: thumbInkstone },
	{ id: "scmpv4", title: "SCMPv4 App", src: thumbScmpv4 },
	{ id: "takealook", title: "Take a Look Website", src: thumbTakealook },
	{ id: "twinpeak", title: "TwinPeak Property App", src: thumbTwinPeak },
	{ id: "guzen", title: "Christmas Guzen App", src: thumbGuzen },
	{ id: "bauhaus", title: "Bauhaus App", src: thumbBauhaus },
	{ id: "marathon", title: "Marathon App", src: thumbMarathon },
	{ id: "sie", title: "Government SIE App", src: thumbSie },
	{ id: "sinoclub", title: "Sino Club Mall App", src: thumbSinoClub },
	{ id: "ar", title: "AR Research", src: thumbAR },
	{ id: "t1t", title: "T1T Appointment App", src: thumbT1T },
	{ id: "swire-reader", title: "Swire Property Reader App", src: thumbSwireReader },
	{ id: "swire-irp", title: "Swire Incident Control App", src: thumbSwireIrp },
	{ id: "swire-drp", title: "Swire Disaster Control App", src: thumbSwireDrp },
	{ id: "letwork", title: "Letwork Card App", src: thumbLetwork },
	{ id: "apas", title: "APAS Music App", src: thumbApas },
	{ id: "china-mobile-intranet", title: "China Mobile Intranet App", src: thumbChinaMobileIntranet },
	{ id: "china-mobile", title: "China Mobile Customer App", src: thumbChinaMobile },
	{ id: "25-master", title: "25 Master Game App", src: thumb25Master },
	{ id: "bid", title: "Bid Trending App", src: thumbBid },
	{ id: "gary", title: "Gary Singer App", src: thumbGary },
	{ id: "endy", title: "Endy Singer App", src: thumbEndyChow },
	{ id: "gin", title: "Gin Singer App", src: thumbGin },
	{ id: "wenghang", title: "Weng Hang Bank App", src: thumbWengHang },
	{ id: "soundclip", title: "Sound Modify App", src: thumbSoundClip },
	{ id: "megashow", title: "Mega Show Booth App", src: thumbMegaShow },
	{ id: "solomonsc-web", title: "Solomon SC Website", src: thumbSolomonsc },
	{ id: "hkexa-web", title: "HKEXA Website", src: thumbHKEXA },
	{ id: "musicnext-web", title: "MusicNext Website", src: thumbMusicNext },
	{ id: "imusic-web", title: "iMusic Website", src: thumbiMusic },
	{ id: "cali-banner", title: "Flash Banners", src: thumbCaliBanner },
	{ id: "cali-party-member", title: "Party Book & Member Songs", src: thumbCaliPartyMember },
]

const Portfolio = () => {
	return (
		<Layout>
			<Container maxW="container.lg">
				<Heading as="h3" fontSize={20} mb={6} variant="section-title">
					My Portfolio 🏞
				</Heading>
				<SimpleGrid columns={[1, 1, 3]} gap={5}>
					{portfolioItems.map((item, index) => (
						<Section key={item.id} delay={(Math.min(index, 4) + 1) * 0.1}>
							<PortfolioGridItem id={item.id} title={item.title} thumbnail={item.src} />
						</Section>
					))}
				</SimpleGrid>
			</Container>
		</Layout>
	)
}

export default Portfolio
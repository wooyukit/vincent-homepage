import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Section from "../components/section"
import { PortfolioGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article"
import thumbCaliPartyMember from "../public/images/portfolio/cali-party-member-eyecatch.jpg"
import thumbCaliBanner from "../public/images/portfolio/cali-banner-eyecatch.jpg"
import thumbHKEXA from "../public/images/portfolio/hkexa-web-eyecatch.png"
import thumbiMusic from "../public/images/portfolio/imusic-web-eyecatch.jpg"
import thumbMusicNext from "../public/images/portfolio/musicnext-web-eyecatch.png"
import thumbSolomonsc from "../public/images/portfolio/solomonsc-web-eyecatch.png"
import thumbMegaShow from "../public/images/portfolio/mega-show-eyecatch.png"
import thumbSoundClip from "../public/images/portfolio/soundclip-eyecatch.png"
import thumbWengHang from "../public/images/portfolio/weng-hang-eyecatch.png"
import thumbGin from "../public/images/portfolio/gin-eyecatch.jpg"
import thumbEndyChow from "../public/images/portfolio/endy-chow-eyecatch.jpg"
import thumbGary from "../public/images/portfolio/gary-eyecatch.jpg"
import thumbBid from "../public/images/portfolio/bid-eyecatch.png"
import thumb25Master from "../public/images/portfolio/25-master-eyecatch.png"
import thumbChinaMobile from "../public/images/portfolio/china-mobile-eyecatch.png"
import thumbChinaMobileIntranet from "../public/images/portfolio/china-mobile-intranet-app-eyecatch.png"
import thumbApas from "../public/images/portfolio/apas-web-eyecatch.png"
import thumbLetwork from "../public/images/portfolio/letwork-eyecatch.png"
import thumbSwireDrp from "../public/images/portfolio/swire-drp-eyecatch.png"
import thumbSwireIrp from "../public/images/portfolio/swire-irp-eyecatch.png"
import thumbSwireReader from "../public/images/portfolio/swire-reader-eyecatch.png"
import thumbT1T from "../public/images/portfolio/t1t-eyecatch.png"
import thumbAR from "../public/images/portfolio/ar-eyecatch.png"
import thumbSinoClub from "../public/images/portfolio/sino-club-eyecatch.png"
import thumbSie from "../public/images/portfolio/sie-eyecatch.png"
import thumbMarathon from "../public/images/portfolio/marathon-eyecatch.png"
import thumbBauhaus from "../public/images/portfolio/bauhaus-eyecatch.png"
import thumbGuzen from "../public/images/portfolio/guzen-eyecatch.png"
import thumbTwinPeak from "../public/images/portfolio/twinpeak-eyecatch.png"
import thumbTakealook from "../public/images/portfolio/takealook-eyecatch.png"
import thumbScmpv4 from "../public/images/portfolio/scmpv4-eyecatch.png"
import thumbInkstone from "../public/images/portfolio/inkstone-eyecatch.jpeg"
import thumbHangSeng from "../public/images/portfolio/hangseng-app-eyecatch.jpeg"
import thumbScmpv5 from "../public/images/portfolio/scmpv5-eyecatch.png"

const Portfolio = () => {
	return (
		<Layout>
			<Container maxW="container.lg">
				<Heading as="h3" fontSize={20} mb={4}>
					Portfolio
				</Heading>
				<SimpleGrid columns={[1, 1, 3]} gap={6}>
					<Section delay={0.1}>
						<PortfolioGridItem id="scmpv5" title="SCMPv5 App" thumbnail={thumbScmpv5} />
					</Section>
					<Section delay={0.2}>
						<PortfolioGridItem id="hangseng" title="Hang Seng Business App" thumbnail={thumbHangSeng} />
					</Section>
					<Section delay={0.3}>
						<PortfolioGridItem id="inkstone" title="SCMP Inkstone App" thumbnail={thumbInkstone} />
					</Section>
					<Section delay={0.4}>
						<PortfolioGridItem id="scmpv4" title="SCMPv4 App" thumbnail={thumbScmpv4} />
					</Section>
					<Section delay={0.5}>
						<PortfolioGridItem id="takealook" title="Take a Look Website" thumbnail={thumbTakealook} />
					</Section>
					<Section delay={0.6}>
						<PortfolioGridItem id="twinpeak" title="TwinPeak Property App" thumbnail={thumbTwinPeak} />
					</Section>
					<Section delay={0.7}>
						<PortfolioGridItem id="guzen" title="Christmas Guzen App" thumbnail={thumbGuzen} />
					</Section>
					<Section delay={0.8}>
						<PortfolioGridItem id="bauhaus" title="Bauhaus App" thumbnail={thumbBauhaus} />
					</Section>
					<Section delay={0.9}>
						<PortfolioGridItem id="marathon" title="Marathon App" thumbnail={thumbMarathon} />
					</Section>
					<Section delay={1.0}>
						<PortfolioGridItem id="sie" title="Government SIEFund App" thumbnail={thumbSie} />
					</Section>
					<Section delay={1.1}>
						<PortfolioGridItem id="sinoclub" title="Sino Club App" thumbnail={thumbSinoClub} />
					</Section>
					<Section delay={1.2}>
						<PortfolioGridItem id="ar" title="AR Research" thumbnail={thumbAR} />
					</Section>
					<Section delay={1.3}>
						<PortfolioGridItem id="t1t" title="T1T Appointment App" thumbnail={thumbT1T} />
					</Section>
					<Section delay={1.4}>
						<PortfolioGridItem id="swire-reader" title="Swire Property Reader App" thumbnail={thumbSwireReader} />
					</Section>
					<Section delay={1.5}>
						<PortfolioGridItem id="swire-irp" title="Swire Incident Control App" thumbnail={thumbSwireIrp} />
					</Section>
					<Section delay={1.6}>
						<PortfolioGridItem id="swire-drp" title="Swire disaster control App" thumbnail={thumbSwireDrp} />
					</Section>
					<Section delay={1.7}>
						<PortfolioGridItem id="letwork" title="Letwork Card App" thumbnail={thumbLetwork} />
					</Section>
					<Section delay={1.8}>
						<PortfolioGridItem id="apas" title="APAS Music Website" thumbnail={thumbApas} />
					</Section>
					<Section delay={1.9}>
						<PortfolioGridItem id="china-mobile-intranet" title="China Mobile Intranet App" thumbnail={thumbChinaMobileIntranet} />
					</Section>
					<Section delay={2.0}>
						<PortfolioGridItem id="china-mobile" title="China Mobile Customer App" thumbnail={thumbChinaMobile} />
					</Section>
					<Section delay={2.1}>
						<PortfolioGridItem id="25-master" title="25 Master Game App" thumbnail={thumb25Master} />
					</Section>
					<Section delay={2.2}>
						<PortfolioGridItem id="bid" title="Bid Trending App" thumbnail={thumbBid} />
					</Section>
					<Section delay={2.3}>
						<PortfolioGridItem id="gary" title="Gary Singer App" thumbnail={thumbGary} />
					</Section>
					<Section delay={2.4}>
						<PortfolioGridItem id="endy" title="Endy Singer App" thumbnail={thumbEndyChow} />
					</Section>
					<Section delay={2.5}>
						<PortfolioGridItem id="gin" title="Gin Singer App" thumbnail={thumbGin} />
					</Section>
					<Section delay={2.6}>
						<PortfolioGridItem id="wenghang" title="Weng Hang Bank App" thumbnail={thumbWengHang} />
					</Section>
					<Section delay={2.7}>
						<PortfolioGridItem id="soundclip" title="Sound Modified App" thumbnail={thumbSoundClip} />
					</Section>
					<Section delay={2.8}>
						<PortfolioGridItem id="megashow" title="Mega Show Booth App" thumbnail={thumbMegaShow} />
					</Section>
					<Section delay={2.9}>
						<PortfolioGridItem id="solomonsc-web" title="Solomon SC Website" thumbnail={thumbSolomonsc} />
					</Section>
					<Section delay={3.0}>
						<PortfolioGridItem id="hkexa-web" title="HKEXA Website" thumbnail={thumbHKEXA} />
					</Section>
					<Section delay={3.1}>
						<PortfolioGridItem id="musicnext-web" title="MusicNext Website" thumbnail={thumbMusicNext} />
					</Section>
					<Section delay={3.2}>
						<PortfolioGridItem id="imusic-web" title="iMusic Website" thumbnail={thumbiMusic} />
					</Section>
					<Section delay={3.3}>
						<PortfolioGridItem id="cali-banner" title="Flash Banners" thumbnail={thumbCaliBanner} />
					</Section>
					<Section delay={3.4}>
						<PortfolioGridItem id="cali-party-member" title="Party Book & Member Songs" thumbnail={thumbCaliPartyMember} />
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	)
}

export default Portfolio
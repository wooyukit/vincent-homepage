import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { PortfolioGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article"
import Section from "../components/section"

const portfolioItems = [
	{ id: "scmpv5", title: "SCMPv5 App", src: "/images/portfolio/scmpv5-eyecatch.png" },
	{ id: "hangseng", title: "Hang Seng Business App", src: "/images/portfolio/hangseng-eyecatch.jpeg" },
	{ id: "inkstone", title: "SCMP Inkstone App", src: "/images/portfolio/inkstone-eyecatch.jpeg" },
	{ id: "scmpv4", title: "SCMPv4 App", src: "/images/portfolio/scmpv4-eyecatch.png" },
	{ id: "takealook", title: "Take a Look Website", src: "/images/portfolio/takealook-eyecatch.png" },
	{ id: "twinpeak", title: "TwinPeak Property App", src: "/images/portfolio/twinpeak-eyecatch.png" },
	{ id: "guzen", title: "Christmas Guzen App", src: "/images/portfolio/guzen-eyecatch.png" },
	{ id: "bauhaus", title: "Bauhaus App", src: "/images/portfolio/bauhaus-eyecatch.png" },
	{ id: "marathon", title: "Marathon App", src: "/images/portfolio/marathon-eyecatch.png" },
	{ id: "sie", title: "Government SIE App", src: "/images/portfolio/sie-eyecatch.png" },
	{ id: "sinoclub", title: "Sino Club Mall App", src: "/images/portfolio/sino-club-eyecatch.png" },
	{ id: "ar", title: "AR Research", src: "/images/portfolio/ar-eyecatch.png" },
	{ id: "t1t", title: "T1T Appointment App", src: "/images/portfolio/t1t-eyecatch.png" },
	{ id: "swire-reader", title: "Swire Property Reader App", src: "/images/portfolio/swire-reader-eyecatch.png" },
	{ id: "swire-irp", title: "Swire Incident Control App", src: "/images/portfolio/swire-irp-eyecatch.png" },
	{ id: "swire-drp", title: "Swire Disaster Control App", src: "/images/portfolio/swire-drp-eyecatch.png" },
	{ id: "letwork", title: "Letwork Card App", src: "/images/portfolio/letwork-eyecatch.png" },
	{ id: "apas", title: "APAS Music App", src: "/images/portfolio/apas-web-eyecatch.png" },
	{ id: "china-mobile-intranet", title: "China Mobile Intranet App", src: "/images/portfolio/china-mobile-intranet-app-eyecatch.png" },
	{ id: "china-mobile", title: "China Mobile Customer App", src: "/images/portfolio/china-mobile-eyecatch.png" },
	{ id: "25-master", title: "25 Master Game App", src: "/images/portfolio/25-master-eyecatch.png" },
	{ id: "bid", title: "Bid Trending App", src:  "/images/portfolio/bid-eyecatch.png" },
	{ id: "gary", title: "Gary Singer App", src: "/images/portfolio/gary-eyecatch.jpg" },
	{ id: "endy", title: "Endy Singer App", src: "/images/portfolio/endy-chow-eyecatch.jpg" },
	{ id: "gin", title: "Gin Singer App", src: "/images/portfolio/gin-eyecatch.jpg" },
	{ id: "wenghang", title: "Weng Hang Bank App", src: "/images/portfolio/weng-hang-eyecatch.png" },
	{ id: "soundclip", title: "Sound Modify App", src: "/images/portfolio/soundclip-eyecatch.png" },
	{ id: "megashow", title: "Mega Show Booth App", src: "/images/portfolio/mega-show-eyecatch.png" },
	{ id: "solomonsc-web", title: "Solomon SC Website", src: "/images/portfolio/solomonsc-web-eyecatch.png" },
	{ id: "hkexa-web", title: "HKEXA Website", src: "/images/portfolio/hkexa-web-eyecatch.png" },
	{ id: "musicnext-web", title: "MusicNext Website", src: "/images/portfolio/musicnext-web-eyecatch.png" },
	{ id: "imusic-web", title: "iMusic Website", src: "/images/portfolio/imusic-web-eyecatch.jpg" },
	{ id: "cali-banner", title: "Flash Banners", src: "/images/portfolio/cali-banner-eyecatch.jpg" },
	{ id: "cali-party-member", title: "Party Book & Member Songs", src: "/images/portfolio/cali-party-member-eyecatch.jpg" },
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
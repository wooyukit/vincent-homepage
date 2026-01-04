import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { PortfolioGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article"
import Section from "../components/section"

const portfolioItems = [
	{ id: "scmpv5", title: "SCMPv5 App", src: "/images/portfolio/scmpv5-eyecatch.webp" },
	{ id: "hangseng", title: "Hang Seng Business App", src: "/images/portfolio/hangseng-eyecatch.webp" },
	{ id: "inkstone", title: "SCMP Inkstone App", src: "/images/portfolio/inkstone-eyecatch.webp" },
	{ id: "scmpv4", title: "SCMPv4 App", src: "/images/portfolio/scmpv4-eyecatch.webp" },
	{ id: "takealook", title: "Take a Look Website", src: "/images/portfolio/takealook-eyecatch.webp" },
	{ id: "twinpeak", title: "TwinPeak Property App", src: "/images/portfolio/twinpeak-eyecatch.webp" },
	{ id: "guzen", title: "Christmas Guzen App", src: "/images/portfolio/guzen-eyecatch.webp" },
	{ id: "bauhaus", title: "Bauhaus App", src: "/images/portfolio/bauhaus-eyecatch.webp" },
	{ id: "marathon", title: "Marathon App", src: "/images/portfolio/marathon-eyecatch.webp" },
	{ id: "sie", title: "Government SIE App", src: "/images/portfolio/sie-eyecatch.webp" },
	{ id: "sinoclub", title: "Sino Club Mall App", src: "/images/portfolio/sino-club-eyecatch.webp" },
	{ id: "ar", title: "AR Research", src: "/images/portfolio/ar-eyecatch.webp" },
	{ id: "t1t", title: "T1T Appointment App", src: "/images/portfolio/t1t-eyecatch.webp" },
	{ id: "swire-reader", title: "Swire Property Reader App", src: "/images/portfolio/swire-reader-eyecatch.webp" },
	{ id: "swire-irp", title: "Swire Incident Control App", src: "/images/portfolio/swire-irp-eyecatch.webp" },
	{ id: "swire-drp", title: "Swire Disaster Control App", src: "/images/portfolio/swire-drp-eyecatch.webp" },
	{ id: "letwork", title: "Letwork Card App", src: "/images/portfolio/letwork-eyecatch.webp" },
	{ id: "apas", title: "APAS Music Website", src: "/images/portfolio/apas-web-eyecatch.webp" },
	{ id: "china-mobile-intranet", title: "China Mobile Intranet App", src: "/images/portfolio/china-mobile-intranet-app-eyecatch.webp" },
	{ id: "china-mobile", title: "China Mobile Customer App", src: "/images/portfolio/china-mobile-eyecatch.webp" },
	{ id: "25-master", title: "25 Master Game App", src: "/images/portfolio/25-master-eyecatch.webp" },
	{ id: "bid", title: "Bid Trending App", src: "/images/portfolio/bid-eyecatch.webp" },
	{ id: "gary", title: "Gary Singer App", src: "/images/portfolio/gary-eyecatch.webp" },
	{ id: "endy", title: "Endy Singer App", src: "/images/portfolio/endy-chow-eyecatch.webp" },
	{ id: "gin", title: "Gin Singer App", src: "/images/portfolio/gin-eyecatch.webp" },
	{ id: "wenghang", title: "Weng Hang Bank App", src: "/images/portfolio/weng-hang-eyecatch.webp" },
	{ id: "soundclip", title: "Sound Modify App", src: "/images/portfolio/soundclip-eyecatch.webp" },
	{ id: "megashow", title: "Mega Show Booth App", src: "/images/portfolio/mega-show-eyecatch.webp" },
	{ id: "solomonsc-web", title: "Solomon SC Website", src: "/images/portfolio/solomonsc-web-eyecatch.webp" },
	{ id: "hkexa-web", title: "HKEXA Website", src: "/images/portfolio/hkexa-web-eyecatch.webp" },
	{ id: "musicnext-web", title: "MusicNext Website", src: "/images/portfolio/musicnext-web-eyecatch.webp" },
	{ id: "imusic-web", title: "iMusic Website", src: "/images/portfolio/imusic-web-eyecatch.webp" },
	{ id: "cali-banner", title: "Flash Banners", src: "/images/portfolio/cali-banner-eyecatch.webp" },
	{ id: "cali-party-member", title: "Party Book & Member Songs", src: "/images/portfolio/cali-party-member-eyecatch.webp" },
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
							<PortfolioGridItem
								id={item.id}
								title={item.title}
								thumbnail={item.src}
								priority={index < 3}
							/>
						</Section>
					))}
				</SimpleGrid>
			</Container>
		</Layout>
	)
}

export default Portfolio
import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Section from "../components/section"
import { PortfolioGridItem } from "../components/grid-item"
import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png"

const Portfolio = () => {
	return (
		<Container>
			<Heading as="h3" fontSize={20} mb={4}>
				Portfolio
			</Heading>
			<SimpleGrid columns={[1, 1, 2]} gap={6}>
				<Section>
					<PortfolioGridItem id="inkdrop" title="inkdrop" thumbnail={thumbInkdrop}>
						A markdown
					</PortfolioGridItem>
				</Section>
			</SimpleGrid>
		</Container>
	)
}

export default Portfolio
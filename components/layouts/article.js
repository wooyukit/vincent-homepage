import { motion } from "framer-motion";
import Head from 'next/head'
import { GridItemStyle } from "../grid-item";

const variants = {
	hidden: { opacity: 0, y: 20 },
	enter: { opacity: 1, y: 0 }
}

const Layout = ({ children, title }) => (
	<motion.article initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.8, type: 'easeInOut' }}>
		<>
			{title && (
				<Head>
					<title>{title} - Vincent</title>
				</Head>
			)}
			{children}
			<GridItemStyle />
		</>
	</motion.article >
)

export default Layout
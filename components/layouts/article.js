import { GridItemStyle } from '../grid-item'
import Seo from '../seo'

const Layout = ({ children, title, description, image }) => {
  return (
    <article className="page-transition">
      <Seo title={title} description={description} image={image} />
      {children}
      <GridItemStyle />
    </article>
  )
}

export default Layout

import { routes, Link } from '@redwoodjs/router'
import * as B from 'react-bulma-components'

const MarketingLayoutLayout = ({ children }) => {
  return (
    <>
      <header>
        <B.Navbar color="info">
          <B.Navbar.Brand>
            <B.Navbar.Item renderAs={Link} to={routes.home()}>
              読み方
            </B.Navbar.Item>
            <B.Navbar.Burger />
          </B.Navbar.Brand>
          <B.Navbar.Menu>
            <B.Navbar.Container></B.Navbar.Container>
          </B.Navbar.Menu>
        </B.Navbar>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MarketingLayoutLayout

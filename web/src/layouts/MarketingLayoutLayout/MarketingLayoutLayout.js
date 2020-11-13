import { routes, Link } from '@redwoodjs/router'

const MarketingLayoutLayout = ({ children }) => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MarketingLayoutLayout

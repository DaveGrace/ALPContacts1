import { Link, routes } from '@redwoodjs/router'

const ContactLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Country Labor!</h1>
        <Link to={routes.home()}>Login Page</Link>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
              <h1>Welcome</h1>
              <h2>Eurobodalla Country Labor Contact List</h2>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default ContactLayout

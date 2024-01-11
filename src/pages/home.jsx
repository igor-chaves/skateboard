import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <h1><Link to="/">SKATEBOARD.</Link></h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  )
}

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <h1>HOME</h1>
        </section>
      </main>
    </>
  )
}

export { Home, Header }

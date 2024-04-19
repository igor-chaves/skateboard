import { Link } from "react-router-dom"
import "./not-found.css"

const NotFound = () => {
  return (
    <>
      <main className="container404">
        <section>
          <h1>4<span>0</span>4</h1>
          <p>Page Not Found</p>
          <p>The page you're looking for does not seem to exist</p>
          <Link to="/"><a className="home-btn">Return Home</a></Link>
        </section>
      </main>
    </>
  )
}

export { NotFound }

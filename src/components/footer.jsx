import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="card">
            <h2>SKATEBOARD<span>.</span></h2>
            <p>Your trusted online store. Quality, speed, and exceptional service. Free shipping inside Japan only.</p>
          </div>

          <div className="card">
            <h2>PRODUCTS</h2>
            <ul>
              <li><Link to="#">Shirts</Link></li>
              <li><Link to="#">Shoes</Link></li>
              <li><Link to="#">Shapes</Link></li>
              <li><Link to="#">Caps</Link></li>
            </ul>
          </div>

          <div className="card">
            <h2>USEFUL LINKS</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>

          <div className="card contact">
            <h2>CONTACT</h2>
            <ul>
              <li><FontAwesomeIcon icon={faHouse} />Tokyo, Shibuya-ku, 2-1-2</li>
              <li><FontAwesomeIcon icon={faEnvelope} />contact@skateboard.co.jp</li>
              <li><FontAwesomeIcon icon={faPhone} />090-1234-5678</li>
            </ul>
          </div>
        </div>
      </footer>

      <aside>
        <div className="copyright">
          <p>&copy; 2024 Copyright</p>
        </div>
      </aside>
    </>
  )
}

export { Footer }

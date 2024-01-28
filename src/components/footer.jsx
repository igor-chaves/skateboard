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
              <li><a href="#">Shirts</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Shapes</a></li>
              <li><a href="#">Caps</a></li>
            </ul>
          </div>

          <div className="card">
            <h2>USEFUL LINKS</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Favorites</a></li>
              <li><a href="#">Cart</a></li>
            </ul>
          </div>

          <div className="card contact">
            <h2>CONTACT</h2>
            <ul>
              <li><FontAwesomeIcon icon={faHouse} /><a href="#">Tokyo, Shibuya-ku, 2-1-2</a></li>
              <li><FontAwesomeIcon icon={faEnvelope} /><a href="#">contact@skateboard.co.jp</a></li>
              <li><FontAwesomeIcon icon={faPhone} /><a href="#">090-1234-5678</a></li>
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

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCartShopping, faEnvelope, faHouse, faPhone, faStar, faStarHalf, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLine, faXTwitter } from "@fortawesome/free-brands-svg-icons"


const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [screenSize, setScreenSize] = useState(0)
  const handleMenu = () => setShowMenu(!showMenu)

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth))
    if (screenSize > 600) setShowMenu(false)
  }, [screenSize])

  return (
    <header>
      <nav className="expanded-menu-container">
        <h1 className="logo"><Link to="/">SKATEBOARD<span>.</span></Link></h1>
        <ul className="links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /> Cart</Link></li>
        </ul>
        {screenSize < 690 &&
          <>
            {!showMenu && <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={handleMenu} />}
            {showMenu && <FontAwesomeIcon icon={faXmark} className="menu-close-icon" onClick={handleMenu} />}
          </>
        }
      </nav>

      <nav className="hamburger-menu-container">
        <ul className={`hamburger-menu ${showMenu ? "show" : "hide"}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  )
}

const Main = () => {
  return (
    <>
      <main>
        {/* <!-- HERO --> */}
        <div className="hero">
          <div className="container-hero">
            <h1>We sell skateboards and shoes</h1>
            <p>you stay in fashion while go skateboarding</p>
            <div>
              <a href="#">BUY NOW</a>
            </div>
          </div>
        </div>
        {/* <!-- DESTAQUES --> */}
        <section className="featured">
          <div className="container">
            <div>
              <div className="card">
                <h2>Easy Return Policy</h2>
                <p>Our store provide a 30 days return policy for all of our customers.</p>
              </div>

              <div className="card">
                <h2>Free Shipping</h2>
                <p>Buy products over $150 and get free express home delivery offers.</p>
              </div>
            </div>

            <div>
              <div className="card">
                <h2>Secure Payment</h2>
                <p>Your protection is our priority! We guarantee peace of mind for our customers.</p>
              </div>

              <div className="card">
                <h2>Best Quality</h2>
                <p>Exceptional products carefully chosen to please your preferences.</p>
              </div>
            </div>

          </div>
        </section>

        {/* <!-- sumer/winter etc  --> */}
        <section className="collections">
          <div className="container">
            <div className="image">
              <img src="vans-home.png" alt="" />
            </div>

            <div className="text">
              <h2>CHECK OUR NEW COLLECTION ITEMS</h2>
              <p>Explore the latest trends in our catalog.</p>
              <div className="btns">
                <a href="#">Buy Now</a>
                <a href="#">See More</a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- new arrivals --> */}
        <section className="new-arrivals">
          <h2>New Arrivals</h2>
          <p>Look at the latest collection that we offer</p>

          <div className="container">
            <div className="card" id="product-1">
              <img src="https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/DGK-Clan-Blossom-Crew-8.38%22-Skateboard-Deck-_377513-front-US.jpg" alt="product image" />
              <h3>Skateborder Vans</h3>
              <p>$40.00</p>
              <div className="btns">
                <a href="#">Add to cart</a>
              </div>
            </div>
            <div className="card" id="product-2">
              <img src="https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Element-Zwijsen-Earth-Rev-8.5%22-Skateboard-Deck-_372484-front-US.jpg" alt="product image" />
              <h3>Skateborder Vans</h3>
              <p>$40.00</p>
              <div className="btns">
                <a href="#">Add to cart</a>
              </div>
            </div>
            <div className="card" id="product-3">
              <img src="https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Sk8mafia-Surrey-Hiya-8.25%22-Skateboard-Deck-_365470-front-US.jpg" alt="product image" />
              <h3>Skateborder Vans</h3>
              <p>$40.00</p>
              <div className="btns">
                <a href="#">Add to cart</a>
              </div>
            </div>
            <div className="card" id="product-4">
              <img src="https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Primitive-Nuevo-Script-Core-8.38%22-Skateboard-Deck-_373411-front-US.jpg" alt="product image" />
              <h3>Skateborder Vans</h3>
              <p>$40.00</p>
              <div className="btns">
                <a href="#">Add to cart</a>
              </div>
            </div>
            <div className="card" id="product-5">
              <img src="https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Baker-White-Brand-Logo-8.25%22-Skateboard-Deck-_356011-front-US.jpg" alt="product image" />
              <h3>Skateborder Vans</h3>
              <p>$40.00</p>
              <div className="btns">
                <a href="#">Add to cart</a>
              </div>
            </div>
            <div className="card" id="product-6">
              <img src="https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Element-Section-8.25%22-Skateboard-Deck--_372491-back-US.jpg" alt="product image" />
              <h3>Skateborder Vans</h3>
              <p>$40.00</p>
              <div className="btns">
                <a href="#">Add to cart</a>
              </div>
            </div>
            <div className="card" id="product-7">
              <img src="https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Element-Blazin-Red-7.75%22-Skateboard-Complete-_372318-front-US.jpg" alt="product image" />
              <h3>Skateborder Vans</h3>
              <p>$40.00</p>
              <div className="btns">
                <a href="#">Add to cart</a>
              </div>
            </div>
            <div className="card" id="product-8">
              <img src="https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Element-Section-8.25%22-Skateboard-Deck--_372491-front-US.jpg" alt="product image" />
              <h3>Skateborder Vans</h3>
              <p>$40.00</p>
              <div className="btns">
                <a href="#">Add to cart</a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- testimonials --> */}
        <section className="testimonials">
          <h2>Testimonials</h2>

          <div className="container">
            <div className="card">
              <div className="image">
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="client image" />
              </div>

              <div className="text">
                <p>I'm really impressed! My order arrived super fast. I couldn't be happier with it.</p>
                <div className="star-icons" >
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalf} />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" alt="client image" />
              </div>

              <div className="text">
                <p>Absolutely loved my purchase! The quality is fantastic. It really exceeded my expectations.</p>
                <div className="star-icons">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="client image" />
              </div>

              <div className="text">
                <p>I had a fantastic shopping experience! The customer service was exceptional.</p>
                <div className="star-icons">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalf} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- newsletter --> */}
        <section id="newsletter" className="newsletter">
          <div className="container">
            <h2>Stay Updated</h2>
            <p>Get the latest updates on new product releases and exclusive offers!</p>
            <form>
              <input type="email" id="email" name="email" placeholder="Your email address" />
              <button type="submit">SIGN UP</button>
            </form>
          </div>
        </section>

        {/* <!-- social network --> */}
        <section className="social-network">
          <div className="container">
            <p>Get connected with us on our social networks</p>

            <div>
              <ul className="icons">
                <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faLine} /></a></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

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

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}




export { Home, Header, Footer }

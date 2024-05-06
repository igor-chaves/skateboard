import { useCart } from "./layout"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [screenSize, setScreenSize] = useState(0)
  const [showMenu, setShowMenu] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // get state's value from context created in LAYOUT.JSX
  const { cart } = useCart()

  const cartLength = cart.length
  console.log("amount", cartLength)


  const handleMenu = () => setShowMenu(!showMenu)
  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  // open/close menu hamburger base on window size
  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth))
    if (screenSize > 600) setShowMenu(false)
  }, [screenSize])

  return (
    <header>
      <div className="headerContainer">
        <div className="logoIconContainer">
          <p><Link to="/">SKATEBOARD<span>_</span></Link></p>
          {isMenuOpen
            ? <FontAwesomeIcon icon={faXmark} className="openCloseIcon" size="2x" onClick={toggleMenu} />
            : <FontAwesomeIcon icon={faBars} className="openCloseIcon" size="2x" onClick={toggleMenu} />
          }
        </div>
        <nav className={`menuNav ${isMenuOpen ? "showMenu" : ""}`}>
          <ul>
            <li><Link onClick={handleMenu} to="/">Home</Link></li>
            <li><Link onClick={handleMenu} to="/about">About</Link></li>
            <li><Link onClick={handleMenu} to="/contact">Contact</Link></li>
            <li><Link onClick={handleMenu} to="/cart">Cart <span>{cartLength}</span></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export { Header }

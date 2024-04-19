import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = ({ cartItemsAmount }) => {
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
          <li className="cartIcon">
            <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} />
              {cartItemsAmount > 0 && <span className="item-count">{cartItemsAmount}</span>}
            </Link>
          </li>
        </ul>
        {screenSize < 690 &&
          <>
            {/* in small screen, menu hamburguer and cart icons are shown */}
            {!showMenu &&
              <>
                <Link to="/cart" className="cartIcon"><FontAwesomeIcon icon={faCartShopping} />
                  {cartItemsAmount > 0 && <span className="item-count">{cartItemsAmount}</span>}
                </Link>
                <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={handleMenu} />
              </>
            }
            {showMenu && <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} />
              {cartItemsAmount > 0 && <span className="item-count">{cartItemsAmount}</span>}
            </Link>}
            {showMenu && <FontAwesomeIcon icon={faXmark} className="menu-close-icon" onClick={handleMenu} />}
          </>
        }
      </nav>

      <nav className="hamburger-menu-container">
        <ul className={`hamburger-menu ${showMenu ? "show" : "hide"}`}>
          <li><Link onClick={handleMenu} to="/">Home</Link></li>
          <li><Link onClick={handleMenu} to="/about">About</Link></li>
          <li><Link onClick={handleMenu} to="/contact">Contact</Link></li>
          <li><Link onClick={handleMenu} to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }

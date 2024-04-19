import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from "./headerCopy.module.css"

const HeaderBig = ({ cartItemsAmount, showMenu, handleMenu }) =>
  <header>
    <h1><Link to="/">SKATEBOARD<span>.</span></Link></h1>

    <nav className={styles.mainLinks}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart" style={{ position: "relative" }}>
          {/* cart icon */}
          <FontAwesomeIcon icon={faCartShopping} />
          {/* number of products in cart */}
          {cartItemsAmount > 0 && <span className={styles.itemCount}>{cartItemsAmount}</span>}
        </Link></li>
      </ul>
    </nav>

    <nav className={styles.hamburgerLinks}>
      <ul className={`${styles.hamburgerMenu} ${showMenu ? styles.show : styles.hide}`}>
        <li><Link onClick={handleMenu} to="/">Home</Link></li>
        <li><Link onClick={handleMenu} to="/about">About</Link></li>
        <li><Link onClick={handleMenu} to="/contact">Contact</Link></li>
        <li><Link onClick={handleMenu} to="/cart">Cart</Link></li>
      </ul>
    </nav>
  </header>



const Header = ({ cartItemsAmount }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [screenSize, setScreenSize] = useState(0)
  const handleMenu = () => setShowMenu(!showMenu)

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth))
    if (screenSize > 600) setShowMenu(false)
  }, [screenSize])

  return (
    <HeaderBig cartItemsAmount={cartItemsAmount} showMenu={showMenu} handleMenu={handleMenu} />
  )
}

export { Header }

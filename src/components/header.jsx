import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import localforage from "localforage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [screenSize, setScreenSize] = useState(0)

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth))
    if (screenSize > 600) setShowMenu(false)
  }, [screenSize])

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const handleMenu = () => setShowMenu(!showMenu)


  // localforage.getItem('cartItems').then(function (cartItems) { console.log(cartItems) })
  // const pegarArray = async () => {
  //   const myLocalforage = await localforage.getItem('cartItems')
  //   return myLocalforage
  // }
  // const aaa = pegarArray
  // console.log(pegarArray)


  console.log()
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
            <li><Link onClick={handleMenu} to="/cart">Cart <span>sss</span></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export { Header }

import { Outlet, useLocation } from "react-router-dom"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { useEffect, useState } from "react"

const Layout = () => {
  const [cartItemsAmount, setCartItemsAmount] = useState(10)
  const { pathname } = useLocation()
  // Page scrolls to top whenever URL (pathname) changes
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <div className="first-container">
      <Header cartItemsAmount={cartItemsAmount} />
      <Outlet />
      <Footer />
    </div>
  )
}

export { Layout }

import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { CartProvider } from "../contexts/cartContext"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

const Layout = () => {
  const { pathname } = useLocation()

  // Page scrolls to top whenever URL (pathname) changes.
  // In order words, when a page is opened it scrolls to top
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <CartProvider>
      <div className="first-container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </CartProvider>
  )
}

export { Layout }

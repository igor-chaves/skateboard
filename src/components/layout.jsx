import { Outlet, useLocation } from "react-router-dom"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { useEffect } from "react"

const Layout = () => {
  // Page scrolls to top whenever URL (pathname) changes
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export { Layout }

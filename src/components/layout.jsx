import { Outlet } from "react-router-dom"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

const Layout = () =>
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>

export { Layout }

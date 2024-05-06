import { createContext, useEffect, useState, useContext } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import localforage from "localforage"

// cria um context global para ser usado em qualquer componente dentro dele
// o estado de dentro do layout sera passado globalmente para o resto dos componentes
const CartContext = createContext()
const useCart = () => useContext(CartContext)

const Layout = () => {
  const [cart, setCart] = useState([])
  const { pathname } = useLocation()

  useEffect(() => {
    const items = localforage.getItem("cartItems")
    const getItems = async (items) => { items ? setCart(items) : console.log("carrinho vazio") }
    getItems(items)
  }, [])

  // Page scrolls to top whenever URL (pathname) changes
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="first-container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </CartContext.Provider>
  )
}

export { Layout, useCart }

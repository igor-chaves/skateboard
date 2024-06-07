import localforage from "localforage"
import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

// everything inside CartProvider will be available to children components
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const getItems = async () => {
    const cartItems = await localforage.getItem("cartItems")
    cartItems && setCart(cartItems)
  }

  useEffect(() => { getItems() }, [])

  return <CartContext.Provider value={{ cart, setCart, getItems }}>{children}</CartContext.Provider>
}

export { CartContext, CartProvider }

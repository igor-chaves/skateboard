import localforage from 'localforage'
import { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'

const useAddToLocalForage = () => {
  const { setCart, setLastItem } = useContext(CartContext)

  const addToLocalForage = async (id, title, price, image) => {
    // get items from localforage first, if it's empty return []
    const cartItems = await localforage.getItem('cartItems') || []
    const lastAddedItem = [{ id, title, price, image, quantity: 1 }]

    // check if any item has same id, if yes receives TRUE
    const isInCart = cartItems.some(prev => prev?.id === id)

    // check if item is already in cart and add quantity +1
    if (isInCart) cartItems.find(item => item.id === id).quantity++

    // if the current item has not the same id, it means is not in cart and therefore is added
    if (!isInCart) cartItems.push({ id, title, price, image, quantity: 1 })

    // update the new item added to cart on localforage and in state
    await localforage.setItem('cartItems', cartItems)
    setCart(cartItems)

    // update the last item added to cart on localforage and in state
    await localforage.setItem('lastAddedItem', lastAddedItem)
    setLastItem(lastAddedItem)
  }

  return addToLocalForage
}

export { useAddToLocalForage }

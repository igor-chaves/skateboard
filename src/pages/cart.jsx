import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import localforage from "localforage"
import "./cart.css"

const Cart = () => {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState("")

  useEffect(() => { getItems() }, [])

  const getItems = async () => {
    const items = await localforage.getItem("cartItems")

    items ? setCart(items) : console.log("carrinho vazio")
  }

  const deleteItems = async (id) => {
    const items = await localforage.getItem("cartItems")
    const updatedItems = items.filter(item => item.id !== id)
    await localforage.setItem('cartItems', updatedItems)
    setCart(updatedItems)
  }

  const decrement = async (id) => {
    const cartItems = await localforage.getItem("cartItems")
    const updatedCart = cartItems.map(item => item.id === id
      ? { ...item, quantity: item.quantity - 1 }
      : item)
    localforage.setItem('cartItems', updatedCart) //update forage
    setCart(updatedCart) //update state
  }

  const increment = async (id) => {
    const cartItems = await localforage.getItem("cartItems")
    const updatedCart = cartItems.map(item => item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item)
    localforage.setItem('cartItems', updatedCart)
    setCart(updatedCart)
  }

  const updateQuantity = async (e, id) => {
    const newQuantity = e.target.value
    const cartItems = await localforage.getItem("cartItems")
    const updatedCart = cartItems.map(item => item.id === id
      ? { ...item, quantity: +newQuantity }
      : item)
    localforage.setItem('cartItems', updatedCart)
    setQuantity(newQuantity)
    setCart(updatedCart)
  }

  const subTotalSum = () => cart.reduce((acc, currentItem) => acc + currentItem.price, 0)
  const totalSum = (taxes) => cart.reduce((acc, currentItem) => acc + currentItem.price, taxes)


  return (
    <div className="main-container">
      {/* list of products column */}
      <div className="column-container">
        {cart.length > 0
          ? cart.map(({ id, title, price, images }) => (
            <div className="product-card" key={id}>
              <div className="product-content">
                <div className="img-container">
                  <div className="product-image">
                    <img src={images} alt="product image" className="product-img" />
                  </div>
                </div>

                <div className="product-infos">
                  <h3 className="product-title">{title}</h3>
                  <p className="price">${price.toFixed(2)}</p>
                  <p className="product-code">Item #{id}</p>
                </div>
              </div>

              <div className="btns-container">
                <button className="remove-btn" onClick={() => deleteItems(id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>

                <div className="quantity-btns">
                  <button onClick={() => decrement(id)}><FontAwesomeIcon icon={faLessThan} /></button>
                  <input type="text" inputMode="numeric" pattern="[0-9]" max="99" placeholder="0"
                    value={quantity}
                    onChange={(e) => updateQuantity(e, id)}>
                  </input>
                  <button onClick={() => increment(id)}><FontAwesomeIcon icon={faGreaterThan} /></button>
                </div>

              </div>
              <hr />
            </div>
          ))
          :
          <div className="empty-cart">
            <h3>Your cart is empty</h3><br />
            <Link to="/"><button className="check-products-btn">Check products</button></Link>
          </div>
        }
      </div>

      {/* billing column */}
      <div className="column-container">
        <div className="right-column">
          <div className="title">
            <span>Subtotal</span>
            <span>${subTotalSum().toFixed(2)}</span>
          </div>
          <div className="title">
            <span>Taxes</span>
            <span>$15.00</span>
          </div>
          <div className="title">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>${totalSum(15).toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Proceed to checkout</button>
        </div>
      </div>
    </div >
  )
}

export { Cart }

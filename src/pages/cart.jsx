import { useEffect, useState } from "react"
import localforage from "localforage"
import "./cart.css"

const Cart = () => {
  const [cart, setCart] = useState([])

  useEffect(() => { getItems() }, [])

  const getItems = async () => {
    const items = await localforage.getItem("cartItems")

    items ? setCart(items) : console.log("carrinho vazio")
  }

  return (
    <div className="main-container">
      {/* list of products column */}
      <div className="column-container">
        {cart.map(({ product, id, price }) => (
          <div className="product-card" key={id}>
            <div className="product-content">
              <div className="img-container">
                <div className="product-image">
                  <img src={`../deck${id}.jpg`} alt={`${product}`} className="product-img" />
                </div>
              </div>

              <div className="product-infos">
                <div className="product-details">
                  <h3 className="product-title">{product}</h3>
                  <p className="product-info">Color: Black</p>
                  <p className="product-info">Size: M</p>
                </div>
                <div className="product-price">
                  <p className="price">${price}</p>
                  <p className="product-code">Item #{id}</p>
                </div>
              </div>

              <button className="remove-button">
                <svg className="remove-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* billing column */}
      <div className="column-container">
        <div className="right-column">
          <div className="title">
            <span>Subtotal</span>
            <span>$148</span>
          </div>
          <div className="title">
            <span>Taxes</span>
            <span>$14.80</span>
          </div>
          <div className="title">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>$162.80</span>
          </div>
          <button className="checkout-btn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}

export { Cart }

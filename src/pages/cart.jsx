import { useEffect, useState } from "react"
import localforage from "localforage"
import "./cart.css"
import { Link } from "react-router-dom"

const Cart = () => {
  const [cart, setCart] = useState([])

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

  const subTotalSum = () => cart.reduce((acc, currentItem) => acc + currentItem.price, 0)
  const totalSum = (taxes) => cart.reduce((acc, currentItem) => acc + currentItem.price, taxes)


  return (
    <div className="main-container">
      {/* list of products column */}
      <div className="column-container">
        {cart.length > 0
          ? cart.map(({ product, id, price }) => (
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

                <button className="remove-button" onClick={() => deleteItems(id)}>
                  <img src="./public/deleteIcon.svg" alt="delete button" />
                </button>
              </div>
            </div>
          ))
          :
          <div className="empty-cart">
            <h3>Your cart is empty</h3><br />
            <p><Link to="/"><button className="btn">Check products</button></Link></p>
          </div>

        }
      </div>

      {/* billing column */}
      <div className="column-container">
        <div className="right-column">
          <div className="title">
            <span>Subtotal</span>
            {/* <span>$148</span> */}
            <span>${subTotalSum()}</span>
          </div>
          <div className="title">
            <span>Taxes</span>
            <span>$15</span>
          </div>
          <div className="title">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>${totalSum(15)}</span>
          </div>
          <button className="checkout-btn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}

export { Cart }

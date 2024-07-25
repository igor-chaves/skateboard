import { useContext } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import "./add-to-cart.css"
import { CartContext } from "../contexts/cartContext"

const AddedToCart = () => {
  const { lastItem } = useContext(CartContext)

  return (
    <div className="lastItem-container">
      <div className="column-container">

        <h1><FontAwesomeIcon icon={faCircleCheck} color="green" /> Item added to cart successfully</h1>
        {lastItem?.map(item =>
          <div key={item.id} className="empty-cart">
            <div className="image-container">
              <div className="product-image">
                <img src={item.image} alt="product image" className="product-img" />
              </div>
            </div>

            <div className="product-infos">
              <h3 className="product-title">{item.title}</h3>
              <p className="price">${item.price.toFixed(2)}</p>
              <p className="product-code">Item #{item.id}</p>
            </div>
          </div>
        )}

        <div className="go-to-btns">
          <Link to="/"><button className="go-to-btn">Homepage</button></Link>
          <Link to="/cart"><button className="go-to-btn">Check cart</button></Link>
        </div>
      </div>
    </div >
  )
}

export { AddedToCart }

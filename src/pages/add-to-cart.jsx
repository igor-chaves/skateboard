import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import localforage from "localforage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import "./add-to-cart.css"

const AddedToCart = () => {
  const [last, setLast] = useState([])

  const lastItem = async () => {
    const items = await localforage.getItem("lastAddedItem")
    setLast(items)
  }

  useEffect(() => { lastItem() }, [])
  console.log(last)

  return (
    <div className="lastItem-container">
      <div className="column-container">

        <h1><FontAwesomeIcon icon={faCircleCheck} color="green" /> Item added to cart successfully</h1>
        {last?.map(item =>

          <div key={item.id} className="empty-cart">
            <div className="image-container">
              <div className="product-image">
                <img src={item.images[0]} alt="product image" className="product-img" />
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

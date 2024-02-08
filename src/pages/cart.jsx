import "./cart.css"

const Cart = () => {
  return (
    <div className="main-container">
      <div className="column-container">
        <div className="product-container">
          <div className="image-container">
            <img src="/deck4.jpg" alt="Product Image" width="80" height="80" className="image" />
            <div className="description">
              <h3>Product name here</h3>
              <p>ACME-CIRCLES-BLACK</p>
              <span>product's code here</span>
            </div>
          </div>
          <div className="quantity-container">
            <div className="description">
              <p>Quantity</p>
              <div className="bellow-label"></div>
            </div>
            <div className="price">$99</div>
            <button className="remove-btn">Remove</button>
          </div>
        </div>
        <div className="product-container">
          <div className="image-container">
            <img src="/deck1.jpg" alt="Product Image" width="80" height="80" className="image" />
            <div className="description">
              <h3>Product name here</h3>
              <p>SKU: WMUG2021</p>
              <span>product's code here</span>
            </div>
          </div>
          <div className="quantity-container">
            <div className="description">
              <p>Quantity</p>
              <div className="bellow-label"></div>
            </div>
            <div className="price">$49</div>
            <button className="remove-btn">Remove</button>
          </div>
        </div>
      </div>
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
          <button className="remove-btn">Proceed to checkout</button>
        </div>

      </div>
    </div>
  )
}

export { Cart }

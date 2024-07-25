import { Link } from 'react-router-dom'
import { useAddToLocalForage } from '../hooks/useAddToLocalForage'

const ProductCard = ({ id, title, price, images }) => {
  const addToLocalForage = useAddToLocalForage();

  return (
    <div className="card" key={id}>
      <img src={images[0]} alt="product image" />
      <h3>{title}</h3>
      <p>${price}.00</p>
      <div className="btns" onClick={() => addToLocalForage(id, title, price, images)}>
        <Link to="/add-to-cart">Add to cart</Link>
      </div>
    </div>
  )
}

export { ProductCard }

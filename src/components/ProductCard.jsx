import { Link } from 'react-router-dom'
import { useAddToLocalForage } from '../hooks/useAddToLocalForage'

const ProductCard = ({ id, title, price, image }) => {
  const addToLocalForage = useAddToLocalForage()
  const price2digits = price.toFixed(2)

  return (
    <div className="card" key={id}>
      <img src={image} alt="product image" />
      <h3>{title}</h3>
      <p>${price2digits}</p>
      <div className="btns" onClick={() => addToLocalForage(id, title, price2digits, image)}>
        <Link to="/add-to-cart">Add to cart</Link>
      </div>
    </div>
  )
}

export { ProductCard }

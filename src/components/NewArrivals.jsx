import { ProductCard } from './ProductCard'

const NewArrivals = ({ products }) => {
  const first8Products = products.slice(0, 8)

  return (
    <section className="new-arrivals">
      <h2>New Arrivals</h2>
      <p>Look at the latest collection that we offer</p>
      <div className="container">
        {first8Products.map(({ id, title, price, images }) =>
          <ProductCard key={id} id={id} title={title} price={price} images={images} />
        )}
      </div>
    </section>
  )
}

export { NewArrivals }

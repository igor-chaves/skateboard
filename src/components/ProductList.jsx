import { useState, useEffect } from 'react'

const ProductList = ({ onProductsLoaded }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        onProductsLoaded(data)
      })
  }, [onProductsLoaded])

  return null
}

export { ProductList }


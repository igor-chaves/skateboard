import { useState, useEffect } from 'react'
// https://fakestoreapi.com/ API BEING CONSUMED TO GET PRODUCTS

const ProductList = ({ onProductsLoaded }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        onProductsLoaded(data)
      })
  }, [onProductsLoaded])

  return null
}

export { ProductList }


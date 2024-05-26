import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

import { Layout } from "./components/layout"
import { Home, getProductsLoader } from "./pages/home"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { Cart } from "./pages/cart"
import { NotFound } from "./pages/not-found"
import { AddedToCart } from "./pages/add-to-cart"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={getProductsLoader} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/add-to-cart" element={<AddedToCart />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
)

const App = () => <RouterProvider router={router} />

export { App }

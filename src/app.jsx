import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { Cart } from "./pages/cart"
import { NotFound } from "./pages/not-found"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
)

const App = () => <RouterProvider router={router} />

export { App }

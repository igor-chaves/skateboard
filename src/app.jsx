import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route to="/about" element={<About />} />
      <Route to="/contact" element={<Contact />} />
      <Route to="/cart" element={<Cart />} />
    </Route>
  )
)

const App = () => <RouterProvider router={router} />

export { App }

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faLine, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faStar, faStarHalf, faShieldHalved, faTruckFast, faBuildingLock, faChartSimple } from '@fortawesome/free-solid-svg-icons'
import localforage from "localforage"
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
// https://fakeapi.platzi.com/ API BEING CONSUMED TO GET PRODUCTS

const getProductsLoader = async () => {
  const products = await fetch("https://api.escuelajs.co/api/v1/products")
  return products.json()
}

const igorMsg = async () => {
  return await localforage.getItem('cartItems')
}

const Home = () => {
  const apiProducts = useLoaderData()
  console.log(apiProducts)




  const addToLocalForage = async (id, title, price, images) => {
    // gets items from localforage first, if it's empty, return []
    const cartItems = await localforage.getItem('cartItems') || []
    // for every new interaction push a new item or +1 if exists already
    cartItems.push({ "id": id, "title": title, "price": price, "images": images, "quantity": 0 })
    await localforage.setItem('cartItems', cartItems)

  }

  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      <main>
        {/* <!-- HERO --> */}
        <div className="hero">
          <img src="banner.jpg" alt="" />
          <div className="container-hero">
            <p>Shirts</p>
            <p>Sneakers</p>
            <p>Skateboarding</p>
          </div>
        </div>

        {/* <!-- DESTAQUES --> */}
        <section className="featured">
          <div className="container">
            <div>
              <div className="card">
                <FontAwesomeIcon icon={faShieldHalved} />
                <h2>Easy Return Policy</h2>
                <p>Our store provide a 30 days return policy for all of our customers.</p>
              </div>

              <div className="card">
                <FontAwesomeIcon icon={faTruckFast} />
                <h2>Free Shipping</h2>
                <p>Buy products over $150 and get free express home delivery offers.</p>
              </div>
            </div>

            <div>
              <div className="card">
                <FontAwesomeIcon icon={faBuildingLock} />
                <h2>Secure Payment</h2>
                <p>Your protection is our priority! We guarantee peace of mind for our customers.</p>
              </div>

              <div className="card">
                <FontAwesomeIcon icon={faChartSimple} />
                <h2>Best Quality</h2>
                <p>Exceptional products carefully chosen to please your preferences.</p>
              </div>
            </div>

          </div>
        </section>

        {/* <!-- summer/winter etc  --> */}
        <section className="collections">
          <div className="container">
            <div className="image">
              <img src="vans-home.png" alt="" />
            </div>

            <div className="text">
              <h2>CHECK OUR NEW COLLECTION ITEMS</h2>
              <p>Explore the latest trends in our catalog.</p>
              <div className="btns">
                <a href="#">Buy Now</a>
                <a href="#">See More</a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- new arrivals --> */}
        <section className="new-arrivals">
          <h2>New Arrivals</h2>
          <p>Look at the latest collection that we offer</p>

          <div className="container">
            {products && products.map(({ id, title, price, images }) =>
              <div className="card" key={id}>
                {/* criar uma api fake para imagens de SKATE */}
                <img src={images[0]} alt="product image" />
                <h3>{title}</h3>
                <p>${price}.00</p>
                {/* jogar essas infos para o local forage */}
                {/* mostrar o numero de produtos do cart no icone de cart na page home */}
                {/* ao abrir o cart, verificar se tem algo no local forage e gerar dinamicamente os cards baseado nisso */}
                {/* conferir a aula abaixo para fazer o resto de forma correta */}
                {/* https://www.youtube.com/watch?v=pdyAEHi5ei8 */}
                <div className="btns" onClick={() => addToLocalForage(id, title, price, images)}>
                  {/* nao esta clicando nas beiradas, talvez por causa do padding: ARRUMAR */}
                  <span to="cart"> Add to cart</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* <!-- testimonials --> */}
        <section className="testimonials">
          <h2>Testimonials</h2>

          <div className="container">
            <div className="card">
              <div className="image">
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="client image" />
              </div>

              <div className="text">
                <p>I'm really impressed! My order arrived super fast. I couldn't be happier with it.</p>
                <div className="star-icons" >
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalf} />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" alt="client image" />
              </div>

              <div className="text">
                <p>Absolutely loved my purchase! The quality is fantastic. It really exceeded my expectations.</p>
                <div className="star-icons">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="client image" />
              </div>

              <div className="text">
                <p>I had a fantastic shopping experience! The customer service was exceptional.</p>
                <div className="star-icons">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalf} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- newsletter --> */}
        <section id="newsletter" className="newsletter">
          <div className="container">
            <h2>Stay Updated</h2>
            <p>Get the latest updates on new product releases and exclusive offers!</p>
            <form>
              <input type="email" id="email" name="email" placeholder="Your email address" />
              <button type="submit">SIGN UP</button>
            </form>
          </div>
        </section>

        {/* <!-- social network --> */}
        <section className="social-network">
          <div className="container">
            <p>Get connected with us on our social networks</p>
            <div>
              <ul className="icons">
                <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faLine} /></a></li>
              </ul>
            </div>
          </div>
        </section>
      </main >
    </>
  )
}

export { Home, getProductsLoader, igorMsg }

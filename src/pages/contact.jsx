import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import "./contact.css"

const Contact = () => {
  // get current URL rote
  const navigate = useNavigate()
  // very basic validation
  const handleForm = async e => {
    e.preventDefault()

    // creates an array with users inputs
    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value
    }

    // predetermine how is the validation
    const formSchema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      message: yup.string().max(100).required(),
    })

    // check if formData is valid according to formSchema rules
    const isValid = await formSchema.isValid(formData)

    if (isValid) {
      alert("We received your message and will be in touch soon.")
      // change URL to / rote, the homepage
      navigate("/")
    } else {
      alert("Please fill all the fields correctly")
    }
  }

  return (
    <main>
      <section>
        <div className="container flex">
          <form className="form-contact" onSubmit={handleForm}>
            <div className="form-top">
              <h1>CONTACT</h1>
            </div>

            <div id="contact-form-inputs" className="form-mid">
              <input name="name" type="text" placeholder="Full name" autoComplete="off" />
              <input name="email" type="text" placeholder="E-mail" autoComplete="off" />
              <textarea
                name="message"
                placeholder="Your message"
                rows="4" cols="4"
                maxLength="200"
                autoComplete="off">
              </textarea>
            </div>

            <div className="send-btn flex">
              <button className="send-contact" type="submit">Send</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export { Contact }

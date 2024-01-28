import { useRef } from "react"
import { formSchema } from "./contactValidation"
import { Footer, Header } from "./home"
import "./contact.css"

const Contact = () => {
  //save current state of the form as null
  const formRef = useRef(null)

  const handleForm = async e => {
    // very basic validation
    e.preventDefault()

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value
    }
    const isValid = await formSchema.isValid(formData)

    if (isValid) {
      alert("We received your message, we'll be in touch soon")
      formRef.current.reset()
    } else {
      alert("Please fill all the fields correctly")
    }
  }

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container flex">
            <form ref={formRef} onSubmit={handleForm}>
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
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export { Contact }

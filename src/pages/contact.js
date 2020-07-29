import React from "react"
import styled from "styled-components"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import Nav from "../components/nav"
import Footer from "../components/footer"

const Contact = () => {
  return (
    <>
      <Nav />
      <ContactMain>
        <ContactDescription>
          <p>
            I'm currently available for fulltime and contract positions. Give me
            a call or drop me a line and let's chat.
          </p>
          <div className="icons">
            <FaTwitter className="icon" size="48" color="#ed4b64" />
            <FaLinkedin className="icon" size="48" color="#f04d4d" />
            <FaGithub className="icon" size="48" color="#F26639" />
          </div>
        </ContactDescription>
        <ContactForm>
          <label>
            <FormInput type="text" placeholder="Name" />
          </label>
          <label>
            <FormInput type="email" placeholder="Email Address" />
          </label>
          <label>
            <FormInput type="textarea" placeholder="Your Message" />
          </label>
          <FormButton type="submit" />
        </ContactForm>
      </ContactMain>
      <Footer />
    </>
  )
}

const ContactMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContactDescription = styled.div`
  width: 40%;
  padding: 2.5rem;
  .icons {
    width: 40%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    .icon {
      transition: transform 1s ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
`

const FormInput = styled.input`
  width: 100%;
  padding: 10px 25px;
  margin-bottom: 35px;
`

const FormButton = styled.input`
  border: none;
  background-color: #f0ea49;
  text-transform: uppercase;
  padding: 15px 25px;
  color: #f04d4d;
  font-size: 18px;
  font-weight: bold;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    transition: 0.5s ease-in-out;
    background-color: #f04d4d;
    color: white;
  }
`

export default Contact

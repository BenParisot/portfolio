import React from "react"
import styled, { keyframes } from "styled-components"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import Nav from "../components/nav"
import Footer from "../components/footer"
import { fadeIn } from "react-animations"

const Contact = () => {
  return (
    <>
      <Nav location="Contact" />
      <ContactMain>
        <ContactDescription>
          <p>
            I'm currently available for fulltime and contract positions. <br />
            Drop me a line and let's chat.
          </p>
          <div className="icons">
            <a target="blank" href="https://twitter.com/HereCodesNothin">
              <FaTwitter className="icon" size="48" color="#ed4b64" />
            </a>
            <a target="blank" href="https://www.linkedin.com/in/benparisot/">
              <FaLinkedin className="icon" size="48" color="#f04d4d" />
            </a>
            <a target="blank" href="https://github.com/benparisot">
              <FaGithub className="icon" size="48" color="#F26639" />
            </a>
          </div>
        </ContactDescription>
        <ContactForm>
          <FormInput type="text" placeholder="Name" />
          <FormInput type="email" placeholder="Email Address" />
          <FormInput type="textarea" placeholder="Your Message" />
          <FormButton type="submit" />
        </ContactForm>
      </ContactMain>
      <Footer />
    </>
  )
}

const fadeInAnimation = keyframes`${fadeIn}`

const ContactMain = styled.div`
  animation: 1s ${fadeInAnimation};
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-left: 15%;
  padding-right: 15%;
  justify-content: center;
  align-items: center;
`

const ContactDescription = styled.div`
  width: 60%;
  padding: 2.5rem;
  .icons {
    width: 45%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    font-style: none;
    a {
      box-shadow: none;
    }
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 35%;
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

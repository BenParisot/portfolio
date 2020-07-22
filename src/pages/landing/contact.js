import React from "react"
import styled from "styled-components"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const Contact = () => {
  return (
    <ContactMain>
      <ContactDescription>
        <p>
          I'm currently available for fulltime and contract positions. Give me a
          call or drop me a line and let's chat.
        </p>
      </ContactDescription>
      <ContactLinks>
        <p>
          <span className="email">Email:</span> me@benparisot.com
        </p>
        <div className="icons">
          <FaTwitter size="48" color="#ed4b64"/>
          <FaLinkedin size="48" color="#f04d4d" />
          <FaGithub size="48" color="#F26639" />
        </div>
      </ContactLinks>
    </ContactMain>
  )
}

const ContactMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem;
`

const ContactDescription = styled.div`
  width: 40%;
  font-size: 1.8rem;
  padding: 2.5rem;
`

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 50vh;
  border-left: 6px solid #f0ea49;
  padding: 2.5rem;
  margin-top: 1rem;
  line-height: 2;
  font-size: 1.125rem;
  .email {
    font-weight: 700;
    color: #ed4b64;
    text-transform: uppercase;
  }
  .icons {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }
`

export default Contact

import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <ContactMain>
      <h1>Contact section</h1>
    </ContactMain>
  )
}

const ContactMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Contact

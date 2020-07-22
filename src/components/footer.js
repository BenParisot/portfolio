import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
    <p>Designed and built by Ben Parisot in 2020</p>
    <a href="#top">Back to the top</a>
  </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Footer

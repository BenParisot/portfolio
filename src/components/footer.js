import React from 'react'
import styled from 'styled-components'
import { respondTo } from '../styling/respondTo'

const Footer = () => {
  return (
    <FooterContainer>
    <p>Designed and built by Ben Parisot in 2020.</p>
    <a href="#top">Back to the top</a>
  </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  text-align: center;
  margin-top: 24px;
  ${respondTo.xs`
    visibility: hidden;
  `}
  background-color: lightgrey;
  padding: 60px;
  a {
    color: white;
    text-transform: uppercase;
  }
`

export default Footer

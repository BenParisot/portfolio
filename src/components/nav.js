import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = () => {
  return (
    <NavMain>
      <p>Development</p>
      <p>Design</p>
      <p>Production</p>
      <p>Blog</p>
      <p>Contact</p>
    </NavMain>
  )
}

const NavMain = styled.nav` 
  height: 42px;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  background: linear-gradient(
    to right,
    #F04D4D 16.66%, #ED4B64 16.66%,
    #ED4B64 33.33%, #F04D4D 33.33%,
    #F04D4D 49.99%, #F26639 49.99%,
    #F26639 66.66%, #ED4B64 66.66%,
    #ED4B64 83.33%, #F04D4D 83.33%
  );
    p {
      color: #F0EA49;
      margin: auto 20px;
      font-style: italic;
    }
`

export default Nav

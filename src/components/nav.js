import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = () => {
  return (
    <NavMain>
      <Link to="/dev">
        <p>Development</p>
      </Link>
      <Link to="/design">
        <p>Design</p>
      </Link>
      <Link to="production">
        <p>Production</p>
      </Link>
      <Link to="/blog/">
        <p>Blog</p>
      </Link>
      <Link to="/contact">
        <p>Contact</p>
      </Link>
    </NavMain>
  )
}

const NavMain = styled.nav`
  height: 42px;
  width: 100vw;
  grid-row-start: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  background: linear-gradient(
    to right,
    #f04d4d 16.66%,
    #ed4b64 16.66%,
    #ed4b64 33.33%,
    #f04d4d 33.33%,
    #f04d4d 49.99%,
    #f26639 49.99%,
    #f26639 66.66%,
    #ed4b64 66.66%,
    #ed4b64 83.33%,
    #f04d4d 83.33%
  );
  p {
    color: #f0ea49;
    margin: auto 20px;
    font-style: italic;
  }
`

export default Nav

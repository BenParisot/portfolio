import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { fadeIn } from "react-animations"
import SEO from "../components/seo"
 
const Nav = ({ location }) => {
  return (
    <NavMain>
      <SEO title={location} />
      <Link to="/developer">
        <p>Development</p>
      </Link>
      <Link to="/designer">
        <p>Design</p>
      </Link>
      <Link to="/producer">
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

const fadeInAnimation = keyframes`${fadeIn}`

const NavMain = styled.nav`
  height: 42px;
  width: 100vw;
  grid-row-start: 1;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 15px;
  background: linear-gradient(
    to right,
    #f04d4d 16.6%,
    #ed4b64 16.6%,
    #ed4b64 33.2%,
    #f04d4d 33.2%,
    #f04d4d 49.8%,
    #f26639 49.8%,
    #f26639 66.4%,
    #ed4b64 66.4%,
    #ed4b64 83%,
    #f04d4d 83%
  );
  p {
    /* animation: 1s ${fadeInAnimation}; */
    color: #f0ea49;
    margin: auto 20px;
    font-style: italic;
  }
  a {
    box-shadow: none;
  }
`

export default Nav

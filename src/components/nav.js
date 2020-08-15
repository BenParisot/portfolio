import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import { respondTo } from "../styling/respondTo"

const Nav = ({ location }) => {
  return (
    <>
    <NavMain>
      <SEO title={location} />
      <Link to="/developer">
        <p>Developer</p>
      </Link>
      <Link to="/designer">
        <p>Designer</p>
      </Link>
      <Link to="/producer">
        <p>Producer</p>
      </Link>
      <Link to="/blog/">
        <p>Blog</p>
      </Link>
      <Link to="/contact">
        <p>Contact</p>
      </Link>
    </NavMain>
    </>
  )
}

const NavMain = styled.nav`
  height: 42px;
  width: 100vw;
  grid-row-start: 1;
  position: fixed;
  display: flex;
  z-index: 100;
  justify-content: flex-end;
  align-items: center;
  padding-right: 25px;
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
    color: #f7f195;
    margin: auto 20px;
    font-style: italic;
  }
  a {
    box-shadow: none;
  }
  ${respondTo.xs`
    position: fixed;
    // display: grid;
    // grid-template-columns: 20% 20% 20% 20% 20%;
    // grid-template-rows: 100%;
    display: flex;
    justify-content: space-around;
    max-width: 100vw;
    bottom: 0;
    background: #ed4b64;
    height: 75px;
    padding: 0px;
    p {
      font-size: 12px;
      text-align: center;
      width: 100%;
      margin: 0px;
    }
  `}
`

export default Nav

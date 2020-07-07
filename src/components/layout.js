import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Nav from "./nav"
import { rhythm, scale } from "../utils/typography"
import Landing from "../pages/landing/landing"
import Contact from '../pages/landing/contact'
import Producer from '../pages/landing/producer'
import Designer from '../pages/landing/designer'
import Developer from '../pages/landing/developer'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <Landing />
        <Developer />
        <Designer />
        <Producer />
        <Contact />
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: "grid";
  grid-template-columns: "auto auto auto auto auto auto";
  width: "100vw";
  height: "120vh";
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout

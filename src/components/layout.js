import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from "./nav"
import { rhythm, scale } from "../utils/typography"
import Landing from "../pages/landing/landing"
import Contact from "../pages/landing/contact"
import Producer from "../pages/landing/producer"
import Designer from "../pages/landing/designer"
import Developer from "../pages/landing/developer"
import About from "../pages/about"

class Layout extends React.Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/developer" component={Developer} />
            <Route exact path="/designer" component={Designer} />
            <Route exact path="/producer" component={Producer} />
            <Route exact path="/about" component={About} />
            <Contact exact path="/contact" component={Contact} />
          </Switch>
        </Router>

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

export default Layout

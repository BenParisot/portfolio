import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const Landing = () => {
  return (
    <Background>
      <div
        id="top"
        style={{
          gridColumnStart: "1",
          gridRowStart: "1",
          gridRowEnd: "span 6",
          backgroundColor: "#F04D4D",
        }}
      ></div>
      <div
        style={{
          gridColumnStart: "2",
          gridRowStart: "1",
          gridRowEnd: "span 6",
          backgroundColor: "#ED4B64",
        }}
      ></div>
      <div
        style={{
          gridColumnStart: "3",
          gridRowStart: "1",
          gridRowEnd: "span 6",
          backgroundColor: "#F04D4D",
        }}
      ></div>
      <div
        style={{
          gridColumnStart: "4",
          gridRowStart: "1",
          gridRowEnd: "span 6",
          backgroundColor: "#F26639",
        }}
      ></div>
      <div
        style={{
          gridColumnStart: "5",
          gridRowStart: "1",
          gridRowEnd: "span 6",
          backgroundColor: "#ED4B64",
        }}
      ></div>
      <div
        style={{
          gridColumnStart: "6",
          gridRowStart: "1",
          gridRowEnd: "span 6",
          backgroundColor: "#F04D4D",
        }}
      ></div>
      <Slogan>
        <h1>Ben can help you build that.</h1>
      </Slogan>
      <Dev>
        <Link to="/developer">
          <h1>Developer</h1>
        </Link>
      </Dev>
      <Design>
        <Link to="/designer">
          <h1>Designer</h1>
        </Link>
      </Design>
      <Production>
        <Link to="/producer">
          <h1>Producer</h1>
        </Link>
      </Production>
      <Nav>
        <li>
          <span>
            <Link to="/blog/">Blog</Link>
          </span>
        </li>
        <li>
          <span>
            <Link to="/contact">Contact</Link>
          </span>
        </li>
      </Nav>
    </Background>
  )
}

const Background = styled.div`
  display: grid;
  grid-template-columns: 16% 16% 16% 16% auto 16%;
  grid-template-rows: 16% 16% auto 16% 16% 16%;
  width: 100vw;
  height: 100vh;
`

const Slogan = styled.div`
  text-transform: uppercase;
  color: #f0ea49;
  grid-column: 3 / span 4;
  grid-row-start: 1;
  position: relative;
  h1 {
    font-size: 3.5vw;
    font-style: italic;
  }
`

const Dev = styled.div`
  grid-column-start: 1;
  grid-row-start: 6;
  transform: rotate(180deg);
  h1 {
    text-transform: uppercase;
    color: #d6ffb7;
    border-top: 10px solid #f0ea49;
    padding-top: 20px;
    font-size: 10vh;
    writing-mode: vertical-rl;
  }
`

const Design = styled.div`
  grid-column-start: 2;
  grid-row-start: 6;
  transform: rotate(180deg);
  h1 {
    text-transform: uppercase;
    color: #5bc0eb;
    border-top: 10px solid #d6ffb7;
    padding-top: 20px;
    font-size: 10vh;
    writing-mode: vertical-rl;
  }
`

const Production = styled.div`
  grid-column-start: 3;
  grid-row-start: 6;
  transform: rotate(180deg);
  h1 {
    text-transform: uppercase;
    color: #d6ffb7;
    border-top: 10px solid #f0ea49;
    padding-top: 20px;
    font-size: 10vh;
    writing-mode: vertical-rl;
  }
`

const Nav = styled.ul`
  grid-column-start: 6;
  grid-row-start: 6;
  align-items: center;
  li {
    font-size: 1.5vw;
    list-style: none;

    span {
      border-bottom: 5px solid white;
      margin-bottom: 15px;
      padding-bottom: 3px;
      a {
        color: #d6ffb7;
        font-style: italic;
        text-decoration: none;
        box-shadow: none;
      }
    }
  }
`
export default Landing

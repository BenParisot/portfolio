import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { Link, navigate } from "gatsby"
import { fadeIn, slideInRight, slideOutUp } from "react-animations"
import { Transition } from "react-transition-group"
import "./styles.css"

const Landing = () => {
  const handleOnClick = () => {
    alert("click handled")
  }
  const [inProp, setInProp] = useState(false)

  return (
    <Background>
      <Transition
        in={inProp}
        timeout={{
          appear: 400,
          enter: 300,
          exit: 500,
        }}
      >{state => (
        <h1>
          I am {state}
        </h1>
      )}
      </Transition>

      <BackgroundDivOne />
      <BackgroundDivTwo />
      <BackgroundDivThree />
      <BackgroundDivFour />
      <BackgroundDivFive />
      <BackgroundDivSix />
      <Slogan>
        <h1 onClick={() => {
          setInProp(!inProp)
          console.log('inProp', inProp)
        }}>Ben can help you build that.</h1>
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
            <Link onClick={handleOnClick} to="/contact">
              Contact
            </Link>
          </span>
        </li>
      </Nav>
    </Background>
  )
}

const fadeInAnimation = keyframes`${fadeIn}`
const slideInRightAnimation = keyframes`${slideInRight}`
const slideOutUpAnimation = keyframes`${slideOutUp}`

const Background = styled.div`
  display: grid;
  grid-template-columns: 16% 16% 16% 16% auto 16%;
  grid-template-rows: 16% 16% auto 16% 16% 16%;
  width: 100vw;
  height: 100vh;
`
const BackgroundDivOne = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f04d4d;
  /* animation: 0.5s ${slideOutUpAnimation}; */
`
const BackgroundDivTwo = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #ed4b64;
  /* animation: 0.75s ${slideOutUpAnimation}; */
`

const BackgroundDivThree = styled.div`
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f04d4d;
  /* animation: 1s ${slideOutUpAnimation}; */
`

const BackgroundDivFour = styled.div`
  grid-column-start: 4;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f26639;
  /* animation: 1.25s ${slideOutUpAnimation}; */
`

const BackgroundDivFive = styled.div`
  grid-column-start: 5;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #ed4b64;
  /* animation: 1.5s ${slideOutUpAnimation}; */
`

const BackgroundDivSix = styled.div`
  grid-column-start: 6;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f04d4d;
  /* animation: 1.75s ${slideOutUpAnimation}; */
`

const Slogan = styled.div`
  animation: 2s ${slideInRightAnimation};
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
  animation: 1.5s ${fadeInAnimation};
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
  animation: 2s ${fadeInAnimation};
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
  animation: 2.5s ${fadeInAnimation};
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
  animation: 3s ${fadeInAnimation};
`
export default Landing

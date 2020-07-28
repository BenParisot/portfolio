import React, { useState } from "react"
import styled, { keyframes, css } from "styled-components"
import { Link, navigate } from "gatsby"
import { fadeIn, slideInRight, slideOutUp } from "react-animations"
import { CSSTransition } from "react-transition-group"
import "./styles.css"

const Landing = () => {
  const [inProp, setInProp] = useState(true)

  const handleOnClick = () => {
    setInProp(!inProp)
    setTimeout(() => navigate("/contact"), 2000)
  }
  return (
    <Background>
      <CSSTransition in={inProp} timeout={400} unmountOnExit>
        {state => <BackgroundDivOne state={state} />}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={900} unmountOnExit>
        {state => <BackgroundDivTwo state={state} />}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1400} unmountOnExit>
        {state => <BackgroundDivThree state={state} />}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1900} unmountOnExit>
        {state => <BackgroundDivFour state={state} />}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={2400} unmountOnExit>
        {state => <BackgroundDivFive state={state} />}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={2900} unmountOnExit>
        {state => <BackgroundDivSix state={state} />}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1500} unmountOnExit>
        {state => (
          <Slogan state={state}>
            <h1>Ben can help you build that.</h1>
          </Slogan>
        )}
      </CSSTransition>
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
            <h1 onClick={handleOnClick}>Contact</h1>
          </span>
        </li>
      </Nav>
    </Background>
  )
}

const fadeInAnimation = keyframes`${fadeIn}`
const slideInRightAnimation = keyframes`${slideInRight}`
const slideOutUpAnimation = keyframes`${slideOutUp}`
const firstOut = '.5s'
const secondOut = '1s'
const thirdOut = '1.5s'
const fourthOut = '2s'
const fifthOut = '2.5s'
const sixthOut = '3s'

const Background = styled.div`
  display: grid;
  grid-template-columns: 16% 16% 16% 16% auto 16%;
  grid-template-rows: 16% 16% auto 16% 16% 16%;
  width: 100vw;
  height: 100vh;
`
const BackgroundDivOne = styled.div`
  animation: ${({ state }) => {
    if (state === "exiting" || state === "exited") return css`${firstOut} ${slideOutUpAnimation}`
  }};
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f04d4d;
`
const BackgroundDivTwo = styled.div`
  animation: ${({ state }) => {
    if (state === "exiting" || state === "exited") return css`${secondOut} ${slideOutUpAnimation}`
  }};
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #ed4b64;
`

const BackgroundDivThree = styled.div`
  animation: ${({ state }) => {
    if (state === "exiting" || state === "exited") return css`${thirdOut} ${slideOutUpAnimation}`
  }};
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f04d4d;
`

const BackgroundDivFour = styled.div`
  animation: ${({ state }) => {
    if (state === "exiting" || state === "exited") return css`${fourthOut} ${slideOutUpAnimation}`
  }};
  grid-column-start: 4;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f26639;
`

const BackgroundDivFive = styled.div`
  animation: ${({ state }) => {
    if (state === "exiting" || state === "exited") return css`${fifthOut} ${slideOutUpAnimation}`
  }};
  grid-column-start: 5;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #ed4b64;
`

const BackgroundDivSix = styled.div`
  animation: ${({ state }) => {
    if (state === "exiting" || state === "exited") return css`${sixthOut} ${slideOutUpAnimation}`
  }};
  grid-column-start: 6;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f04d4d;
`

const Slogan = styled.div`
  animation: ${({ state }) => {
    if (state === "entering" || state === "entered")
      return css`2s ${slideInRightAnimation}`
    if (state === "exiting" || state === "exited")
      return css`2s ${slideOutUpAnimation}`
  }};
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

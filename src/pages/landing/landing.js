import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { navigate } from "gatsby"
import { fadeIn, slideInRight } from "react-animations"
import SEO from '../../components/seo'
import { CSSTransition } from "react-transition-group"

const Landing = () => {
  const [inProp, setInProp] = useState(true)

  const handleOnClick = e => {
    const page = e.target.id
    setInProp(!inProp)
    setTimeout(() => navigate(`/${page}`), 1750)
  }
  return (
    <Background>
      <SEO title="Home" />
      <CSSTransition in={inProp} timeout={250}>
        {state => <BackgroundDivOne state={state} />}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={500}>
        {state => <BackgroundDivTwo state={state} />}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={750}>
        {state => <BackgroundDivThree state={state} />}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1000}>
        {state => <BackgroundDivFour state={state} />}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1250}>
        {state => <BackgroundDivFive state={state} />}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1500}>
        {state => <BackgroundDivSix state={state} />}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={2000} unmountOnExit>
        {state => (
          <Slogan state={state}>
            <h1>Ben can help you build that.</h1>
          </Slogan>
        )}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1500} unmountOnExit>
        {state => (
          <Dev state={state}>
            <h1 id="developer" onClick={handleOnClick}>
              Developer
            </h1>
          </Dev>
        )}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1500} unmountOnExit>
        {state => (
          <Design state={state}>
            <h1 id="designer" onClick={handleOnClick}>
              Designer
            </h1>
          </Design>
        )}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1500} unmountOnExit>
        {state => (
          <Production state={state}>
            <h1 id="producer" onClick={handleOnClick}>
              Producer
            </h1>
          </Production>
        )}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1500} unmountOnExit>
        {state => (
          <Nav state={state}>
            <li>
              <span>
                <p id="blog" onClick={handleOnClick}>
                  Blog
                </p>
              </span>
            </li>
            <li>
              <span>
                <p id="contact" onClick={handleOnClick}>
                  Contact
                </p>
              </span>
            </li>
          </Nav>
        )}
      </CSSTransition>
    </Background>
  )
}

const fadeInAnimation = keyframes`${fadeIn}`
const slideInRightAnimation = keyframes`${slideInRight}`

const Background = styled.div`
  display: grid;
  grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% auto;
  grid-template-rows: 16% 16% auto 16% 16% 16%;
  width: 100vw;
  height: 100vh;
`
const BackgroundDivOne = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f04d4d;
  transition: 0.25s;
  height: ${({ state }) =>
    state === "exiting" || state === "exited" ? "42px" : "100%"};
`
const BackgroundDivTwo = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #ed4b64;
  transition: 0.5s;
  height: ${({ state }) =>
    state === "exiting" || state === "exited" ? "42px" : "100%"};
`

const BackgroundDivThree = styled.div`
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f04d4d;
  transition: 0.75s;
  height: ${({ state }) =>
    state === "exiting" || state === "exited" ? "42px" : "100%"};
`

const BackgroundDivFour = styled.div`
  grid-column-start: 4;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f26639;
  transition: 1s;
  height: ${({ state }) =>
    state === "exiting" || state === "exited" ? "42px" : "100%"};
`

const BackgroundDivFive = styled.div`
  grid-column-start: 5;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #ed4b64;
  transition: 1.25s;
  height: ${({ state }) =>
    state === "exiting" || state === "exited" ? "42px" : "100%"};
`

const BackgroundDivSix = styled.div`
  grid-column-start: 6;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f04d4d;
  transition: 1.5s;
  height: ${({ state }) =>
    state === "exiting" || state === "exited" ? "42px" : "100%"};
`

const Slogan = styled.div`
  animation: 1.5s ${slideInRightAnimation};
  text-transform: uppercase;
  color: #f7f195;
  grid-column: 3 / span 4;
  grid-row-start: 1;
  position: relative;
  h1 {
    font-size: 3.5vw;
    font-style: italic;
  }
  transition: 2s;
  transform: ${({ state }) =>
    state === "exiting" || state === "exited" ? "translateX(100rem)" : ""};
`

const Dev = styled.div`
  grid-column-start: 1;
  grid-row-start: 6;
  transform: rotate(180deg);
  h1 {
    text-transform: uppercase;
    transition: ${({ state }) =>
      state === "exiting" || state === "exited" ? ".5s" : ""};
    color: ${({ state }) =>
      state === "exiting" || state === "exited" ? "#f04d4d" : "#d6ffb7"};
    border-top: 10px solid #f0ea49;
    padding-top: 20px;
    font-size: 10vh;
    writing-mode: vertical-rl;
    :hover {
      cursor: pointer;
    }
  }
  animation: 1.5s ${fadeInAnimation};
  transition: 1s;
  transform: ${({ state }) =>
    state === "exiting" || state === "exited"
      ? "translateY(100rem) rotate(180deg)"
      : ""};
`

const Design = styled.div`
  grid-column-start: 2;
  grid-row-start: 6;
  transform: rotate(180deg);
  h1 {
    transition: ${({ state }) =>
      state === "exiting" || state === "exited" ? ".5s" : ""};
    color: ${({ state }) =>
      state === "exiting" || state === "exited" ? "#f04d4d" : "#bbe8fb"};
    text-transform: uppercase;
    border-top: 10px solid #d6ffb7;
    padding-top: 20px;
    font-size: 10vh;
    writing-mode: vertical-rl;
    :hover {
      cursor: pointer;
    }
  }
  animation: 2s ${fadeInAnimation};
  transition: 2s;
  transform: ${({ state }) =>
    state === "exiting" || state === "exited"
      ? "translateY(100rem) rotate(180deg)"
      : ""};
`

const Production = styled.div`
  grid-column-start: 3;
  grid-row-start: 6;
  transform: rotate(180deg);
  h1 {
    transition: ${({ state }) =>
      state === "exiting" || state === "exited" ? ".5s" : ""};
    color: ${({ state }) =>
      state === "exiting" || state === "exited" ? "#f04d4d" : "#d6ffb7"};
    text-transform: uppercase;
    border-top: 10px solid #f0ea49;
    padding-top: 20px;
    font-size: 10vh;
    writing-mode: vertical-rl;
    :hover {
      cursor: pointer;
    }
  }
  animation: 2.5s ${fadeInAnimation};
  transition: 3s;
  transform: ${({ state }) =>
    state === "exiting" || state === "exited"
      ? "translateY(100rem) rotate(180deg)"
      : ""};
`

const Nav = styled.ul`
  grid-column-start: 6;
  grid-row-start: 6;
  align-items: center;
  li {
    font-size: 1.5vw;
    list-style: none;

    span {
      margin-bottom: 15px;
      padding-bottom: 3px;
      p {
        width: 35%;
        border-bottom: 5px solid white;
        color: #d6ffb7;
        font-style: italic;
        :hover {
          cursor: pointer;
        }
      }
    }
  }
  animation: 3s ${fadeInAnimation};
  transition: 2s;
  opacity: ${({ state }) =>
    state === "exiting" || state === "exited" ? 0 : 100};
`
export default Landing

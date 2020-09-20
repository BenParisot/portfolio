import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { navigate } from "gatsby"
import { fadeIn, slideInRight } from "react-animations"
import SEO from "../../components/seo"
import { CSSTransition } from "react-transition-group"
import { respondTo } from "../../styling/respondTo"

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
            <DevelopH1 id="developer" onClick={handleOnClick}>
              Developer
            </DevelopH1>
          </Dev>
        )}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1500} unmountOnExit>
        {state => (
          <Design state={state}>
            <DesignH1 id="designer" onClick={handleOnClick}>
              Designer
            </DesignH1>
          </Design>
        )}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1500} unmountOnExit>
        {state => (
          <Production state={state}>
            <ProduceH1 id="producer" onClick={handleOnClick}>
              Producer
            </ProduceH1>
          </Production>
        )}
      </CSSTransition>
      <CSSTransition in={inProp} timeout={1500} unmountOnExit>
        {state => (
          <Nav state={state}>
            <li>
              <span>
                <NavP id="blog" onClick={handleOnClick}>
                  Blog
                </NavP>
              </span>
            </li>
            <li>
              <span>
                <NavP id="contact" onClick={handleOnClick}>
                  Contact
                </NavP>
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

  ${respondTo.xs` 
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 16.6% 16.6% 16.6% 16.6% 16.6% auto;
`}
  ${respondTo.sm` 
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 16.6% 16.6% 16.6% 16.6% auto 16.6%;
`}
`
const BackgroundDivOne = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f04d4d;
  transition: 0.25s;
  height: ${({ state }) =>
    state === "exiting" || state === "exited" ? "42px" : "100%"};
  ${respondTo.xs` 
  grid-column: 1 / span 2;
  grid-row: 1;
  transition: .5s;
  height: 101%;
  width: ${({ state }) =>
    state === "exiting" || state === "exited" ? "0px" : "100%"};
`}
  ${respondTo.sm`
    width: 101%;
  `}
`
const BackgroundDivTwo = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #ed4b64;
  transition: 0.5s;
  height: ${({ state }) =>
    state === "exiting" || state === "exited" ? "42px" : "100%"};

  ${respondTo.xs` 
    grid-column: 1 / span 2;
    grid-row: 2;
    transition: .75s;
    height: 101%;
    width: ${({ state }) =>
    state === "exiting" || state === "exited" ? "0px" : "100%"};
  `}
    ${respondTo.sm`
    width: 101%;
  `}
`

const BackgroundDivThree = styled.div`
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f04d4d;
  transition: 0.75s;
  height: ${({ state }) =>
    state === "exiting" || state === "exited" ? "42px" : "100%"};
  ${respondTo.xs` 
    grid-column: 1 / span 2;
    grid-row: 3;
    transition: 1s;
    height: 101%;
    width: ${({ state }) =>
    state === "exiting" || state === "exited" ? "0px" : "100%"};
  `}
    ${respondTo.sm`
    width: 101%;
  `}
`

const BackgroundDivFour = styled.div`
  grid-column-start: 4;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f26639;
  transition: 1s;
  height: ${({ state }) =>
    state === "exiting" || state === "exited" ? "42px" : "100%"};
  ${respondTo.xs` 
    grid-column: 1 / span 2;
    grid-row: 4;
    transition: 1.25s;
    height: 101%;
    width: ${({ state }) =>
    state === "exiting" || state === "exited" ? "0px" : "100%"};
  `}
    ${respondTo.sm`
    width: 101%;
  `}
`

const BackgroundDivFive = styled.div`
  grid-column-start: 5;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #ed4b64;
  transition: 1.25s;
  height: ${({ state }) =>
    state === "exiting" || state === "exited" ? "42px" : "100%"};
  ${respondTo.xs` 
    grid-column: 1 / span 2;
    grid-row: 5;
    transition: 1.5s;
    height: 101%;
    width: ${({ state }) =>
    state === "exiting" || state === "exited" ? "0px" : "100%"};
  `}
    ${respondTo.sm`
  `}
`

const BackgroundDivSix = styled.div`
  grid-column-start: 6;
  grid-row-start: 1;
  grid-row-end: span 6;
  background-color: #f04d4d;
  transition: 1.5s;
  height: ${({ state }) =>
    state === "exiting" || state === "exited" ? "42px" : "100%"};
  ${respondTo.xs` 
    grid-column: 1 / span 2;
    grid-row: 6;
    transition: 1.75s;
    height: 101%;
    width: ${({ state }) =>
    state === "exiting" || state === "exited" ? "0px" : "100%"};
  `}
    ${respondTo.sm`
  `}
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
  ${respondTo.xs`
    margin-left: 10%;
    grid-column: 1 / span 2;
    width: 85%;
    h1 {
      font-size: 45px;
    }
  `}
    ${respondTo.sm`
    grid-column: 2 / span 4;
      h1 {
        font-size: 6vw;
      }
  `}
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
  ${respondTo.xs`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-column: 1 / 3;
    grid-row: 3;
    transform: none;
    h1 {
      border-right: 10px solid #f0ea49;
      border-top: none;
      writing-mode: horizontal-tb;
      font-size: 36px;
      padding: 0px 15px;
      margin: 0px;
    }
    transition: 2s;
    transform: ${({ state }) =>
    state === "exiting" || state === "exited"
      ? "translateY(100rem)"
      : ""};
  `}
    ${respondTo.sm`
    h1 {
      font-size: 9vh;
    }
  `}
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
  ${respondTo.xs`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-column: 1 / 3;
    grid-row: 4;
    transform: none;
    h1 {
      border-right: 10px solid white;
      border-top: none;
      writing-mode: horizontal-tb;
      font-size: 36px;
      padding: 0px 15px;
      margin: 0px;
    }
    transition: 2s;
    transform: ${({ state }) =>
    state === "exiting" || state === "exited"
      ? "translateY(100rem)"
      : ""};
  `}
    ${respondTo.sm`
        h1 {
      font-size: 9vh;
    }
  `}
`
const DevelopH1 = styled.h1``
const DesignH1 = styled.h1``
const ProduceH1 = styled.h1``

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
  ${respondTo.xs`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-column: 1 / 3;
    grid-row: 5;
    transform: none;
    h1 {
      border-right: 10px solid #f0ea49;
      border-top: none;
      writing-mode: horizontal-tb;
      font-size: 36px;
      padding: 0px 15px;
      margin: 0px;
    }
    transition: 2s;
    transform: ${({ state }) =>
    state === "exiting" || state === "exited"
      ? "translateY(100rem)"
      : ""};
  `}
    ${respondTo.sm`
        h1 {
      font-size: 9vh;
    }
  `}
`

const Nav = styled.ul`
  grid-column-start: 6;
  grid-row-start: 6;
  align-items: center;
  list-style: none;
  li {
    font-size: 1.5vw;
    span {
      margin-bottom: 15px;
      padding-bottom: 3px;
    }
  }
  animation: 3s ${fadeInAnimation};
  transition: 2s;
  opacity: ${({ state }) =>
    state === "exiting" || state === "exited" ? 0 : 100};

  ${respondTo.xs`
    display: none;
  `}
    ${respondTo.sm`
    width: 80%;
    grid-column-start: 4;
    grid-row-start: 6;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    li {
      font-size: 2vh;
    }
  `}
`
const NavP = styled.p`
  width: 35%;
  border-bottom: 5px solid white;
  color: #d6ffb7;
  font-style: italic;
  :hover {
    cursor: pointer;
  }
  ${respondTo.sm`
    width: 100%;
  `}
`
export default Landing

import React from "react"
import styled from "styled-components"
const BackgroundBars = () => {
  return (
    <Background>
      <div
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
      <Dev><h1>Developer</h1></Dev>
    </Background>
  )
}

const Background = styled.div`
  display: grid;
  grid-template-columns: 16% 16% 16% 16% 16% auto;
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
    font-size: 3rem;
    font-style: italic;
  }
`

const Dev = styled.div`
  grid-column-start: 1;
  grid-row-start: 6;
  text-transform: uppercase;
  color: #f0ea49;
  transform: rotate(180deg);
  h1 {
    font-size: 6rem;
    writing-mode: vertical-rl;
  }
`
export default BackgroundBars

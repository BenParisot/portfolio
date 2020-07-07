import React from "react"
import styled from "styled-components"
const BackgroundBars = () => {
  return (
    <Background>
      <div
        style={{
          gridColumnStart: "1",
          gridRowStart: "1",
          gridRowEnd: "6",
          backgroundColor: "#F04D4D",
        }}
      ></div>
      <div
        style={{
          gridColumnStart: "2",
          gridRowStart: "1",
          gridRowEnd: "6",
          backgroundColor: "#ED4B64",
        }}
      ></div>
      <div
        style={{
          gridColumnStart: "3",
          gridRowStart: "1",
          gridRowEnd: "6",
          backgroundColor: "#F04D4D",
        }}
      ></div>
      <div
        style={{
          gridColumnStart: "4",
          gridRowStart: "1",
          gridRowEnd: "6",
          backgroundColor: "#F26639",
        }}
      ></div>
      <div
        style={{
          gridColumnStart: "5",
          gridRowStart: "1",
          gridRowEnd: "6",
          backgroundColor: "#ED4B64",
        }}
      ></div>
      <div
        style={{
          gridColumnStart: "6",
          gridRowStart: "1",
          gridRowEnd: "6",
          backgroundColor: "#F04D4D",
        }}
      ></div>
      <Slogan>
        <h1>Ben can help you build that.</h1>
      </Slogan>
    </Background>
  )
}

const Background = styled.div`
  display: grid;
  grid-template-columns: 16% 16% 16% 16% 16% auto;
  grid-template-rows: auto auto auto auto auto auto;
  width: 100vw;
  height: 120vh;
`

const Slogan = styled.div`
  text-transform: uppercase;
  color: #f0ea49;
  grid-column: 3 / span 4;
  grid-row-start: 1;
  position: relative;
  h1 {
    font-size: 3rem;
  }
`

export default BackgroundBars

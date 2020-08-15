import React from "react"
import styled, { keyframes } from "styled-components"
import { fadeIn, slideInLeft } from "react-animations"
import { respondTo } from '../styling/respondTo'

const SectionTitle = props => {
  const { title } = props
  return (
    <>
      <TitleBackground />
      <Title>{title}</Title>
    </>
  )
}

const slideInLeftAnimation = keyframes`${slideInLeft}`
const fadeInAnimation = keyframes`${fadeIn}`

const Title = styled.h1`
  animation: 1s ${slideInLeftAnimation};
  text-transform: uppercase;
  color: #f04d4d;
  font-size: 3.5vw;
  font-style: italic;
  grid-column: 2 / span 4;
  grid-row-start: 2;
  margin: auto 0;
  ${respondTo.xs`
    grid-row: 1
    font-size: 36px;
    margin-top: 35px;
  `}

`

const TitleBackground = styled.div`
  animation: 1s ${fadeInAnimation};
  background-color: #f0ea49;
  height: 100%;
  grid-column: 1 / span 3;
  grid-row-start: 2;
  ${respondTo.xs`
    grid-row: 1
    grid-column: 1 / span 5;
  `}
`

export default SectionTitle

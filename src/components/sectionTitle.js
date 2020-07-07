import React from "react"
import styled from "styled-components"

const SectionTitle = children => {
  const { title } = children
  return (
    <>
      <TitleBackground />
      <Title>{title}</Title>
    </>
  )
}

const Title = styled.h1`
  text-transform: uppercase;
  color: #f04d4d;
  font-size: 3.5vw;
  font-style: italic;
  grid-column: 2 / span 4;
  grid-row-start: 2;
`

const TitleBackground = styled.div`
  background-color: #f0ea49;
  height: 11vw;
  grid-column: 1 / span 3;
  grid-row-start: 2;
`

export default SectionTitle

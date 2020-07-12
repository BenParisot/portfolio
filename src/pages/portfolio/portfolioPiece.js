import React from 'react'
import styled from 'styled-components'

const PortfolioPiece = props => {
  const { imgUrl, link, title } = props
  return (
    <PortfolioPieceContainer>
      <Image>
        <a href={link} target="blank"><img src={imgUrl} alt={title} /></a>
      </Image>
    </PortfolioPieceContainer>
  )
}

const PortfolioPieceContainer = styled.div` 
  display: flex;
  flex-wrap: wrap;
`
const Image = styled.div` 
  width: 100%;
`

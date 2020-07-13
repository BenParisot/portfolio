import React from 'react'
import styled from 'styled-components'

const PortfolioPiece = props => {
  const { imgUrl, link, title } = props
  console.log('props', props)
  return (
    <PortfolioPieceContainer>
      <Image>
        <a href={link} target="blank"><img src={imgUrl} alt={title} /></a>
      </Image>
    </PortfolioPieceContainer>
  )
}

const PortfolioPieceContainer = styled.div` 
  width: 100%;
`
const Image = styled.div` 
    a {
      text-decoration: none;
    }
  width: 100%;
`

export default PortfolioPiece

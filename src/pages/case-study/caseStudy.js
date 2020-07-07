import React from "react"
import styled from "styled-components"

const CaseStudy = props => {
  const { title, description, imgUrl } = props
  return (
    <CaseStudyContainer>
      <Title>
        <h4>{title}</h4>
      </Title>
      <Description>
        <p>{description}</p>
      </Description>
      <Image>
        <img src={imgUrl} alt={title} />
      </Image>
      <Link>Learn More</Link>
    </CaseStudyContainer>
  )
}

const CaseStudyContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 40% 50%;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 10vh;
  background-color: #ed4b64;
  padding-left: 35px;
  h4 {
    text-transform: uppercase;
    margin: 0;
  }
`

const Description = styled.div``

const Image = styled.div`
  width: 60%;
  grid-column: 3;
`

const Link = styled.a``

export default CaseStudy

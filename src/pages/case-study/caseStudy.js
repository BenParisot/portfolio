import React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"
import { respondTo } from '../../styling/respondTo'

const CaseStudy = props => {
  const { title, description, imgUrl, linkUrl } = props
  console.log('props', props)
  return (
    <CaseStudyContainer>
      <Title>
      <Link
        // className="post-link"
        to={`/${linkUrl}`}
                        >
        {title}
      </Link>
      </Title>
      <Image>
        <img src={imgUrl} alt={title} />
      </Image>
      <Description>
        <p>{description}</p>
        <a target="blank" href="google.com">Learn More</a>
      </Description>
    </CaseStudyContainer>
  )
}

const CaseStudyContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 30% 5% 55%;
  grid-template-rows: 10% 15% 10% 65%;
  ${respondTo.xs`
    display: flex;
    flex-direction: column;
    margin-bottom: 85px;
  `}
`

const Title = styled.div`
  grid-column: 2 / span 5;
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
  ${respondTo.xs`
    width: 100%;
    height: 60px;
  `}
`

const Description = styled.div`
  grid-column: 1 / span 3;
  grid-row-start: 3;
  padding-right: 1rem;
  a {
    margin-left: 20%;
    text-transform: uppercase;
  }
  ${respondTo.xs`
    a {
      margin: 0px;
    }
    text-align: center;
    `}
`

const Image = styled.div`
  width: 100%;
  grid-column: 4 / span 3;
  z-index: -10;
`

export default CaseStudy

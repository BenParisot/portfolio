import React from 'react'
import styled from 'styled-components'
import SectionTitle from "../../components/sectionTitle"

const Designer = () => {
  const title = `Ben Parisot, Digital Designer`
  const caseStudies = [
    {
      title: "Weather.",
      description:
        "A serverless web app that takes a user-entered United States zip code and draws an interactive 12-hour temperature forecast line graph using the D3 visualization library.",
      imgUrl: "https://www.benparisot.com/static/media/weather.a1c06284.jpg",
    },
    {
      title: "Weather.",
      description:
        "A serverless web app that takes a user-entered United States zip code and draws an interactive 12-hour temperature forecast line graph using the D3 visualization library.",
      imgUrl: "https://www.benparisot.com/static/media/weather.a1c06284.jpg",
    },
    {
      title: "Weather.",
      description:
        "A serverless web app that takes a user-entered United States zip code and draws an interactive 12-hour temperature forecast line graph using the D3 visualization library.",
      imgUrl: "https://www.benparisot.com/static/media/weather.a1c06284.jpg",
    },
  ]
  return (
    <DesignerMain>
      <SectionTitle title={title} />
      <Description>
      I’m an experienced UX/UI designer and digital illustrator with a passion for bright colors, clean layouts, and rich, dramatic photography. I also dabble in generative and interactive art using programs like TouchDesigner, Resolume, and MadMapper.
      </Description>
      <Portfolio>
        <h3>Portfolio Work:</h3>
      </Portfolio>
    </DesignerMain>
  )
}

const DesignerMain = styled.div` 
  width: 100vw;
  height: 100%;
  display: grid;
  padding-bottom: 50px;
  grid-template-columns: 16% 16% 16% 16% auto 16%;
  grid-template-rows: 125px 165px 85px 5% 16%;
`

const Description = styled.div`
  grid-column: 3 / span 3;
  grid-row-start: 4;
`

const Portfolio = styled.div` 
  grid-column: 2 / span 4;
  grid-row-start: 5;
  h3 {
    text-transform: uppercase;
    margin-bottom: 35px;
  }
`

export default Designer

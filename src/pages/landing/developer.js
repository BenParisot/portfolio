import React from "react"
import styled from "styled-components"
import Nav from "../../components/nav"
import SectionTitle from "../../components/sectionTitle"
import CaseStudy from "../case-study/caseStudy"

const Developer = () => {
  const title = `Ben Parisot, Full Stack Dev`
  const caseStudies = [
    {
      title: "Weather.",
      description:
        "A serverless web app that takes a user-entered United States zip code and draws an interactive 12-hour temperature forecast line graph using the D3 visualization library.",
      imgUrl: "https://www.benparisot.com/static/media/weather.a1c06284.jpg",
    },
  ]

  const caseStudyList = caseStudies.map(caseStudy => {
    return (
      <CaseStudy
        title={caseStudy.title}
        description={caseStudy.description}
        imgUrl={caseStudy.imgUrl}
      />
    )
  })

  return (
    <DeveloperMain>
      <Nav />
      <SectionTitle title={title} />
      <Description>
        I’m a design-driven full stack engineer. I believe good design leads to
        clear product requirements and better technical understanding. Let's
        work together to build something elegant and useful.
      </Description>
      <CaseStudies>
        <h3>Case Studies:</h3>
        {caseStudyList}
      </CaseStudies>
    </DeveloperMain>
  )
}

const DeveloperMain = styled.div`
  width: 100vw;
  height: 100%;
  display: grid;
  grid-template-columns: 16% 16% 16% 16% auto 16%;
  grid-template-rows: 12% 16% 10% 16% 16% 16%;
`

const Description = styled.div`
  grid-column: 3 / span 3;
  grid-row-start: 4;
`
const CaseStudies = styled.div`
  grid-column: 2 / span 4;
  grid-row-start: 5;
  h3 {
    text-transform: uppercase;
  }
`
export default Developer

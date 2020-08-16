import React from "react"
import styled, { keyframes } from "styled-components"
import Nav from "../components/nav"
import SectionTitle from "../components/sectionTitle"
import CaseStudy from "./case-study/caseStudy"
import Footer from "../components/footer"
import { fadeIn, slideInUp } from 'react-animations'
import { respondTo } from '../styling/respondTo'
import { graphql } from 'gatsby'


const Developer = (props) => {
  const data = props.data.allMdx.edges
  console.log('data', data)
  const title = `Ben Parisot, Full Stack Dev`

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

  const caseStudyList = data.map(caseStudy => {
    return (
      <CaseStudy
        title={caseStudy.node.frontmatter.title}
        linkUrl={caseStudy.node.slug}
        // description={caseStudy.description}
        // imgUrl={caseStudy.imgUrl}
      />
    )
  })

  return (
    <>
      <DeveloperMain>
        <Nav location="Full Stack Developer" />
        <SectionTitle title={title} />
        <Description>
          I’m a design-driven full stack engineer. I believe good design leads
          to clear product requirements and better technical understanding.
          Let's work together to build something elegant and useful.
        </Description>
        <CaseStudies>
          <h3>Case Studies:</h3>
          {caseStudyList}
        </CaseStudies>
      </DeveloperMain>
      <Footer />
    </>
  )
}

const fadeInAnimation = keyframes`${fadeIn}`
const slideInUpAnimation = keyframes`${slideInUp}`

const DeveloperMain = styled.div`
  width: 100vw;
  height: 100%;
  display: grid;
  padding-bottom: 50px;
  grid-template-columns: 16% 16% 16% 16% auto 16%;
  grid-template-rows: 125px 135px 85px 5% 16%;
`

const Description = styled.div`
  animation: 2.5s ${fadeInAnimation};
  grid-column: 3 / span 3;
  grid-row-start: 4;
  ${respondTo.xs`
    grid-column: 2 / span 4;
    grid-row: 3;
  `}
`
const CaseStudies = styled.div`
  animation: 2s ${slideInUpAnimation};
  grid-column: 2 / span 4;
  grid-row-start: 5;
  h3 {
    text-transform: uppercase;
    margin-bottom: 35px;
  }
`
export default Developer

export const pageQuery = graphql`
query testStudyQuery {
  site {
    siteMetadata {
      title
      author
    }
  }
  allMdx(filter: {frontmatter:{type: {eq: "study"}}} sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        excerpt
        slug
        frontmatter {
          title
        }
      }
    }
  }
}
`

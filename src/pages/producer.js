import React from "react"
import styled, { keyframes } from "styled-components"
import Nav from "../components/nav"
import SectionTitle from "../components/sectionTitle"
import CaseStudy from "./case-study/caseStudy"
import Footer from '../components/footer'
import { fadeIn, slideInUp } from 'react-animations'
import { respondTo } from '../styling/respondTo'
import { graphql } from 'gatsby'

const Producer = (props) => {
  const data = props.data.allMdx.edges
  console.log('data', data)
  const title = `Ben Parisot, Digital Producer`

  const caseStudyList = data.map(caseStudy => {
    return (
      <CaseStudy
        title={caseStudy.node.frontmatter.title}
        description={caseStudy.node.frontmatter.description}
        linkUrl={caseStudy.node.slug}
        imgUrl={caseStudy.imgUrl}
      />
    )
  })

  return (
    <>
    <ProducerMain>
      <Nav location="Producer" />
      <SectionTitle title={title} />
      <Description>
      I’m an experienced technical producer and product manager with over 10 years experience in web production and software development. I’ve run agile development teams for enterprise clients that regularly delivered shippable features against hard deadlines.
      </Description>
      <CaseStudies>
        <h3>Featured Projects:</h3>
        {caseStudyList}
      </CaseStudies>
    </ProducerMain>
      <Footer />
      </>
  )
}

const fadeInAnimation = keyframes`${fadeIn}`
const slideInUpAnimation = keyframes`${slideInUp}`

const ProducerMain = styled.div`
  width: 100vw;
  height: 100%;
  display: grid;
  padding-bottom: 50px;
  grid-template-columns: 16% 16% 16% 16% auto 16%;
  grid-template-rows: 125px 135px 85px 7% 16%;
  ${respondTo.xs`
    grid-template-rows: 125px 135px 75px 6% 16%;
  `}
`

const Description = styled.div`
  animation: 1.5s ${fadeInAnimation};
  grid-column: 3 / span 3;
  grid-row-start: 4;
  ${respondTo.xs`
    grid-column: 2 / span 4;
    grid-row: 3;
  `}
`
const CaseStudies = styled.div`
  animation: 1s ${slideInUpAnimation};
  grid-column: 2 / span 4;
  grid-row-start: 5;
  h3 {
    text-transform: uppercase;
    margin-bottom: 35px;
  }
  ${respondTo.xs`
  `}
`
export default Producer

export const pageQuery = graphql`
query producerStudyQuery {
  site {
    siteMetadata {
      title
      author
    }
  }
  allMdx(filter: {frontmatter:{type: {eq: "producer-study"}}} sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        excerpt
        slug
        frontmatter {
          title
          description
        }
      }
    }
  }
}

`

import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import { respondTo } from "../styling/respondTo"
import Nav from "../components/nav"
import SectionTitle from "../components/sectionTitle"

const ProducerStudyDetail = props => {
  console.log('component mounts')
  const study = props.data.mdx
  console.log("props", study.frontmatter)
  return (
    <ProducerStudyDetailContainer>
      <Nav />
      <SectionTitle title={study.frontmatter.title} />
      <blockquote>{study.frontmatter.description}</blockquote>
      <CaseStudySidebar>
        <h4>Timeline</h4>
        <p>{study.frontmatter.timeline}</p>
        <h4>Role</h4>
        <p>{study.frontmatter.role}</p>
      </CaseStudySidebar>
      <CaseStudyBody>
        <MDXRenderer>{study.body}</MDXRenderer>
      </CaseStudyBody>
    </ProducerStudyDetailContainer>
  )
}

const ProducerStudyDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 16% 16% 16% auto 16%;
  grid-template-rows: 125px 135px 85px 5% 16%;
  blockquote {
    grid-column: 2 / span 4;
    grid-row: 4;
    margin-left: 25px;
      ${respondTo.xs`
      margin: 45px;
  `}
  }
  ${respondTo.xs`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      text-align: center;
    }
  `}
`

const CaseStudyBody = styled.div`
  grid-column: 2 / span 4;
  grid-row: 5;
  padding-top: 0px;
  margin-left: 15px;
  img {
    width: 100%;
  }
  ${respondTo.xs`
    margin: 45px 15px 100px 15px;
  `}
`

const CaseStudySidebar = styled.aside`
  grid-column: 1;
  grid-row: 4;
  text-align: right;
  padding: 0px 25px 0px 35px;
  margin-top: 0px;
  h4 {
    margin: 0px 0px 20px 0px;
    line-height: 0.5;
  }
  p {
    color: #bbb;
    font-style: italic;
    margin-bottom: 40px;
  }
  ${respondTo.xs`
    margin: auto;
    padding: 45px 15px 0px 15px;
    p {
      color: black;
    }
    background-color: #f0ea49;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  `}
`

export default ProducerStudyDetail

export const pageQuery = graphql`
  query ProducerStudy($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        description
        tech
        timeline
        role
      }
    }
  }
`

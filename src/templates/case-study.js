import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Nav from "../components/nav"
import SectionTitle from "../components/sectionTitle"

const CaseStudyDetail = props => {
  const study = props.data.mdx
  console.log("props", study.frontmatter)
  return (
    <CaseStudyDetailContainer>
      <Nav />
      <SectionTitle title={study.frontmatter.title} />
      <CaseStudySidebar>
        <h4>Tech</h4>
        <p>{study.frontmatter.tech.map(tech => ` ${tech},`)}</p>
        <h4>Timeline</h4>
        <p>{study.frontmatter.timeline}</p>
        <h4>Role</h4>
        <p>{study.frontmatter.role}</p>
      </CaseStudySidebar>
      <CaseStudyBody>
        <blockquote>{study.frontmatter.description}</blockquote>
        <MDXRenderer>{study.body}</MDXRenderer>
      </CaseStudyBody>
    </CaseStudyDetailContainer>
  )
}

const CaseStudyDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 16% 16% 16% auto 16%;
  grid-template-rows: 125px 135px 85px 5% 16%;
`

const CaseStudyBody = styled.div`
  grid-column: 2 / span 4;
  grid-row: 5;
  padding-top: 0px;
  margin-left: 15px;
  blockquote {
    margin-left: 25px;
  }
  img {
    
    width: 100%;
  }
`

const CaseStudySidebar = styled.aside`
  grid-column: 1;
  grid-row: 5;
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
`

export default CaseStudyDetail

export const pageQuery = graphql`
  query CaseStudy($slug: String!) {
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

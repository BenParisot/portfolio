import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Nav from "../../components/nav"
import { render } from 'react-dom'

class CaseStudyDetail extends React.Component {
  // const study = this.props.data.mdx
  render() {
    console.log("post", this.props)
    return (
      <CaseStudyDetailContainer>
        <Nav />
        <h1>Case study test</h1>
      </CaseStudyDetailContainer>
    )

  }
}

const CaseStudyDetailContainer = styled.div``
export default CaseStudyDetail

export const pageQuery = graphql`
  query CaseStudyBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        keywords
        heroImage
      }
    }
  }
`

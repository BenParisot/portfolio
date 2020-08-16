import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Nav from "../../components/nav"

const CaseStudyDetail = () => {
  // const study = this.props.data.mdx
    const data = useStaticQuery(graphql`
      query testStudyQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              frontmatter {
                title
              }
            }
          }
        }
      }
    `)
    console.log('data', data)
    return (
      <CaseStudyDetailContainer>
        <Nav />
        <h1>Case study test</h1>
      </CaseStudyDetailContainer>
    )


}

const CaseStudyDetailContainer = styled.div``
export default CaseStudyDetail

// export const pageQuery = graphql`
//   query CaseStudyBySlug($slug: String! ) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     mdx(fields: { slug: { eq: $slug } }) {
//       id
//       body
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `

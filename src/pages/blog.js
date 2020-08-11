import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import Nav from "../components/nav"
import styled, { keyframes } from "styled-components"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const datedPosts = posts.map(({ node }) => ({
      ...node,
      date: new Date(node.frontmatter.date),
    }))
    const sortedPosts = datedPosts.sort((a, b) => b.date - a.date)
    console.log("sorted posts", sortedPosts)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <BlogList>
          <Nav />
          <SEO title="All posts" />
          {/* <Bio /> */}
          <div>
            {sortedPosts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              return (
                <div key={post.fields.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link
                      style={{ boxShadow: `none` }}
                      to={`/blog${post.fields.slug}`}
                    >
                      {title}
                    </Link>
                  </h3>
                  <small>{post.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                  />
                </div>
              )
            })}
          </div>
          <Link to="/">
            <Button marginTop="85px">Go Home</Button>
          </Link>
        </BlogList>
      </Layout>
    )
  }
}

export default Blog

const BlogList = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Nav from "../components/nav"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import styled, { keyframes } from "styled-components"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <BlogPostContainer>
          <Nav />
          <BlogPostHero>
            <h1>{post.frontmatter.title}</h1>
          </BlogPostHero>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <BlogPostArea>
            <p
              className="date-tags"
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
              <br />
              coding, management philosophy, technical projects, project
              management
            </p>
            <div className="post-body">
              <MDXRenderer className="post-body">{post.body}</MDXRenderer>
            </div>
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <Bio />

            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={`/blog${previous.fields.slug}`} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={`/blog${next.fields.slug}`} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </BlogPostArea>
        </BlogPostContainer>
      </Layout>
    )
  }
}

const BlogPostContainer = styled.div`
  display: grid;
`

const BlogPostHero = styled.div`
  height: 35vh;
  background-color: green;
`

const BlogPostArea = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  .date-tags {
    grid-column-start: 1;
  }
  .post-body {
    grid-column-start: 2;
  }
`

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
      }
    }
  }
`

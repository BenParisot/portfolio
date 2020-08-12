import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Nav from "../components/nav"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log('post', post)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <BlogPostContainer>
          <Nav />
          <BlogPostHero>
            <span>
              <h1>{post.frontmatter.title}</h1>
            </span>
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
              {post.frontmatter.keywords.map(keyword => `${keyword}, `)}
              coding, management philosophy, technical projects, project
              management
            </p>
            <div className="post-body">
              <MDXRenderer className="post-body">{post.body}</MDXRenderer>
            </div>
            <div className="bio">
              <Bio />
            </div>
            <div className="post-nav">
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
            </div>
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
  background: url(https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
  padding-left: 16.6%;
  margin-bottom: 3rem;
  h1 {
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    color: white;
    font-size: 5vw;
    padding: 20px;
    background-color: rgba(240, 77, 77, 0.6);
  }
`

const BlogPostArea = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 15%;
  .date-tags {
    grid-column-start: 1;
    margin-right: 15%;
    padding-left: 25%;
    color: #ababab;
    text-align: right;
    font-style: italic;
    p {
      margin-bottom: 1rem;
    }
  }
  .post-body {
    grid-column-start: 2;
    padding-right: 4rem;
    blockquote {
      margin-left: 1em;
    }
  }
  .post-nav {
    margin-top: 25px;
    grid-column-start: 2;
    a {
      font-family: Montserrat, sans-serif;
      text-transform: uppercase;
      color: #f04d4d;
      font-weight: bold;
    }
  }
  .bio {
    grid-row-start: 1;
    grid-column-start: 3;
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

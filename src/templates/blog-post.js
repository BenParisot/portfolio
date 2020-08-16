import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Nav from "../components/nav"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import { respondTo } from "../styling/respondTo"
import Footer from "../components/footer"

class BlogPostTemplate extends React.Component {
  render() {
    console.log("this.props", this.props)
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <BlogPostContainer>
          <Nav />
          <BlogPostHero post={post}>
            <h1>{post.frontmatter.title}</h1>
          </BlogPostHero>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <BlogPostArea>
            <div className="bio-container">
              <Bio />
            </div>
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
              {post.frontmatter.keywords?.map(keyword => `${keyword}, `)}
            </p>
            <div className="post-body">
              <MDXRenderer className="post-body">{post.body}</MDXRenderer>
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
          <Footer />
        </BlogPostContainer>
      </Layout>
    )
  }
}

const BlogPostContainer = styled.div`
  display: grid;
  ${respondTo.xs`
    display: flex;
    flex-direction: column;
  `}
`

const BlogPostHero = styled.div`
  height: 35vh;
  background: url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80");
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
  ${respondTo.xs`
    height: 100%;
    h1 {
      font-size: 36px;
    }
  `}
`

const BlogPostArea = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 15%;
  .bio-container {
    grid-row: 1;
    grid-column: 3;
  }
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
    ${respondTo.xs`
      text-align: left;
      padding: 0px;
      margin-right: 0px;
    `}
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
  ${respondTo.xs`
    display: flex;
    flex-direction: column;
    padding: 0px 25px;
    .post-body {
      padding: 0px;
    }
  `}
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
        keywords
        heroImage
      }
    }
  }
`

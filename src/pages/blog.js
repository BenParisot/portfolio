import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import Nav from "../components/nav"
import styled, { keyframes } from "styled-components"
import SectionTitle from "../components/sectionTitle"

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
        <BlogListContainer>
          <Nav />
          <BlogListHero>
            <div></div>
            <h1>Here Codes Nothing!</h1>
            <p>A blog about creative coding, design, and trying new things.</p>
          </BlogListHero>
          <SEO title="All posts" />
          {/* <Bio /> */}
          <BlogList>
            {sortedPosts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              return (
                <>
                  <BlogListing key={post.fields.slug}>
                    <div className="date-tags">
                      <p>
                        <small>{post.frontmatter.date}</small>
                      </p>
                      <p>
                        <small>
                          coding, management philosophy, technical projects,
                          project management
                        </small>
                      </p>
                    </div>
                    <div className="teaser">
                      <img
                        src="https://cdn.windowsreport.com/wp-content/uploads/2018/11/user-typing-on-laptop.jpg"
                        alt="typing"
                      />
                      <div>
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
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                        />
                        <Link className="post-link" to={`/blog${post.fields.slug}`}>
                          Read Post &gt;&gt;
                        </Link>
                      </div>
                    </div>
                  </BlogListing>
                  <hr />
                </>
              )
            })}
          </BlogList>
        </BlogListContainer>
      </Layout>
    )
  }
}

export default Blog

const BlogListContainer = styled.div``

const BlogListHero = styled.div`
  height: 35vh;
  display: grid;
  grid-template-columns: 16.66% 16.66% 16.66% 16.66% auto auto;
  grid-template-rows: auto 33% 33%;
  background-color: #f04d4d;
  grid-column: 1 / span 2;
  div {
    grid-column: 1 / 3;
    grid-row-start: 2;
    background-color: #f26639;
  }
  h1 {
    color: #f0ea49;
    text-transform: uppercase;
    font-style: italic;
    font-size: 3.5vw;
    grid-column: 2 / 5;
    grid-row-start: 2;
    margin: auto 0;
  }
  p {
    grid-column: 4 / 6;
    grid-row-start: 3;
    color: white;
    margin: auto 0;
    font-size: 1.25vw;
  }
`

const BlogList = styled.div`
  margin-top: 100px;
  hr {
    margin: 5% 25%;
    height: 5px;
    background-color: #f0ea49;
  }
`

const BlogListing = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 15%;
  .date-tags {
    grid-column-start: 1;
    margin-right: 7%;
    padding-left: 35%;
    color: #ababab;
    text-align: right;
    font-style: italic;
    p {
      margin-bottom: 1rem;
    }
  }
  .teaser {
    display: flex;
    grid-column: 2 / span 2;
    height: 100%;
    div {
      margin-left: 5%;
    }
    img {
      width: 25%;
      margin-bottom: 0;
    }
    h3 a {
      font-family: Montserrat, sans-serif;
      margin-top: 0;
      text-transform: uppercase;
      color: #f04d4d;
      font-style: italic;
      font-weight: bold;
    }
    .post-link {
      font-family: Montserrat, sans-serif;
      text-transform: uppercase;
      text-decoration: none;
      box-shadow: none;
      font-size: 1.5vh;
      color: black;
      font-weight: bold;
    }
  }
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

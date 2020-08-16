import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Nav from "../components/nav"
import styled from "styled-components"
import Footer from "../components/footer"
import { respondTo } from "../styling/respondTo"

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
          <BlogList>
            {sortedPosts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              console.log("post", post)
              return (
                <>
                  <BlogListing key={post.fields.slug}>
                    <div className="date-tags">
                      <p>
                        <small>{post.frontmatter.date}</small>
                      </p>
                      <p>
                        <small>
                          {post.frontmatter.keywords?.map(
                            keyword => `${keyword}, `
                          )}
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
                        <Link
                          className="post-link"
                          to={`/blog${post.fields.slug}`}
                        >
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
        <Footer />
      </Layout>
    )
  }
}

export default Blog

const BlogListContainer = styled.div``

const BloglistBio = styled.div`
  ${respondTo.xs`
    display: none;
  `}
`

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
    background-color: #ed4b64;
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
  ${respondTo.xs`
    height: 200px;
    div {
      grid-row: 1 / span 2;
      grid-column: 1 / span 4;
    }
    h1 {
      grid-row: 2;
      grid-column: 2 / span 4
      font-size: 36px;
      margin-bottom: 10px;
    }
    p {
      grid-column: 3 / span 3;
      font-size: 16px;
      background-color: #f0ea49;
      padding: 5px 15px;
      margin-top: 30px;
      color: black;
      font-style: italic;
    }
  `}
`

const BlogList = styled.div`
  margin-top: 100px;
  hr {
    margin: 5% 25%;
    height: 5px;
    background-color: #f0ea49;
    ${respondTo.xs`
    margin: 15% 25%;
  `}
  }
`

const BlogListing = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 15%;
  ${respondTo.xs`
    grid-template-rows: 50% 50%;
    padding-left: 25px;
  `}
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
    ${respondTo.xs`
      display: none;
    `}
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
      ${respondTo.xs`
        width: 80px;
        height: 80px;
      `}
    }
    h3,
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
      font-size: 1.5vh;
      color: black;
      font-weight: bold;
    }
    ${respondTo.xs`
      grid-column: 1 / span 3;
    `}
  }
`

export const pageQuery = graphql`
  query BlogListQuery {
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
            keywords
          }
        }
      }
    }
  }
`

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const caseStudy = path.resolve(`./src/templates/case-study.js`)
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                type
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.

    const posts = result.data.allMdx.edges
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      console.log("post", post)
      if (post.node.frontmatter.type === "blog") {
        createPage({
          path: `${post.node.fields.slug}`,
          component: blogPost,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        })
      }
      if (post.node.frontmatter.type === 'study') {
        createPage({
          path: `${post.node.fields.slug}`,
          component: caseStudy,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        })
      }
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

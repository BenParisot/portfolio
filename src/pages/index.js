import React from "react"
import Landing from "../pages/landing/landing"

import Layout from "../components/layout"
// import SEO from "../components/seo"
class IndexPage extends React.Component {
  render() {
    const location = this.props.location
    console.log("location", location)
    const siteTitle = "Ben Parisot Design & Development"
    return (
      <Layout location={this.props.children} title={siteTitle}>
        {/* <SEO title="Home" /> */}
        <Landing />
      </Layout>
    )
  }
}

export default IndexPage

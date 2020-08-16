import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Nav from "../components/nav"
import SectionTitle from "../components/sectionTitle"

const CaseStudyDetail = props => {
  const study = props.data.mdx
  console.log("props", study)
  return (
    <CaseStudyDetailContainer>
      <Nav />
      <SectionTitle title={study.frontmatter.title} />
      <CaseStudySidebar>
        <h4>Tech</h4>
        <p>Node.js, Express, React/Redux, MongoDB</p>
        <h4>Timeline</h4>
        <p>Six working days</p>
        <h4>Role</h4>
        <p>Front-end lead, scrummaster</p>
      </CaseStudySidebar>
      <CaseStudyBody>
        <h3>Nunc gravida nisi felis, in venenatis neque blandit maximus. Duis
        volutpat, mauris sed blandit rhoncus, nibh massa molestie diam, ac
        feugiat magna velit a mi. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vestibulum nec consectetur massa, non porta felis.
        Curabitur justo velit, varius sed euismod et, tempor vel felis. Sed
        molestie, ante at mollis rutrum, ante velit fermentum massa, sed dapibus
        mauris dolor cursus quam. Mauris tempus et mauris id commodo.</h3>

        <p>Suspendisse potenti. Pellentesque tortor risus, dictum sit amet libero
        vel, scelerisque sollicitudin ligula. In hac habitasse platea dictumst.
        Vestibulum non laoreet turpis, a pulvinar nunc. Donec aliquam tristique
        sem, nec pharetra leo pulvinar eu. In lorem velit, viverra nec ipsum ac,
        congue viverra lectus. Nunc egestas mi leo, a semper libero rutrum id.
        Aliquam bibendum, dolor sit amet sodales viverra, velit nisl posuere
        neque, at efficitur neque ante eget lorem. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Nunc
        gravida nisi felis, in venenatis neque blandit maximus. Duis volutpat,
        mauris sed blandit rhoncus, nibh massa molestie diam, ac feugiat magna
        velit a mi. Mauris consectetur ut libero et elementum. Phasellus a nibh
        in ligula consequat congue. Duis nec blandit ante, non lacinia leo.
        Donec at magna lacinia, volutpat lectus tincidunt, hendrerit nisi.
        Praesent vestibulum, elit a dictum iaculis, odio mi congue orci, quis
        elementum odio lectus at mi. In hac habitasse platea dictumst. Sed
        interdum mollis lacus vel scelerisque. Donec et vestibulum augue. Ut ac
        bibendum tellus, vitae aliquam purus. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Curabitur eu velit ipsum. Aenean
        fringilla hendrerit ex, eget luctus magna efficitur sit amet. Quisque
        hendrerit auctor maximus. Mauris rutrum turpis in tempus finibus. Sed
        ornare auctor quam id gravida. Suspendisse nunc sapien, vulputate ut
        facilisis quis, rutrum non metus. Nulla vel imperdiet arcu. Nullam eu
        finibus ipsum. Vivamus eu erat volutpat, placerat dolor at, volutpat
        enim. Phasellus nibh felis, rutrum quis sem a, commodo pellentesque
        turpis. Ut scelerisque tincidunt tristique. Aliquam erat volutpat. Nulla
        est orci, placerat mollis lacus id, fermentum cursus nisi. Etiam
        ullamcorper ipsum vel dui porttitor pulvinar. Sed aliquam nibh lectus,
        quis interdum massa convallis in. Phasellus sed nisi consequat, feugiat
        sem ut, malesuada purus. Vivamus ullamcorper odio enim, non iaculis
        lacus blandit non. Ut tempor, ligula sed dignissim ornare, magna neque
        volutpat nisl, non tempor ex odio at tellus. Etiam a erat a tellus
        tempus vulputate. Integer tempor iaculis orci id lacinia. Proin vel quam
        scelerisque, tristique turpis a, maximus lectus. Praesent a magna id
        ligula sollicitudin consequat.</p>
      </CaseStudyBody>
    </CaseStudyDetailContainer>
  )
}

const CaseStudyDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 16% 16% 16% 16% auto 16%;
  grid-template-rows: 125px 135px 85px 5% 16%;
`

const CaseStudyBody = styled.div`
  grid-column: 2 / span 4;
  grid-row: 5;
`

const CaseStudySidebar = styled.aside`
  grid-column: 1;
  grid-row: 5;
`

export default CaseStudyDetail

export const pageQuery = graphql`
  query CaseStudy($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

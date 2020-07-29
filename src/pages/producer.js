import React from "react"
import styled, { keyframes } from "styled-components"
import Nav from "../components/nav"
import SectionTitle from "../components/sectionTitle"
import CaseStudy from "./case-study/caseStudy"
import Footer from '../components/footer'
import { fadeIn, slideInUp } from 'react-animations'

const Producer = () => {
  const title = `Ben Parisot, Digital Producer`
  const caseStudies = [
    {
      title: "Ben 10: Alien Experience.",
      description:
        "An immersive level-based AR shooter for iOS and Android; 12-member project team; 1 year development time.",
      imgUrl: "https://i.ytimg.com/vi/Pp_uCjtuSjE/maxresdefault.jpg",
    },
    {
      title: "Oracle Autonomous Runner.",
      description:
        "Touchscreen racing game for Oracle Open World SF and Oracle Headquarters; 8-member project team; 5 month development time.",
      imgUrl: "https://heliosinteractive.com/wordpress/wp-content/uploads/2018/12/OR_1.jpg",
    },
    {
      title: "Druva Climbing Challenge feat. The Mountain.",
      description:
        "Motion-activated climbing simulator; 7-member project team; 4 month development time;",
      imgUrl: "https://heliosinteractive.com/wordpress/wp-content/uploads/2018/11/Druva_2.jpg",
    },
  ]

  const caseStudyList = caseStudies.map(caseStudy => {
    return (
      <CaseStudy
        title={caseStudy.title}
        description={caseStudy.description}
        imgUrl={caseStudy.imgUrl}
      />
    )
  })

  return (
    <>
    <ProducerMain>
      <Nav />
      <SectionTitle title={title} />
      <Description>
      I’m an experienced technical producer and product manager with over 10 years experience in web production and software development. I’ve run agile development teams for enterprise clients that regularly delivered shippable features against hard deadlines. I have a supportive and empathetic leadership style and view the health and happiness of my team as my top management priority.
      </Description>
      <CaseStudies>
        <h3>Featured Projects:</h3>
        {caseStudyList}
      </CaseStudies>
    </ProducerMain>
      <Footer />
      </>
  )
}

const fadeInAnimation = keyframes`${fadeIn}`
const slideInUpAnimation = keyframes`${slideInUp}`

const ProducerMain = styled.div`
  width: 100vw;
  height: 100%;
  display: grid;
  padding-bottom: 50px;
  grid-template-columns: 16% 16% 16% 16% auto 16%;
  grid-template-rows: 125px 165px 85px 5% 16%;
`

const Description = styled.div`
  animation: 1.5s ${fadeInAnimation};
  grid-column: 3 / span 3;
  grid-row-start: 4;
`
const CaseStudies = styled.div`
  animation: 1s ${slideInUpAnimation};
  grid-column: 2 / span 4;
  grid-row-start: 5;
  h3 {
    text-transform: uppercase;
    margin-bottom: 35px;
  }
`
export default Producer

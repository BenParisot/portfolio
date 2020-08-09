import React from "react"
import styled, { keyframes } from "styled-components"
import SectionTitle from "../components/sectionTitle"
import Gallery from "react-photo-gallery"
import Nav from "../components/nav"
import Footer from "../components/footer"
import { fadeIn, slideInUp } from 'react-animations'

const Designer = () => {
  const title = `Ben Parisot, Digital Designer`
  const portfolio = [
    {
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e9b7f697968771.5ed150001fccb.jpg",
      width: 1200,
      height: 889,
    },
    {
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e03c8e97968771.5ed150001ec0a.jpg",
      width: 1200,
      height: 667,
    },
    {
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/21b00197968771.5ed172c99c343.jpg",
      width: 1200,
      height: 962,
    },
    {
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/27556d97968771.5ed150001f157.jpg",
      width: 1200,
      height: 1600,
    },
    {
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e9b7f697968771.5ed150001fccb.jpg",
      width: 1200,
      height: 889,
    },
    {
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7cebd097968771.5ed150001f70d.jpg",
      width: 1200,
      height: 675,
    },
    {
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/27556d97968771.5ed150001f157.jpg",
      width: 1200,
      height: 1600,
    },
    {
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e9b7f697968771.5ed150001fccb.jpg",
      width: 1200,
      height: 889,
    },
    {
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7cebd097968771.5ed150001f70d.jpg",
      width: 1200,
      height: 675,
    },
  ]

  return (
    <>
      <DesignerMain>
        <Nav location="Digital Designer" />
        <SectionTitle title={title} />
        <Description>
          I’m an experienced UX/UI designer and digital illustrator with a
          passion for bright colors, clean layouts, and rich, dramatic
          photography. I also dabble in generative and interactive art using
          programs like TouchDesigner, Resolume, and MadMapper.
        </Description>
        <Portfolio>
          <h3>Portfolio Work:</h3>
          {/* <ul>{portfolioList}</ul> */}
          <Gallery
            margin="4"
            columns="2"
            photos={portfolio}
            direction="column"
          />
        </Portfolio>
      </DesignerMain>
      <Footer />
    </>
  )
}

const fadeInAnimation = keyframes`${fadeIn}`
const slideInUpAnimation = keyframes`${slideInUp}`

const DesignerMain = styled.div`
  width: 100vw;
  height: 100%;
  display: grid;
  padding-bottom: 250px;
  grid-template-columns: 16% 16% 16% 16% auto 16%;
  grid-template-rows: 125px 165px 85px 150px auto;
`

const Description = styled.div`
  animation: 1.5s ${fadeInAnimation};
  grid-column: 3 / span 3;
  grid-row-start: 4;
`

const Portfolio = styled.div`
  animation: 1s ${slideInUpAnimation};
  grid-column: 2 / span 4;
  grid-row-start: 5;
  h3 {
    text-transform: uppercase;
    margin-bottom: 35px;
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  li {
    width: 45%;
    list-style: none;
  }
`

export default Designer
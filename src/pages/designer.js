import React, { useCallback } from "react"
import styled, { keyframes } from "styled-components"
import SectionTitle from "../components/sectionTitle"
import Gallery from "react-photo-gallery"
import Nav from "../components/nav"
import Footer from "../components/footer"
import { fadeIn, slideInUp } from "react-animations"

const Designer = () => {
  const title = `Ben Parisot, Digital Designer`
  const portfolio = [
    {
      key: "0",
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e9b7f697968771.5ed150001fccb.jpg",
      width: "4",
      height: "2",
    },
    {
      key: "1",
      title: "Blurh.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e03c8e97968771.5ed150001ec0a.jpg",
      width: 3,
      height: 2,
    },
    {
      title: "McGlurg.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/21b00197968771.5ed172c99c343.jpg",
      width: 2,
      height: 3,
    },
    {
      key: "2",
      title: "Yikes.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/27556d97968771.5ed150001f157.jpg",
      width: 4,
      height: 2,
    },
    {
      key: "3",
      title: "Mama.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e9b7f697968771.5ed150001fccb.jpg",
      width: 2,
      height: 2,
    },
    {
      key: "4",
      title: "Hoochie.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7cebd097968771.5ed150001f70d.jpg",
      width: 3,
      height: 2,
    },
    {
      key: "5",
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/27556d97968771.5ed150001f157.jpg",
      width: 2,
      height: 4,
    },
    {
      key: "6",
      title: "Donkey.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e9b7f697968771.5ed150001fccb.jpg",
      width: 3,
      height: 2,
    },
    {
      key: "7",
      title: "Show.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      src:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7cebd097968771.5ed150001f70d.jpg",
      width: 4,
      height: 2,
    },
  ]

  const ImageRenderer = useCallback(({ key, photo }) => (
    <Image
      key={key}
      photo={photo}
    />
  ))

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
          <Gallery
            margin="6"
            columns="2"
            photos={portfolio}
            direction={'column'}
            renderImage={(props) => <Image props={props} />}
          />
        </Portfolio>
      </DesignerMain>
      <Footer />
    </>
  )
}

const Image = ({ props }) => {
  console.log("photo", props)
  const { left, top, photo } = props
  return (
    <>
      <a target="blank" 
      href={photo.src} 
      style={{ boxShadow: 'none' }}
      >
        <img
          src={photo.src}
          alt={photo.title}
          width={photo.width}
          height={photo.height}
          style={{ display: 'block', position: 'absolute', left: left, top: top }}
        />
      </a>
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
  grid-template-rows: 125px 135px 85px 150px auto;
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
`

export default Designer

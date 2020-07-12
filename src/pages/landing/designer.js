import React from 'react'
import styled from 'styled-components'
import SectionTitle from "../../components/sectionTitle"
import PortfolioPiece from '../portfolio/portfolioPiece'

const Designer = () => {
  const title = `Ben Parisot, Digital Designer`
  const portfolio = [
    {
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      imgUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e9b7f697968771.5ed150001fccb.jpg",
    },
    {
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      imgUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e03c8e97968771.5ed150001ec0a.jpg",
    },
    {
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      imgUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/21b00197968771.5ed172c99c343.jpg",
    },
    {
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      imgUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/27556d97968771.5ed150001f157.jpg",
    },
    {
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      imgUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e9b7f697968771.5ed150001fccb.jpg",
    },
    {
      title: "Weather.",
      link: "https://www.behance.net/gallery/97968771/Misc-Web-Design",
      imgUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7cebd097968771.5ed150001f70d.jpg",
    },
  ]

  const portfolioList = portfolio.map(portfolioPiece => {
    return (
      <PortfolioPiece
        title={portfolioPiece.title}
        imgUrl={portfolioPiece.imgUrl}
        link={portfolioPiece.link}
      />
    )
  })
  return (
    <DesignerMain>
      <SectionTitle title={title} />
      <Description>
      I’m an experienced UX/UI designer and digital illustrator with a passion for bright colors, clean layouts, and rich, dramatic photography. I also dabble in generative and interactive art using programs like TouchDesigner, Resolume, and MadMapper.
      </Description>
      <Portfolio>
        <h3>Portfolio Work:</h3>
        {portfolioList}
      </Portfolio>
    </DesignerMain>
  )
}

const DesignerMain = styled.div` 
  width: 100vw;
  height: 100%;
  display: grid;
  padding-bottom: 50px;
  grid-template-columns: 16% 16% 16% 16% auto 16%;
  grid-template-rows: 125px 165px 85px 5% 16%;
`

const Description = styled.div`
  grid-column: 3 / span 3;
  grid-row-start: 4;
`

const Portfolio = styled.div` 
  grid-column: 2 / span 4;
  grid-row-start: 5;
  h3 {
    text-transform: uppercase;
    margin-bottom: 35px;
  }
`

export default Designer

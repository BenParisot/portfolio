import React from 'react'
import styled from 'styled-components'

const CaseStudy = (props) => {
  const { title, description, imgUrl } = props
  return (
    <>
      <p>{title}</p>
      <p>{description}</p>
      <img src={imgUrl} alt={title} />
      <p>Learn More</p>
    </>
  )

}

export default CaseStudy;

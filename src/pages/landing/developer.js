import React from "react"
import styled from "styled-components"
import Nav from "../../components/nav"
import SectionTitle from "../../components/sectionTitle"
const Developer = () => {
  const title = `Ben Parisot, Full Stack Dev`
  return (
    <DeveloperMain>
      <Nav />
      <SectionTitle title={title} />
    </DeveloperMain>
  )
}

const DeveloperMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 16% 16% 16% 16% auto 16%;
  grid-template-rows: 16% 16% auto 16% 16% 16%;
`
export default Developer

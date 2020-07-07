import React from 'react'
import styled from 'styled-components'
import Nav from '../../components/nav'

const Developer = () => {
  return (
    <DeveloperMain>
      <Nav />
      <h1>Developer section</h1>
    </DeveloperMain>
  )
}

const DeveloperMain = styled.div` 
  width: 100vw;
  height: 100vh;
  /* background-color: lightpink; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default Developer

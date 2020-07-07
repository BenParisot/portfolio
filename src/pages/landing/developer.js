import React from 'react'
import styled from 'styled-components'

const Developer = () => {
  return (
    <DeveloperMain>
      <h1>Developer section</h1>
    </DeveloperMain>
  )
}

const DeveloperMain = styled.div` 
  width: 100vw;
  height: 100vh;
  background-color: lightpink;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default Developer

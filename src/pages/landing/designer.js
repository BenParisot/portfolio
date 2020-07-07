import React from 'react'
import styled from 'styled-components'

const Designer = () => {
  return (
    <DesignerMain>
      <h1>Designer section</h1>
    </DesignerMain>
  )
}

const DesignerMain = styled.div` 
  width: 100vw;
  height: 100vh;
  background-color: lightcoral;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Designer

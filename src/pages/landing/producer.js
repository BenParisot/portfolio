import React from 'react'
import styled from 'styled-components'

const Producer = () => {
  return (
    <ProducerMain>
      <h1>Producer section</h1>
    </ProducerMain>
  )
}

const ProducerMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Producer

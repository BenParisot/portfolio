import React from "react"
import styled from "styled-components"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Wrapper>
        {children}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: "grid";
  grid-template-columns: "auto auto auto auto auto auto";
  width: "100vw";
  height: "120vh";
`

export default Layout

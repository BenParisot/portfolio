import React from "react"
import styled from "styled-components"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    // const rootPath = 'http://localhost:404/'
    // const blogPath = 'http://localhost:404//blog'

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

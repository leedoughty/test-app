import React, { Component } from 'react'
import styled from 'styled-components'

const Plus = styled.div`
  font-size: 30px;
  color: black;
  &:hover {
    color: #f1c40f; 
  }
`

class Add extends Component {
  render() {
    return (
      <Plus><h1>+</h1></Plus>
    )
  }
}

export default Add;

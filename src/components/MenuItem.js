import React, { useState } from 'react'
import styled from 'styled-components'

const StyledName = styled.p`
  width: 55%;
  /* background-color: red; */
`

const StyledContainer = styled.div`
  /* background-color: red; */
  margin-bottom: -25px;
`

const StyledDiv = styled.div`
  width: 35%;
  /* background-color: yellow; */
`

const StyledPrice = styled.p`
  width: 10%;
  /* background-color: green; */
`

function MenuItem({ name="Coffee", price=3 }) {
  let counter = 0
  return (
      <StyledContainer className="horizontal">
        <StyledName>{name}</StyledName>
          <StyledDiv>
            <button>-</button>
            <input style={{"width": "25px"}} type="text" placeholder={`${counter}`}></input>
            <button>+</button>
          </StyledDiv>
        <StyledPrice>${price}/ea</StyledPrice>
      </StyledContainer>
  )
}

export default MenuItem
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledName = styled.p`
  width: 55%;
`

const StyledContainer = styled.div`
  height: 30px;
`

const StyledDiv = styled.div`
  display: flex;
  width: 35%;
  align-items: center;
`

const StyledPrice = styled.p`
  width: 10%;
`

function MenuItem({ 
  name="Coffee", 
  price=3, 
  handleQuantityChange, 
  handleButtonClick, 
  inputValue,
  isClicked
}) {

  return (
    <StyledContainer className="horizontal">
      <StyledName>{name}</StyledName>
        <StyledDiv>
          <button onClick={() => handleButtonClick("minus", name, isClicked)} style={{"height": "25px"}}>-</button>
          <input id="quantity_input"
            onChange={e => handleQuantityChange(e, name)} 
            style={{"width": "25px", "height": "20px"}} 
            type="text" 
            value={`${inputValue}`}
            placeholder="0"
            >
          </input>
          <button onClick={() => handleButtonClick("plus", name, isClicked)} style={{"height": "25px"}}>+</button>
        </StyledDiv>
      <StyledPrice>${price.toFixed(2)}/ea</StyledPrice>
    </StyledContainer>
  )
}

export default MenuItem
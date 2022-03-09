import React, { useState } from 'react'
import styled from 'styled-components'

const StyledName = styled.p`
  width: 55%;
  /* background-color: red; */
`

const StyledContainer = styled.div`
  /* background-color: red; */
  /* margin-bottom: -25px; */
  height: 30px;
`

const StyledDiv = styled.div`
  width: 35%;
  /* background-color: yellow; */
`

const StyledPrice = styled.p`
  width: 10%;
  /* background-color: green; */
`




function MenuItem({ name="Coffee", price=3, handleQuantityChange, handleButtonClick, inputValue }) {

  return (
    <StyledContainer className="horizontal">
      <StyledName>{name}</StyledName>
        <StyledDiv>
          <button onClick={() => handleButtonClick("minus", name)} style={{"height": "25px"}}>-</button>
          <input 
            onChange={e => handleQuantityChange(e, name)} 
            style={{"width": "25px", "height": "20px"}} 
            type="text" 
            value={`${inputValue}`}

            placeholder="0"
            // placeholder={`${inputValue}`}
            >
          </input>
          <button onClick={() => handleButtonClick("plus", name)} style={{"height": "25px"}}>+</button>
        </StyledDiv>
      <StyledPrice>${price}/ea</StyledPrice>
    </StyledContainer>
  )
}

export default MenuItem
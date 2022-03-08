import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import styled from 'styled-components'
import TotalPrice from './TotalPrice'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function RightDisplay() {
  const [items, setItems] = useState([])
  const [counter, setCounter] = useState({
    "Black Coffee": 0, 
    "Cappuccino": 0,
    "Cortado": 0,
    "Latte": 0,
    "Iced Coffee": 0,
    "Iced Latte": 0,
    "Iced Frappuccino": 0,
    "Assam Black": 0,
    "Jasmine Green": 0,
    "Silver Needles White": 0,
    "Matcha Latte": 0,
    "Iced Sencha Green": 0,
    "Ice Hibiscus": 0,
    "Iced Chai Latte": 0
  })

  useEffect(() => {
    fetch("http://localhost:9292/items")
    .then(res => res.json())
    .then(data => setItems(() => data))
  }, [])

  

  const menuItems = items.map(item => {
    return <MenuItem key={item.id} name={item.name} price={item.buy_price}/>
  }) 

  console.log(counter)

  return (
    <div>
      <StyledDiv>
        {menuItems}
      </StyledDiv>
      <TotalPrice />
    </div>
  )
}

export default RightDisplay
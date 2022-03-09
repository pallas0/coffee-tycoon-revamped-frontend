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
  const [money, setMoney] = useState(0)
  const [menu, setMenu] = useState({
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
    "Iced Hibiscus": 0,
    "Iced Chai Latte": 0
  })

  console.log(menu)

  function getFetch(something) {
    return fetch(`http://localhost:9292/${something}`)
    .then(res => res.json())
  }

  useEffect(() => getFetch("items").then(data => setItems(data)), [])
  useEffect(() => getFetch("stores").then(data => setMoney(data[0].money)) , [])

  function handleQuantityChange(e, name) {
    let newMenu = {...menu}
    newMenu[name] = parseInt(e.target.value)
    setMenu(newMenu)
  }

  function handleButtonClick(action, name) {
    let newMenu = {...menu}
    if (action === "minus") {
      newMenu[name] -= 1
    }
    if (action === "plus") {
      newMenu[name] += 1
    }
    setMenu(newMenu)
  }

  const menuItems = items.map(item => {
    return <MenuItem 
      key={item.id} 
      name={item.name} 
      price={item.buy_price}
      handleQuantityChange={handleQuantityChange}
      handleButtonClick={handleButtonClick}
      inputValue={menu[`${item.name}`]}
      />
  }) 

  return (
    <div>
      <StyledDiv>
        {menuItems}
      </StyledDiv>
      <TotalPrice menu={menu} money={money}/>
    </div>
  )
}

export default RightDisplay
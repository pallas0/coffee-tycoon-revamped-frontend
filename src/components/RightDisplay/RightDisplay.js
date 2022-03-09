import React, { useEffect, useState } from 'react'
import MenuItem from '../MenuItem'
import styled from 'styled-components'
import NextDayButton from './NextDayButton'
import MakeMenuButtons from './MakeMenuButtons'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function RightDisplay({passMenuUp, setWeather, weather, setOrders}) {
  const [items, setItems] = useState([])
  const [money, setMoney] = useState(0)
  const [menu, setMenu] = useState({
    "Black Coffee": { "buy_price": 1.75, "quantity": 0}, 
    "Cappuccino": { "buy_price": 2.5, "quantity": 0},
    "Cortado": { "buy_price": 2.25, "quantity": 0},
    "Latte": { "buy_price": 2.75, "quantity": 0},
    "Iced Coffee": { "buy_price": 2.5, "quantity": 0},
    "Iced Latte": { "buy_price": 3, "quantity": 0},
    "Iced Frappuccino": { "buy_price": 3.25, "quantity": 0},
    "Assam Black": { "buy_price": 2, "quantity": 0},
    "Jasmine Green": { "buy_price": 2, "quantity": 0},
    "Silver Needles White": { "buy_price": 2.5, "quantity": 0},
    "Matcha Latte": { "buy_price": 3.25, "quantity": 0},
    "Iced Sencha Green": { "buy_price": 2, "quantity": 0},
    "Iced Hibiscus": { "buy_price": 2.25, "quantity": 0},
    "Iced Chai Latte": { "buy_price": 3, "quantity": 0}
  })

  function getFetch(something) {
    return fetch(`http://localhost:9292/${something}`)
    .then(res => res.json())
  }

  useEffect(() => getFetch("items").then(data => setItems(data)), [])
  useEffect(() => getFetch("stores").then(data => setMoney(data[0].money)), [])

  function handleQuantityChange(e, name) {
    let newMenu = {...menu}
    newMenu[name].quantity = parseInt(e.target.value)
    setMenu(() => newMenu)
    setMoney(() => money - newMenu[name].buy_price*parseInt(e.target.value))
  }

  function handleButtonClick(action, name) {
  if (money >= 0)
    {  let newMenu = {...menu}
    if (action === "minus" && newMenu[name].quantity > 0) {
      newMenu[name].quantity -= 1
      setMoney(() => money + newMenu[name].buy_price)
    }
    if (action === "plus") {
      newMenu[name].quantity += 1
      setMoney(() => money - newMenu[name].buy_price)
    }
    setMenu(newMenu)
    }
  }

  const menuItems = items.map(item => {
    return <MenuItem 
      key={item.id} 
      name={item.name} 
      price={item.buy_price}
      handleQuantityChange={handleQuantityChange}
      handleButtonClick={handleButtonClick}
      inputValue={menu[`${item.name}`].quantity}
      />
  }) 

  function handleMenu() {
    passMenuUp(menu)
  }

  function total_num_drinks() {
    return Object.values(menu).reduce((total, curr) => total + curr.quantity, 0)
  }

  return (
    <div>
      <span>Store Money: ${money}</span>
      <span>Number of Drinks: {`${total_num_drinks()}`}</span>
      <StyledDiv>
        {menuItems}
      </StyledDiv> 
      <MakeMenuButtons menu={menu} money={money} handleMenu={handleMenu} setWeather={setWeather} weather={weather} setOrders={setOrders}/>
    </div>
  )
}

export default RightDisplay
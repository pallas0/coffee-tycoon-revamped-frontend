import React, { useEffect, useState } from 'react'
import MenuItem from '../MenuItem'
import styled from 'styled-components'
//import NextDayButton from './NextDayButton'
import MakeMenuButtons from './MakeMenuButtons'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

 function RightDisplay({money, setMoney, passMenuUp, setWeather, weather, setOrders, setDisplayCafeGif, setShowMain}) {
  const [isClicked, setIsClicked] = useState(false)
  const [items, setItems] = useState([])
  const [menu, setMenu] = useState({
    "Black Coffee": { "buy_price": 1.75, "quantity": 0}, 
    "Cappuccino": { "buy_price": 2.50, "quantity": 0},
    "Cortado": { "buy_price": 2.25, "quantity": 0},
    "Latte": { "buy_price": 2.75, "quantity": 0},
    "Iced Coffee": { "buy_price": 2.50, "quantity": 0},
    "Iced Latte": { "buy_price": 3.00, "quantity": 0},
    "Iced Frappuccino": { "buy_price": 3.25, "quantity": 0},
    "Assam Black": { "buy_price": 2.00, "quantity": 0},
    "Jasmine Green": { "buy_price": 2.00, "quantity": 0},
    "Silver Needles White": { "buy_price": 2.50, "quantity": 0},
    "Matcha Latte": { "buy_price": 3.25, "quantity": 0},
    "Iced Sencha Green": { "buy_price": 2.00, "quantity": 0},
    "Iced Hibiscus": { "buy_price": 2.25, "quantity": 0},
    "Iced Chai Latte": { "buy_price": 3.00, "quantity": 0}
  })

  function getFetch(something) {
    return fetch(`http://localhost:9292/${something}`)
    .then(res => res.json())
  }

  useEffect(() => getFetch("items").then(data => setItems(data)), [])


  function handleQuantityChange(e, name) {
    let newMenu = {...menu}
    newMenu[name].quantity = parseInt(e.target.value)
    setMenu(() => newMenu)
    setMoney(() => money - newMenu[name].buy_price*parseInt(e.target.value))

  }

  function handleButtonClick(action, name, isClicked) {
      let newMenu = {...menu}
    if (!isClicked) {
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
      isClicked={isClicked}
      />
  }) 

  function handleMenu() {
    passMenuUp(menu)
  }

  function total_num_drinks() {
    return Object.values(menu).reduce((total, curr) => total + curr.quantity, 0)
  }

  return (
    <div id='rightdisplay'>
      <div className='vertical'>
        <span style={{'paddingBottom': '5px'}} className='bold'>Store Money: <span className='money'>${money.toFixed(2)}</span></span>
        <span className='bold'>Number of Drinks: {`${total_num_drinks()}`}</span>
      </div>
      <StyledDiv>
        {menuItems}
      </StyledDiv> 
      <MakeMenuButtons menu={menu} 
        money={money} 
        handleMenu={handleMenu} 
        setWeather={setWeather} 
        weather={weather} 
        setOrders={setOrders}
        setDisplayCafeGif={setDisplayCafeGif}
        setShowMain={setShowMain}
        isClicked={isClicked}
        setIsClicked={setIsClicked}/>
    </div>
  )
}

export default RightDisplay
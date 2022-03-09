import React, { useState, useEffect } from 'react'
import MakeMenuButtons from './MakeMenuButtons'

function TotalPrice({ menu, money=0 }) {
  
  const totalPrice = Object.values(menu).reduce((total, currentValue) => 
    total + currentValue.buy_price * currentValue.quantity, 0)

  const currentMoney = money - totalPrice

  return (
    <div className='vertical'>
      <span>Store Money: ${currentMoney}</span>
      <MakeMenuButtons currentMoney={currentMoney}/>
    </div>
  )
}

export default TotalPrice
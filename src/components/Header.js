import React from 'react'

import logo from '../logo.svg'

function Header({handleNewGame, weather}) {
  
  // const conditions = ["Sunny ☀️", "Rainy 🌧"]

  function clickNewGame(){
    handleNewGame()
  }


  return (
    <div id="header">
      <img src={logo} alt="Logo" style={{height: "200px", width: "200px"}}/>
      <button onClick={clickNewGame}>New Game</button>
      <p>Current Weather :</p>
      <div id="weather">
        <p className='weather_items'>Caffeinetown, USA</p>
        <p className='weather_items'>{weather}°F</p>
        {/* <p className='weather_items'>{conditions[Math.floor(Math.random() * conditions.length)]}</p> */}
      </div>
    </div>
  )
}

export default Header
import React from 'react'

import logo from '../logo.svg'

function Header({weather, displayInstructions}) {
  // let condition = ""
  // const probability = Math.random()*100

  // if (probability > 52 && probability < 58) {
  //   if (probability > 55) {
  //     condition = "🌧️"
  //   } else if (probability > 54) {
  //     condition = '⛈️'
  //   } else {
  //     condition = '🌦️'
  //   }

  // } else if (weather > 80) {
  //   condition = "☀️"
  // } else if (weather > 70) {
  //   condition = probability > 70 ? "☁️" : "☀️"
  // } else if (weather > 60) {
  //   condition = probability > 50 ? "☁️" : "⛅"
  // } else if (weather > 50) {
  //   condition = probability > 90 ? "🌧️" : "☁️"
  // } else {
  //   condition = probability > 60 ? "🌧️" : "☁️"
  // }

  return (
    <div id="header">
      <img src={logo} alt="Logo" style={{height: "200px", width: "200px"}}/>
      {displayInstructions ? null : <div className='vertical'>
        <p>Current Weather in Caffeinetown, USA:</p>
        <p className='weather_items'>{weather}°F</p>
      </div>}
    </div>
  )
}

export default Header
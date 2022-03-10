import React, { useState, useEffect } from 'react'

import logo from '../logo.svg'

function Header({weather, displayInstructions}) {
  const [condition, setCondition] = useState("☀️")
  
  useEffect(() => {
    const probability = Math.random()*100
    let newCondition = ""
  if (probability > 52 && probability < 58) {
    if (probability > 55) {
      newCondition = "🌧️"
    } else if (probability > 54) {
      newCondition = '⛈️'
    } else {
      newCondition = '🌦️'
    }

  } else if (weather > 80) {
    newCondition = "☀️"
  } else if (weather > 70) {
    newCondition = probability > 70 ? "☁️" : "☀️"
  } else if (weather > 60) {
    newCondition = probability > 50 ? "☁️" : "⛅"
  } else if (weather > 50) {
    newCondition = probability > 90 ? "🌧️" : "☁️"
  } else {
    newCondition = probability > 60 ? "🌧️" : "☁️"
  }
    setCondition(newCondition)
  }, [weather])
  

  return (
    <div id="header">
      <img src={logo} alt="Logo" style={{height: "200px", width: "200px"}}/>
      {displayInstructions ? null : <div className='vertical'>
        <p>Current Weather in Caffeinetown, USA:</p>
        <p className='weather_items'>{condition} {weather}°F</p>
      </div>}
    </div>
  )
}

export default Header
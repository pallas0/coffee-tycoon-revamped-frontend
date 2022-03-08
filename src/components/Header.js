import React from 'react'

import logo from '../logo.svg'

function Header() {
  return (
    <div>
    <img src={logo} alt="Logo" style={{height: "200px", width: "200px"}}/>
    <button>New Game</button>
    </div>
  )
}

export default Header
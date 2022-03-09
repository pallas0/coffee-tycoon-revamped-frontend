import React from 'react'
import main_pic from '../main.png'
import Grid from '@mui/material/Grid';


function MainDisplay() {
  return (
    <div>
      <h2 className="header">Menu</h2>
      
      <img src={main_pic} alt="background" style={{height: "400px", width: "400x"}}/>
    </div>
  )
}

export default MainDisplay
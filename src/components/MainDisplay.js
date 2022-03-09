import React, {useState} from 'react'
import main_pic from '../main.png'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@mui/material/Grid';
import styled from 'styled-components'
//npm install @material-ui/core --save



function MainDisplay() {
  const menu = [
    "Black Coffee: ", 
    "Cappuccino: ",
    "Cortado: ",
    "Latte: ",
    "Iced Coffee: ",
    "Iced Latte: ",
    "Iced Frappuccino: ",
    "Assam Black: ",
    "Jasmine Green: ",
    "Silver Needles White: ",
    "Matcha Latte: ",
    "Iced Sencha Green: ",
    "Iced Hibiscus: ",
    "Iced Chai Latte: "
  ]

  
  
  const menuItems = menu.map(item => {
    return <Grid item xs={4}>
      <Paper elevation={0} className="paper">
        {item}
        </Paper>
    </Grid>
  })
  


  return (
    <div>
      <h2 className="header">Menu</h2>
      <Grid container spacing={2}>
      {menuItems}
      </Grid>
      <img src={main_pic} alt="background" style={{height: "400px", width: "400x"}}/>
    </div>
  )
}

export default MainDisplay
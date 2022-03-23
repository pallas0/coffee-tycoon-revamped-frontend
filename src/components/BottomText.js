import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
  font-weight: bolder;
  font-size: x-large;
`

function BottomText({orders, setOrders}) {
  


    let fulfilled_orders = orders.filter((order)=> order.fulfilled)
    let unfulfilled_orders = orders.filter((order) => !order.fulfilled)

    let happy_customers = fulfilled_orders.length > 0 ? 
      fulfilled_orders.map((order) => <li key={order.id}>{order.customer.name} bought a {order.menu_item.item.name} 😀</li>) : "No happy customers! 😩"
    let sad_customers = unfulfilled_orders.length > 0 ?
      // unfulfilled_orders.map((order) => <li key={order.id}>{order.customer.name} didn't get their order of a {order.menu_item.item.name ? order.menu_item.item.name: "drink"} and left! 😩</li>) : "No sad customers! 😀"
      unfulfilled_orders.map((order) => <li key={order.id}>{order.customer.name} didn't get their order and left! 😩</li>) : "No sad customers! 😀"
    let comments = fulfilled_orders.length > 0 ? 
      fulfilled_orders.map((order) => <li key={order.id}>{order.customer.happy_saying}</li>) : "No comments."
  
      
  return (
    <div id="customers">
      <div className="customer_lists">
        <StyledSpan>Happy Customers ✔️</StyledSpan>
        <ul>{happy_customers}</ul>
      </div>
      <div className="customer_lists">
        <StyledSpan>Comments 💬</StyledSpan>  
        <ul>{comments}</ul>
      </div>
      <div className="customer_lists">
        <StyledSpan>Sad Customers ❌</StyledSpan>
        <ul>{sad_customers}</ul>
      </div>
    </div>
  )
}

export default BottomText
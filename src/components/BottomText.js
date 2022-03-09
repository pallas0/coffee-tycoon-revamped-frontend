import React, { useEffect, useState } from 'react'

function BottomText() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/orders')
    .then(res => res.json())
    .then(data => setOrders(() => data))
  }, [])

    let fulfilled_orders = orders.filter((order)=> order.fulfilled)
    let unfulfilled_orders = orders.filter((order) => !order.fulfilled)

    let happy_customers = fulfilled_orders.length > 0 ? 
      fulfilled_orders.map((order) => <li key={order.id}>{order.customer.name} bought a {order.menu_item.item.name} 😀</li>) : null
    let sad_customers = unfulfilled_orders.length > 0 ?
      unfulfilled_orders.map((order) => <li key={order.id}>{order.customer.name} didn't get their order of a {order.menu_item.item.name} and left! 😩</li>) : null

  
  return (
    <div id="customers">
      <div className="customer_lists">Happy Customers
        <ul>{happy_customers}</ul>
      </div>
      <div className="customer_lists">Sad Customers
        <ul>{sad_customers}</ul>
      </div>
    </div>
  )
}

export default BottomText
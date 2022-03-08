import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem'

function RightDisplay() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/items")
    .then(res => res.json())
    .then(data => setItems(() => data))
  }, [])

  console.log(items)
  const menuItems = items.map(item => {
    return <MenuItem key={item.id} name={item.name} price={item.buy_price}/>
  }) 

  return (
    <div>
      {menuItems}
    </div>
  )
}

export default RightDisplay
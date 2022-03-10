
import React, {useEffect, useState} from 'react'

function EODReport({orders, onHandleNextDayClick, money, setMoney, setDisplayMenu, setWeather}) {
  const [fulfilled, setFulfilled] = useState([])
  const [notFulfilled, setNotFulfilled] = useState([])
  
  useEffect(() => {fetch("http://localhost:9292/orders/fulfilled")
    .then(res => res.json())
    .then(data => setFulfilled(() => data))}, [orders])

  useEffect(() => {fetch("http://localhost:9292/orders/not_fulfilled")
    .then(res => res.json())
    .then(data => setNotFulfilled(() => data))}, [orders])

  function handleNextDayClick() {
    const monies = money + totalEarnings
    
    fetch("http://localhost:9292/stores", {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'money': monies
      })
    })
    .then(res => res.json())
    .then((data) => setMoney(data[0].money))
    
    fetch("http://localhost:9292/orders", 
      {method: 'DELETE'})
    fetch("http://localhost:9292/menuitems)", 
      {method: 'DELETE'})

    setDisplayMenu(() => {})
    setWeather(() => Math.floor(Math.random() * (Math.floor(90)-Math.ceil(40)) + Math.ceil(40)))
    onHandleNextDayClick()
  }

  // let fulfilled = orders.filter((order)=> order.fulfilled)
  // let unfulfilled = orders.filter((order) => !order.fulfilled)

  const totalEarnings = fulfilled.reduce((total, curr) => total + curr.sell_price, 0)
  const customersServed = `${fulfilled.length}/${fulfilled.length + notFulfilled.length}`


  return (
    <div id="eod">
        <h1>EOD REPORT</h1>
        <div className='vertical'>
          <span>Customers Served: </span><span>{customersServed}</span>
        </div>
        <div className='vertical'><span>Money Made: </span><span>${totalEarnings.toFixed(2)}</span></div>
        <button onClick={handleNextDayClick}>Start Next Day</button>
    </div>
  )
}

export default EODReport

import React, {useEffect, useState} from 'react'

function EODReport({orders}) {
  const [fulfilled, setFulfilled] = useState([])
  const [notFulfilled, setNotFulfilled] = useState([])
  
  useEffect(() => {fetch("http://localhost:9292/orders/fulfilled")
    .then(res => res.json())
    .then(data => setFulfilled(setFullFilled => data))}, [orders])

  useEffect(() => {fetch("http://localhost:9292/orders/not_fulfilled")
    .then(res => res.json())
    .then(data => setNotFulfilled(setNotFulFilled => data))}, [orders])

  let total_earnings = fulfilled.reduce((total, curr) => total + curr.sell_price, 0)
  
  return (
    <div id="eod">
        <h1>EOD REPORT</h1>
        <h4>Customers Served: {fulfilled.length}/{fulfilled.length + notFulfilled.length}</h4>
        <h4>Money Made: ${total_earnings}</h4>
    </div>
  )
}

export default EODReport
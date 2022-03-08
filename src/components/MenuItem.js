import React from 'react'

function MenuItem({ name="Coffee", price=3 }) {
  return (
    <ul>
      <div className="horizontal">
        <p>{name}</p>
          <button>Remove</button>
          <input type="number" placeholder="0"></input>
          <button>Add</button>
        <p>${price}/ea</p>
      </div>
    </ul>
  )
}

export default MenuItem
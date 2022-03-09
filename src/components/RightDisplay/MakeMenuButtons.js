import React, { useState } from 'react'
import NextDayButton from './NextDayButton'

function MakeMenuButtons({ menu, money, handleMenu }) {
  const [isClicked, setIsClicked] = useState(false)

    function handleAddItemsToMenu() {
        if (money > 0) {
          setIsClicked(true)
          handleMenu()
        } else {
          alert("not enough moneys :(")
        }
    }

    function handleNewDayClick() {
      setIsClicked(false)
      console.log(menu)
      
    }

  return (
    <div className='vertical'>
        
        {isClicked ? <NextDayButton handleNewDayClick={handleNewDayClick}/> : <button onClick={handleAddItemsToMenu}>Add all items to menu</button>}
    </div>
  )
}

export default MakeMenuButtons
import React from 'react'

function MakeMenuButtons({ currentMoney }) {

    function handleAddItemsToMenu() {
        if (currentMoney > 0) {
            return null
        }
    }

  return (
    <div>
        <button onClick={handleAddItemsToMenu}>Add all items to menu</button>
    </div>
  )
}

export default MakeMenuButtons
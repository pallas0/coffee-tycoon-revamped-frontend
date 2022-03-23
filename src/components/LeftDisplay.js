import React from 'react'

function LeftDisplay({ handleStartGame }) {
  return (
    <div id="instructions" className='vertical'>
      <h3>Welcome to Coffee Tycoon!</h3>
      
      <div>
        <span>How to play: </span>
        <p>In this game, your goal is to become the tycoon you always wanted to be.</p>
        <p> You have a starting budget of $40. </p>
        <p>Your job is to select which drinks to add to your menu and watch the 20 customers flood in. </p>
        <p>Will you have the item they want? Will the weather affect their order selection? </p>
        <p>Each day we will give you a breakdown of your successes and failures. </p>
        <p>You'll have the chance to edit your menu and prepare for the next day. We'll see how much money your shop makes and if you
          really have what it takes to be a COFFEE TYCOON!
        </p>
      </div>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  )
}

export default LeftDisplay
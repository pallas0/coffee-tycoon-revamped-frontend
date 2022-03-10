import React from 'react'

function CafeGif({handleEndDayClick}) {
  return (
    <div className='vertical'>
        <img style={{"paddingBottom":"10px"}}src={'https://64.media.tumblr.com/936ad846f8d46de17a87368a77c49bc9/tumblr_pbeihaik5a1tgo74ho1_640.gif'} alt="cafe gif" />
        <button onClick={handleEndDayClick}>End the day</button>
    </div>
  )
}

export default CafeGif
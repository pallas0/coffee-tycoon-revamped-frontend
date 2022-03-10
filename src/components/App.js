import '../App.css';
import styled from 'styled-components'
import LeftDisplay from './LeftDisplay';
import MainDisplay from './MainDisplay';
import RightDisplay from './RightDisplay/RightDisplay';
import Header from './Header';
import BottomText from './BottomText';
import EODReport from './EODReport';
import {useState} from 'react'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: space-around;
  align-items: space-around;
  height: 600px;
  width: 800px;
  /* background-color: red; */
`

function App() {
  const [displayMenu, setDisplayMenu] = useState({})
  // const [newGame, setNewGame] = useState(false)
  const [weather, setWeather] = useState(
    Math.floor(Math.random() * (Math.floor(90)-Math.ceil(40)) + Math.ceil(40))
  )
  const [orders, setOrders] = useState([])
  const [displayInstructions, setDisplayInstructions] = useState(true)
  const [displayEOD, setDisplayEOD] = useState(false)
  const [showMain, setShowMain] = useState(false)

  function handleStartGame(){
    setDisplayInstructions(false)
    setShowMain(true)
  }

  function handleMenu(menu) {
    setDisplayMenu(menu)
  }

  return (
    <div className='vertical'>
    <Header weather={weather} displayInstructions={displayInstructions}/>
    {displayInstructions ? <LeftDisplay handleStartGame={handleStartGame}/>: null}
     {showMain ? <StyledDiv>
        <MainDisplay menu={displayMenu} /> 
        <RightDisplay passMenuUp={handleMenu} 
          setWeather={setWeather} 
          weather={weather} 
          setOrders={setOrders}
          setDisplayEOD={setDisplayEOD}
          setShowMain={setShowMain} />
      </StyledDiv> : null
    }
    {displayEOD ? 
      <StyledDiv>
        <BottomText orders={orders} setOrders={setOrders}/>
        <EODReport />
      </StyledDiv>
      : null}
    </div>
  );
}

export default App;

import '../App.css';
import styled from 'styled-components'
import LeftDisplay from './LeftDisplay';
import MainDisplay from './MainDisplay';
import RightDisplay from './RightDisplay/RightDisplay';
import Header from './Header';
import BottomText from './BottomText';
import {useState} from 'react'

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height:450px;
  /* background-color: red; */
`

function App() {
  const [displayMenu, setDisplayMenu] = useState({})
  const [newGame, setNewGame] = useState(false)
  const [weather, setWeather] = useState(
    Math.floor(Math.random() * (Math.floor(90)-Math.ceil(40)) + Math.ceil(40))
  )
  const [orders, setOrders] = useState([])

  function handleNewGame(){
    setNewGame((newGame) => !newGame)
  }

  function handleMenu(menu) {
    setDisplayMenu(menu)
  }

  return (
    <div>
    <Header handleNewGame={handleNewGame} weather={weather}/>
    <StyledDiv>
      <LeftDisplay />
      <MainDisplay menu={displayMenu} />
      <RightDisplay passMenuUp={handleMenu} setWeather={setWeather} weather={weather} setOrders={setOrders}/>
    </StyledDiv>
    <BottomText orders={orders} setOrders={setOrders}/>
    </div>
  );
}

export default App;

import '../App.css';
import styled from 'styled-components'
import LeftDisplay from './LeftDisplay';
import MainDisplay from './MainDisplay';
import RightDisplay from './RightDisplay/RightDisplay';
import Header from './Header';
import BottomText from './BottomText';
import EODReport from './EODReport';
import CafeGif from './CafeGif';
import {useState, useEffect} from 'react'
import ModalComponent from 'react-modal-dom';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: space-around;
  align-items: space-around;
  height: 500px;
  width: 1000px;

  /* background-color: red; */
`

function App() {
  const [displayMenu, setDisplayMenu] = useState({})
  const [weather, setWeather] = useState(
    Math.floor(Math.random() * (Math.floor(90)-Math.ceil(40)) + Math.ceil(40))
  )
  const [orders, setOrders] = useState([])
  const [money, setMoney] = useState(0)
  const [displayInstructions, setDisplayInstructions] = useState(true)
  const [displayEOD, setDisplayEOD] = useState(false)
  const [displayCafeGif, setDisplayCafeGif] = useState(false)
  const [showMain, setShowMain] = useState(false)

  function getFetch(something) {
    return fetch(`http://localhost:9292/${something}`)
    .then(res => res.json())
  }

  useEffect(() => getFetch("stores").then(data => setMoney(data[0].money)), [])

  function handleStartGame(){
    fetch("http://localhost:9292/stores/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        money: 40,
        popularity: 0.5
      })
    })
    .then(res => res.json())
    .then(data => setMoney(data.money))

    setDisplayInstructions(false)
    setShowMain(true)
  }

  function handleMenu(menu) {
    setDisplayMenu(menu)
  }

  function onHandleNextDayClick() {
    setShowMain(true)
    setDisplayEOD(false)
  }

  function handleEndDayClick() {
    setDisplayEOD(true)
    setDisplayCafeGif(false)
  }

  return (
    <div className='vertical'>
    <Header weather={weather} displayInstructions={displayInstructions}/>
    {displayInstructions ? <LeftDisplay handleStartGame={handleStartGame}/>: null}
     {showMain ? <StyledDiv>
        <MainDisplay menu={displayMenu} /> 
        <RightDisplay passMenuUp={handleMenu} 
          money={money}
          setMoney={setMoney}
          setWeather={setWeather} 
          weather={weather} 
          setOrders={setOrders}
          setDisplayCafeGif={setDisplayCafeGif}
          setShowMain={setShowMain} />
      </StyledDiv> : null
    }
    {displayCafeGif ? <CafeGif handleEndDayClick={handleEndDayClick}/> : null}
    {displayEOD ? 
      <div className='vertical'>
        <EODReport 
        orders={orders} 
        onHandleNextDayClick={onHandleNextDayClick} 
        money={money} 
        setMoney={setMoney} 
        setDisplayMenu={setDisplayMenu}
        setWeather={setWeather}/>
        <BottomText orders={orders} setOrders={setOrders}/>
      </div>
      : null}
    </div>
  );
}

export default App;

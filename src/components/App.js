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
  const [displayMenu, setDisplayMenu] = useState({
    // "Black Coffee": { "buy_price": 1.75, "quantity": 0}, 
    // "Cappuccino": { "buy_price": 2.5, "quantity": 0},
    // "Cortado": { "buy_price": 2.25, "quantity": 0},
    // "Latte": { "buy_price": 2.75, "quantity": 0},
    // "Iced Coffee": { "buy_price": 2.5, "quantity": 0},
    // "Iced Latte": { "buy_price": 3, "quantity": 0},
    // "Iced Frappuccino": { "buy_price": 3.25, "quantity": 0},
    // "Assam Black": { "buy_price": 2, "quantity": 0},
    // "Jasmine Green": { "buy_price": 2, "quantity": 0},
    // "Silver Needles White": { "buy_price": 2.5, "quantity": 0},
    // "Matcha Latte": { "buy_price": 3.25, "quantity": 0},
    // "Iced Sencha Green": { "buy_price": 2, "quantity": 0},
    // "Iced Hibiscus": { "buy_price": 2.25, "quantity": 0},
    // "Iced Chai Latte": { "buy_price": 3, "quantity": 0}
  })
  const [newGame, setNewGame] = useState(false)

  function handleNewGame(){
    setNewGame((newGame) => !newGame)
  }

  function handleMenu(menu) {
    setDisplayMenu(menu)
  }

  return (
    <div>
    <Header handleNewGame={handleNewGame}/>
    <StyledDiv>
      <LeftDisplay />
      <MainDisplay menu={displayMenu} />
      <RightDisplay passMenuUp={handleMenu}/>
    </StyledDiv>
    <BottomText />
    </div>
  );
}

export default App;

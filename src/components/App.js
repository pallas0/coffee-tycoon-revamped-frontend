import '../App.css';
import styled from 'styled-components'
import LeftDisplay from './LeftDisplay';
import MainDisplay from './MainDisplay';
import RightDisplay from './RightDisplay';
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

  const [newGame, setNewGame] = useState(false)

  function handleNewGame(){
    setNewGame((newGame) => !newGame)
  }

  console.log(newGame)

  return (
    <div>
    <Header handleNewGame={handleNewGame}/>
    <StyledDiv>
      <LeftDisplay />
      <MainDisplay />
      <RightDisplay />
    </StyledDiv>
    <BottomText />
    </div>
  );
}

export default App;

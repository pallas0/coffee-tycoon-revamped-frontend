import '../App.css';
import styled from 'styled-components'
import LeftDisplay from './LeftDisplay';
import MainDisplay from './MainDisplay';
import RightDisplay from './RightDisplay';
import Header from './Header';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 800px;
  /* background-color: red; */
`

function App() {
  return (
    <div>
    <Header />
    <StyledDiv>
      <LeftDisplay />
      <MainDisplay />
      <RightDisplay />
    </StyledDiv>
    </div>
  );
}

export default App;
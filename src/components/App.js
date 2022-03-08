import '../App.css';
import styled from 'styled-components'
import LeftDisplay from './LeftDisplay';
import MainDisplay from './MainDisplay';
import RightDisplay from './RightDisplay';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 800px;
  /* background-color: red; */
`

function App() {
  return (
    <StyledDiv>
      <LeftDisplay />
      <MainDisplay />
      <RightDisplay />
    </StyledDiv>
  );
}

export default App;

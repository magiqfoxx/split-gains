import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Button, { StyledButton } from './components/atoms/Button';


const Background = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
min-width: 100vw;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background-color: #373737;
`;

function App() {
  return (
    <Background>
      <header>
        Welcome to movie revenue calculator. Your all in one hot spot for all of your movie revenue needs!
      </header>
      <main>
        {/* @ts-ignore */}
        <StyledButton as={Link} to="/admin">Login as Admin</StyledButton>
        <StyledButton as={Link} to="/wallets">Open wallet</StyledButton>
      </main>
    </Background>
  );
}

export default App;

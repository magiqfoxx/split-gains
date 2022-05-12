import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../../components/atoms/Button";
import img from "../../assets/clapperboard.png";

const Title = styled.h2`
  font-size: ${(props) => props.theme.n * 6}px;
  color: ${(props) => props.theme.dark};
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Home = () => {
  return (
    <>
      <div>
        <Title>The first all inclusive revenue calculator.</Title>
        <Buttons>
          <StyledButton as={Link} to="/admin">
            Login as Admin
          </StyledButton>
          <StyledButton variant="secondary" as={Link} to="/wallet">
            Login as User
          </StyledButton>
        </Buttons>
      </div>
      <img src={img} alt='clapperboard with words 3 2 1 action over it' />
    </>
  );
};

export default Home;

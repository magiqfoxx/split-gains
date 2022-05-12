import { Link } from "react-router-dom";
import styled from "styled-components";
import icon from "../assets/icon.png";

const StyledNav = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: ${(props) => props.theme.n * 3}px;
  color: ${(props) => props.theme.dark};
`;
const StyledItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
  margin-bottom: 2px;
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledItem>
        <Icon src={icon} />
        <Link to="/">SplitGains</Link>
      </StyledItem>
      <StyledItem>
        <Link to="credits">Credits</Link>
      </StyledItem>
    </StyledNav>
  );
};

export default Nav;

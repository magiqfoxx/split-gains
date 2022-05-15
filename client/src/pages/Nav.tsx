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
  width: ${(props) => props.theme.n * 3}px;
  height: auto;
  margin-right: 4px;
  margin-bottom: 2px;
`;
const StyledLogo = styled(Link)`
  font-family: "Macondo", sans-serif;
  font-size: ${(props) => props.theme.n * 3}px;
  color: ${(props) => props.theme.secondary};
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledItem>
        <Icon src={icon} />
        <StyledLogo to="/">SplitGains</StyledLogo>
      </StyledItem>
    </StyledNav>
  );
};

export default Nav;

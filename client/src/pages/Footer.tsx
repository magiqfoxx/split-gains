import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.dark};
`;
const StyledItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color:white;
`;
const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <StyledItem>
          <Link to="credits">Credits</Link>
        </StyledItem>
      </ul>
    </StyledFooter>
  );
};

export default Footer;

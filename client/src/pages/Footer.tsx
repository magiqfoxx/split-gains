import styled from "styled-components";

 const StyledFooter = styled.footer`
background-color: ${props=> props.theme.dark};
`;
const Footer = () => {
    return ( 
        <StyledFooter><ul><li>icon</li></ul></StyledFooter>
     );
}
 
export default Footer;
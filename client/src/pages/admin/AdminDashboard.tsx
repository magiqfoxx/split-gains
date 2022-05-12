import * as React from "react";
import styled from "styled-components";

import { StyledButton } from "../../components/atoms/Button";
import { Link } from "react-router-dom";
import movie from "../../assets/movie.png";
import person from "../../assets/person.png";
import money from "../../assets/money.png";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Group = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: ${props=> props.theme.n * 6}px
`;
export const Image = styled.img`
width:300px;
height:300px;
`;

const AdminDashboard = () => {
  React.useEffect(() => {}, []);
  return (
    <Layout>
      <Group>
        <Image src={movie}  />
        <StyledButton as={Link} to="new-movie">
          Add new movie
        </StyledButton>
      </Group>
      <Group>
        <StyledButton as={Link} to="new-shareholder">
          Add new shareholder
        </StyledButton>
        <Image src={person} />
      </Group>
      <Group>
        <Image src={money} />
        <StyledButton as={Link} to="new-transfer">
          Initiate a new transfer
        </StyledButton>
      </Group>
    </Layout>
  );
};

export default AdminDashboard;

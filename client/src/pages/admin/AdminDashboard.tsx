import * as React from "react";
import styled from "styled-components";

import Button from "../../components/atoms/Button";
import movie from "../../assets/movie.png";
import person from "../../assets/person.png";
import money from "../../assets/money.png";
import Slate from "../../components/molecules/Slate";
import AddMovie from "./AddMovieModal";
import AddShareholder from "./AddShareholderModal";
import AddTransfer from "./AddTransferModal";

export const Layout = styled.div`
  display: flex;
  gap: ${(props) => props.theme.n * 2}px;
  flex-wrap: wrap;
  justify-content: center;
`;

const AdminDashboard = () => {
  const [movieModalOpen, setMovieModalOpen] = React.useState(false);
  const [personModalOpen, setPersonModalOpen] = React.useState(false);
  const [transferModalOpen, setTransferModalOpen] = React.useState(false);

  React.useEffect(() => {}, []);
  return (
    <>
      <Layout>
        <Slate
          img={movie}
          button={
            <Button onClick={() => setMovieModalOpen(true)}>
              New movie
            </Button>
          }
        />

        <Slate
          img={person}
          button={
            <Button onClick={() => setPersonModalOpen(true)}>
              New shareholder
            </Button>
          }
        />

        <Slate
          img={money}
          button={
            <Button onClick={() => setTransferModalOpen(true)}>
              New transfer
            </Button>
          }
        />
      </Layout>
      {movieModalOpen && <AddMovie onBlur={()=>setMovieModalOpen(false)} />}
      {personModalOpen && <AddShareholder onBlur={()=>setPersonModalOpen(false)}/>}
      {transferModalOpen && <AddTransfer onBlur={()=>setTransferModalOpen(false)}/>}
    </>
  );
};

export default AdminDashboard;

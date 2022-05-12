import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import img from "../../assets/camera.png";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
`;

const GET_SHAREHOLDERS = gql`
  query GetShareholders {
    shareholders {
      firstName
      lastName
      id
    }
  }
`;

function ShareholderList() {
  const { loading, error, data } = useQuery(GET_SHAREHOLDERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.shareholders.map(
    ({
      id,
      firstName,
      lastName,
    }: {
      id: number;
      firstName: string;
      lastName: string;
    }) => (
      <Link to={`${id}`} key={id}>
        {firstName} {lastName}
      </Link>
    )
  );
}

const WalletList = () => {
  return (
    <StyledList>
      <img src={img}/>
      Login as
      <ShareholderList />
    </StyledList>
  );
};

export default WalletList;

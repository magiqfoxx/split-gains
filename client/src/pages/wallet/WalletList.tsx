import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import img from "../../assets/camera.png";
import Button from "../../components/atoms/Button";

const StyledWalletList = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledImage = styled.img`
  width: 200px;
  height: 200px;
`;
const StyledList = styled.ul`
  list-style: circle;
  color: ${(props) => props.theme.primaryLight};
`;
const StyledItem = styled.li`
  margin: 16px 0;
  padding-bottom: 16px;
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

const WalletList = () => {
  const { loading, error, data } = useQuery(GET_SHAREHOLDERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <StyledWalletList>
      <StyledImage src={img} />
      <h2>Login as</h2>
      <StyledList>
        {data.shareholders.map(
          ({
            id,
            firstName,
            lastName,
          }: {
            id: number;
            firstName: string;
            lastName: string;
          }) => (
            <StyledItem>
              <Button to={`${id}`} key={id} variant="secondary">
                {firstName} {lastName}
              </Button>
            </StyledItem>
          )
        )}
      </StyledList>
    </StyledWalletList>
  );
};

export default WalletList;

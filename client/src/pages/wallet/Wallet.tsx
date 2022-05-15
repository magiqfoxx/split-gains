import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";

interface ShareholderData {
  shareholder: {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    IBAN: string;
    balance: number;
    movieId: number;
    transfers: { movieId: number; createdAt: Date; amount: number }[];
  };
}

const GET_SHAREHOLDER = gql`
  query GetShareholder($id: ID!) {
    shareholder(id: $id) {
      id
      firstName
      lastName
      address
      IBAN
      balance
      movieId
      transfers {
        movieId
        amount
        createdAt
      }
    }
  }
`;
const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.dark};
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledShareholder = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  align-self: center;
`;
const StyledLabel = styled.span`
  color: ${(props) => props.theme.grey};
  font-family: monospace;
  text-transform: uppercase;
`;
const Wallet = () => {
  let params = useParams();
  const { loading, data } = useQuery<ShareholderData>(GET_SHAREHOLDER, {
    variables: { id: params.walletId },
  });

  return data ? (
    <StyledWrapper>
      <StyledHeader>
        <span>
          <StyledLabel>IBAN:</StyledLabel> {data.shareholder.IBAN}
        </span>
        <span>Balance: {data.shareholder.balance}€</span>
      </StyledHeader>
      <StyledShareholder>
        <p>
          <StyledLabel>Name: </StyledLabel>
          {data.shareholder.firstName} {data.shareholder.lastName}
        </p>
        <p>
          <StyledLabel>Address: </StyledLabel>
          {data.shareholder.address}
        </p>
      </StyledShareholder>
      <div>
        <h3>List of transfers</h3>
        {data.shareholder.transfers ? (
          data.shareholder.transfers.map((transfer) => {
            return (
              <p>
                <>
                  {transfer.movieId} {transfer.amount} {transfer.createdAt}
                </>
              </p>
            );
          })
        ) : (
          <p>No transfers yet</p>
        )}
      </div>
    </StyledWrapper>
  ) : (
    <div>Error</div>
  );
};

export default Wallet;

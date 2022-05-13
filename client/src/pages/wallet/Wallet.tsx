import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

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
      transfers{
      movieId
      amount
      createdAt}
    }
  }
`;

const Wallet = () => {
  let params = useParams();
  const { loading, data } = useQuery<ShareholderData>(GET_SHAREHOLDER, {
    variables: { id: params.walletId },
  });

  return data ? (
    <div>
      <span>{data.shareholder.IBAN}</span>
      <span>{data.shareholder.balance}</span>
      <p>
        {data.shareholder.firstName}
        {data.shareholder.lastName}
      </p>
      <p>{data.shareholder.address}</p>
      <div>
        {data.shareholder.transfers ? data.shareholder.transfers.map((transfer) => {
          return (
            <p>
              <>{transfer.movieId} {transfer.amount} {transfer.createdAt}</>
            </p>
          );
        }) :  <p>No transfers yet</p>}
      </div>
    </div>
  ) : (
    <div>Error</div>
  );
};

export default Wallet;

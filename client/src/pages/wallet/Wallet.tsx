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
    movieId: number
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
    }

  }
`;
// movie($id: movieId){
//     transfers
//     }
const Wallet = () => {
  let params = useParams();
  const { loading, data } = useQuery<ShareholderData>(GET_SHAREHOLDER, {
    variables: { id: params.walletId },
  });

  return data ? <div>
      <span>{data.shareholder.IBAN}</span>
      <span>{data.shareholder.balance}</span>
      <p>{data.shareholder.firstName}
      {data.shareholder.lastName}</p>
      <p>{data.shareholder.address}</p></div> : <div>Error</div>;
};

export default Wallet;

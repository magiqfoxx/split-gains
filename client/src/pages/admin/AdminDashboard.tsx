import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import AddMovie from "./AddMovie";
import AddShareholder from "./AddShareholder";

const GET_MOVIES = gql`
  query GetMovies {
    movies{
      title
      amount
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(error)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <p>Success</p>
  // return data.rates.map(({ currency, rate }:{ currency:any, rate:any }) => (
  //   <div key={currency}>
  //     <p>
  //       {currency}: {rate}
  //     </p>
  //   </div>
  // ));
}

interface AdminDashboardProps {}

const AdminDashboard = ({}: AdminDashboardProps) => {
  React.useEffect(() => {}, []);
  return (
    <>
      <AddMovie /> <AddShareholder />
      <ExchangeRates />
    </>
  );
};

export default AdminDashboard;

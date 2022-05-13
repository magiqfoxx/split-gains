import { useMutation, gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { StyledButton } from "../../components/atoms/Button";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const GET_MOVIES = gql`
  query GetMovies {
    movies {
      title
      id
    }
  }
`;
interface TransferInventory {
  firstName: string;
  lastName: string;
  address: string;
  IBAN: string;
  movieId: number;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
const TRANSFER = gql`
  mutation CreateTransfer($movieId:Int!, $amount: Float!, $description: String) {
    createTransfer(movieId:$movieId, amount: $amount, description: $description) {
      id
    }
  }
`;

const AddTransfer = () => {
  const {
    loading: movieLoading,
    error: movieError,
    data: movieData,
  } = useQuery<{ movies: {title: string; id: number}[] }>(GET_MOVIES);
  const [createTransfer, { error: transferError, data: transferData }] =
    useMutation<{ createTransfer: TransferInventory }, { movieId: number }>(
      TRANSFER
    );

  const handleTransfer = (movieId: number) => {
    createTransfer({
      variables: {
        movieId,
      },
    });
  };
  return (
    <div>
      <>
        <h1>New transfer</h1>
        {movieData &&
          movieData.movies.map((movie) => {
            return (<>
              <p key={movie.id}>{movie.title}</p>
              <StyledButton onClick={() => handleTransfer(movie.id)}>
                Transfer
              </StyledButton>
            </>);
          })}
      </>
    </div>
  );
};

export default AddTransfer;

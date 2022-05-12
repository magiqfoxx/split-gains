import { useQuery, gql } from "@apollo/client";

interface MovieData {
  movies: { title: string; amount: number }[];
}

const GET_MOVIES = gql`
  query GetMovies {
    movies {
      title
      amount
    }
  }
`;

function Movies() {
  const { loading, error, data } = useQuery<MovieData>(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  else {
    return (
      <div>
        {data!.movies.map(({ title, amount }) => (
          <p>
            {title}: {amount}
          </p>
        ))}
      </div>
    );
  }
}

const NewTransfer = () => {
  return <Movies />;
};

export default NewTransfer;

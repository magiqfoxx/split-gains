import { Formik } from "formik";
import { StyledButton } from "../../components/atoms/Button";
import { useMutation, gql } from "@apollo/client";

interface NewMovieDetails {
  title: string;
}
interface MovieInventory {
  title: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
const SAVE_MOVIE = gql`
  mutation SaveMovie {
    movie {
      title
    }
  }
`;
const AddMovie = () => {
  const [saveMovie, { error, data }] = useMutation<
    { saveMovie: MovieInventory },
    { movie: NewMovieDetails }
  >(SAVE_MOVIE);

  return (
    <div>
      <h1>Add a new movie</h1>
      <Formik
        initialValues={{ title: "" }}
        validate={(values) => {
          const errors: { title: undefined | string } = { title: undefined };
          if (!values.title) {
            errors.title = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          saveMovie({ variables: { movie: { title: values.title } } });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <label>Title: </label>
            <input
              type="title"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && errors.title}
            <StyledButton type="submit" disabled={isSubmitting}>
              Submit
            </StyledButton>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddMovie;

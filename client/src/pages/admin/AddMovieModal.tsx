import { Formik } from "formik";
import Button from "../../components/atoms/Button";
import { useMutation, gql } from "@apollo/client";
import Form from "../../components/atoms/Form";
import FullInput from "../../components/molecules/FullInput";
import Modal from "../../components/molecules/Modal";
import { MouseEventHandler } from "react";

interface MovieInventory {
  title: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
const SAVE_MOVIE = gql`
  mutation createMovie($title: String!) {
    createMovie(title: $title) {
      id
      title
    }
  }
`;
interface AddMovieModalProps {
  onBlur?: MouseEventHandler<HTMLDivElement>;
}
const AddMovieModal = ({onBlur}:AddMovieModalProps) => {
  const [saveMovie, { error, data }] = useMutation<
    { saveMovie: MovieInventory },
    { title: string }
  >(SAVE_MOVIE);

  return (
    <Modal title="New movie" onBlur={onBlur}>
      <Formik
        initialValues={{ title: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            //@ts-ignore
            errors.title = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          saveMovie({ variables: { title: values.title } });
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
        }) => (
          <Form onSubmit={handleSubmit}>
            <FullInput
              type="text"
              name="title"
              id="name"
              label="Title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              error={errors.title && touched.title}
              errorMessage={errors.title}
            />
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddMovieModal;

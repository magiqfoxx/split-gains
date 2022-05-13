import { Formik } from "formik";
import { useMutation, gql } from "@apollo/client";
import styled from "styled-components";
import { StyledButton } from "../../components/atoms/Button";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
interface ShareholderInventory {
  firstName: string;
  lastName: string;
  address: string;
  IBAN: string;
  movieId: number;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
const SAVE_SHAREHOLDER = gql`
  mutation createShareholder($firstName: String!,
      $lastName: String!,
      $address: String,
      $IBAN: String,
      $movieId: Int!) {
    createShareholder(firstName: $firstName,
      lastName: $lastName,
      address: $address,
      IBAN: $IBAN,
      movieId: $movieId)  {
      firstName
      lastName
      address
      IBAN
      movieId
    }
  }
`;

const AddShareholder = () => {
  const [saveShareholder, { error, data }] = useMutation<
    { saveShareholder: ShareholderInventory },
    {
      firstName: string;
      lastName: string;
      address: string;
      IBAN: string;
      movieId: number;
    }
  >(SAVE_SHAREHOLDER);
  return (
    <div>
      <h1>New shareholder</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          address: "",
          iban: "",
          movieId: 0,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            //@ts-ignore
            errors.firstName = "Required";
          }
          if (!values.lastName) {
            //@ts-ignore
            errors.lastName = "Required";
          }
          if (!values.movieId) {
            //@ts-ignore
            errors.movieId = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          saveShareholder({
            variables: {
              firstName: values.firstName,
              lastName: values.lastName,
              address: values.address,
              IBAN: values.iban,
              movieId: values.movieId ? values.movieId : 0,
            },
          });
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
          <Form onSubmit={handleSubmit}>
            <div>
              <label>First name: </label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
            </div>
            {errors.firstName && touched.firstName && errors.firstName}
            <div>
              <label>Last name: </label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
            </div>
            {errors.lastName && touched.lastName && errors.lastName}
            <div>
              <label>Address: </label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
            </div>
            {errors.address && touched.address && errors.address}
            <div>
              <label>IBAN: </label>
              <input
                type="number"
                name="iban"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.iban}
              />
            </div>
            {errors.iban && touched.iban && errors.iban}
            <div>
              <label>Movie id: </label>
              <input
                type="number"
                name="movieId"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.movieId}
              />
            </div>
            {errors.movieId && touched.movieId && errors.movieId}
            <StyledButton type="submit" disabled={isSubmitting}>
              Submit
            </StyledButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddShareholder;

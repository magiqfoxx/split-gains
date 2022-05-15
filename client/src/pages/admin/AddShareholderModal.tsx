import { Formik } from "formik";
import { useMutation, gql } from "@apollo/client";
import Button from "../../components/atoms/Button";
import Form from "../../components/atoms/Form";
import FullInput from "../../components/molecules/FullInput";
import Modal from "../../components/molecules/Modal";
import { MouseEventHandler } from "react";

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
  mutation createShareholder(
    $firstName: String!
    $lastName: String!
    $address: String
    $IBAN: String
    $movieId: Int!
  ) {
    createShareholder(
      firstName: $firstName
      lastName: $lastName
      address: $address
      IBAN: $IBAN
      movieId: $movieId
    ) {
      firstName
      lastName
      address
      IBAN
      movieId
    }
  }
`;
interface AddShareholderModalProps {
  onBlur?: MouseEventHandler<HTMLDivElement>;
}
const AddShareholderModal = ({onBlur}:AddShareholderModalProps) => {
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
    <Modal title="New shareholder" onBlur={onBlur}>
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
            <FullInput
              id="firstName"
              type="text"
              name="firstName"
              label="First name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              error={errors.firstName && touched.firstName}
              errorMessage={errors.firstName}
            />
            <FullInput
              id="lastName"
              type="text"
              name="lastName"
              label="Last name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              error={errors.lastName && touched.lastName}
              errorMessage={errors.lastName}
            />
            <FullInput
              id="address"
              type="text"
              name="address"
              label="Address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              error={errors.address && touched.address}
              errorMessage={errors.address}
            />
            <FullInput
              id="iban"
              type="number"
              name="iban"
              label="IBAN"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.iban}
              error={errors.iban && touched.iban}
              errorMessage={errors.iban}
            />
            <FullInput
              id="movieId"
              type="number"
              name="movieId"
              label="Movie id"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.movieId}
              error={errors.movieId && touched.movieId}
              errorMessage={errors.movieId}
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

export default AddShareholderModal;

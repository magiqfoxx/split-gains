import { useMutation, gql, useQuery } from "@apollo/client";
import { Formik } from "formik";
import { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import FullInput from "../../components/molecules/FullInput";
import FullInputSelect from "../../components/molecules/FullInputSelect";
import Modal from "../../components/molecules/Modal";

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
  mutation CreateTransfer(
    $movieId: Int!
    $amount: Float!
    $description: String
  ) {
    createTransfer(
      movieId: $movieId
      amount: $amount
      description: $description
    ) {
      id
    }
  }
`;
interface AddTransferModalProps {
  onBlur?: MouseEventHandler<HTMLDivElement>;
}
const AddTransferModal = ({ onBlur }: AddTransferModalProps) => {
  const {
    loading: movieLoading,
    error: movieError,
    data: movieData,
  } = useQuery<{ movies: { title: string; id: number }[] }>(GET_MOVIES);
  const [createTransfer, { error: transferError, data: transferData }] =
    useMutation<
      { createTransfer: TransferInventory },
      { movieId: number; amount: number; description: string }
    >(TRANSFER);

  return (
    <Modal title="New transfer" onBlur={onBlur}>
      <Formik
        enableReinitialize
        initialValues={{ movieId: movieData?.movies[0].id, amount: 0, description: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.movieId) {
            //@ts-ignore
            errors.movieId = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          values.movieId &&
            values.amount &&
            values.description &&
            createTransfer({
              variables: {
                //@ts-ignore
                movieId: parseInt(values.movieId),
                amount: values.amount,
                description: values.description,
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
        }) => (
          <Form onSubmit={handleSubmit}>
            <FullInputSelect
              label="Movie:"
              options={movieData?.movies.map((movie) => ({
                key: movie.title,
                value: movie.id,
              }))}
              name="movieId"
              id="movieId"
              onChange={handleChange}
              value={values.movieId}
            />
            <FullInput
              label="Amount"
              name="amount"
              id="amount"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.amount}
              error={errors.amount && touched.amount}
              errorMessage={errors.amount}
            />
            <FullInput
              label="Description"
              name="description"
              id="description"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              error={errors.description && touched.description}
              errorMessage={errors.description}
            />
            <Button type="submit" disabled={isSubmitting}>
              Transfer
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddTransferModal;

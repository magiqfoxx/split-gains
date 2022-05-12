import * as React from "react";
import { Formik } from "formik";

interface AddShareholderProps {}

const AddShareholder = ({}: AddShareholderProps) => {
  return (
    <div>
      <h1>New shareholder</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          address: "",
          iban: "",
          movieId: undefined,
        }}
        validate={(values) => {
          const errors: {
            firstName: undefined | string;
            lastName: undefined | string;
            movieId: undefined | string;
          } = { firstName: undefined, lastName: undefined, movieId: undefined };
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          if (!values.movieId) {
            errors.movieId = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {errors.firstName && touched.firstName && errors.firstName}
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName && errors.lastName}
            <input
              type="text"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
            {errors.address && touched.address && errors.address}
            <input
              type="number"
              name="iban"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.iban}
            />
            {errors.iban && touched.iban && errors.iban}
            <input
              type="number"
              name="movieId"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.movieId}
            />
            {errors.movieId && touched.movieId && errors.movieId}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddShareholder;

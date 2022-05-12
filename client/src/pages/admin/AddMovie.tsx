import * as React from "react";
import { Formik } from "formik";

interface AddMovieProps {}

const AddMovie = ({}: AddMovieProps) => {
  return (
    <div>
      <h1>New movie</h1>
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
              type="title"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && errors.title}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddMovie;

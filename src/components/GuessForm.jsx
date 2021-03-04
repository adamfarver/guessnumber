import React, {useContext} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {AppContext} from './AppContext';
import formatNumberInput from '../_helper/formatNumberInput';
function GuessForm() {
  let [
    numberOfDigits,
    setNumberOfDigits,
    solution,
    setSolution,
    listOfGuesses,
    setListOfGuesses,
  ] = useContext(AppContext);
  return (
    <div className="digits-to-guess">
      <Formik
        initialValues={{guess: ''}}
        validate={(values) => {
          const errors = {};

          if (!values.guess) {
            errors.guess = 'A number is required to proceed.';
          } else if (values.guess < 0) {
            errors.guess = 'Please provide a positive number.';
          }

          return errors;
        }}
        onSubmit={({guess}, {setSubmitting, resetForm}) => {
          setListOfGuesses(listOfGuesses.concat(guess));
          setSubmitting(false);
          resetForm();
        }}
      >
        {({isSubmitting, setFieldValue, values}) => (
          <Form>
            <h1>What's Your Guess?</h1>
            <Field
              // type="number"
              name="guess"
              min="0"
              onKeyUp={(e) =>
                setFieldValue('guess', formatNumberInput(e.target.value))
              }
            />

            <ErrorMessage name="guess" component="p" className="error" />

            <button type="submit" className="btn" disabled={isSubmitting}>
              CHECK!
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default GuessForm;

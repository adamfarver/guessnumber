import React, {useContext} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {AppContext} from './AppContext';
import generateNumberRange from '../_helper/generateNumberRange';

function DigitForm() {
  const [
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
        initialValues={{digits: '2'}}
        validate={(values) => {
          const errors = {};

          if (!values.digits) {
            errors.digits = 'A number is required to proceed.';
          } else if (values.digits < 2) {
            errors.digits = 'Please provide a positive number greater than 2.';
          }

          return errors;
        }}
        onSubmit={({digits}, {setSubmitting}) => {
          const [min, max] = generateNumberRange(digits);

          const randomNumber = Math.round(Math.random() * (max - min) + min);
          setSolution(randomNumber);
          setNumberOfDigits(digits);
        }}
      >
        {({isSubmitting}) => (
          <Form>
            <h1>Number Of Digits?</h1>
            <Field type="number" name="digits" min="2" />

            <ErrorMessage name="digits" component="p" className="error" />

            <button type="submit" className="btn" disabled={isSubmitting}>
              Go!
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default DigitForm;

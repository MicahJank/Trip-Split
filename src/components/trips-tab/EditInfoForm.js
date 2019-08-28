import React, { useState, useEffect } from "react";

import { Route, NavLink } from "react-router-dom";

import axios from 'axios';
import * as Yup from 'yup';

import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

import styled from 'styled-components';
import { Icon, Button } from 'semantic-ui-react';

import { Form, Field, withFormik, ErrorMessage } from 'formik';

const FormContainer = styled.div`
    display: flex;
    align-items: center;

    position: absolute;
    bottom: 3px;
    left: 5px;
    width: 250px;

    .ui.form.mini {
        display: flex;
        align-items: center;
    }

    .ui.button.positive {
        margin-left: 20px;
    }
`;

const EditInfoForm = ({ errors, touched, values, status }) => {
 
    return (
        <FormContainer>
        <Form className='ui form mini'>
            <div>
            <Field  type="text" name="name" placeholder="Name" />

            <Field  type="date" name="date" placeholder="Date" />
            </div>
            <div className='submit-button'>
                <button className="ui button positive" type="submit">Submit</button>
            </div>
        </Form>
        </FormContainer>
    );
};

const formikHOC = withFormik({
  // this sets up setting the values of the inputs
  mapPropsToValues({ name, date }) {
    return {
      name: name || '',
      date: date || ''
    };
  },
  // this sets up form validation
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    date: Yup
        .string()
        .required()
  }),
  // this sets ups submitting the form
  handleSubmit(values, {props, setStatus, resetForm, setSubmitting }) {
    axios.put(`https://tripsplitr.herokuapp.com/trips/${props.activeTrip.id}`, values)
      .then(apiData => {
          console.log(apiData);
        setStatus(apiData.data);
        resetForm();

        //  // get request needed here to re render the Trips.js component after the form has been submitted
        //  axios.get('https://tripsplitr.herokuapp.com/trips')
        //  .then(res => {
        //      props.setTrips(res.data);
        //  })
        //  .catch(err => {
        //      alert(err);
        //  })
      })
      .catch(err => alert(err));
  }
});

const EditInfoFormWithFormik = formikHOC(EditInfoForm);

export default EditInfoFormWithFormik;

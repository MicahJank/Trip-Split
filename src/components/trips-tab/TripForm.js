import React, { useState, useEffect } from "react";

import { Route, NavLink } from "react-router-dom";

import axios from 'axios';
import * as Yup from 'yup';

import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

import styled from 'styled-components';
import { Icon, Button } from 'semantic-ui-react';

import { Form, Field, withFormik, ErrorMessage } from 'formik';

const BackButton = styled.button`
    margin-top: 20px;
    width: 195px;
`;

const TripForm = ({ errors, touched, values, status, setTrips }) => {


    const [formStatus, setFormStatus] = useState(1);

    const clickFunction = () => {
        setFormStatus(formStatus + 1);
    };
 
    switch (formStatus) {
        case 1:
            return (
                <>
            <Form className="ui form">
                <Field className="field" type="text" name="name" placeholder="What is the name of your trip?"/> 
            </Form>
            <Button onClick={clickFunction} primary>Next</Button>
            </>
            )
            break;

        case 2:
            return (
                <>
            <Form className="ui form">
                {/* {TODO: Implement DatePicker as time permits} */}
                {/* <DatePicker className="field" type="date" name="date" placeholder="What date does your trip start?" /> */}
                <Field className="field" type="date" name="date" placeholder="What date does your trip start?"/> 
            </Form>
            <Button onClick={clickFunction} primary>Next</Button>
            </>
            );
            break;
            
        case 3:
            return (
                <>
            <Form className="ui form">
                <Field className="field" type="text" name="base_cost" placeholder="What is the base cost?"/>
                <button className="ui button" type="submit">Create Trip</button> 
            </Form>
            </>
            );
            break;
    
        default:
            break;
    }
};

const formikHOC = withFormik({
  // this sets up setting the values of the inputs
  mapPropsToValues({ name, date, base_cost, complete }) {
    return {
      name: name || '',
      date: date || '',
      base_cost: base_cost || '',
      complete: false
    };
  },
  // this sets up form validation
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    base_cost: Yup.string().required(),
    date: Yup
        .string()
        .required()
  }),
  // this sets ups submitting the form
  handleSubmit(values, {props, setStatus, resetForm, setSubmitting }) {
    axios.post('https://tripsplitr.herokuapp.com/trips', values)
      .then(apiData => {
        setStatus(apiData.data);
        resetForm();

         // get request needed here to re render the Trips.js component after the form has been submitted
         axios.get('https://tripsplitr.herokuapp.com/trips')
         .then(res => {
             props.setTrips(res.data);
         })
         .catch(err => {
             alert(err);
         })
      })
      .catch(err => alert(err));

      props.toggleModal();
  }
});

const TripFormWithFormik = formikHOC(TripForm);

export default TripFormWithFormik;

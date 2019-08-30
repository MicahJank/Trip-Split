import React, { useState, useEffect } from "react";

import { Route, NavLink } from "react-router-dom";

import axios from 'axios';
import * as Yup from 'yup';

import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

import styled from 'styled-components';
import { Icon, Button, Image } from 'semantic-ui-react';

import venmo from './icons/venmo-icon.svg';
import cashApp from './icons/cash-app.svg';

import { Form, Field, withFormik, ErrorMessage } from 'formik';

const BackButton = styled.button`
    margin-top: 20px;
    width: 195px;
`;

const AddPersonForm = ({ errors, touched, values, status }) => {


    const [formStatus, setFormStatus] = useState(1);

    const clickFunction = () => {
        setFormStatus(formStatus + 1);
    };
 
    switch (formStatus) {
        case 1:
            return (
                <>
            <Form className="ui form name massive">
                <Field autoFocus="autofocus" className="field" type="text" name="name" placeholder="Who are you adding?"/> 
            </Form>
            <Button basic className='next' onClick={clickFunction} primary>Next</Button>
            </>
            )
            break;

        case 2:
            return (
            <>
            <div className='connect-container'>
                <Button className='venmo' basic size={'massive'}><Image size='tiny' src={venmo} />Connect Venmo</Button>
                <Button className='cash-app' basic size={'massive'}><Image size='tiny' src={cashApp} />Connect CashApp</Button>
            </div>
            <Button className='next' basic onClick={clickFunction} primary>Skip</Button>
            </>
            );
            break;
            
        case 3:
            return (
            <>
            <Form className="ui form picture">
                <Icon color='yellow' name={'user circle'} size={'massive'} />
                <Button type='button' color='orange' className='upload-btn' icon={'picture'}>Upload Photo</Button>
                <button className="ui button finish primary" type="submit">Finish</button> 
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
  mapPropsToValues({ name }) {
    return {
      name: name || ''
    };
  },
  // this sets up form validation
  validationSchema: Yup.object().shape({
    name: Yup.string().required()
  }),
  // this sets ups submitting the form
  handleSubmit(values, {props, setStatus, resetForm, setSubmitting }) {
    // console.log(values);
    props.updatePeople(values);
    props.toggleModal();
  }
});

const AddPersonFormWithFormik = formikHOC(AddPersonForm);

export default AddPersonFormWithFormik;

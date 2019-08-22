import React, { useState, useEffect } from 'react';

import { Route, NavLink } from 'react-router-dom';

import axios from 'axios';
import { Form, Field, withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Checkbox, Form as SemanticForm, Icon } from 'semantic-ui-react';

import styled from 'styled-components';


const BackButton = styled.button`
    margin-top: 20px;
    width: 195px;
`;

const LogInForm = ({ errors, touched, values, status }) => {
  // useEffect(() => {
  //     axios.get('https://tripsplitr.herokuapp.com/users')
  //         .then(res => {
  //             console.log('res: ', res);
  //         })
  //         .catch(err => {
  //             alert(err);
  //         })
  // }, []);
  return (
    <>
    <Form className="ui form">
      <Field
        className="field"
        type="text"
        name="username"
        placeholder="UserName"
      />
      <ErrorMessage name="username" component="div" />

      <Field
        className="field"
        type="password"
        name="password"
        placeholder="Password"
      />
      <ErrorMessage name="password" component="div" />

     
      <button className="ui button" type="submit">
        Log In
      </button>
    </Form>
    <NavLink to='/'>
        <BackButton className='ui basic teal button'><Icon name='angle left'/>Back</BackButton>
    </NavLink>
    </>
  );
};

const formikHOC = withFormik({
  // this sets up setting the values of the inputs
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },
  // this sets up form validation
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),
  // this sets ups submitting the form
  handleSubmit(values, { setStatus, resetForm, setSubmitting }) {
    // axios.post('https://tripsplitr.herokuapp.com/auth/register', values)
    //   .then(apiData => {
    //     console.log('res: ', apiData);
    //     setStatus(apiData);
    //     resetForm();
    //   })
    //   .catch(err => alert(err));
  }
});

const LogInWithFormik = formikHOC(LogInForm);

export default LogInWithFormik;
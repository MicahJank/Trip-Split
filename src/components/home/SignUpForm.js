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

const FormFields = styled.div`
  
  .ui.left.icon.input i{
    height: 42px;
  }
`;

const SignUpForm = ({ errors, touched, values, status }) => {

  useEffect(() => {
    axios
      .get('https://tripsplitr.herokuapp.com/users')
      .then(res => {
        console.log('res: ', res);
      })
      .catch(err => {
        alert(err);
      });
  }, [status]);
  
  return (
    <>
    <Form className="ui form">
      <FormFields>
        <div className='ui left icon input'>
          <Field className="field" type="text" name="name" placeholder="Name" />
          <i aria-hidden="true" className="user icon"></i> 
        </div>
        <ErrorMessage name="name" component="div" />
      </FormFields>

      <FormFields>
      <div className='ui left icon input'>
        <Field className="field" type="text" name="username" placeholder="UserName" />
        <i aria-hidden="true" className="user icon"></i> 
      </div>
      <ErrorMessage name="username" component="div" />
      </FormFields>

      <FormFields>
        <div className='ui left icon input'>
          <Field className="field" type="email" name="email" placeholder="Email" />
          <Icon name='mail' />
        </div>
        <ErrorMessage name="email" component="div" />
      </FormFields>
    
    <FormFields>
      <div className='ui left icon input'>
        <Field type="password" className="field" name="password" placeholder="Password" />
        <i aria-hidden="true" className="lock icon"></i> 
      </div>
      <ErrorMessage name="password" component="div" />
    </FormFields>

      <button className="ui button primary" type="submit">
        Register
      </button>
    </Form>
        <NavLink to='/register'>
        <BackButton className='ui basic teal button'><Icon name='angle left'/>Back</BackButton>
    </NavLink>
    </>
  );
};

const formikHOC = withFormik({
  // this sets up setting the values of the inputs
  mapPropsToValues({ name, username, email, password }) {
    return {
      name: name || '',
      username: username || '',
      email: email || '',
      password: password || ''
    };
  },
  // this sets up form validation
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    username: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required()
  }),
  // this sets ups submitting the form
  handleSubmit(values, {props, setStatus, resetForm, setSubmitting }) {
    axios
      .post('https://tripsplitr.herokuapp.com/auth/register', values)
     
      .then(apiData => {
        // console.log('res: ', apiData);
        setStatus(apiData);
        resetForm();
      })
      .catch(err => alert(err));
  }
});

const SignUpWithFormik = formikHOC(SignUpForm);

export default SignUpWithFormik;

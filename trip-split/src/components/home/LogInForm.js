import React, { useState, useEffect } from "./node_modules/react";

import { Route, NavLink } from "./node_modules/react-router-dom";

import axios from "./node_modules/axios";
import { Form, Field, withFormik, ErrorMessage } from "./node_modules/formik";
import * as Yup from "./node_modules/yup";
import {
  Button,
  Checkbox,
  Form as SemanticForm,
  Icon
} from "./node_modules/semantic-ui-react";

import styled from "./node_modules/styled-components";

const BackButton = styled.button`
  margin-top: 20px;
  width: 195px;
`;

const LogInForm = ({ errors, touched, values, status, setCurrentUser }) => {
  useEffect(() => {
    if (status) {
      // status.token is the authentication key i will need when trying to do a get or post request that needs authentication
      localStorage.setItem("token", status.token);
      // localStorage.removeItem('token') is what i will use to remove the token when the user logs out
      setCurrentUser(status.user);
    }
  }, [status]);
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
      <NavLink to="/">
        <BackButton className="ui basic teal button">
          <Icon name="angle left" />
          Back
        </BackButton>
      </NavLink>
    </>
  );
};

const formikHOC = withFormik({
  // this sets up setting the values of the inputs
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  // this sets up form validation
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),
  // this sets ups submitting the form
  handleSubmit(values, { setStatus, resetForm, setSubmitting }) {
    axios
      .post("https://tripsplitr.herokuapp.com/auth/login", values)
      .then(apiData => {
        console.log("handle submit res: ", apiData);
        setStatus(apiData.data);
        resetForm();
      })
      .catch(err => alert(err));
  }
});

const LogInWithFormik = formikHOC(LogInForm);

export default LogInWithFormik;

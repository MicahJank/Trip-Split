import React, { useEffect } from "react";

import { NavLink } from "react-router-dom";

import axios from "axios";
import { Form, Field, withFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Icon } from "semantic-ui-react";

import styled from "styled-components";

const BackButton = styled.button`
  margin-top: 20px;
  width: 195px;
`;

const LogInForm = ({ errors, touched, values, status, history }) => {
  useEffect(() => {
    if (status) {
      // status.token is the authentication key i will need when trying to do a get or post request that needs authentication
      localStorage.setItem("token", status.token);
      localStorage.setItem("currentUserId", status.user.id);
      // localStorage.removeItem('token') is what i will use to remove the token when the user logs out
      // setCurrentUser(localStorage.getItem('currentUser'));

      history.push("/");
    }
  }, [status]);
  return (
    <>
    <Form className="ui form">
      <div className='field'>
        <div className='ui left icon input'>
          <Field
            type="text"
            name="username"
            placeholder="UserName"
          />
          <i aria-hidden="true" className="user icon"></i> 
        </div>
        <ErrorMessage className='error' name="username" component="div" />
      </div>
      
      
      <div className='field'>
        <div className='ui left icon input'>
          <Field
            type="password"
            name="password"
            placeholder="Password"
          />
          <i aria-hidden="true" className="lock icon"></i>
        </div>
        <ErrorMessage className='error' name="password" component="div" />
      </div>
      

      <button className="ui button primary" type="submit">
        Log In
      </button>

    </Form>
    {/* <NavLink to='/register'>
        <BackButton className='ui basic teal button'><Icon name='angle left'/>Back</BackButton>
    </NavLink> */}
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

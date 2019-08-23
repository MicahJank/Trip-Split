import React, { useState } from 'react';
import logo from './logo.svg';

import { Route, Redirect, NavLink } from 'react-router-dom';

import './App.css';

// components
import Home from './components/home/Home.js';
import WebApp from './components/WebApp.js';


function App() {
  
  // currentUser is set in the LogInForm.js
  const [currentUser, setCurrentUser] = useState('');
  console.log('currentUser: ', currentUser);
  console.log('localStorage: ', localStorage);

  return (
    <>
    <Route path='/' render={props => <Home {...props} setCurrentUser={setCurrentUser} /> } />
    <PrivateRoute path='/trip-split' component={WebApp} />
    </>
  );
}

// the private route will check to make sure that the user has an authentication token, if they dont it will redirect them to the login page.
const PrivateRoute = ({ component: WebApp, ...rest }) => (
  <Route {...rest} render={ (props) => (
    localStorage.token ? <WebApp {...props} /> 
    : <Redirect to='/login' />
  )} />
)

export default App;

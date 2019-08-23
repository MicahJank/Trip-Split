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

  // This checks if the user has an authentication token in local storage. If they do then they should skip the log in process and go directly to the app.
  // if not it will show them the sign up page.
  if(localStorage.token) {
    return (
      <>
        <Redirect to='/trip-split' />
        <PrivateRoute path='/trip-split' component={WebApp} />
      </>
    );
  }

  return (
    <>
    <Route path='/' render={props => <Home {...props} setCurrentUser={setCurrentUser} /> } />
    </>
  );
}

const PrivateRoute = ({ component: WebApp, ...rest }) => (
  <Route {...rest} render={ (props) => (
    localStorage.token ? <WebApp {...props} /> 
    : <Redirect to='/login' />
  )} />
)

export default App;

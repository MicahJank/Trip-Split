import React from 'react';
import logo from './logo.svg';

import { Route } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <>
    <Route exact path='/' component={SignUpForm}/>
    {/* <Route path='/trips' component={} />
    <Route path='/people' component={} />
    <Route path='/transactions' component={} />
    <Route path='trip-form' component={} /> */}
    </>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";


function App() {
  return (
    <>
  <Route exact path = '/' component = {}/>
  <Route path = '/trips' component = {}/>
  <Route path = '/people' component = {}/>
  <Route path = '/transactions' component = {}/>
  <Route path = '/trip-form' component = {}/>
</>
  )
};

export default App;

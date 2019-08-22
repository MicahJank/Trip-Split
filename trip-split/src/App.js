import React from 'react';
import logo from './logo.svg';

import { Route } from 'react-router-dom';

import './App.css';

// components
import Home from './components/home/Home.js';

function App() {

  return (
    <>
    <Route path='/' component={Home}/>
    {/* <Route path='/trips' component={} />
    <Route path='/people' component={} />
    <Route path='/transactions' component={} />
    <Route path='trip-form' component={} /> */}
    </>
  );
}

export default App;

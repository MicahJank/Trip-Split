import React, { useState } from 'react';

import { Route } from 'react-router-dom';

import Trips from './trips-tab/Trips.js';
import NavBar from './navigation/NavBar.js';

const WebApp = () => {

    return (
        <>
        <div>Web App</div>
        <NavBar /> 
        </>
    /* <Route path='/trips' component={} />
    <Route path='/people' component={} />
    <Route path='/transactions' component={} />
    <Route path='trip-form' component={} /> */
    );
};

export default WebApp;
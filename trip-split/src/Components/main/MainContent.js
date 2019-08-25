import React, { useState, usEffect } from "react";

import { Route } from "react-router-dom";

import styled from 'styled-components';

import Trips from '../trips-tab/Trips.js';
import People from '../people-tab/People.js';
import Transactions from '../transactions-tab/Transactions.js';
import Profile from '../user-profile/Profile.js';


const MainContent = () => {

   return (
    <>
    <Route exact path='/' component={Profile}/>
    <Route path='/trips' component={Trips} />
    <Route path='/people' component={People} />
    <Route path='/transactions' component={Transactions} />
    </>
   );
};

export default MainContent;
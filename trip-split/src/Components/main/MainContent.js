import React, { useState, usEffect } from "react";

import { Route } from "react-router-dom";

import styled from 'styled-components';

import Trips from '../trips-tab/Trips.js';
import People from '../people-tab/People.js';
import Transactions from '../transactions-tab/Transactions.js';


const MainContent = () => {

   return (
    <>
    <Route path='/trips' component={Trips} />
    <Route path='/people' component={People} />
    <Route path='/transactions' component={Transactions} />
    </>
   );
};

export default MainContent;
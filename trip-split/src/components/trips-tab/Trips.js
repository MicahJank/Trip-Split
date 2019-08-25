import React, { useState } from "react";

import { Route } from "react-router-dom";

import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

import CurrentTrip from './CurrentTrip.js';
import PastTrips from './PastTrips.js';


const Divide = styled.h4`
    width: 100%;
    text-align: center;
    background-color: #E0E0E0;
    color: rgba(0,0,0,.57);
    padding: 10px;
`;

const Trips = () => {

    return (
        <>
        <CurrentTrip />
        <PastTrips />
        </>
    );
};

export default Trips;
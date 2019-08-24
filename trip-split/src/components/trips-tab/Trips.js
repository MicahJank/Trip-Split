import React, { useState } from "react";

import { Route } from "react-router-dom";

import styled from 'styled-components';

import CurrentTrip from './CurrentTrip.js';
import PastTrips from './PastTrips.js';


const Trips = () => {

    return (
        <>
        <CurrentTrip />
        <PastTrips />
        </>
    );
};

export default Trips;
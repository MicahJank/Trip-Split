import React, { useState, useEffect } from "react";

import { Route } from "react-router-dom";

import axios from 'axios';

import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

import CurrentTrip from './CurrentTrip.js';
import PastTrips from './PastTrips.js';
import UpcomingTrips from './UpcomingTrips.js';
import CreateTrip from './CreateTrip.js';


const Divide = styled.h4`
    width: 100%;
    text-align: center;
    background-color: #E0E0E0;
    color: rgba(0,0,0,.57);
    padding: 10px;
`;

const Trips = ({history, setTripId, activeTrip, setActiveTrip, setCurrentTripName}) => {

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        // the point of this axios call is to get the trips from the database, then once i have the trips i can filter out only those trips that
        // have been completed, the completed trips then get assigned into pastTrips
        axios.get('https://tripsplitr.herokuapp.com/trips')
            .then(res => {
                setTrips(res.data);
                console.log('trips api ran!');          
            })
            .catch(err => {
                alert(err);
            });
    }, [trips.length]);

    return (
        <>
        <CurrentTrip setCurrentTripName={setCurrentTripName} setActiveTrip={setActiveTrip} setTripId={setTripId} setTrips={setTrips} trips={trips} activeTrip={activeTrip} />
        <CreateTrip setTrips={setTrips} />
        <UpcomingTrips setTripId={setTripId} trips={trips} />
        <PastTrips setTripId={setTripId} trips={trips} />
        </>
    );
};

export default Trips;
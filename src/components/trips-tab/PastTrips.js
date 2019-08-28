import React, { useState, useEffect } from "react";

import axios from 'axios';

import { Route } from "react-router-dom";

import styled from 'styled-components';
import { Card, Feed } from 'semantic-ui-react';

import TripCard from './TripCard.js';

const CardDiv = styled.div`
    width: 80%;
    margin: auto;
`;


const PastTrips = ( { trips, setTripId } ) => {

    // for the past trips i will need to get the trips from the Trips.js and filter out any trips that have not been completed yet.
    const pastTrips = trips.filter(trip => trip.complete);

    // this conditional checks if there are trips in the pastTrips array, if there is then it can render out the cards for the trips
    // if not then it should just display some text stating that there are no trips
    if (pastTrips.length) {
        return (
                <Card fluid={true} centered={true}>
                <Card.Content>
                    <Card.Header>Past Trips</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed>
                    { pastTrips.map(trip => {
                            return (     
                                <TripCard setTripId={setTripId} trip={trip} key={trip.id} name={trip.name} date={trip.date} img={trip.img}/>
                            );
                        })}
                    </Feed>
                </Card.Content>
                </Card>
        );
    } else {
        return (
           <div>
               No past trips....
           </div> 

        );
    }

   
};

export default PastTrips;
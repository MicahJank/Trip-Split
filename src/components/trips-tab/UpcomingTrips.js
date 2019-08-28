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


const UpcomingTrips = ( { trips, setTripId } ) => {

    const upComing = trips.filter(trip => !trip.complete);

    // this conditional checks if there are trips in the upComing array, if there is then it can render out the cards for the trips
    // if not then it should just display some text stating that there are no trips
    if (upComing.length) {
        return (
                <Card fluid={true} centered={true}>
                <Card.Content>
                    <Card.Header>Upcoming Trips</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed>
                    { upComing.map(trip => {
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
               No upcoming trips....
           </div> 

        );
    }

   
};

export default UpcomingTrips;
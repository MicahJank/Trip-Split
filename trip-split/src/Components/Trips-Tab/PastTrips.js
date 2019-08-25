import React, { useState, useEffect } from "react";

import axios from 'axios';

import { Route } from "react-router-dom";

import styled from 'styled-components';
import { Card, Feed } from 'semantic-ui-react';

import PastTripCard from './PastTripCard.js';

const CardDiv = styled.div`
    width: 80%;
    margin: auto;
`;


const PastTrips = () => {

    const [pastTrips, setPastTrips] = useState('');

    useEffect(() => {
        // the point of this axios call is to get the trips from the database, then once i have the trips i can filter out only those trips that
        // have been completed, the completed trips then get assigned into pastTrips
        axios.get('https://tripsplitr.herokuapp.com/trips')
            .then(res => {
                console.log(res);
                const pastTripsArray = res.data.filter(trip => trip.complete === 1);
                setPastTrips(pastTripsArray);
                
            })
            .catch(err => {
                alert(err);
            });

    }, []);


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
                                <PastTripCard key={trip.id} name={trip.name} date={trip.date} img={trip.img}/>
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
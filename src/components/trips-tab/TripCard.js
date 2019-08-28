import React, { useState } from 'react';

import { Route } from 'react-router-dom';

import styled from 'styled-components';
import { Card, Image, Icon, Feed } from 'semantic-ui-react';

const ClickTrip = styled.button`
    cursor: pointer;
    width: 100%;
    border: none;
    background: none;
    margin: 20px 0;
`;

// TODO: Use unsplash API to find and set the image of the place
const TripCard = ( { name, date, img, trip, setTripId } ) => {

    const clickHandler = () => {
        setTripId(trip.id);
    };

    return (
    <ClickTrip onClick={clickHandler}>
        <Feed.Event>
            <Feed.Content>
                <Card fluid>
                <Image src={img} inline={true} />
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Meta>{date}</Card.Meta>
                    </Card.Content>
                </Card>
            </Feed.Content>
        </Feed.Event>
    </ClickTrip>
    );
};

export default TripCard;
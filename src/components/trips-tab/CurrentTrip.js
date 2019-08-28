import React, { useState } from 'react';

import { Route } from 'react-router-dom';

import styled from 'styled-components';
import { Card, Image, Icon, Button, Feed } from 'semantic-ui-react';

import TripModal from './TripModal.js';


const Container = styled.div`
    margin: 70px;

    .left.aligned.content {
        display: flex;
        flex-direction: column;

        .warning.circle.icon {
            align-self: center;
        }
    }
`;

const ActiveTripContainer = styled.div`
    margin: 25px;
`;

// place holder until i can get state set up
const currentTrip = false;

// this is the component that will display when there is no active trip
// TODO: styling
const NoCurrentTrip = () => {
  return (
      <Container>
        <Card centered={true}>
            <Card.Content textAlign='left'>
                <Icon size='big' color='yellow' name='warning circle'/>
                <Card.Header textAlign='center'>You don't have an active trip yet!</Card.Header>
                <Card.Description textAlign='center'>
                Select a trip below or click Create New Trip to get started.
                </Card.Description>
            </Card.Content>
        </Card>
    </Container>
  );
};

// This is the component that will display when there is an active trip
// NOTE: 'trips' property is coming from Trips.js originally
const ActiveTrip = ( { activeTrip } ) => {

    return (
      <ActiveTripContainer>
        <Feed.Event>
              <Feed.Content>
                  <Card fluid>
                  <Image src={activeTrip.img} inline={true} />
                      <Card.Content>
                          <Card.Header>{activeTrip.name}</Card.Header>
                          <Card.Meta>{activeTrip.date}</Card.Meta>
                          <Button color='yellow' circular={true} floated='right' icon='edit' />
                      </Card.Content>
                      
                  </Card>
              </Feed.Content>
          </Feed.Event>
        </ActiveTripContainer>
    );
  };

const CurrentTrip = ( { trips, setTrips, activeTrip } ) => {
  if (activeTrip.id) {
    return <ActiveTrip activeTrip={activeTrip} />;
  } else {
    return <NoCurrentTrip setTrips={setTrips} />;
  }
};

export default CurrentTrip;

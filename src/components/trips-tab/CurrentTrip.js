import React, { useState } from 'react';

import { Route } from 'react-router-dom';

import styled from 'styled-components';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

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

// place holder until i can get state set up
const currentTrip = false;

// this is the component that will display when there is no active trip
// TODO: styling
const NoCurrentTrip = ({setTrips}) => {
  return (
      <Container>
        <Card centered={true}>
            <Card.Content textAlign='left'>
                <Icon size='big' color='yellow' name='warning circle'/>
                <Card.Header textAlign='center'>You don't have an active trip yet!</Card.Header>
                <Card.Description textAlign='center'>
                Click below to get started.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <TripModal setTrips={setTrips} />
            </Card.Content>
        </Card>
    </Container>
  );
};

// This is the component that will display when there is an active trip
// NOTE: 'trips' property is coming from Trips.js originally
const ActiveTrip = ( { trips } ) => {

    return (
      <Card centered={true}>
        <Card.Content textAlign='left'>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    );
  };

const CurrentTrip = ( { trips, setTrips } ) => {
  if (currentTrip) {
    return <ActiveTrip trips={trips} />;
  } else {
    return <NoCurrentTrip setTrips={setTrips} />;
  }
};

export default CurrentTrip;

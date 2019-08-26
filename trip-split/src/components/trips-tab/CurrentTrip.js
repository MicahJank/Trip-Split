import React, { useState } from 'react';

import { Route } from 'react-router-dom';

import styled from 'styled-components';
import { Card, Image, Icon, Button } from 'semantic-ui-react';


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
const NoCurrentTrip = () => {
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
                <Button fluid positive>
                    Create A Trip!
                </Button>
            </Card.Content>
        </Card>
    </Container>
  );
};

// This is the component that will display when there is an active trip
const ActiveTrip = () => {

  // const [pastTrips, setPastTrips] = useState([]);

  // useEffect(() => {
  //     // the point of this axios call is to get the trips from the database, then once i have the trips i can filter out only those trips that
  //     // have been completed, the completed trips then get assigned into pastTrips
  //     axios.get('https://tripsplitr.herokuapp.com/trips')
  //         .then(res => {
  //             console.log(res);
  //             setPastTrips(res.data.filter(trip => trip.complete === 1));          
  //         })
  //         .catch(err => {
  //             alert(err);
  //         });
  // }, [pastTrips.length]);

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

const CurrentTrip = () => {
  if (currentTrip) {
    return <h1>Theres a trip!!</h1>;
  } else {
    return <NoCurrentTrip />;
  }
};

export default CurrentTrip;

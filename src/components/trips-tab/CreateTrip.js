import React from 'react';

import { Card, Image, Icon, Button } from 'semantic-ui-react';

import styled from 'styled-components';

import TripModal from './TripModal.js';

const Container = styled.div`
    height: 100%;
    width: 100%;
    max-width: 800px;
`;

const CreateTrip = ({setTrips}) => {

    return (
    <Container className='trip-modal-container'>
        <TripModal setTrips={setTrips} />
    </Container>
    )
};

export default CreateTrip;
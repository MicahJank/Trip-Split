import React from 'react';

import { Card, Image, Icon, Button } from 'semantic-ui-react';

import TripModal from './TripModal.js';

const CreateTrip = ({setTrips}) => {

    return (
    <Card centered={true}>
        <TripModal setTrips={setTrips} />
    </Card>
    )
};

export default CreateTrip;
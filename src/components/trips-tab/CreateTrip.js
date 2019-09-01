import React from 'react';

import { Card, Image, Icon, Button } from 'semantic-ui-react';

import TripModal from './TripModal.js';

const CreateTrip = ({setTrips}) => {

    return (
    <TripModal setTrips={setTrips} />
    )
};

export default CreateTrip;
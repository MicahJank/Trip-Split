import React, { useState } from 'react';

import { Route } from 'react-router-dom';

import styled from 'styled-components';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

import TripForm from './TripForm.js';


const TripModal = ({setTrips}) => {

    const [closeModal, setCloseModal] = useState(false);
 

    const toggleModal = () => {
    setCloseModal(!closeModal);
    };

    return (
    <Modal open={closeModal} trigger={<Button onClick={toggleModal} fluid positive>Create Trip</Button>}>
        <Modal.Header>Please Fill in the Information</Modal.Header>
        <Modal.Content>
            <TripForm setTrips={setTrips} toggleModal={toggleModal} />
        </Modal.Content>
    </Modal>
);
};

export default TripModal;
import React, { useState } from 'react';

import { Route } from 'react-router-dom';

import styled from 'styled-components';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react';

import TripForm from './TripForm.js';


const ButtonContainer = styled.div`
    position: fixed;
    bottom: 60px;
    right: 15px;
    z-index: 1;

    .ui.massive.circular.button {
        padding: 35px;
    }

    .icon.car {
        position: absolute;
        bottom: 23px;
        right: 20px;
    }

    .icon.plus {
        position: absolute;
        right: 15px;
        bottom: 35px;

    }
`;


const TripModal = ({setTrips}) => {

    const [closeModal, setCloseModal] = useState(false);
 

    const toggleModal = () => {
    setCloseModal(!closeModal);
    };

    return (
    <Modal open={closeModal} trigger={<ButtonContainer><Button onClick={toggleModal} circular={true} size={'massive'} primary><Icon name='car' /><Icon size='tiny' name='plus' /></Button></ButtonContainer>}>
        <Modal.Header>Please Fill in the Information</Modal.Header>
        <Modal.Content>
            <TripForm setTrips={setTrips} toggleModal={toggleModal} />
        </Modal.Content>
    </Modal>
);
};

export default TripModal;
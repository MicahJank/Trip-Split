import React, { useState } from 'react';

import { Route } from 'react-router-dom';

import styled from 'styled-components';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

import TripForm from './TripForm.js';


const DeleteTripModal = ({setTrips}) => {

    const [closeModal, setCloseModal] = useState(false);
 

    const toggleModal = () => {
    setCloseModal(!closeModal);
    };

    return (
    <Modal trigger={<Button onClick={toggleModal} className='close-button' size={'mini'} fluid={false} negative icon={'close'} />} open={closeModal} >
        <Modal.Header>Delete This Trip</Modal.Header>
        <Modal.Content>
            <p>Are you sure you want to delete this trip?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={toggleModal} negative>
              No
            </Button>
            <Button
              onClick={toggleModal}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Yes'
            />
          </Modal.Actions>
    </Modal>
);
};

export default DeleteTripModal;
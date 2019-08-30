import React, { useState, useEffect } from 'react';

import { Route } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';


const DeletePersonModal = ( {person, deletePerson} ) => {

    const [closeModal, setCloseModal] = useState(false);

    const toggleModal = () => {
    setCloseModal(!closeModal);
    };

    const deleteCurrentPerson = () => {
        deletePerson(person);
        setCloseModal(false);
    };

    return (
    <Modal trigger={ <Icon onClick={toggleModal} color='red' className='trash-icon' size='small' name='trash' />} open={closeModal} >
        <Modal.Header>Delete This Person</Modal.Header>
        <Modal.Content>
            <p>Are you sure you want to delete this person from the trip?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={toggleModal} negative>
              No
            </Button>
            <Button
              onClick={deleteCurrentPerson}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Yes'
            />
          </Modal.Actions>
    </Modal>
);
};

export default DeletePersonModal;
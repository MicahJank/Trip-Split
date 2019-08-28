import React, { useState, useEffect } from 'react';

import { Route } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

import TripForm from './TripForm.js';


const DeleteTripModal = ({setTrips, activeTrip, setActiveTrip, setCurrentTripName}) => {

    const [closeModal, setCloseModal] = useState(false);
    
    const [deleteTrip, setDeleteTrip] = useState(false);

    useEffect(() => {
        if(deleteTrip) {
            axios.delete(`https://tripsplitr.herokuapp.com/trips/${activeTrip.id}`)
                .then(res => {
                    console.log('Deleted Trip');
                    setActiveTrip({});
                    setCurrentTripName('');
                       // get request needed here to re render the Trips.js component after the current trip has been deleted
                        axios.get('https://tripsplitr.herokuapp.com/trips')
                        .then(res => {
                            setTrips(res.data);
                        })
                        .catch(err => {
                            alert(err);
                        })
                                })
                .catch(err => {
                    console.log(err);
                })
        }

    }, [deleteTrip])

    const toggleModal = () => {
    setCloseModal(!closeModal);
    };

    const deleteCurrentTrip = () => {
        setDeleteTrip(true);
        setCloseModal(false);
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
              onClick={deleteCurrentTrip}
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
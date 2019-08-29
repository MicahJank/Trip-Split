import React, { useState } from 'react';

import { Route } from 'react-router-dom';

import styled from 'styled-components';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

import PersonForm from './AddPersonForm.js';

const Container = styled.div`
    height: 500px;

    button.next {
        position: absolute;
        bottom: 30px;
        right: 30px;
    }

    .ui.button.finish {
        position: absolute;
        bottom: 15px;
        right: 15px;
    }

    .connect-container {
        display: flex;
        flex-direction: column;

        .venmo, .cash-app {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: 20px;
        }

    }

    .ui.form.name input {
        border: none;
    }

    .ui.form.picture {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .upload-btn {
            margin-top: 20px;
        }
    }
`;

const PeopleModal = ({setTrips}) => {

    const [closeModal, setCloseModal] = useState(false);
 

    const toggleModal = () => {
    setCloseModal(!closeModal);
    };

    return (
        <Modal className='people-form' centered={false} size={'large'} open={closeModal} trigger={<Button onClick={toggleModal} circular={true} size={'massive'} icon={'add user'}></Button>}>
            <Modal.Header>Please Fill in the Information</Modal.Header>
            <Modal.Content className='myClass'>
                <Container>
                    <PersonForm toggleModal={toggleModal} />
                </Container>
            </Modal.Content>
        </Modal>

);
};

export default PeopleModal;
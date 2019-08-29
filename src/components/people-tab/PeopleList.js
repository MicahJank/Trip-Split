import React from 'react';

import styled from 'styled-components';
import { List, Button, Icon } from 'semantic-ui-react'

import { Link } from "react-router-dom";

import ListItem from './ListItem.js';
import PeopleModal from './PeopleModal.js';


const AddPerson = styled.div`
    position: fixed;
    right: 30px;
    bottom: 60px;
`;

const PeopleList = ( { peopleOnTrip } ) => {

    return (
    <>
    <List size={'massive'} divided relaxed>
        {peopleOnTrip.map(person => {
            return (<ListItem key={person.id} person={person} />)
        })}
    </List>
    <AddPerson>
        <PeopleModal />
    </AddPerson>
    </>
    );
};

export default PeopleList;
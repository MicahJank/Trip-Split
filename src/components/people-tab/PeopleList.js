import React from 'react';

import styled from 'styled-components';
import { List, Button, Icon } from 'semantic-ui-react'

import ListItem from './ListItem.js';


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
        <Button circular={true} size={'massive'} icon={'add user'} />
    </AddPerson>
    </>
    );
};

export default PeopleList;
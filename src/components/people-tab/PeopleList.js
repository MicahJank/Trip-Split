import React from 'react';

import styled from 'styled-components';
import { List } from 'semantic-ui-react'

import ListItem from './ListItem.js';


const PeopleList = ( { peopleOnTrip } ) => {

    return (
    <List size={'massive'} divided relaxed>
        {peopleOnTrip.map(person => {
            return (<ListItem key={person.id} person={person} />)
        })}
    </List>
    );
};

export default PeopleList;
import React from 'react';

import styled from 'styled-components';
import { List, Button, Icon } from 'semantic-ui-react'

import DeletePersonModal from './DeletePersonModal.js';

const CloseButton = styled.div`
    position: absolute;
    right: 0;

    .trash-icon {
      cursor: pointer;
    }
`;

const ListItem = ( { person, deletePerson } ) => {

  const clickHandler = () => {
    deletePerson(person);
  };

    return (
        <List.Item>
          <CloseButton>
            <DeletePersonModal person={person} deletePerson={deletePerson}  />
          </CloseButton>
          <List.Icon name='user' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header>{person.name}</List.Header>
            <List.Description>Venmo not active</List.Description>
          </List.Content>
        </List.Item>
    );
}

export default ListItem;
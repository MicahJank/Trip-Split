import React from 'react';

import styled from 'styled-components';
import { List, Button, Icon } from 'semantic-ui-react'

const CloseButton = styled.div`
    position: absolute;
    right: 0;

    .trash-icon {
      cursor: pointer;
    }
`;

const ListItem = ( { person } ) => {

    return (
        <List.Item>
          <CloseButton>
            <Icon color='red' className='trash-icon' size='small' name='trash' />
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
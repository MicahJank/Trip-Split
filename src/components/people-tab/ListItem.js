import React from 'react';

import styled from 'styled-components';
import { List, Button, Icon } from 'semantic-ui-react'

const CloseButton = styled.div`
    position: absolute;
    right: 0;

    .ui.icon.button.close-btn {
      padding: 3px 5px
      i {
        font-size: 0.7rem;
      }
    }
`;

const ListItem = ( { person } ) => {

    return (
        <List.Item>
          <CloseButton>
            <button className='close-btn ui icon negative button'><Icon name={'close'} /></button>
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
import React from 'react';

import styled from 'styled-components';
import { List } from 'semantic-ui-react'

const ListItem = ( { person } ) => {

    return (
        <List.Item>
          <List.Icon name='user' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header>{person.name}</List.Header>
            <List.Description>Venmo not active</List.Description>
          </List.Content>
        </List.Item>
    );
}

export default ListItem;
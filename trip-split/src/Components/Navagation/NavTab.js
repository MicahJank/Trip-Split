import React, { useState } from "react";

import { Route, NavLink } from "react-router-dom";

import styled from 'styled-components';
import { Tab, Menu, Icon, Button } from "semantic-ui-react";

const ButtonContainer = styled.div`
  display: flex;

  .buttons-group {
    width: 100%;
  }
`;
  
  export default function NavTab() {

    return (
    <ButtonContainer>
      <Button.Group size='huge' className='buttons-group'>
        <Button><Icon name='car' />Trips</Button>
        <Button><Icon name='users' />People</Button>
        <Button><Icon name='money' />Transactions</Button>
      </Button.Group>
    </ButtonContainer>
    );
 
};

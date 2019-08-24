import React, { useState } from "react";

import { Route, NavLink } from "react-router-dom";

import styled from 'styled-components';
import { Tab, Menu, Icon, Button } from "semantic-ui-react";

const ButtonContainer = styled.div`
  display: flex;
`;
  
  export default function NavTab() {

    return (
    <ButtonContainer>
      <Button.Group>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Button.Group>
    </ButtonContainer>
    );
 
};

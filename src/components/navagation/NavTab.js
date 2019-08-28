import React, { useState } from "react";

import { Route, NavLink } from "react-router-dom";

import styled from "styled-components";
import { Tab, Menu, Icon, Button } from "semantic-ui-react";

const ButtonContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;

  .buttons-group {
    width: 100%;

    a {
      border-radius: 0;
    }
  }
`;

export default function NavTab() {
  return (
    <ButtonContainer>
      <Button.Group widths="1" size="large" compact className="buttons-group">
        <NavLink exact to={"/"} className="ui button">
          <Icon name="home" />
        </NavLink>
        <NavLink to={"/trips"} className="ui button">
          <Icon name="car" />
          Trips
        </NavLink>
        <NavLink to={"/people"} className="ui button">
          <Icon name="users" />
          People
        </NavLink>
        <NavLink to={"/transactions"} className="ui button">
          <Icon name="money" />
          Transactions
        </NavLink>
      </Button.Group>
    </ButtonContainer>
  );
}

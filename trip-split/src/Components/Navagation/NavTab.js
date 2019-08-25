import React, { useState } from "react";
import {
  Tab,
  Menu,
  Icon,
  Container,
  Button,
  ButtonGroup
} from "semantic-ui-react";
import { Route, NavLink } from "react-router-dom";

export default function NavTab() {
  return (
    <Container textAlign="center">
      <Button.Group>
        <NavLink exact to={"/trips"}>
          <Button color="blue" class="ui bottom attached button">
            Trips
          </Button>
        </NavLink>
        <NavLink exact to={"/people"}>
          <Button color="blue">People</Button>
        </NavLink>
        <NavLink exact to={"/transaction"}>
          <Button color="blue">Transactions</Button>
        </NavLink>
      </Button.Group>
    </Container>
  );
}

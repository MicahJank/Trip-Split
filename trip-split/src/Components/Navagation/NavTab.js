import React, { useState } from "./node_modules/react";
import { Tab, Menu, Icon } from "./node_modules/semantic-ui-react";
import { Route, NavLink } from "./node_modules/react-router-dom";

import Trips from "./components/trips-tab/Trips.js.js";

const Buttons = () => {
  return (
    <ButtonContainer>
      <NavLink exact to={"/trips"}>
        <Button>Trips</Button>
      </NavLink>
      <NavLink exact to={"/people"}>
        <Button>People</Button>
      </NavLink>
      <NavLink exact to={"/transaction"}>
        <Button>Transactions</Button>
      </NavLink>
    </ButtonContainer>
  );
};

const panes = [
  {
    menuItem: (
      <Menu.Item key="trips">
        <NavLink to="/">
          <Icon name="car" />
          Trips
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane />
  },

  {
    menuItem: (
      <Menu.Item key="people">
        <NavLink to="/people">
          <Icon name="users" />
          People
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane />
  },

  {
    menuItem: (
      <Menu.Item key="transactions">
        <NavLink to="/transactions">
          <Icon name="money bill alternate" />
          Transactions
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane />
  }
];

export default function NavTab() {
  return <Tab panes={panes} />;
}

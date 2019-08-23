import React, { useState } from "react";

import { Route, NavLink } from "react-router-dom";

import { Tab, Menu, Icon } from "semantic-ui-react";

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

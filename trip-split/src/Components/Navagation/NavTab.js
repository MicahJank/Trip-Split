import React, { useState } from "react";

import { Route } from "react-router-dom";

import Trips from "./components/trips-tab/Trips.js";

const WebApp = () => {
  return <div>Web App</div>;

  const panes = [
    {
      menuItem: (
        <Menu.Item key="trips">
          <NavLink to="/">
            <Icon name="trips" />
            Trips
          </NavLink>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane>
          <AppRouter />
        </Tab.Pane>
      )
    },
  
    {
      menuItem: (
        <Menu.Item key="people">
          <NavLink to="/people">
            <Icon name="People" />
            People
          </NavLink>
        </Menu.Item>
      ),
      render: () => <Tab.Pane></Tab.Pane>
    },
  
    {
      menuItem: (
        <Menu.Item key="transactions">
          <NavLink to="/transactions">
            <Icon name="Transaction" />
            Transactions
          </NavLink>
        </Menu.Item>
      ),
      render: () => <Tab.Pane></Tab.Pane>
    },
  

  
  
  ];
  
  export default function TabNav() {
    return <Tab panes={panes} />

  
};

export default WebApp};

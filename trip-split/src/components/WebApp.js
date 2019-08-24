import React, { useState } from "react";

import { Route } from "react-router-dom";
import NavTab from './navagation/NavTab.js';

import styled from 'styled-components';
import { Card } from 'semantic-ui-react';


const MainContainer = styled.div`]
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const TopRow = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
`;

const WebApp = () => {
  return (
    <MainContainer>
        <TopRow className='top-row' fluid header='Header'>
            <h1>Header</h1>
            <h3>Another Header</h3>
        </TopRow>
        <NavTab />
    </MainContainer>
  );
};

export default WebApp;

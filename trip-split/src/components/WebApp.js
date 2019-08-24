import React, { useState } from "react";

import { Route } from "react-router-dom";
import NavTab from './navagation/NavTab.js';

import styled from 'styled-components';
import { Card } from 'semantic-ui-react';

import TopRow from './top-row/TopRow.js';


const MainContainer = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    .top, .main, .nav {
        flex-shrink: 0;
    }

`;

const Main = styled.div`
    flex-grow: 1;
`;

const WebApp = () => {
  return (
    <MainContainer>
        <TopRow className='top'/>
        <Main className='main' />
        <NavTab className='nav' />
    </MainContainer>
  );
};

export default WebApp;

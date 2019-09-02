import React, { useState, useEffect } from "react";

import { Route } from "react-router-dom";
import NavTab from "./navagation/NavTab.js";

import styled from "styled-components";
import { Card } from "semantic-ui-react";

import TopRow from "./top-row/TopRow.js";
import MainContent from "./main/MainContent.js";

const MainContainer = styled.div`
<<<<<<< HEAD
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-width: 800px;
    margin: auto;

    .top, .main {
        flex-shrink: 0;
    }

    .nav {
        width: 100%;
        max-width: 800px;
    }

=======
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .top,
  .main {
    flex-shrink: 0;
  }

  .nav {
    position: absolute;
    bottom: 0;
  }
>>>>>>> origin
`;

const Main = styled.div`
  flex-grow: 1;
`;

const WebApp = () => {
  const [currentTripName, setCurrentTripName] = useState("");

  return (
    <MainContainer>
      <TopRow className="top" currentTripName={currentTripName} />
      <Main className="main">
        <MainContent setCurrentTripName={setCurrentTripName} />
      </Main>
      <NavTab className="nav" />
    </MainContainer>
  );
};

export default WebApp;

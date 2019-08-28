import React, { useState } from "react";

import { Route } from "react-router-dom";

import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    padding: 20px;

    h1, h3 {
        margin: 0;
    }
`;

const HomeContainer = styled.div`

`;

// Routing is set up in here so that whenever the route is at the specified path, then the different components (which have been defined below) will render.
const TopRow = ( { currentTripName } ) => {
    
    const TripsTab = () => {
        return (
            <Row className='top-row' fluid header='Header'>
                <h1>Trips</h1>
                {currentTripName ? <h3>{`Trip Name: ${currentTripName}`}</h3> : <h3>No Current Trip</h3>}
            </Row>
            );
    };
    
    const PeopleTab = () => {
        return (
            <Row className='top-row' fluid header='Header'>
                <h1>People</h1>
                {currentTripName ? <h3>{`Trip Name: ${currentTripName}`}</h3> : <h3>No Current Trip</h3>}
            </Row>
            );
    };
    
    const TransactionsTab = () => {
        return (
            <Row className='top-row' fluid header='Header'>
                <h1>Transactions</h1>
                {currentTripName ? <h3>{`Trip Name: ${currentTripName}`}</h3> : <h3>No Current Trip</h3>}
            </Row>
            );
    };

    return (
        <>
        <Route path='/trips' component={TripsTab} />
        <Route path='/people' component={PeopleTab} />
        <Route path='/transactions' component={TransactionsTab} />
        </>
    );
};

export default TopRow;
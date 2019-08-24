import React, { useState } from "react";

import { Route } from "react-router-dom";

import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    padding: 10px;
`;

const TopRow = () => {

    return (
    <Row className='top-row' fluid header='Header'>
        <h1>Header</h1>
        <h3>Another Header</h3>
    </Row>
    );
};

export default TopRow;
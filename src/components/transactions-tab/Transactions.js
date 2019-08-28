import React, { useState } from "react";

import { Route } from "react-router-dom";

import styled from 'styled-components';


const Transactions = ( {activeTrip} ) => {
    console.log(activeTrip);

    return (
        <h2>{activeTrip.base_cost}</h2>
    );
};

export default Transactions;
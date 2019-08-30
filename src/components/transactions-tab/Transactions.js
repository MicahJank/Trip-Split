import React, { useState } from "react";

import { Route } from "react-router-dom";

import styled from 'styled-components';


// to get the number of people on the trip all you need to do is grab peopleOnTrip.length
const Transactions = ( {activeTrip, peopleOnTrip} ) => {
    console.log(activeTrip);

    return (
        <h2>{activeTrip.base_cost}</h2>
    );
};

export default Transactions;
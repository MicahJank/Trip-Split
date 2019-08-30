import React, { useState, useEffect } from "react";

import axios from 'axios';

import { Route } from "react-router-dom";

import styled from 'styled-components';


import PeopleModal from './PeopleModal.js';
import PeopleList from './PeopleList.js';


const People = ( { activeTrip, peopleOnTrip, updatePeople } ) => {
    
    return (
        peopleOnTrip.length ? <PeopleList peopleOnTrip={peopleOnTrip} updatePeople={updatePeople} /> : <h3>There doesn't seem to be any people on this trip...</h3> 
        
    );
};

export default People;
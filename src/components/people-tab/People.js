import React, { useState, useEffect } from "react";

import styled from 'styled-components';

import PeopleList from './PeopleList.js';


const People = ( { peopleOnTrip, updatePeople, deletePerson } ) => {   

    return (
        peopleOnTrip.length ? <PeopleList peopleOnTrip={peopleOnTrip} updatePeople={updatePeople} deletePerson={deletePerson} /> : <h3>There doesn't seem to be any people on this trip...</h3> 
        
    );
};

export default People;
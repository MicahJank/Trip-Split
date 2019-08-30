import React, { useState, useEffect } from "react";

import { Route } from "react-router-dom";

import axios from 'axios';

import styled from 'styled-components';

import Trips from '../trips-tab/Trips.js';
import People from '../people-tab/People.js';
import Transactions from '../transactions-tab/Transactions.js';
import Profile from '../user-profile/Profile.js';
import CurrentTrip from '../trips-tab/CurrentTrip.js';


const MainContent = ( { setCurrentTripName } ) => {

   // trip id is being set whenever the user clicks on one of the trips in the list
   const [tripId, setTripId] = useState('');

   const [activeTrip, setActiveTrip] = useState({});

   // This useEffect will grab whatever trip object that the user has clicked on in the list and store that trips information in the active trip state
   useEffect(() => {
      if(tripId) {
         axios.get(`https://tripsplitr.herokuapp.com/trips/${tripId}`)
            .then(res => {
               console.log('settingActiveTrip');
               setActiveTrip(res.data);
               setCurrentTripName(res.data.name);
            })
            .catch(err => {
               alert(err);
            })
         }
      }, [tripId])
      


   // console.log('activeTrip:', activeTrip);
   return (
    <>
    <Route exact path='/' component={Profile}/>
    <Route path='/trips' render={(props) => <Trips {...props} setTripId={setTripId} activeTrip={activeTrip} setActiveTrip={setActiveTrip} />} />
    <Route path='/people' component={People} />
    <Route path='/transactions' render={(props) => <Transactions {...props} tripId={tripId} activeTrip={activeTrip}/>}/>
    </>
   );
};

export default MainContent;
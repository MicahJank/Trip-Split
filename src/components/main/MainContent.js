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

   // This state is for the People tab so that the people can be on the trip can remain consistent between pages
   const [peopleOnTrip, setPeopleOnTrip] = useState({});

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
         
            
        // gives me a random amount of users from the users endpoint
         axios.get(`https://tripsplitr.herokuapp.com/users`)
            .then(res => {
                  const randomUsers = shuffle(res.data).slice(0,randomNumber());
                  // console.log(randomUsers);
                  setPeopleOnTrip(randomUsers);
               })
            .catch(err => {
               alert(err);
            })
         }      
      }, [tripId])
  
      // randomNumber is used so that when i do the axios call to the API i can get a random number of users between 3 and 7.
      const randomNumber = () => {
          return (Math.floor(Math.random() * 5) + 3);
      }

      // randomly shuffles the array
      const shuffle = (array) => {
         return array.sort(() => Math.random() - 0.5);
       }
      


   // console.log('activeTrip:', activeTrip);
   return (
    <>
    <Route exact path='/' component={Profile}/>
    <Route path='/trips' render={(props) => <Trips {...props} setCurrentTripName={setCurrentTripName} setTripId={setTripId} activeTrip={activeTrip} setActiveTrip={setActiveTrip} />} />
    <Route path='/people' render={(props) => <People {...props} activeTrip={activeTrip} peopleOnTrip={peopleOnTrip} />} />
    <Route path='/transactions' render={(props) => <Transactions {...props} activeTrip={activeTrip} />} />
    </>
   );
};

export default MainContent;
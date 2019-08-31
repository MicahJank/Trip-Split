import React, { useState, useEffect } from "react";

import { Route } from "react-router-dom";

import axios from 'axios';

import styled from 'styled-components';

import Trips from '../trips-tab/Trips.js';
import People from '../people-tab/People.js';
import Transactions from '../transactions-tab/Transactions.js';
import Profile from '../user-profile/Profile.js';


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
                  console.log(randomUsers);
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

      // when this function gets called the person who is passed in will get added to the array of people on the trip
       const updatePeople = (person) => {
         setPeopleOnTrip([...peopleOnTrip, person]);
       };

       // deletePerson will take in a person object and will loop over the people on the trip, when it finds the person in the array that matches the passed in person, it
       // will take that person out of the array and then set the setPeopleOnTrip state to the new array.
       const deletePerson = (person) => {
         const newPeopleArray = peopleOnTrip.filter(personOnTrip => {
           return personOnTrip !== person;
         });
         setPeopleOnTrip(newPeopleArray);
       };
      


   // console.log('activeTrip:', activeTrip);
   return (
    <>
    <Route exact path='/' component={Profile}/>
    <Route path='/trips' render={(props) => <Trips {...props} setCurrentTripName={setCurrentTripName} setTripId={setTripId} activeTrip={activeTrip} setActiveTrip={setActiveTrip} setPeopleOnTrip={setPeopleOnTrip} />} />
    <Route path='/people' render={(props) => <People {...props} activeTrip={activeTrip} peopleOnTrip={peopleOnTrip} updatePeople={updatePeople} deletePerson={deletePerson} />} />
    <Route path='/transactions' render={(props) => <Transactions {...props} activeTrip={activeTrip} peopleOnTrip={peopleOnTrip} />} />
    </>
   );
};

export default MainContent;
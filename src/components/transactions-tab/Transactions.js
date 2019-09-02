import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Button, Container, Card } from "semantic-ui-react";
import styled from "styled-components";
import axios from "axios";

const ButtonDiv = styled.div `
  position:fixed;
  right: 30px;
  bottom: 60px;
  color: palevioletred;
`;


const Transactions = ({activeTrip, tripId, peopleOnTrip}) => { 
  const [expenseData, setExpenseData] = useState(0);
  console.log (peopleOnTrip)
  const [sumExpense, setSumExpense] = useState(0);
  let sum = [];

  const retriveTrips =()=>{
    //Api call, passing in tripId as the parameter
    //The parameter is passed in as props from MainContent.js
    axios.get(`https://tripsplitr.herokuapp.com/trips/${tripId}`)
    //This is a promise that is resolved with .then and .catch
    .then(res=>{
      //setting api success response to state
      setExpenseData(res.data.base_cost) 
    })

    .catch(err=>{
      console.log(err)
    })

  };

  useEffect(() => {
    // get data from backend
    // something(expenseData);
    retriveTrips()
  }, []);
  
if(activeTrip.name){


  return (
    <div>
      
      {/* <div>{"$" + sumExpense.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</div> */}
    <h2> 
       {activeTrip.base_cost} 
    </h2>

    

      {/* Top Bar */}
      
      <Button fluid color= "yellow">End Trip</Button>
      
      
      {/* ExpenseList */}
{peopleOnTrip.map(person=>{

  return (
  <Card fluid>
            <Card.Content
              header= {person.name}
              meta={person.username}
              description="eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
            />
          </Card>
  )
  })}
      



      {/* NewTransactionButton */}
      
      <ButtonExampleCircular/>

    
      
    </div>
  );
} else {
  return (
    <div>
noactiveTrip

    </div>
  )
}
};

const ButtonExampleCircular = () => 
<ButtonDiv>
<Button circular icon='money' size= "huge" floated= "" color= "blue" />
   </ButtonDiv>



export default Transactions;

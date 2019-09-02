import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Button, Container, Card } from "semantic-ui-react";
import styled from "styled-components";
import axios from "axios";
<<<<<<< HEAD

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
=======
const ButtonDiv = styled.div `
 position:fixed;
 right: 30px;
 bottom: 60px;
 color: palevioletred;
`;
const Transactions = ({activeTrip, tripId}) => {
 const [expenseData, setExpenseData] = useState(0);
 const [sumExpense, setSumExpense] = useState(0);
 let sum = [];
 // let something = expenseData => {
 //   expenseData.map(expense => {
 //     sum.push(expense.total_expense_price);
 //   });
 //   somethingElse();
 // };
 // let somethingElse = () => {
 //   let finalSum = 0;
 //   for (let i = 0; i < sum.length; i++) {
 //     finalSum += sum[i];
 //   }
 //   setSumExpense(finalSum);
 // };
 //
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
 return (
   <div>
     {/* <div>{"$" + sumExpense.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</div> */}
   <h2>
      {expenseData}
   </h2>
     {/* Top Bar */}
     <Button fluid color= "yellow">End Trip</Button>
     {/* ExpenseList */}
     <Card.Group>
       <Card fluid>
         <Card.Content>
           <Card.Header>Matthew Harris</Card.Header>
           <Card.Meta>Co-Worker</Card.Meta>
           <Card.Description>
             Matthew is a pianist living in Nashville.
           </Card.Description>
         </Card.Content>
       </Card>
       <Card fluid>
         <Card.Content>
           <Card.Header content="Jake Smith" />
           <Card.Meta content="Musicians" />
           <Card.Description content="Jake is a drummer living in New York." />
         </Card.Content>
       </Card>
       <Card fluid>
         <Card.Content
           header="Elliot Baker"
           meta="Friend"
           description="Elliot is a music producer living in Chicago."
         />
       </Card>
       <Card fluid
         header="Jenny Hess"
         meta="Friend"
         description="Jenny is a student studying Media Management at the New School"
       />
       <Card fluid>
         <Card.Content
           header="Terry Jones"
           meta="Brother"
           description="Terry is a engineer living in Nashville who enjoys playing guitar"
         />
       </Card>
       <Card fluid>
         <Card.Content
           header="Terry Jones"
           meta="Brother"
           description="Terry is a engineer living in Nashville who enjoys playing guitar"
         />
       </Card>
}
     </Card.Group>
     {/* NewTransactionButton */}
     <ButtonExampleCircular/>
   </div>
 );
};
const ButtonExampleCircular = () =>
<ButtonDiv>
<Button circular icon='money' size= "huge" floated= "" color= "blue" />
  </ButtonDiv>
export default Transactions;
>>>>>>> master

import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Button, Container, Card } from "semantic-ui-react";
import styled from "styled-components";

const ButtonDiv = styled.div `
  position:fixed;
  right: 30px;
  bottom: 60px;
`;

const Transactions = ({activeTrip}) => {
  const [expenseData, setExpenseData] = useState([
    {
      expense_name: "Dinner in Italy",
      total_expense_price: 3000,
      primary_paid: "Mario",
      trip_id: 0
    },
    {
      expense_name: "Plane tickets to Italy",
      total_expense_price: 9500,
      primary_paid: "Mario",
      trip_id: 0
    },
    {
      expense_name: "Dinner in Spain",
      total_expense_price: 5000,
      primary_paid: "Luigi",
      trip_id: 1
    },
    {
      expense_name: "Plane tickets to Spain",
      total_expense_price: 10000,
      primary_paid: "Luigi",
      trip_id: 1
    },
    {
      expense_name: "Dinner in France",
      total_expense_price: 8000,
      primary_paid: "Bowser",
      trip_id: 2
    },
    {
      expense_name: "Plane tickets to France",
      total_expense_price: 16000,
      primary_paid: "Bowser",
      trip_id: 2
    }
  ]);
  
  const [sumExpense, setSumExpense] = useState(0);

  let sum = [];

  let something = expenseData => {
    expenseData.map(expense => {
      sum.push(expense.total_expense_price);
    });
    somethingElse();
  };
  let somethingElse = () => {
    let finalSum = 0;
    for (let i = 0; i < sum.length; i++) {
      finalSum += sum[i];
    }
    setSumExpense(finalSum);
  };
  
  

  useEffect(() => {
    // get data from backend
    something(expenseData);
  }, []);
  

  return (
    <div>
      
      {/* <div>{"$" + sumExpense.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</div> */}
    <h2> 
      {activeTrip.base_cost}
    </h2>

      {/* Top Bar */}
      <Button fluid>End Trip</Button>
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
<Button circular icon='money' size= "huge" floated= ""/>
   </ButtonDiv>



export default Transactions;

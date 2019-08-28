import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Button, Container, Card } from "semantic-ui-react";
import styled from "styled-components";

const Transactions = () => {
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
  useEffect(() => {
    // get data from backend
  }, []);
  return (
    <div>
      {expenseData.reduce((totalExpense, expense) => {
        console.log(expense.total_expense_price);
        return totalExpense + expense.total_expense_price;
      }, 0)}
      {/* Top Bar */}
      <Button fluid>End Trip</Button>
      {/* ExpenseList */}

      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>Matthew Harris</Card.Header>
            <Card.Meta>Co-Worker</Card.Meta>
            <Card.Description>
              Matthew is a pianist living in Nashville.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header content="Jake Smith" />
            <Card.Meta content="Musicians" />
            <Card.Description content="Jake is a drummer living in New York." />
          </Card.Content>
        </Card>

        <Card>
          <Card.Content
            header="Elliot Baker"
            meta="Friend"
            description="Elliot is a music producer living in Chicago."
          />
        </Card>

        <Card
          header="Jenny Hess"
          meta="Friend"
          description="Jenny is a student studying Media Management at the New School"
        />
      </Card.Group>

      {/* NewTransactionButton */}
    </div>
  );
};

//const StyledButton = styled(Button)``;
//const StartButton = () => <Button attached="bottom" circular icon="money" />;

export default Transactions;

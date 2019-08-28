import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Button, Container, List, Segment } from "semantic-ui-react";
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
      <Segment inverted>
        <List divided inverted relaxed>
          <List.Item>
            <List.Content>
              <List.Header>Uber to Lunch</List.Header>
              An excellent companion
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Poodle</List.Header>A poodle, its pretty basic
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Paulo</List.Header>
              He's also a dog
            </List.Content>
          </List.Item>
        </List>
      </Segment>
      {/* NewTransactionButton */}
    </div>
  );
};

//const StyledButton = styled(Button)``;
//const StartButton = () => <Button attached="bottom" circular icon="money" />;

export default Transactions;

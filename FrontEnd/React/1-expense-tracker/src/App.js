import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 194.12,
    date: new Date(2022, 0, 2),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 20799.49,
    date: new Date(2021, 10, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 1294.67,
    date: new Date(2021, 0, 8),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 11140,
    date: new Date(2020, 10, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 194.12,
      date: new Date(2020, 10, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 20799.49,
      date: new Date(2021, 6, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 1294.67,
      date: new Date(2021, 11, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 11140,
      date: new Date(2021, 0, 8),
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import expenseTemplate from "./components/templates/expenseTemplate";
import NewExpense from "./components/NewExpense/NewExpense";
const exampleExpenses: expenseTemplate[] = [
  {
    id: "e1",
    title: "Phone bill",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(exampleExpenses);
  const addExpenseHandler = (expense: expenseTemplate) => {
    setExpenses((currentState) => {
      return [expense, ...currentState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  ); //-->Returning a DOM element, (html code). This is TSX is translated into more browser-friendly code when npm start is run
}

export default App;

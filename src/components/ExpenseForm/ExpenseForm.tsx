import React, { useState } from "react";
import expenseTemplate from "../templates/expenseTemplate";
import classes from "./ExpenseForm.module.css";
const ExpenseForm: React.FC<{
  onSaveExpenseData: (enteredExpenseData: expenseTemplate) => void;
}> = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //event.target points at the dom element at which the event occurred
    //event.target.value holds the current value of the input at the point of time at which the event occurs
    //now that we have the value, we can use it
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
  };
  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
  };
  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      id: enteredTitle,
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle(""); //override what the user wrote and clear the input
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes["new-expense__controls"]}>
        <div className={classes["new-expense__control"]}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes["new-expense__control"]}>
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={classes["new-expense__control"]}>
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className={classes["new-expense__actions"]}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

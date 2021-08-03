import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import classes from "./Expenses.module.css";
import expenseTemplate from "../templates/expenseTemplate";
import Card from "../UI/Card";
const Expenses: React.FC<{ expenses: expenseTemplate[] }> = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020"); //default state is 2020
  const filterChangeHandler = (selectedYear: number) => {
    //this function sets the filtered year as the year that is selected
    setFilteredYear(filteredYear);
  };
  //We pass selected, which is our selected year, and a function onChangeFilter, which is filteredChangeHandler, which
  //sets the filtered year as the year we filter by
  return (
    <Card className={classes.expenses}>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.title}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;

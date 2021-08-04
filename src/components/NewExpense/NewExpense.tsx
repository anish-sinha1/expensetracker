import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

import classes from "./NewExpense.module.css";
import expenseTemplate from "../templates/expenseTemplate";

const NewExpense: React.FC<{
  onAddExpense: (expenses: expenseTemplate) => void;
}> = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const saveExpenseDataHandler = (enteredExpenseData: expenseTemplate) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense({ ...expenseData });
    setIsEditing(false);
  };
  return (
    <div className={classes["new-expense"]}>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

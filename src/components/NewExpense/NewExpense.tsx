import ExpenseForm from "../ExpenseForm/ExpenseForm";

import classes from "./NewExpense.module.css";

const NewExpense: React.FC<{ onAddExpense: (expenses: {}) => void }> = (
  props
) => {
  const saveExpenseDataHandler = (enteredExpenseData: {}) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className={classes["new-expense"]}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

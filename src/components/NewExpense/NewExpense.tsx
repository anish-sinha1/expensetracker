import ExpenseForm from "../ExpenseForm/ExpenseForm";

import classes from "./NewExpense.module.css";
import expenseTemplate from "../templates/expenseTemplate";

const NewExpense: React.FC<{
  onAddExpense: (expenses: expenseTemplate) => void;
}> = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData: expenseTemplate) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense({ ...expenseData });
  };
  return (
    <div className={classes["new-expense"]}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

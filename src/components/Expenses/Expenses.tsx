import ExpenseItem from "../ExpenseItem/ExpenseItem";
import classes from "./Expenses.module.css";
import expenseTemplate from "../templates/expenseTemplate";
import Card from "../UI/Card";
const Expenses: React.FC<{ expenses: expenseTemplate[] }> = (props) => {
  return (
    <Card className={classes.expenses}>
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

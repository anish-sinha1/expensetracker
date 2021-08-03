import classes from "./ExpenseItem.module.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem: React.FC<{ title: string; date: Date; amount: number }> = (
  props
) => {
  return (
    <Card className={classes["expense-item"]}>
      <ExpenseDate date={props.date} />
      <h2 className={classes["expense-item__description"]}>{props.title}</h2>

      <div>
        <div className={classes["expense-item__price"]}>${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

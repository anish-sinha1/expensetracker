import classes from "./ExpenseDate.module.css";
const ExpenseDate: React.FC<{ date: Date }> = (props) => {
  const date = props.date.toLocaleString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
  return <div className={classes["expense-date"]}>{date}</div>;
};
export default ExpenseDate;

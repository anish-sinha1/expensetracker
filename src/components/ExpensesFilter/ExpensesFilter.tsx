import React from "react";
import classes from "./ExpensesFilter.module.css";
const ExpensesFilter: React.FC<{
  selected: string;
  onChangeFilter: (selectedYear: number) => void;
}> = (props) => {
  const dropdownChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    props.onChangeFilter(+event.target.value);
  };
  return (
    <div className={classes["expenses-filter"]}>
      <div className={classes["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

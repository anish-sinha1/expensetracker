import classes from "./ChartBar.module.css";

const ChartBar: React.FC<{
  key: string;
  value: number;
  maxValue: number;
  label: string;
}> = (props) => {
  let barFillHeight: string = "0%";
  if (props.maxValue > 0) {
    barFillHeight = `${Math.round((props.value / props.maxValue) * 100)}%`;
  }
  return (
    <div className={classes["chart-bar"]}>
      <div className={classes["chart-bar__inner"]}>
        <div
          className={classes["chart-bar__fill"]}
          style={{ height: barFillHeight }}
        ></div>
        <div className={classes["chart-bar__label"]}>{props.label}</div>
      </div>
    </div>
  );
};

export default ChartBar;

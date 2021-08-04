import React from "react";
import ChartBar from "../ChartBar/ChartBar";
import classes from "./Chart.module.css";
import dataPoint from "../templates/dataPoint";

const Chart: React.FC<{ dataPoints: dataPoint[] }> = (props) => {
  const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...valueArray);
  return (
    <div className={classes["chart"]}>
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;

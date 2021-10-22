import React from "react";
import { addDays, startOfWeek } from "date-fns";
import styles from "./Week.module.scss";
import Day from "../Day";

function Week({ currentDay }) {
  const startingDate = startOfWeek(currentDay);
  const daysArr = new Array(7).fill(null).map((_, i) => {
    return <Day key={i} day={addDays(startingDate, i)} />;
  });
  return <div className={styles.weekContainer}>{daysArr}</div>;
}

export default Week;

import React, { useContext } from "react";
import { getWeeksInMonth, addDays, startOfMonth } from "date-fns";
import styles from "./CurrentMonth.module.scss";
import { DateContext } from "../../../contexts";
import Week from "./../../Calendar/Week";

function CurrentMonth(props) {
  const [currentDay] = useContext(DateContext);
  const startingDate = startOfMonth(currentDay);
  const weekAmount = getWeeksInMonth(currentDay);

  const weeksArr = new Array(weekAmount).fill(null).map((_, index) => {
    return <Week key={index} currentDay={addDays(startingDate, index * 7)} />;
  });

  return <div className={styles.week}>{weeksArr}</div>;
}
export default CurrentMonth;

import React, { useContext } from "react";
import { DateContext } from "../../../contexts";
import { format, startOfWeek, addDays } from "date-fns";
import styles from "./daysWeek.module.scss";

function DaysWeek(props) {
  const [currentDay] = useContext(DateContext);

  const startingDate = startOfWeek(currentDay);
  const daysArr = new Array(7).fill(null).map((_, i) => {
    return (
      <div key={i} className={styles.dayWeek}>
        {format(addDays(startingDate, i), "EEEEE")}
      </div>
    );
  });

  return <div className={styles.daysWeek}>{daysArr}</div>;
}
export default DaysWeek;

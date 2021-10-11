import React from "react";
import { useState } from "react";
import { format, weekStartsOn } from "date-fns";
import styles from "./daysWeek.module.scss";

function DaysWeek() {
  const [dayWeek, setDayWeek] = useState([]);

  return <div className={styles.dayWeek}></div>;
}
export default DaysWeek;

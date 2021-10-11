import React from "react";
import { useState } from "react";
import { format } from "date-fns";
import styles from "./CurrentDayWeek.module.scss";

function CurrentDayWeek() {
  const [dayWeek, setDayWeek] = useState(new Date());

  return <p className={styles.dayWeek}>{format(dayWeek, "EEEE")}</p>;
}
export default CurrentDayWeek;

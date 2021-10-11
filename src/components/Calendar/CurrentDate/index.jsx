import React from "react";
import { useState } from "react";
import { format } from "date-fns";
import styles from "./CurrentDate.module.scss";

function CurrentDate() {
  const [date, setDate] = useState(new Date());

  return <p className={styles.date}>{format(date, "d")}</p>;
}
export default CurrentDate;

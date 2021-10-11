import { useEffect, useState } from "react";
import { format, add, addDays } from "date-fns";
import styles from "./currentMonthAndYear.module.scss";

function CurrentMonthAndYear() {
  const [month, setMonth] = useState(new Date());
  const [year, setYear] = useState(new Date());

  return (
    <h2 className={styles.currentMonthAndYear}>
      {format(month, "MMMM ")} {format(year, "yyyy")}
    </h2>
  );
}
export default CurrentMonthAndYear;

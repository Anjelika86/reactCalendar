import { format } from "date-fns";
import styles from "./currentMonthAndYear.module.scss";
import { useContext } from "react";
import { DateContext } from "../../../contexts";

function CurrentMonthAndYear(props) {
  const [currentDay] = useContext(DateContext);
  return (
    <h2 className={styles.currentMonthAndYear}>
      {format(currentDay, "MMMM ")} {format(currentDay, "yyyy")}
    </h2>
  );
}
export default CurrentMonthAndYear;

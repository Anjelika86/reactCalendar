import React, { useContext } from "react";
import { format } from "date-fns";
import styles from "./SectionCurrentDayAndDayWeek.module.scss";
import { DateContext } from "../../../contexts";

function SectionCurrentDayAndDayWeek(props) {
  const [currentDay] = useContext(DateContext);
  return (
    <div className={`${styles.flexContainer} ${styles.ContainerSection}`}>
      <p className={styles.dayWeek}>{format(currentDay, "EEEE")}</p>
      <p className={styles.date}>{format(currentDay, "d")}</p>
    </div>
  );
}
export default SectionCurrentDayAndDayWeek;

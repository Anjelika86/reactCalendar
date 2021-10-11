import React from "react";
import styles from "./Calendar.module.scss";
import SectionCalendar from "./SectionCalendar";
import SectionCurrentDayAndDayWeek from "./SectionCurrentDayAndDayWeek";

function Calendar() {
  return (
    <article className={styles.container}>
      <SectionCurrentDayAndDayWeek />
      <SectionCalendar />
    </article>
  );
}
export default Calendar;

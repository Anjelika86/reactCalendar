import React from "react";
import CurrentMonthAndYear from "../CurrentMonthAndYear";
import cx from "classnames";
import styles from "./SectionCalendar.module.scss";
import CurrentMonth from "../CurrentMonth";
import DaysWeek from "../DaysWeek";

function SectionCalendar() {
  return (
    <section
      className={`${styles.flexContainerSection} ${styles.sectionCalendarWrapper}`}
    >
      <CurrentMonthAndYear />
      <DaysWeek />

      {/* <CurrentMonth /> */}
    </section>
  );
}
export default SectionCalendar;

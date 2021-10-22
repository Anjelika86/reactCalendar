import React from "react";
import CurrentMonthAndYear from "../CurrentMonthAndYear";
import styles from "./SectionCalendar.module.scss";
import CurrentMonth from "../CurrentMonth";
import DaysWeek from "../DaysWeek";

function SectionCalendar(props) {
  return (
    <section
      className={`${styles.flexContainer} ${styles.ContainerSection} ${styles.sectionCalendarColor}`}
    >
      <CurrentMonthAndYear />
      <DaysWeek />
      <CurrentMonth />
    </section>
  );
}
export default SectionCalendar;

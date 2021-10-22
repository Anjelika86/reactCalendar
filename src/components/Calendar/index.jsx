import React, { useState } from "react";
import { DateContext } from "../../contexts";
import styles from "./Calendar.module.scss";
import SectionCalendar from "./SectionCalendar";
import SectionCurrentDayAndDayWeek from "./SectionCurrentDayAndDayWeek";

function Calendar() {
  const [currentDay, setCurrentDay] = useState(new Date());

  return (
    <DateContext.Provider value={[currentDay, setCurrentDay]}>
      <article className={styles.container}>
        <SectionCurrentDayAndDayWeek />
        <SectionCalendar />
      </article>
    </DateContext.Provider>
  );
}
export default Calendar;

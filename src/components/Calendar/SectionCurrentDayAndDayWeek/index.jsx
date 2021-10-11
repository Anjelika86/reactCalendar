import React from "react";

import cx from "classnames";
import styles from "./SectionCurrentDayAndDayWeek.module.scss";
import CurrentDayWeek from "../CurrentDayWeek";
import CurrentDate from "../CurrentDate";

function SectionCurrentDayAndDayWeek() {
  return (
    <section className={styles.flexContainerSection}>
      <CurrentDayWeek />
      <CurrentDate />
    </section>
  );
}
export default SectionCurrentDayAndDayWeek;

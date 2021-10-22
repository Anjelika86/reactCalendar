import React, { useContext } from "react";
import styles from "./Day.module.scss";
import { isSameMonth, isSameDay, format } from "date-fns";
import { DateContext } from "../../../contexts";
import cx from "classnames";

const Day = ({ day, props }) => {
  const [currentDay, setCurrentDay] = useContext(DateContext);

  const currentDayClick = () => {
    setCurrentDay(day);
  };
  const dayClasses = cx(styles.day, {
    [styles.daysColor]: !isSameMonth(day, currentDay),
    [styles.dayColor]: isSameDay(day, currentDay),
  });

  return (
    <div
      onClick={currentDayClick}
      className={`${dayClasses} ${styles.flexContainer}`}
    >
      {format(day, "d")}
    </div>
  );
};

export default Day;

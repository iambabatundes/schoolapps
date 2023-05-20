import React from "react";
import style from "./styles/calendar.module.css";
import MyCalendar from "./myCalendar";
// import EventCalender from "./EventCalender"

function Calendar() {
  return (
    <section>
      <div className={style.calenderMain}>
        <article>
          <h1>Event Calender</h1>
        </article>
        {/* <EventCalender /> */}
        <MyCalendar />
      </div>
    </section>
  );
}

export default Calendar;

import React from "react";
import style from "./bestStudents.module.css"

function ProgressBar({value}) {
  return (
    <section className={style.ProgressBar}>
      <div className={style.progressBarFill} style={{ width: `${value}%` }}></div>
    </section>
  );
}

export default ProgressBar;

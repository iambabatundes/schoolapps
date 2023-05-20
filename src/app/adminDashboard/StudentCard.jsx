import React from "react";
import ProgressBar from "./progressBar";
import style from "./bestStudents.module.css";

function StudentCard({ student }) {
  const awardIcons = student.awardIcon.map((icon, index) => (
    <img
      key={index}
      src={`${icon.awardImg}`}
      alt={`${student.position} place award`}
      className={style.awardIcon}
    />
  ));
  return (
    <section>
      <div className={style.studentCard}>
        <span className={style.awardIcons}>{awardIcons}</span>
        <img
          src={student.img}
          alt={student.name}
          className={style.studentImg}
        />
        <img
          src={student.awardPosition}
          alt={`${student.position} place award`}
          className={style.awardPosition}
        />
        <div className={style.studentDetails}>
          <h2>{student.name}</h2>
          <p className={style.studentClass}>{student.studentClass}</p>
        </div>

        <div className={style.studentGrade}>
          <div className={style.score}>
            <span>{student.position} / </span>
            <span>{student.percentage}%</span>
          </div>
          <ProgressBar value={student.percentage} />
        </div>
      </div>
    </section>
  );
}

export default StudentCard;

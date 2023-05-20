import React from "react";
import style from "./bestHeader.module.css";

function BestHeader({
  handleClassChange,
  handleClassSubmit,
  selectedClass,
  handleYearSubmit,
  handleYearChange,
  selectedYear,  
}) {

  const datas = ["Primary", "Junior", "Senior", "College", "Evening"];
  const years = ["2023", "2024", "2025", "2026", "2027"];
  
  return (
    <section>
      <div className={style.container}>
        <div className={style.main}>
          <h1>Best Students of the Year</h1>
          <div className={style.formSelection}>
            <section className={style.section}>
              <form onSubmit={handleClassSubmit}>
                <label>
                  <select
                    className={style.select}
                    value={selectedClass.class}
                    onChange={handleClassChange}
                  >
                    {datas.map((data) => (
                      <option key={data} value={data}>
                        {data}
                      </option>
                    ))}
                  </select>
                </label>
              </form>
            </section>
            <section className={style.section}>
              <form onSubmit={handleYearSubmit}>
                <label>
                  <select
                    className={style.select}
                    value={selectedYear}
                    onChange={handleYearChange}
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </label>
              </form>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestHeader;

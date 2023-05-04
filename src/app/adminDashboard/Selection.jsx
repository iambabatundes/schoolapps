import React from "react";
import style from "./styles/page.module.css";

function Selection({ children, datas, onSubmit, onChange, value }) {
  return (
    <section className={style.section}>
      <h1>{children}</h1>
      <form onSubmit={onSubmit}>
        <label>
          <select
            className={style.select}
            value={value}
            onChange={onChange}
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
  );
}

export default Selection;

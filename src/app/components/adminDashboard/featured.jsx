import React from 'react';
import style from "./styles/featured.module.css";
import Icon from './Icon';

function Featured() {
  return (
    <section>
        <div className={style.admin__main}>
        <div className={style.admin__group}>
          <div className={style.group}>
            <Icon group />
            <h1>Student</h1>
          </div>

          <div className={style.group__figure}>
            <h1>800, 000</h1>
          </div>
        </div>

        <div className={style.admin__group}>
          <div className={style.group1}>
            <Icon group />
            <h1>Teacher</h1>
          </div>

          <div className={style.group__figure}>
            <h1>800, 000</h1>
          </div>
        </div>
        <div className={style.admin__group}>
          <div className={style.group2}>
            <Icon group />
            <h1>Parent</h1>
          </div>

          <div className={style.group__figure}>
            <h1>800, 000</h1>
          </div>
        </div>

        <div className={style.admin__group}>
          <div className={style.group3}>
            <Icon group />
            <h1>Total Expense</h1>
          </div>

          <div className={style.group__figure}>
            <h1>800, 000</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
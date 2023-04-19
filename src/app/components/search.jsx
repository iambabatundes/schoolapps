import React from "react";
import style from "../styles/navbar.module.css";
import Icon from "./Icon";

function Search({ search, placeholder }) {
  return (
    <section>
      <div className={style.backgroundSearch}>
        <span className={style.searchIcon}>
          <Icon icon />
        </span>
        <input
          type="search"
          className={style.placeholder}
          placeholder={placeholder}
        />
        {search && <button>Search</button>}
      </div>
    </section>
  );
}

export default Search;

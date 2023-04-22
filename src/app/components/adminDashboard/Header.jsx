"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import SideBar from "./sidebar";
import style from "./styles/header.module.css";

function Header({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  const handleLinkClick = () => {
    setShowSidebar(false);
  };

  return (
    <section>
      <div>
        <Navbar toggleSidebar={toggleSidebar} />
      </div>
      <div className={style.content}>
        <SideBar
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
          handleLinkClick={() => setShowSidebar(false)}
        />
        <main className={style.main} onClick={handleFormClick}>
          {children}
        </main>
      </div>
    </section>
  );
}

export default Header;

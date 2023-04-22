import React from "react";
import style from "./styles/navbar.module.css";
import { Poppins } from "next/font/google";
import Search from "./search";
import Icon from "./Icon";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

function Navbar({ toggleSidebar }) {
  return (
    <nav className={style.navbar__container}>
      <section className={style.Navbar}>
        <div className={style.Navbar__main}>
          <div className={style.menu}>
            <Icon menu className={style.menu__btn} onClick={toggleSidebar} />
          </div>

          <Icon logo className={style.NavbarLogo} />

          <div className={poppins.className}>
            <h1 className={style.NavbarTitle}>
              9digitals School Management web-base Software
            </h1>
          </div>

          <div className={style.navbarSearch}>
            <Search icon search placeholder="Search here..." />
          </div>

          <div className={style.icons}>
            <div className={style.english}>
              {/* <Icon global /> */}
              <span>English</span>
            </div>

            <div className={style.icon}>
              <img src="/message.svg" alt="Message Icon" />
              <span className={style.badge}>10</span>
            </div>

            <div className={style.icon}>
              <img src="/notification.svg" alt="Notification Icon" />
              <span className={style.badge}>10</span>
            </div>
          </div>

          <div className={style.user}>
            <img src="/emma-b-scaled.jpg" alt="User image" />
            <div className={style.details}>
              <span className={style.username}>Tunde</span>
              <span className={style.position}>Admin</span>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;

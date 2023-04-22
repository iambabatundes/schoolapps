import React from "react";
import Image from "next/image";
import style from "./styles/navbar.module.css";

function Logo() {
  return (
    <section>
      <Image
        src="/9logo.svg"
        alt="9digitals Logo"
        className={style.NavbarLogo}
        width={100}
        height={30}
        priority
        color="#fff"
      />
    </section>
  );
}

export default Logo;

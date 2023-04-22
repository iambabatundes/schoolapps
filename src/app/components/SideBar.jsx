import Link from "next/link";
import style from "../styles/sidebar.module.css";
import Icon from "./Icon";

function SideBar({ showSidebar, toggleSidebar, handleLinkClick }) {

  const handleFormClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        className={`${style.overlay} ${showSidebar && style.overlayActive}`}
        onClick={toggleSidebar}
      ></div> 
      <aside className={`${style.aside} ${showSidebar && style.asideActive}`}  >
        
          <div className={style.sidebarHeader} >
            <Icon close className={style.closeBtn} onClick={toggleSidebar} />
          </div>
          <ul onClick={toggleSidebar}>
            <li>
              <Link href="/" onClick={toggleSidebar} >Dashboard</Link>
            </li>
            <li>
              <Link href="/admin">Teacher</Link>
            </li>
            <li>
              <Link href="/teacher">Parent</Link>
            </li>
          </ul>
        
      </aside>

      <div className={style.mobileMenu} onClick={toggleSidebar}>
        <Icon menu />
      </div>
    </>
  );
}

export default SideBar;

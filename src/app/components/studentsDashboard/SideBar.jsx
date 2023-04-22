import Link from "next/link";
import style from "./styles/sidebar.module.css";
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
      <aside className={`${style.aside} ${showSidebar && style.asideActive}`}>
        <div className={style.sidebarHeader}>
          <Icon close className={style.closeBtn} onClick={toggleSidebar} />
        </div>
        <ul onClick={toggleSidebar}>
          <li>
            <Link href="/studentsDashboard" onClick={toggleSidebar}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/studentsDashboard/student">Student</Link>
          </li>
          <li>
            <Link href="/studentsDashboard/teacher">Teacher</Link>
          </li>
          <li>
            <Link href="/studentsDashboard/hotel">Hotel</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default SideBar;

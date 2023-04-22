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
        <div className={style.sidebarHeader} onClick={handleFormClick}>
          <Icon close className={style.closeBtn} onClick={toggleSidebar} />
        </div>
        <ul onClick={toggleSidebar}>
          <li>
            <Link href="/teachersDashboard" onClick={toggleSidebar}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/teachersDashboard/teacher">Teacher</Link>
          </li>
          <li>
            <Link href="/teachersDashboard/subject">Subject</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default SideBar;

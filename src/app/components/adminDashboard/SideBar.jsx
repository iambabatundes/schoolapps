import Link from "next/link";
import style from "./styles/sidebar.module.css";
import Icon from "./Icon";

function SideBar({ showSidebar, toggleSidebar }) {
  const handleFormClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        className={`${style.overlay} ${showSidebar && style.overlayActive}`}
        onClick={toggleSidebar}
      ></div>
      <aside
        className={`${style.aside} ${showSidebar && style.asideActive}`}
        onClick={handleFormClick}
      >
        <div className={style.sidebarHeader}>
          <Icon close className={style.closeBtn} onClick={toggleSidebar} />
        </div>
        <ul onClick={toggleSidebar}>
          <li>
            <Link href="/adminDashboard" onClick={toggleSidebar}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/adminDashboard/admin">Admin</Link>
          </li>
          <li>
            <Link href="/adminDashboard/teacher">Teacher</Link>
          </li>
          <li>
            <Link href="/adminDashboard/parent">Parent</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default SideBar;

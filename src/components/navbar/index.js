import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sidebar.module.css';


const Sidebar = () => {

  return (
    <nav className={styles.sidebarContainer}>
      <Link className={styles.sidebarItem} to="/lab">آزمایشگاه</Link>
      <Link className={styles.sidebarItem} to="/pt">فیزیوتراپی</Link>
      <Link className={styles.sidebarItem} to="/dentist">دندانپزشکی</Link>
      <Link className={styles.sidebarItem} to="/">صفحه نخست</Link>
    </nav>
  )
}

export default Sidebar;
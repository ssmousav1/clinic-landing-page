import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sidebar.module.css';


const Sidebar = () => {
  return (
    <nav className={styles.sidebarContainer}>
      <div className={styles.sidebarItem} onClick={() => { window.location.replace(`${window.location.origin}/lab`) }}>آزمایشگاه</div>
      <div className={styles.sidebarItem} onClick={() => { window.location.replace(`${window.location.origin}/pt`) }}>فیزیوتراپی</div>
      <div className={styles.sidebarItem} onClick={() => { window.location.replace(`${window.location.origin}/dentist`) }}>دندانپزشکی</div>
      <div className={styles.sidebarItem} onClick={() => { window.location.replace(`${window.location.origin}/`) }}>صفحه نخست</div>
    </nav>
  )
}

export default Sidebar;
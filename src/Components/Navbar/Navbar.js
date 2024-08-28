import React from 'react';
import styles from './Navbar.module.css';
import hamburger_menu from '../../assets/hamburger_menu.png';

export default function Navbar() {
  return (
    <div className={styles.navbar_left}>
      <div className={styles.title}>
        <p className={styles.firstname}>Micheal</p>
        <span className={styles.lastname}>Johnstone</span>
      </div>
      <div className={styles.navbar_right}>
        <a className={styles.blogs} href="#">Blogs</a>
        <img src={hamburger_menu} alt="Menu" className={styles.menuIcon} />
      </div>
    </div>
  );
}

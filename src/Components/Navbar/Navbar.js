import React from 'react';
import styles from './Navbar.module.css';
import hamburger_menu from '../../assets/hamburger_menu.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.title}>
          <p className={styles.firstname}>Micheal<span className={styles.lastname}>Johnstone</span> </p>
        </div>
        <div className={styles.navigation}>
          <Link className={styles.blogs} >Blogs</Link>
          <img src={hamburger_menu} alt="Menu" className={styles.menuIcon} />
        </div>
        <img src={hamburger_menu} alt="Menu" className={styles.mbl_menuIcon} />
      </div>
    </>
  );
}
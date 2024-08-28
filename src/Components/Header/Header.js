import React from 'react';
import styles from './Header.module.css';
import search_icon from '../../assets/search_icon.png';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>Blogs</h1>
        <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <img src={search_icon} alt="search" className={styles.searchIcon} />
    </div>
  );
}

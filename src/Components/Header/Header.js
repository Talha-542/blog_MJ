import React from 'react';
import styles from './Header.module.css';
// import search_icon from '../../assets/Search.svg';
import SearchBar from '../SearchBar/SearchBar'
export default function Header() {
  return (
    <>
    <div className={styles.header}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>Blogs</h1>
        <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      {/* <div className={styles.search_icon}>
      <img src={search_icon} alt="search" className={styles.searchIcon} />
      </div> */}
      <SearchBar/>
    </div>
    <div className={styles.mbl_header}>
      <div className={styles.search_icon}>
      {/* <img src={search_icon} alt="search" className={styles.searchIcon} /> */}
      <SearchBar/>
      </div>
      <div className={styles.textContent}>
        <h1 className={styles.title}>Blogs</h1>
        <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    </>
  );
}










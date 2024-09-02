import React from 'react';
import styles from './SearchBar.module.css';
import search_icon from '../../assets/Search.svg'; 

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <img src={search_icon} alt="Search Icon" className={styles.searchIcon} />
      <input type="text" placeholder="Search" className={styles.searchInput} />
    </div>
  );
};

export default SearchBar;

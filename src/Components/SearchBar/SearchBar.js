import React from 'react';
import styles from './SearchBar.module.css';
import searchIcon from '../../assets/Search.svg'; 

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <img src={searchIcon} alt="Search Icon" className={styles.searchIcon} />
      <input type="text" placeholder="Search" className={styles.searchInput} />
    </div>
  );
};

export default SearchBar;

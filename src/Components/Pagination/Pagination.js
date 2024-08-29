import React from 'react';
import styles from './Pagination.module.css';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <a href="#" className={`${styles.pageLink} ${styles.prevNext} `}>&lt;</a>
      <a href="#" className={`${styles.pageLink} ${styles.active}`}>1</a>
      <a href="#" className={`${styles.pageLink} `}>2</a>
      <a href="#" className={styles.pageLink}>3</a>
      <span className={styles.dots}>...</span>
      <a href="#" className={styles.pageLink}>30</a>
      <a href="#" className={`${styles.pageLink} ${styles.prevNext}`}>&gt;</a>
    </div>
  );
};

export default Pagination;

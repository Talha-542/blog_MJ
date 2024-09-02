import React from 'react';
import styles from './Pagination.module.css';
import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <Link href="#" className={`${styles.pageLink} ${styles.prevNext} `}>&lt;</Link>
      <Link href="#" className={`${styles.pageLink} ${styles.active}`}>1</Link>
      <Link href="#" className={`${styles.pageLink} `}>2</Link>
      <Link href="#" className={styles.pageLink}>3</Link>
      <span className={styles.dots}>...</span>
      <Link href="#" className={styles.pageLink}>30</Link>
      <Link href="#" className={`${styles.pageLink} ${styles.prevNext}`}>&gt;</Link>
    </div>
  );
};

export default Pagination;

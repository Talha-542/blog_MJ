import React, { useContext } from 'react';
import { StoreContext } from '../../store';
import article_count_logo from '../../assets/article_count_logo.svg'
import styles from './TopCategories.module.css';
import {Link} from 'react-router-dom'


const TopCategories = () => {
  const { category_list } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Top Categories</h2>
        <Link to="/all-categories" className={styles.seeAll}>See all</Link>      </div>
      <div className={styles.categories}>
        {category_list.map(category => (
          <div key={category.id} className={styles.categoryCard}>
            <img src={category.image} alt={category.name} className={styles.categoryImage} />
            <div className={styles.articleContent}>
              <div className={styles.categoryName}>{category.name}</div>
              <p className={styles.articleCount}>
                <img src={article_count_logo} alt="Article count icon" className={styles.articleCountIcon} />
                {category.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;

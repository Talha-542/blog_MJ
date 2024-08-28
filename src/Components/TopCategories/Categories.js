import React, { useContext } from 'react';
import { StoreContext } from '../../store';
import article_count_logo from '../../assets/article_count_logo.png';
import styles from './TopCategories.module.css'; 

const TopCategories = () => {
  const { category_list } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Top Categories</h2>
        <a href="/" className={styles.seeAll}>See all</a>
      </div>
      <div className={styles.categories}>
        {category_list.map(category => (
          <div key={category.id} className={styles.categoryCard}>
            <img src={category.image} alt={category.name} className={styles.categoryImage} />
            <h3 className={styles.categoryName}>{category.name}</h3>
            <p className={styles.articleCount}>
              <img src={article_count_logo} alt="Article count" className={styles.articleCountIcon} /> 
              {category.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;

import React, { useContext } from 'react';
import { StoreContext } from '../../store'
import article_count_logo from '../../assets/article_count_logo.png'
import arrowIcon from '../../assets/Arrow.png'
import { Link } from 'react-router-dom';
import styles from './TopCategories.module.css';
const TopCategories = () => {
  const { category_list } = useContext(StoreContext);
  return (
    <>
      <div className={styles.categories}>
        <div>
          <h2 className={styles.title}>Top Categories</h2>
        </div>
        <div className={styles.allCategories}>
          <Link to='/all-categories' className={styles.seeAll}>See all </Link>
          <img src={arrowIcon} alt="" />
        </div>
      </div>
      <div className={styles.categories_card}>
        {
          category_list.map((category) => {
            return (
              <>
                <div className={styles.single_card}>
                  <div className={styles.category_img}>
                    <img src={category.image} alt={category.name} className={styles.categoryImage} />
                  </div>
                  <div className={styles.category_details}>
                    <h1 className={styles.category_name}>{category.name}</h1>
                    <div className={styles.category_articles}>
                      <img src={article_count_logo} alt="Article count icon" className={styles.articleCountIcon} />
                      <p className={styles.category_post_number}>{category.count}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
};
export default TopCategories;
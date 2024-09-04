import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import styles  from './AllCategories.module.css'
import { StoreContext } from "../../store" 
import article_count_logo from "../../assets/article_count_logo.svg" 

export default function AllCategories() {
  const { Allcategory_list } = useContext(StoreContext) 
  return (
   <div>
   <div className={styles.header}>
      <div className={styles.backContainer}>
      <Link to="/" className={styles.back}>
          Back
      </Link>
      </div>
      <div className={styles.title}>
      Categories
      </div>
    </div>

    <div className={styles.postcontainer}>
    <div className={styles.categories}>
      {Allcategory_list.map((category) => (
        <div key={category.id} className={styles.categoryCard}>
          <img
            src={category.image}
            alt={category.name}
            className={styles.categoryImage}
          />
          <div className={styles.articleContent}>
            <div className={styles.categoryName}>{category.name}</div>
            <p className={styles.articleCount}>
              <img
                src={article_count_logo}
                alt="Article count icon"
                className={styles.articleCountIcon}
              />
              {category.count}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
) 

}



 

 


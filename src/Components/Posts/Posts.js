import React, { useContext, useState } from 'react';
import { StoreContext } from '../../store';
import styles from './Posts.module.css';
import arthur_logo from '../../assets/aurthur_logo.png';

const Posts = () => {
  const { posts, category_list } = useContext(StoreContext);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Articles</h2>
        <ul className={styles.dropdown}>
          <li>
            <button className={styles.dropdownButton}>
              Sort By ⇓
            </button>
            <ul className={styles.dropdownContent}>
              <li onClick={() => setSelectedCategory('All')}>All</li> <hr className={styles.hr}/>
              {category_list.map(category => (
                <li key={category.id} onClick={() => setSelectedCategory(category.name)}>
                  {category.name} <hr className={styles.hr}/>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.posts}>
        {filteredPosts.map(post => (
          <div key={post.id} className={styles.postCard}>
            <img src={post.image} alt={post.name} className={styles.postImage} />
            <div>
              <div className={styles.postTitle}>{post.title}</div>
              <div className={styles.postDescription}>{post.description}</div>
                <img src={arthur_logo} alt="author logo" className={styles.arthurLogo} />
              <div className={styles.postInfo}>
                <p>{post.autherName}</p><br/>
               <span>{post.date}</span> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;

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
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Articles</h2>
        </div>
        <div className={styles.category_selector}>
          <select className={styles.dropdown} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="All">Sort by</option>
            {category_list.map((category) => (
              <option key={category.id} value={category.name} >
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.posts}>
        {filteredPosts.map((post) => {
          return (
            <>
              <div key={post.id} className={styles.postCard}>
                <div className={styles.post_img}>
                  <img src={post.image} alt={post.name} className={styles.postImage} />
                </div>
                <div className={styles.post_content}>
                  <h1 className={styles.postTitle}>{post.title}</h1>
                  <p className={styles.postDescription}>{post.description}</p>
                  <div className={styles.author_info}>
                    <div className={styles.author_img}>
                      <img src={arthur_logo} alt="author logo" className={styles.arthurLogo} />
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <h1 className={styles.authour_name}>{post.autherName}</h1>
                      <p className={styles.post_date}>{post.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
};
export default Posts;
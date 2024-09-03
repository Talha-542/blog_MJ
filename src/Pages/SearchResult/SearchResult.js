import React from "react";
import { useLocation } from "react-router-dom";
import { posts } from "../../assets/assets"; 
import styles from "./SearchResult.module.css";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  console.log("Search Query:", query); // Add this line to check the query

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Results for "{query}"</h1>
      {filteredPosts.length > 0 ? (
        <div className={styles.posts}>
          {filteredPosts.map(post => (
            <div key={post.id} className={styles.postCard}>
              <img src={post.image} alt={post.title} className={styles.postImage} />
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postDescription}>{post.description}</p>
              <div className={styles.author_info}>
                <img src={post.authorImage} alt={post.authorName} className={styles.author_img} />
                <div>
                  <p className={styles.authour_name}>{post.authorName}</p>
                  <p className={styles.post_date}>{post.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No posts found for this query.</p>
      )}
    </div>
  );
};

export default SearchResults;

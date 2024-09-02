import React, { useContext, useState } from 'react';
import { StoreContext } from '../../store';
import { useParams, Link } from 'react-router-dom';
import share from '../../assets/Share.svg';
import postImage from '../../assets/single post image.svg';
import postImage2 from '../../assets/post Img.svg';
import postImage3 from '../../assets/post Img 2.svg';
import commentImg from '../../assets/comments.svg';
import styles from './SinglePostPage.module.css';

export default function SinglePostPage() {
    const { posts } = useContext(StoreContext);
    const { id } = useParams();
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return <h2>Post not found</h2>;
    }

    const commentSubmission = (e) => {
        e.preventDefault();
        if (name === '' || comment === '') {
            alert('All Fields are required');
            return;
        }

        // Add the new comment to the comments list
        setComments([...comments, { name, comment }]);

        // Clear the input fields
        setName('');
        setComment('');
    };

    return (
        <>
            <div className={styles.header}>
                <div className={styles.backContainer}>
                    <Link to="/" className={styles.back}>Back</Link>
                </div>
            </div>
            <div className={styles.postTitle}>
                <h1 className={styles.title}>{post.title}</h1>
                <img src={share} alt="Share" />
            </div>
            <div className={styles.author_info}>
                <div className={styles.author_img}>
                    <img src={post.auther_logo} alt="Author Logo" className={styles.authorLogo} />
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <h1 className={styles.author_name}>{post.autherName}</h1>
                    <p className={styles.post_date}>{post.date}</p>
                </div>
            </div>
            <div>
                <img src={postImage} alt="Post" className={styles.postImage} />
            </div>
            <div className={styles.postContent_1}>
                <p>{post.description_2}</p>
                <p style={{ margin: '30px 0' }}>{post.description_3}</p>
                <p>{post.description_4}</p>
            </div>
            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
                <img src={postImage2} alt="Post Related 1" className={styles.postImage2} />
                <img src={postImage3} alt="Post Related 2" className={styles.postImage3} />
            </div>
            <div className={styles.postContent_2}>
                <p>{post.description_5}</p>
                <p style={{ margin: '30px 0' }}>{post.description_6}</p>
                <p>{post.description_7}</p>
            </div>
            <div>
                <h1 className={styles.recentArticle}>Related Articles</h1>
            </div>
            <div className={styles.commentsSection}>
                <h1 className={styles.comments}>Leave a comment</h1>
                <form onSubmit={commentSubmission}>
                    <input
                        type="text"
                        placeholder="Name"
                        className={styles.nameInput}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <br />
                    <textarea
                        placeholder="Comment"
                        className={styles.commentField}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                    <br />
                    <button type="submit" className={styles.formButton}>Post Comment</button>
                </form>
            </div>
            {comments.map((c, index) => (
                <div key={index} className={styles.commentItem}>
                    <div className={styles.commentImage}>
                        <img src={commentImg} alt="Comment" />
                    </div>
                    <div className={styles.commentText}>
                        <p><strong>{c.name}</strong> said,</p>
                        <p>{c.comment}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

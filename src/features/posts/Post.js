import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { selectPostById } from "./postsSlice";
import { Link } from "react-router-dom";
import User from "../users/User";
import CommentList from "../comments/CommentList";
import styles from './Post.module.css'

const Post = () => {
  const { id } = useParams()
  const loadingStatus = useSelector((state) => state.posts.status)
  const post = useSelector((state) => selectPostById(state, parseInt(id)));
  const { title, userId, body } = post || {};

  if (loadingStatus === 'loading') {
    return (
      <div className={styles.loader} />
    )
  }

  return (
    <div className={styles.post}>
      <div className={styles.breadcrumbs}>
        <Link to='/posts'>
          &larr; Back to Posts
        </Link>
      </div>

      <div className={styles.postDetails}>
        <div className={styles.title}>{title}</div>
        <User key={userId} userId={userId} />
        <div className={styles.body}>{body}</div>
      </div>

      <CommentList key={id} postId={parseInt(id)} />
    </div>
  )
}

export default Post

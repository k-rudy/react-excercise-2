import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { selectPostById } from "./postsSlice";

import styles from './Post.module.css'

const Post = () => {
  const { id } = useParams()
  const post = useSelector((state) => selectPostById(state, parseInt(id)))
  const loadingStatus = useSelector((state) => state.posts.status)

  if (loadingStatus === 'loading') {
    return (
      <div className={styles.loader} />
    )
  }

  return (
    <h1>{post.title}</h1>
  )
}

export default Post

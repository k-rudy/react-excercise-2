import React from 'react'
import { useSelector } from 'react-redux'
import store from '../../store'

import { selectFilteredPostIds, fetchPosts } from './postsSlice'
import PostListItem from './PostListItem'
import Filters from '../filters/Filters'
import styles from './PostList.module.css'

const PostList = () => {
  const postIds = useSelector(selectFilteredPostIds)
  const loadingStatus = useSelector((state) => state.posts.status)

  if (loadingStatus === 'loading') {
    return (
      <div className={styles.postList}>
        <div className={styles.loader} />
      </div>
    )
  }

  const renderedListItems = postIds.map((postId) => {
    return <PostListItem key={postId} id={postId} />
  })

  return (
    <>
      <Filters />
      <div className={styles.postsCounter}>{postIds.length} Posts</div>
      <ul className={styles.postList}>{renderedListItems}</ul>
    </>
  )
}

export default PostList

import React from 'react'
import { useSelector } from 'react-redux'

import { selectFilteredPostIds } from './postsSlice'
import PostListItem from './PostListItem'

const PostList = () => {
  const postIds = useSelector(selectFilteredPostIds)
  const loadingStatus = useSelector((state) => state.posts.status)

  if (loadingStatus === 'loading') {
    return (
      <div className="post-list">
        <div className="loader" />
      </div>
    )
  }

  const renderedListItems = postIds.map((postId) => {
    return <PostListItem key={postId} id={postId} />
  })

  return <ul className="post-list">{renderedListItems}</ul>
}

export default PostList

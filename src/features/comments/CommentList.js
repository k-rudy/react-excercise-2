import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCommentsByPostId, fetchComments } from './commentsSlice'
import CommentListItem from './CommentListItem'
import AddCommentForm from './AddCommentForm'
import styles from './CommentList.module.css'
import store from '../../store'

const CommentList = ({ postId }) => {
  const comments = useSelector(state => selectCommentsByPostId(state, postId))
  const loadingStatus = useSelector((state) => state.comments.status)

  useEffect(() => {
    store.dispatch(fetchComments(postId))
  })

  if (!comments || loadingStatus === 'loading') {
    return (
      <div className={styles.postList}>
        <div className={styles.loader} />
      </div>
    )
  }

  const renderedListItems = comments.map((comment) => {
    return <CommentListItem key={comment.id} comment={comment} postId={postId} />
  })

  return (
    <>
      <div className={styles.commentsHeader}>Post Comments</div>
      <div className={styles.commentsCounter}>{comments.length} Comments</div>
      <ul className={styles.commentsList}>{renderedListItems}</ul>
      <AddCommentForm key={postId} postId={postId} />
    </>
  )
}

export default CommentList

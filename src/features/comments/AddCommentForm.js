import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addNewComment } from './commentsSlice'

export const AddCommentForm = (postId) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  const onNameChanged = (e) => setName(e.target.value)
  const onEmailChanged = (e) => setEmail(e.target.value)
  const onBodyChanged = (e) => setBody(e.target.value)

  const canSave =
    [name, email, body].every(Boolean) && addRequestStatus === 'idle'

  const onSaveCommentClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        await dispatch(addNewComment({ name, email, body, postId })).unwrap()
        setName('')
        setEmail('')
        setBody('')
      } catch (err) {
        console.error('Failed to save the comment: ', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

  return (
    <section>
      <h2>Add a New Comment</h2>
      <form>
        <input
          type="text"
          required="true"
          id="commentTitle"
          name="commentTitle"
          placeholder="Add comment name"
          value={name}
          onChange={onNameChanged}
        />
        <input
          type="email"
          id="commentEmail"
          name="commentEmail"
          placeholder="Your email"
          required="true"
          value={email}
          onChange={onEmailChanged}
        />
        <textarea
          id="commentBody"
          name="commentBody"
          value={body}
          onChange={onBodyChanged}
          required="true"
        />
        <button type="button" onClick={onSaveCommentClicked} disabled={!canSave}>
          Add Comment
        </button>
      </form>
    </section>
  )
}

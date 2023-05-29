import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './AddCommentForm.module.css'
import { addNewComment } from './commentsSlice'

const AddCommentForm = ({ postId }) => {
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

  const onFormSubmitted = async (e) => {
    e.preventDefault()
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        await dispatch(addNewComment(name, email, body, postId))
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
      <form className={styles.form} onSubmit={onFormSubmitted} method="post">
        <input
          type="text"
          required
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
          required
          value={email}
          onChange={onEmailChanged}
        />
        <textarea
          id="commentBody"
          name="commentBody"
          placeholder="What do you think?"
          value={body}
          onChange={onBodyChanged}
          required
        />
        <button type="submit" disabled={!canSave}>
          Add Comment
        </button>
      </form>
    </section>
  )
}

export default AddCommentForm

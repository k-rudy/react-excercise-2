import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import { selectUserById } from "../users/usersSlice";
import styles from './PostListItem.module.css'
import { Link } from "react-router-dom";

// Destructure `props.id`, since we just need the ID value
const PostListItem = ({ id }) => {
  // Call our `selectTodoById` with the state _and_ the ID value
  const post = useSelector((state) => selectPostById(state, id));
  const { title, userId } = post;
  const user = useSelector((state) => selectUserById(state, userId));

  return (
    <Link className={styles.listItem} to={ '/posts/' + id }>
      <div className={styles.title}>{title}</div>
      <div className={styles.userName}>{user.name}</div>
    </Link>
  )
}

export default PostListItem;

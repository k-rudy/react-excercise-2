import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import styles from './PostListItem.module.css'
import { Link } from "react-router-dom";
import User from "../users/User";

// Destructure `props.id`, since we just need the ID value
const PostListItem = ({ id }) => {
  // Call our `selectTodoById` with the state _and_ the ID value
  const post = useSelector((state) => selectPostById(state, id));
  const { title, userId } = post;

  return (
    <Link className={styles.listItem} to={ '/posts/' + id }>
      <div className={styles.title}>{title}</div>
      <User key={userId} userId={userId} />
    </Link>
  )
}

export default PostListItem;

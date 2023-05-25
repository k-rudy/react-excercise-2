import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPostById } from "./postsSlice";
import styles from './PostListItem.module.css'

// Destructure `props.id`, since we just need the ID value
const PostListItem = ({ id }) => {
  // Call our `selectTodoById` with the state _and_ the ID value
  const post = useSelector((state) => selectPostById(state, id));
  const { title, userId } = post;

  const dispatch = useDispatch();

  return (
    <div className={styles.listItem}>
      {title}
      <div className={styles.userName}>{userId}</div>
    </div>
  );
};

export default PostListItem;

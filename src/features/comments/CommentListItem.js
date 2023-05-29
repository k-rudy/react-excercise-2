import React from "react";
import { useSelector } from "react-redux";
import styles from './CommentListItem.module.css'
import { Link } from "react-router-dom";
import User from "../users/User";

// Destructure `props.id`, since we just need the ID value
const CommentListItem = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <li className={styles.listItem}>
      <div className={styles.name}>{name}</div>
      <div className={styles.email}>{email}</div>
      <div className={styles.body}>{body}</div>
    </li>
  )
}

export default CommentListItem;

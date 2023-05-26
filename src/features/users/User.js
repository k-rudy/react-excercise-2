import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserById } from "../users/usersSlice";
import styles from './User.module.css'

const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));
  if (user) {
    return <div className={styles.userName}>{user.name}</div>
  } else {
    return <div></div>
  }
}

export default User

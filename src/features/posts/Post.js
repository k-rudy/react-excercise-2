import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { selectPostById } from "./postsSlice";

const Post = () => {
  const { id } = useParams();
  const post = useSelector((state) => selectPostById(state, id));

  return (
    <h1>{post.title}</h1>
  )
}

export default Post

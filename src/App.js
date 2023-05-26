import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams } from "react-router-dom";

import PostList from './features/posts/PostList'
import Post from './features/posts/Post'

import styles from './App.module.css'

function App() {
  return (
    <Router>
      <div>
        <ul className={styles.header}>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
        </ul>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Redirect to='/posts' />
          </Route>
          <Route path="/posts">
            <PostList />
          </Route>
          <Route path="/posts/:id">
            <Post />
          </Route>
          <Route path="/albums">
            <h1>Albums</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

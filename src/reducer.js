import { combineReducers } from 'redux'

import postsReducer from './features/posts/postsSlice'
import filtersReducer from './features/filters/filtersSlice'
import commentsReducer from './features/comments/commentsSlice'
import usersReducer from './features/users/usersSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  posts: postsReducer,
  filters: filtersReducer,
  comments: commentsReducer,
  users: usersReducer,
})

export default rootReducer

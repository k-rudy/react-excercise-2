import { combineReducers } from 'redux'

import postsReducer from './features/posts/postsSlice'
import filtersReducer from './features/filters/filtersSlice'
import commentsReducer from './features/comments/commentsSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  posts: postsReducer,
  filters: filtersReducer,
  comments: commentsReducer,
})

export default rootReducer

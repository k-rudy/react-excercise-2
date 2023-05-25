import { createSelector } from 'reselect'
import { client } from '../../api/client'
import { SortFilters } from '../filters/filtersSlice'

const initialState = {
  status: 'idle',
  entities: [],
}

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'posts/postsLoading': {
      return {
        ...state,
        status: 'loading',
      }
    }
    case 'posts/postsLoaded': {
      return {
        ...state,
        status: 'idle',
        entities: action.payload,
      }
    }
    default:
      return state
  }
}

export const postsLoading = () => ({ type: 'posts/postsLoading' })

export const postsLoaded = (posts) => ({ type: 'posts/postsLoaded', payload: posts })

// Thunk function
export const fetchPosts = () => async (dispatch) => {
  dispatch(postsLoading())
  const response = await client.get('/posts')
  dispatch(postsLoaded(response.posts))
}

export const selectPosts = (state) => state.posts.entities

export const selectPostById = (state, postId) => {
  return selectPosts(state).find((post) => post.id === postId)
}

export const selectPostIds = createSelector(
  // First, pass one or more "input selector" functions:
  selectPosts,
  // Then, an "output selector" that receives all the input results as arguments
  // and returns a final result value
  (posts) => posts.map((post) => post.id)
)

export const selectFilteredPosts = createSelector(
  // First input selector: all posts
  selectPosts,
  // Second input selector: all filter values
  (state) => state.filters,
  // Output selector: receives both values
  (posts, filters) => {
    const { query, sort } = filters

    return posts
  }
)

export const selectFilteredPostIds = createSelector(
  // Pass our other memoized selector as an input
  selectFilteredPosts,
  // And derive data in the output selector
  (filteredPosts) => filteredPosts.map((post) => post.id)
)

import { client } from '../../api/client'

const initialState = {
  state: 'idle',
  entitiesByPostId: {},
}

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case 'comments/commentsLoading': {
      return {
        ...state,
        status: 'loading',
      }
    }
    case 'comments/commentsLoaded': {
      const { comments, postId } = action.payload
      return {
        ...state,
        status: 'idle',
        entitiesByPostId: {
          ...state.entitiesByPostId,
          [postId]: comments
        }
      }
    }
    case 'comments/commentAdded': {
      const { comment, postId } = action.payload

      return {
        ...state,
        entitiesByPostId: {
          ...state.entitiesByPostId,
          [postId]: [
            ...state.entitiesByPostId[postId] || [],
            comment
          ]
        }
      }
    }
    default:
      return state
  }
}

export const commentAdded = (comment, postId) => ({ type: 'comments/commentAdded', payload: { comment, postId } })

export const commentsLoading = () => ({ type: 'comments/commentsLoading' })

export const commentsLoaded = (postId, comments) => ({ type: 'comments/commentsLoaded', payload: { postId, comments } })

// Thunk function
export const fetchComments = (postId) => async (dispatch, getState) => {
  if (!(postId in getState().comments.entitiesByPostId) && getState().comments.status !== 'loading') {
    dispatch(commentsLoading())
    const response = await client.get('/posts/' + postId + '/comments')
    dispatch(commentsLoaded(postId, response))
  }
}

export const selectCommentsByPostId = (state, postId) => {
  return state.comments.entitiesByPostId[postId]
}

export const addNewComment = (name, email, body, postId) => async (dispatch, getState) => {
  const maxId = Math.max(...(getState().comments.entitiesByPostId[postId] || []).map(o => o.id)) || 0
  dispatch(commentAdded({ name, email, body, id: maxId + 1 }, postId))
}

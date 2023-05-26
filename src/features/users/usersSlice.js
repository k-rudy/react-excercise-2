import { client } from '../../api/client'

const initialState = {
  state: 'idle',
  entitiesById: {},
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'users/usersLoading': {
      return {
        ...state,
        status: 'loading',
      }
    }
    case 'users/usersLoaded': {
      return {
        ...state,
        status: 'idle',
        entitiesById: action.payload.reduce((acc, item) => {
                        acc[item.id] = item
                        return acc
                      }, {})
      }
    }
    default:
      return state
  }
}

export const usersLoading = () => ({ type: 'users/usersLoading' })

export const usersLoaded = (users) => ({ type: 'users/usersLoaded', payload: users })

// Thunk function
export const fetchUsers = () => async (dispatch) => {
  dispatch(usersLoading())
  const response = await client.get('/users')
  dispatch(usersLoaded(response))
}

export const selectUserById = (state, userId) => {
  return state.users.entitiesById[userId]
}

export const SortFilters = {
  Ascending: 1,
  Descending: -1
}

const initialState = {
  sort: SortFilters.Ascending,
  query: '',
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'filters/sortFilterChanged': {
      return {
        ...state,
        sort: action.payload,
      }
    }
    case 'filters/queryFilterChanged': {
      return {
        ...state,
        query: action.payload,
      }
    }
    default:
      return state
  }
}

export const sortFilterChanged = (sort) => {
  return {
    type: 'filters/sortFilterChanged',
    payload: sort,
  }
}

export const queryFilterChanged = (query) => {
  return {
    type: 'filters/queryFilterChanged',
    payload: query,
  }
}

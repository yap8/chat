import { SEARCH_SET_SEARCH_VALUE } from "../actions/types"

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_SET_SEARCH_VALUE:
      return action.payload
    default:
      return state
  }
}

export default searchReducer

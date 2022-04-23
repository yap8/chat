import { BACKGROUND_SET_BACKGROUND } from "../actions/types"

const initialState = localStorage.getItem('background') || 'Hyper'

const backgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case BACKGROUND_SET_BACKGROUND:
      return action.payload
    default:
      return state
  }
}

export default backgroundReducer

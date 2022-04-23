import { SPINNER_SET_COLOR } from "../actions/types"

const initialState = localStorage.getItem('spinner') || 'Blue'

const spinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPINNER_SET_COLOR:
      return action.payload
    default:
      return state
  }
}

export default spinnerReducer

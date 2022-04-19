import { REQUEST_RESET_REQUEST, REQUEST_SET_ERROR, REQUEST_SET_MESSAGE, REQUEST_SET_SUCCESS } from "../actions/types"

const initialState = {
  success: false,
  error: false,
  message: ''
}

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SET_SUCCESS:
      return { ...state, success: action.payload }
    case REQUEST_SET_ERROR:
      return { ...state, error: action.payload }
    case REQUEST_SET_MESSAGE:
      return { ...state, message: action.payload }
    case REQUEST_RESET_REQUEST:
      return initialState
    default:
      return state
  }
}

export default requestReducer

import { MESSAGES_ADD_MESSAGE, MESSAGES_FETCH_MESSAGES } from "../actions/types"

const initialState = null

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_ADD_MESSAGE:
      return [...state, action.payload]
    case MESSAGES_FETCH_MESSAGES:
      return action.payload
    default:
      return state
  }
}

export default messagesReducer

import { MESSAGES_ADD_MESSAGE, MESSAGES_FETCH_MESSAGES, MESSAGES_DELETE_MESSAGE, MESSAGES_CLEAR_MESSAGES } from "../actions/types"

const initialState = null

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_ADD_MESSAGE:
      return [...state, action.payload]
    case MESSAGES_DELETE_MESSAGE:
      return state.filter(message => message.id !== action.payload)
    case MESSAGES_FETCH_MESSAGES:
      return action.payload
    case MESSAGES_CLEAR_MESSAGES:
      return null
    default:
      return state
  }
}

export default messagesReducer

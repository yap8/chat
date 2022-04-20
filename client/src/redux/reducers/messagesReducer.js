import { MESSAGES_FETCH_MESSAGES } from "../actions/types"

const initialState = []

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_FETCH_MESSAGES:
      return action.payload
    default:
      return state
  }
}

export default messagesReducer

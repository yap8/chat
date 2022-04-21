import { MESSAGES_FETCH_MESSAGES } from "../actions/types"

const initialState = null

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_FETCH_MESSAGES:
      return action.payload.reverse()
    default:
      return state
  }
}

export default messagesReducer

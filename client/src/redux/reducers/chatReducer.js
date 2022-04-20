import { CHAT_SET_CHAT } from "../actions/types"

const initialState = null

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_SET_CHAT:
      return action.payload
    default:
      return state
  }
}

export default chatReducer

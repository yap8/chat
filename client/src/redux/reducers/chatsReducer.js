import { CHATS_FETCH_CHATS } from "../actions/types"

const initialState = null

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHATS_FETCH_CHATS:
      return action.payload
    default:
      return state
  }
}

export default chatsReducer

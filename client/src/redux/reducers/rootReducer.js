import { combineReducers } from "redux"

import backgroundReducer from "./backgroundReducer"
import messagesReducer from "./messagesReducer"
import { AUTH_LOGOUT } from "../actions/types"
import spinnerReducer from "./spinnerReducer"
import requestReducer from "./requestReducer"
import searchReducer from "./searchReducer"
import chatsReducer from "./chatsReducer"
import usersReducer from "./usersReducer"
import themeReducer from "./themeReducer"
import chatReducer from "./chatReducer"
import authReducer from "./authReducer"
import userReducer from "./userReducer"

const combinedReducer = combineReducers({
  request: requestReducer,
  auth: authReducer,
  user: userReducer,
  users: usersReducer,
  chats: chatsReducer,
  chat: chatReducer,
  messages: messagesReducer,
  search: searchReducer,
  theme: themeReducer,
  background: backgroundReducer,
  spinner: spinnerReducer
})

const rootReducer = (state, action) => {
  if (action.type === AUTH_LOGOUT) {
    state = undefined
  }

  return combinedReducer(state, action)
}

export default rootReducer

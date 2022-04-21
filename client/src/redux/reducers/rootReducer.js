import { combineReducers } from "redux";

import messagesReducer from "./messagesReducer";
import { AUTH_LOGOUT } from "../actions/types";
import requestReducer from "./requestReducer";
import chatsReducer from "./chatsReducer";
import chatReducer from "./chatReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";

const combinedReducer = combineReducers({
  request: requestReducer,
  auth: authReducer,
  user: userReducer,
  chats: chatsReducer,
  chat: chatReducer,
  messages: messagesReducer
})

const rootReducer = (state, action) => {
  if (action.type === AUTH_LOGOUT) {
    state = undefined;
  }

  return combinedReducer(state, action);
}

export default rootReducer

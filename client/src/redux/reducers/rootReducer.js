import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import chatsReducer from "./chatsReducer";
import messagesReducer from "./messagesReducer";
import requestReducer from "./requestReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  request: requestReducer,
  auth: authReducer,
  user: userReducer,
  chats: chatsReducer,
  chat: chatReducer,
  messages: messagesReducer
})

export default rootReducer

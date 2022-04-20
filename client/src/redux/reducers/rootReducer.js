import { combineReducers } from "redux";
import chatsReducer from "./chatsReducer";
import requestReducer from "./requestReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  request: requestReducer,
  user: userReducer,
  chats: chatsReducer
})

export default rootReducer

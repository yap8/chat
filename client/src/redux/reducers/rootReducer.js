import { combineReducers } from "redux";
import requestReducer from "./requestReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  request: requestReducer,
  user: userReducer
})

export default rootReducer

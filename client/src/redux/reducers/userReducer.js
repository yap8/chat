import { USER_LOGIN, USER_LOGOUT } from "../actions/types"

const initialState = localStorage.getItem('user') || null

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload
    case USER_LOGOUT:
      return null
    default:
      return state
  }
}

export default userReducer

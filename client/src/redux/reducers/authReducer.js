import { AUTH_LOGIN, AUTH_LOGOUT } from "../actions/types"

const initialState = localStorage.getItem('auth') || null

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return action.payload
    case AUTH_LOGOUT:
      return null
    default:
      return state
  }
}

export default authReducer

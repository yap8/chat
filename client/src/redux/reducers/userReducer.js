import { USER_FETCH_ME } from "../actions/types"

const initialState = null

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_ME:
      return action.payload
    default:
      return state
  }
}

export default userReducer

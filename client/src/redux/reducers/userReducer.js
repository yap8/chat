import { USER_FETCH_ME } from "../actions/types"

const initialState = {
  id: null,
  name: null,
  username: null,
  email: null,
  avatar: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_ME:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default userReducer

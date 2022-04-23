import { USERS_SET_USERS } from "../actions/types"

const usersReducer = (state = null, action) => {
  switch (action.type) {
    case USERS_SET_USERS:
      return action.payload
    default:
      return state
  }
}

export default usersReducer

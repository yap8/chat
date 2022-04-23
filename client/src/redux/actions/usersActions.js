import api from "../../api"
import { requestReset, setError, setMessage } from "./requestActions"
import { USERS_SET_USERS } from "./types"

export const setUsers = (users) => {
  return {
    type: USERS_SET_USERS,
    payload: users
  }
}

export const findUsers = (query) => async dispatch => {
  try {
    const { data } = await api.get(`/api/users/find?query=${query}`)

    dispatch(setUsers(data))
  } catch (error) {
    dispatch(setError(true))
    dispatch(setMessage(error.response.data))
  } finally {
    dispatch(requestReset)
  }
}

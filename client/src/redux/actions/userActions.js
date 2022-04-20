import { requestReset, setError, setMessage } from "./requestActions"
import { USER_FETCH_ME } from "./types"

import api from "../../api"

export const fetchMe = () => async dispatch => {
  try {
    const { data } = await api.get('/api/users/me')

    dispatch({
      type: USER_FETCH_ME,
      payload: data
    })
  } catch (error) {
    dispatch(setError(true))
    dispatch(setMessage(error.response.data))
  } finally {
    dispatch(requestReset())
  }
}

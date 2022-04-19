import axios from 'axios'

import { USER_LOGIN, USER_LOGOUT } from "./types"
import { requestReset, setError, setMessage, setSuccess } from "./requestActions"

export const login = (email, password) => async dispatch => {
  try {
    const { data } = await axios.post(
      '/api/users/login',
      { email, password }
    )

    localStorage.setItem('user', data)

    dispatch({
      type: USER_LOGIN,
      payload: data
    })

    dispatch(setSuccess(true))
    dispatch(setMessage(data))
  } catch (error) {
    dispatch(setError(true))
    dispatch(setMessage(error.response.data))
  } finally {
    setTimeout(() => dispatch(requestReset()), 100)
  }
}

export const logout = () => {
  localStorage.removeItem('user')

  return {
    type: USER_LOGOUT
  }
}

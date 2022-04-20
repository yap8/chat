import axios from 'axios'

import { AUTH_LOGIN, AUTH_LOGOUT } from "./types"
import { requestReset, setError, setMessage, setSuccess } from "./requestActions"

export const login = (email, password) => async dispatch => {
  try {
    const { data } = await axios.post(
      '/api/users/login',
      { email, password }
    )

    localStorage.setItem('auth', data)

    dispatch({
      type: AUTH_LOGIN,
      payload: data
    })

    dispatch(setSuccess(true))
    dispatch(setMessage(data))
  } catch (error) {
    dispatch(setError(true))
    dispatch(setMessage(error.response.data))
  } finally {
    dispatch(requestReset())
  }
}

export const register = (name, username, email, password) => async dispatch => {
  try {
    await axios.post(
      '/api/users/register',
      { name, username, email, password }
    )

    dispatch(setSuccess(true))
    dispatch(setMessage('User successfully registered'))
  } catch (error) {
    dispatch(setError(true))
    dispatch(setMessage(error.response.data))
  } finally {
    dispatch(requestReset())
  }
}

export const logout = () => {
  localStorage.removeItem('auth')

  return {
    type: AUTH_LOGOUT
  }
}

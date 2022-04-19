import { USER_LOGIN, USER_LOGOUT } from "./types"
import axios from 'axios'

export const login = (email, password) => async dispatch => {
  try {
    const { data } = await axios.post(
      '/api/users/login',
      { email, password }
    )

    dispatch({
      type: USER_LOGIN,
      payload: data
    })
  } catch (error) {
    console.log(error.response.data)
  }
}

export const logout = () => {
  localStorage.removeItem('user')

  return {
    type: USER_LOGOUT
  }
}

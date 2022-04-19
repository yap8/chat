import { REQUEST_RESET_REQUEST, REQUEST_SET_ERROR, REQUEST_SET_MESSAGE, REQUEST_SET_SUCCESS } from "./types"

export const setSuccess = (success) => {
  return {
    type: REQUEST_SET_SUCCESS,
    payload: success
  }
}

export const setError = (error) => {
  return {
    type: REQUEST_SET_ERROR,
    payload: error
  }
}

export const setMessage = (message) => {
  return {
    type: REQUEST_SET_MESSAGE,
    payload: message
  }
}

export const requestReset = () => {
  return {
    type: REQUEST_RESET_REQUEST
  }
}

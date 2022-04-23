import { requestReset, setError, setMessage } from "./requestActions"
import { CHATS_FETCH_CHATS } from "./types"
import api from "../../api"

export const fetchChats = () => async dispatch => {
  try {
    const { data } = await api.get('/api/chats')

    dispatch({
      type: CHATS_FETCH_CHATS,
      payload: data
    })
  } catch (error) {
    dispatch(setError(true))
    dispatch(setMessage(error.response.data))
  } finally {
    dispatch(requestReset())
  }
}

export const createChat = (participantId) => async dispatch => {
  try {
    await api.post('/api/chats', { participantId })

    dispatch(fetchChats())
  } catch (error) {
    dispatch(setError(true))
    dispatch(setMessage(error.response.data))
  } finally {
    dispatch(requestReset())
  }
}

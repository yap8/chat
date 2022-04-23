import api from "../../api"

import { requestReset, setError, setMessage } from "./requestActions"
import { MESSAGES_FETCH_MESSAGES } from "./types"
import { fetchChats } from "./chatsActions"

export const fetchMessages = (chatId) => async dispatch => {
  try {
    const { data } = await api.get(`/api/messages/${chatId}`)

    dispatch({
      type: MESSAGES_FETCH_MESSAGES,
      payload: data
    })
  } catch (error) {
    dispatch(setError(true))
    dispatch(setMessage(error.response.data))
  } finally {
    dispatch(requestReset())
  }
}

export const sendMessage = (chatId, content) => async dispatch => {
  try {
    await api.post(`/api/message`, {
      chatId,
      content
    })

    dispatch(fetchMessages(chatId))
    dispatch(fetchChats())
  } catch (error) {
    dispatch(setError(true))
    dispatch(setMessage(error.response.data))
  } finally {
    dispatch(requestReset())
  }
}

export const deleteMessage = (chatId, messageId) => async dispatch => {
  try {
    await api.delete(`/api/message/${messageId}`)

    dispatch(fetchMessages(chatId))
    dispatch(fetchChats())
  } catch (error) {
    dispatch(setError(true))
    dispatch(setMessage(error.response.data))
  } finally {
    dispatch(requestReset())
  }
}

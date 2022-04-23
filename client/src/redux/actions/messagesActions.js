import { v4 as uuid } from 'uuid'

import { MESSAGES_FETCH_MESSAGES, MESSAGES_ADD_MESSAGE, MESSAGES_DELETE_MESSAGE } from "./types"
import { requestReset, setError, setMessage } from "./requestActions"
import { getDateTime } from "../../helpers/dateTime"
import { fetchChats } from "./chatsActions"
import api from "../../api"

export const addMessage = (message) => {
  return {
    type: MESSAGES_ADD_MESSAGE,
    payload: message
  }
}

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

export const sendMessage = (content, chatId, userId) => async dispatch => {
  try {
    dispatch(addMessage({ id: uuid(), chat_id: chatId, sender_id: userId, content, created_at: getDateTime(), isBeingSent: true }))

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
    dispatch({
      type: MESSAGES_DELETE_MESSAGE,
      payload: messageId
    })

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

import { CHAT_SET_CHAT } from "./types"

export const setChat = (chat) => {
  return {
    type: CHAT_SET_CHAT,
    payload: chat
  }
}

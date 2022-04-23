import { BACKGROUND_SET_BACKGROUND } from "./types"

export const setBackground = (name) => {
  localStorage.setItem('background', name)

  return {
    type: BACKGROUND_SET_BACKGROUND,
    payload: name
  }
}

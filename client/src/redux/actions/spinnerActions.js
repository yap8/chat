import { SPINNER_SET_COLOR } from "./types"

export const setSpinnerColor = (colorName) => {
  localStorage.setItem('spinner', colorName)

  return {
    type: SPINNER_SET_COLOR,
    payload: colorName
  }
}

import { THEME_SET_THEME } from "./types"

export const setTheme = (theme) => {
  localStorage.setItem('theme', theme)

  return {
    type: THEME_SET_THEME,
    payload: theme
  }
}

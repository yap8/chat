import { SEARCH_SET_SEARCH_VALUE } from "./types"

export const setSearchValue = (value) => {
  return {
    type: SEARCH_SET_SEARCH_VALUE,
    payload: value
  }
}

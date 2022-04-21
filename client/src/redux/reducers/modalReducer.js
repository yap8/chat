import { MODAL_TOGGLE_MODAL } from "../actions/types"

const initialState = false

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_TOGGLE_MODAL:
      return !state
    default:
      return state
  }
}

export default requestReducer

import AppActionNames from "../action-names/app-action-names"
import _ from "lodash"

const { FETCH_CREDIT, FETCH_CREDIT_SUCCESS, RESET_CREDIT } = AppActionNames

const initialState = {
  credits: []
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CREDIT:
      return {
        ...state,
        credits: []
      }
    case FETCH_CREDIT_SUCCESS:
      const newCredit = _.concat(state.credits, action.payload)

      return {
        ...state,
        credits: newCredit
      }

    case RESET_CREDIT:
      return {
        ...state,
        credits: []
      }

    default:
      return state
  }
}

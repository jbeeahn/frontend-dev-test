import AppActionNames from "../action-names/app-action-names"

const { FETCH_CREDIT, RESET_CREDIT } = AppActionNames

const AppActions = {
  fetchCredit() {
    return {
      type: FETCH_CREDIT
    }
  },
  resetCredit() {
    return {
      type: RESET_CREDIT
    }
  }
}

export default AppActions

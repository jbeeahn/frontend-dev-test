// export appReducer from "./app-reducer"
import appReducer from "./app-reducer"
import gameReducer from "./game-reducer"
import { routerReducer } from "react-router-redux"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  appReducer: appReducer,
  gameReducer: gameReducer,
  routerReducer: routerReducer
})

export default rootReducer

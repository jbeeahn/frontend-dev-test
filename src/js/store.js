import { createStore, combineReducers, applyMiddleware } from "redux"
import { createEpicMiddleware, combineEpics } from "redux-observable"
import { routerMiddleware, routerReducer } from "react-router-redux"
import { composeWithDevTools } from "redux-devtools-extension"

import history from "./history"
import _ from "lodash"

import rootReducer from "./reducers"
import epics from "./epics"

const appEpics = combineEpics(..._.values(epics))
const reactRouteMiddleware = routerMiddleware(history)

const epicMiddleWare = createEpicMiddleware()

const reduxMiddleWares = []

reduxMiddleWares.push(epicMiddleWare)
reduxMiddleWares.push(reactRouteMiddleware)

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...reduxMiddleWares))
)

epicMiddleWare.run(appEpics)

export default store

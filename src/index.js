import React from "react"
import ReactDom from "react-dom"
import { Provider } from "react-redux"

import registerServiceWorker from "./registerServiceWorker"
import App from "./js/App"
import store from "./js/store"

import "./styles/style.scss"

import "rxjs"

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()

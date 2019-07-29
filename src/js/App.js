import React, { Component } from "react"
import { Router, Route, Switch } from "react-router-dom"
import history from "./history"

import GenericHeader from "./components/GenericHeader"
import GameHeader from "./components/GameHeader"

import HomeContainer from "./container/HomeContainer"
import CreditContainer from "./container/CreditContainer"
import GameContainer from "./container/GameContainer"

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="full-height-layout">
          <header className="app-header">
            <Switch>
              <Route exact path="/" render={() => <GenericHeader />} />
              <Route exact path="/credit" render={() => <GenericHeader />} />
              <Route exact path="/game" render={() => <GameHeader />} />
            </Switch>
          </header>

          <main className="app-main">
            <Switch>
              <Route exact path="/" render={() => <HomeContainer />} />
              <Route exact path="/credit" render={() => <CreditContainer />} />
              <Route exact path="/game" render={() => <GameContainer />} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

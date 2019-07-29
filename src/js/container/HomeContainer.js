import React, { Component, Fragment } from "react"
import { NavLink } from "react-router-dom"

import NewGameModal from "../components/NewGameModal"

class HomeContainer extends Component {
  constructor() {
    super()
    this.state = {
      newGame: false,
      credit: false
    }
  }

  toggleNewGameModal = event => {
    const { newGame } = this.state

    this.setState({
      newGame: !newGame
    })
  }

  toggleCredit = event => {
    const { credit } = this.state

    this.setState({
      credit: !credit
    })
  }

  renderActionButtons = () => {
    return (
      <Fragment>
        <div className={`router-button`} onClick={this.toggleNewGameModal}>
          New Game
        </div>
        <NavLink
          to="/credit"
          style={{ pointerEvents: "auto" }}
          className={`router-button`}
          exact
        >
          <span className="router-button-text">Credit</span>
        </NavLink>
        <a href="https://www.seedbox.com/en/" className={`router-button`}>
          Exit
        </a>
      </Fragment>
    )
  }

  render() {
    const { newGame } = this.state
    return (
      <div className="app-main--home">
        <div className="app-main--home-action-btn-group">
          {this.renderActionButtons()}
        </div>
        {newGame ? (
          <NewGameModal toggleModal={this.toggleNewGameModal.bind(this)} />
        ) : null}
      </div>
    )
  }
}

export default HomeContainer

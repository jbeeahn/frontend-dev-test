import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import GameActions from "../actions/game-actions"

class NewGameModal extends Component {
  constructor() {
    super()
    this.state = {
      error: false
    }
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false)
  }

  handleClick = event => {
    if (this.modalContainer.contains(event.target)) {
      return
    }
    this.handleClickOutside()
  }

  handleClickOutside() {
    this.props.toggleModal()
  }

  onModalSubmit = event => {
    const { initializeGame } = this.props

    const player1 = this.player1Ref.value
    const player2 = this.player2Ref.value

    if (!player1 || !player2) {
      event.preventDefault()
      this.setState({
        error: true
      })
    } else {
      this.setState({
        error: false
      })
      initializeGame(player1, player2)
    }
  }

  render() {
    const { error } = this.state
    return (
      <div className="app-main--new-game-modal-container">
        {error ? (
          <div className="modal-error">
            Please make sure to fill up both players name
          </div>
        ) : null}
        <div
          className="app-main--new-game-modal"
          ref={ref => (this.modalContainer = ref)}
        >
          <div className="modal-title">Start a New Game</div>
          <div className="modal-players">
            <div className="modal-player-input">
              <span>Player 1</span>
              <input
                type="text"
                name=""
                id=""
                ref={ref => (this.player1Ref = ref)}
              />
            </div>
            <div className="modal-player-input">
              <span>Player 2</span>
              <input
                type="text"
                name=""
                id=""
                ref={ref => (this.player2Ref = ref)}
              />
            </div>
          </div>
          <div className="modal-submit">
            <NavLink
              className="modal-submit-btn"
              to="/game"
              exact
              onClick={this.onModalSubmit}
            >
              Start!
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.gameReducer
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      initializeGame: GameActions.initializeGame
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewGameModal)

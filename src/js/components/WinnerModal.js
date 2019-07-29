import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { NavLink } from "react-router-dom"

import victory from "../../styles/img/victory-icon.svg"

import GameActions from "../actions/game-actions"

class WinnerModal extends Component {
  onClickHandler = event => {
    const { resetGame, resetGrid } = this.props

    resetGrid()

    setTimeout(() => {
      resetGame()
    }, 1000 * 1.5)
  }

  render() {
    const { winner, renderModalFlag } = this.props

    return renderModalFlag ? (
      <div className="app-main--game-winner-modal-container">
        <div className="app-main--game-winner-modal">
          <div className="winner-modal--title">Victory to {winner}!</div>
          <div className="winner-modal--icon">
            <img src={victory} alt="" />
          </div>
          <div className="winner-modal--action-buttons">
            <div
              className="winner-modal--action-button"
              onClick={this.onClickHandler}
            >
              Restart
            </div>
            <NavLink
              className="winner-modal--action-button"
              to="/"
              exact
              onClick={this.onClickHandler}
            >
              Exit
            </NavLink>
          </div>
        </div>
      </div>
    ) : null
  }
}

const mapStateToProps = state => ({
  ...state.gameReducer
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...GameActions
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WinnerModal)

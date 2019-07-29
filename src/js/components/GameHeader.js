import React, { Component } from "react"
import { connect } from "react-redux"

class GameHeader extends Component {
  render() {
    const { player1, player2, turn } = this.props

    const player1_turn = turn ? "my_turn" : ""
    const player2_turn = turn ? "" : "my_turn"
    return (
      <div className="app-header--game">
        <div className="app-header--game-logo" />
        <div className="app-header--game-players">
          <div className="app-header--game-player">
            <div className="app-header--game-player-label">Player 1</div>
            <div className={`app-header--game-player-name ${player1_turn}`}>
              {player1}
            </div>
          </div>
          <div className="app-header--game-player">
            <div className="app-header--game-player-label">Player 2</div>
            <div className={`app-header--game-player-name ${player2_turn}`}>
              {player2}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.gameReducer
})

export default connect(
  mapStateToProps,
  null
)(GameHeader)

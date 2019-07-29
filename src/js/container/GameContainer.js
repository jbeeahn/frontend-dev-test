import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as _ from "lodash"

import WinnerModal from "../components/WinnerModal"
import WinnerLine from "../components/WinnerLine"
import { winningHelper } from "../winningHelper"

import GameActions from "../actions/game-actions"

const gridList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

class GameContainer extends Component {
  constructor() {
    super()
    this.state = {
      turn: true,
      availableGrid: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      player1_selection: [],
      player2_selection: [],
      winner: false
    }
  }

  onMouseEnter = event => {
    const { turn, winner } = this.props
    const hoverTarget = turn ? "hover-x" : "hover-o"
    const targetClassList = event.target.classList

    if (!_.includes(targetClassList, "selected") && !winner) {
      event.target.classList.add(hoverTarget)
    }
  }

  onMouseLeave = event => {
    const { turn } = this.props
    const hoverTarget = turn ? "hover-x" : "hover-o"

    event.target.classList.remove(hoverTarget)
  }

  onGridClick = event => {
    const {
      turn,
      availableGrid,
      player1_selection,
      player2_selection,
      updateSelection,
      winner
    } = this.props
    const targetClassList = event.target.classList

    const gridIndex = parseInt(targetClassList[0].split("-")[1])

    if (!_.includes(targetClassList, "selected") && !winner) {
      event.target.classList.add("selected")
      event.target.classList.add(`selected-${turn}`)

      const available = _.remove(availableGrid, g => {
        return !(g == gridIndex)
      })

      let player1 = player1_selection
      let player2 = player2_selection

      const check = winningHelper(gridIndex, turn ? player1 : player2)

      if (check) {
        check.win && this.handleWinner(check.winningCombination)

        turn && player1_selection.push(gridIndex)
        !turn && player2_selection.push(gridIndex)
        if (check.win) {
          this.handleWinner(check.winningCombination)
        } else {
          updateSelection(!turn, available, player1, player2)
        }
      }
    }
  }

  handleWinner(combination) {
    const { setWinner, turn, player1, player2, renderModal } = this.props
    _.forEach(combination, c => {
      this.refs[`grid${c}`].classList.add("win-grid")
    })

    const winner = turn ? player1 : player2
    setWinner(winner, combination)

    setTimeout(() => {
      renderModal()
    }, 2000)
  }

  renderGrid = () => {
    return gridList.map(grid => {
      return (
        <div
          ref={"grid" + grid}
          className={`grid-${grid} grid`}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onGridClick}
          key={`grid-${grid}`}
        >
          <div />
        </div>
      )
    })
  }

  resetGrid = () => {
    _.forEach(this.refs, ref => {
      ref.classList.remove(
        "selected",
        "selected-true",
        "selected-false",
        "win-grid",
        "hover-o",
        "hover-x"
      )
    })
  }

  render() {
    const { winner, turn, winnerCombination } = this.props

    return (
      <div className="app-main--game-container">
        <div className="app-main--game-grid">
          {this.renderGrid()}
          {winner ? <WinnerLine combination={winnerCombination} /> : null}
        </div>
        {winner ? <WinnerModal turn={turn} resetGrid={this.resetGrid} /> : null}
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
      ...GameActions
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer)

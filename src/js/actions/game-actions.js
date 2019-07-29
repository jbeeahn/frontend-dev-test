import GameActionNames from "../action-names/game-action-names"

const {
  INITIALIZE_GAME,
  UPDATE_SELECTION,
  SET_WINNER,
  RESET_GAME,
  RENDER_MODAL
} = GameActionNames

const GameActions = {
  initializeGame(player1, player2) {
    return {
      type: INITIALIZE_GAME,
      payload: {
        player1: player1,
        player2: player2
      }
    }
  },
  updateSelection(turn, available, player1, player2) {
    return {
      type: UPDATE_SELECTION,
      payload: {
        turn: turn,
        avilableGrid: available,
        player1_selection: player1,
        player2_selection: player2
      }
    }
  },
  setWinner(winner, combination) {
    return {
      type: SET_WINNER,
      payload: {
        winner,
        combination
      }
    }
  },
  resetGame() {
    return {
      type: RESET_GAME
    }
  },
  renderModal() {
    return {
      type: RENDER_MODAL
    }
  }
}

export default GameActions

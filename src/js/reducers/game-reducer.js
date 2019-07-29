import GameActionNames from "../action-names/game-action-names"

const {
  INITIALIZE_GAME,
  UPDATE_SELECTION,
  SET_WINNER,
  RESET_GAME,
  RENDER_MODAL
} = GameActionNames

const initialState = {
  turn: true, // player 1 = true, player 2 = false
  availableGrid: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  player1_selection: [],
  player2_selection: [],
  winner: "",
  winnerCombination: [],
  player1: "John Doe",
  player2: "Jane Doe",
  renderModalFlag: false
}

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_GAME:
      return {
        ...state,
        player1: action.payload.player1,
        player2: action.payload.player2
      }
    case UPDATE_SELECTION:
      return {
        ...state,
        turn: action.payload.turn,
        availableGrid: action.payload.available,
        player1_selection: action.payload.player1_selection,
        player2_selection: action.payload.player2_selection
      }

    case SET_WINNER:
      return {
        ...state,
        winner: action.payload.winner,
        winnerCombination: action.payload.combination
      }

    case RESET_GAME:
      return {
        ...state,
        turn: true,
        availableGrid: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        player1_selection: [],
        player2_selection: [],
        winner: "",
        renderModalFlag: false
      }

    case RENDER_MODAL:
      return {
        ...state,
        renderModalFlag: true
      }
    default:
      return state
  }
}

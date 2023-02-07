import {
   FetchingGame,
   FetchingGames
} from "../actions/actionType"

const initialState = {
   games: [],
   game: {}
}

function gamesReducer(state = initialState, action) {
   switch (action.type) {
      case FetchingGames:
         return {
            ...state, games: action.payload
         }
         case FetchingGame:
            return {
               ...state, game: action.payload
            }
            default:
               return state
   }
}

export default gamesReducer
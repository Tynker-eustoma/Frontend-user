import {
   combineReducers
} from "redux";
import gamesReducer from "./games";
import categoriesReducer from "./categories";

const rootReducer = combineReducers({
   games: gamesReducer,
   categories: categoriesReducer
})

export default rootReducer
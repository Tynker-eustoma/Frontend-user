import {
   combineReducers
} from "redux";
import gamesReducer from "./games";
import categoriesReducer from "./categories";
import userReducer from "./user";

const rootReducer = combineReducers({
   games: gamesReducer,
   categories: categoriesReducer,
   user: userReducer
})

export default rootReducer
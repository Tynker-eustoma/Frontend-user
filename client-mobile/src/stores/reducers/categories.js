import { FetchingCategories, FetchingCategory } from "../action/actionType"

const initialState = {
    categories: [],
    category: {}
}

function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case FetchingCategories:
            return { ...state, categories: action.payload }
        case FetchingCategory:
            return {...state, category: action.payload}
        default:
            return state
    }
}

export default categoriesReducer